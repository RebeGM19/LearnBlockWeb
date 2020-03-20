from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
from learnbot_dsl.learnbotCode.guiCreateBlock import *
import xml.etree.ElementTree as ET
import re

# Creates a block with the appropiate structure. The Block-Text parser gets this structure to generate the code.
def createBlock(name, type_, variables, block):
    #print("Crea block " + name)
    dic = {}
    dic["RIGHT"] = None
    dic["BOTTOMIN"] = None
    dic["BOTTOM"] = None
    dic["VARIABLES"] = variables
    dic["TYPE"] = type_

    # Changes the block name depending on the type

    # User procedure definition
    if type_ == USERFUNCTION and block.find('field') != None:
        name = block.find('field').text
    # User procedure call
    if type_ == USERFUNCTION and block.find('mutation') != None:
        name = block.find('mutation').get('name')

    return name, dic

# Gets the block name. ¿?¿?¿?¿?
def searchName(string):
    positionIni = string.find("blocktextname=\"")
    positionFinal = string.find("\" id=")
    name = string[positionIni+15:positionFinal]
    return name

# Inserts a block into another block, on the pertinent dic attribute
def insertBlock(firstBlock, block, specification):
    end = False
    thisBlock = firstBlock
    while end == False:
        if thisBlock[1][specification] == None:
            end = True
            thisBlock[1][specification] = block
        else:
            aux = thisBlock[1][specification]
            thisBlock = aux

# Gets the block type, given by its id
def getType(string):
    positionFinal = string.find("_")
    finalType = None
    type_ = string[:positionFinal]
    if type_ == "control":
        finalType = CONTROL
    if type_ == "procedures":
        finalType = USERFUNCTION
    if type_ == "variables":
        finalType = VARIABLE
    if type_ == "base" or type_ == "cam" or type_ == "dist" or type_ == "emotion" or type_ == "ground" or type_ == "motor" or type_ == "speaker":
        finalType = FUNTION
    #print(finalType)
    return finalType


# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# Algo no funcionaba y ahora funciona wtf??

# Returns the parameters into a function, given by the "field" element in xml (Variables)
def getVariables(blockTree):
    result = None
    if blockTree != None:
        if blockTree.find('field') != -1:
            for field in blockTree.findall('field'):
                if result == None:
                    result = []
                result.append(field.text)
    return result

# Returns the first element at the right of the given block (Right)
def getValues(valuesTree):
    result = None
    block = valuesTree.find('block')
    print(block.tag, block.get('blocktextname'))
    if block.find('value') != -1:
        value = block.find('value')
        result = value
    return result

# Returns the element inside a block (BottomIn)
def getStatements(statTree, firstBlock):
    result = None
    newBlock = None
    block = statTree.find('block')
    print(block.tag, block.get('blocktextname'))
    next_ = block.find('next')
    value = block.find('value')
    statement = block.find('statement')

    # If the first block has other blocks at the right, processes those blocks (Right, getValues)
    if value != None:
        # This process returns all the blocks at the right, not just the first one
        result = getValues(value)
        newBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block'))
        if newBlock != None and firstBlock != None:
            insertBlock(firstBlock, newBlock, "RIGHT")
            while(value != None):
                value = getValues(value)
                if value != None:
                    thisBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block'))
                    insertBlock(firstBlock, thisBlock, "RIGHT")  # Cambiar FirstBlock, debe insertar el anterior (se puede recuperar con el return newBlock??) CASO RARO

    # If the first block has other blocks inside it, processes those blocks (BottomIn, getStatements)
    if statement != None:
        # Recursion to get the elements inside the block
        blockStatement = createBlock(statement.get('blocktextname'), getType(statement.get('type')), getVariables(statement), statement)
        result = getStatements(statement, blockStatement)[0]

    # If the first block has other blocks under it, processes those blocks (Bottom, getNext)
    if next_ != None:
        result = getNext(next_, firstBlock)[0]  # The first block under the given one
        if firstBlock != None:
            if result != None:
                # If the block has other blocks under it, processes them
                newBlock = createBlock(result.find('block').get('blocktextname'), getType(result.find('block').get('type')), getVariables(result.find('block')), result.find('block'))
            else:
                # If the block does not have other blocks under it, creates it as if it was the last one
                newBlock = createBlock(next_.find('block').get('blocktextname'), getType(result.find('block').get('type')), getVariables(result.find('block')), result.find('block'))
            insertBlock(firstBlock, newBlock, "BOTTOM")
    return result, newBlock

# Returns the element under a block (Bottom)
def getNext(nextTree, firstBlock):
    result = None
    newBlock = None
    block = nextTree.find('block')
    # If there is a block under the given one
    if block != None:
        print(block.tag, block.get('blocktextname'))
        newBlock = createBlock(block.get('blocktextname'), getType(block.get('type')), getVariables(block), block)

        value = block.find('value')
        # If the block has other blocks at its right, processes them (Right, getValues)
        if value != None:
            valTree = value
            valueBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block'))
            insertBlock(newBlock, valueBlock, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')), getVariables(valTree.find('block')), valTree.find('block'))
                    insertBlock(newBlock, thisBlock, "RIGHT")

        # If the block has other blocks inside it, processes them (BottomIn, getStatements)
        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            statementBlock = createBlock(firstStat.get('blocktextname'), getType(firstStat.get('type')), getVariables(firstStat), firstStat)
            insertBlock(newBlock, statementBlock, "BOTTOMIN")
            while(statement != None):
                statement = getStatements(statement, statementBlock)[0]

        # If the block has other block under it, inserts it at Bottom attribute
        next_ = block.find('next')
        if next_ != None:
            result = next_
            if result != None and firstBlock != None:
                insertBlock(firstBlock, newBlock, "BOTTOM")
    return result, newBlock



# Function to convert the xml string returned from the workspace to a block structure that can be processed by the Block-Text parser
def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    print(root.tag, root.attrib)
    listBlocks = []
    for block in root:
        print (block.tag, block.get('blocktextname'))

        # The first block must be alwais a main block
        mainBlock = createBlock(block.get('blocktextname'), getType(block.get('type')), getVariables(block), block)

        # The first blocks to be processed are the blocks at the right (ojo con esto, revisar)
        value = block.find('value')
        if value != None:
            valTree = value
            # Creates the first block at the right
            valueBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block'))
            insertBlock(mainBlock, valueBlock, "RIGHT")
            # Processes the other blocks at the right, and creates them
            while(valTree != None):
                valTree = getValues(valTree)
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')), getVariables(valTree.find('block')), valTree.find('block'))
                    insertBlock(valueBlock, thisBlock, "RIGHT")
            #print(valueBlock)

        # The next elements to be processed are the blocks inside the first one (statements, BottomIn)
        statement = block.find('statement')
        if statement != None:
            # Processes the first element inside the block, creates and inserts it at BottomIn
            firstStat = statement.find('block')
            statementBlock = createBlock(statement.find('block').get('blocktextname'), getType(statement.find('block').get('type')), getVariables(statement.find('block')), statement.find('block'))
            insertBlock(mainBlock, statementBlock, "BOTTOMIN")
            print(firstStat.tag, firstStat.get('blocktextname'))

            # If the first element has blocks at the right, processes them (Right)
            if firstStat.find('value') != -1 and firstStat.find('value') != None:
                valTree = firstStat.find('value')
                firstValue = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')), getVariables(valTree.find('block')), valTree.find('block'))
                insertBlock(statementBlock, firstValue, "RIGHT")
                while(valTree != None):
                    valTree = getValues(valTree)
                    if valTree != None:
                        thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')), getVariables(valTree.find('block')), valTree.find('block'))
                        insertBlock(statementBlock, thisBlock, "RIGHT")

            # If the first element has blocks inside it, processes them (BottomIn)
            if firstStat.find('statement') != -1 and firstStat.find('statement') != None:
                insideStatement = firstStat.find('statement')
                insideTree = insideStatement
                newBlock = createBlock(insideStatement.find('block').get('blocktextname'), getType(insideStatement.find('block').get('type')), getVariables(insideStatement.find('block')), insideStatement.find('block'))
                insertBlock(statementBlock, newBlock, "BOTTOMIN")
                while(insideTree != None):
                    insideTree = getStatements(insideTree, newBlock)[0]
            #print(statementBlock)

        # Otherwise, if the first element has blocks under it, processes them (Bottom)
        nextBlock = firstStat.find('next')
        nextTree = nextBlock
        if nextBlock != None:  # Comprueba esto, a ver qué has hecho aquí, melona
            lastBlock = createBlock("Last", None, None, nextBlock)
            while(nextTree != None and lastBlock != None):
                nextValue = getNext(nextTree, statementBlock)
                nextTree = nextValue[0]
                lastBlock = nextValue[1]
            insertBlock(statementBlock, lastBlock, "BOTTOM")
        print(mainBlock)
        listBlocks.append(mainBlock)
    return listBlocks


# Mirar:
    # Vals (numeros y strings) -> ¿Cómo se meten en el bloque???????
    # Declaración de variables

