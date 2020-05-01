from learnblockCode.Parser import __parserFromString, __generatePy, cleanCode
from learnblockCode.guiCreateBlock import *
import xml.etree.ElementTree as ET
import re

# Creates a block with the appropiate structure. The Block-Text parser gets this structure to generate the code.
def createBlock(name, type_, variables, block):
    # First of all, changes the block name depending on the type
    # String or num value
    if name == "val":
        name = block.find('field').text
        variables = None
    # User variable
    if type_ == VARIABLE and name == "undefined":
        name = block.get('blocktextname')
    # User procedure
    if type_ == USERFUNCTION:
        # Procedure definition
        if block.find('field') != None:
            name = block.find('field').text
        # Procedure call
        if block.find('mutation') != None:
            name = block.find('mutation').get('name')
        variables = None
    dic = {}
    dic["RIGHT"] = None
    dic["BOTTOMIN"] = None
    dic["BOTTOM"] = None
    dic["VARIABLES"] = variables
    dic["TYPE"] = type_
    return name, dic

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
        if thisBlock[1]["VARIABLES"] != None and thisBlock[1]["TYPE"] == 3:
            # When variable's setter is processed, only the first value at its right is taken
            thisBlock[1]["RIGHT"] = None

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
    if type_ == "base" or type_ == "cam" or type_ == "dist" or type_ == "emotion" or type_ == "ground" or type_ == "motor" or type_ == "speaker" or type_ == "fcontrol":
        finalType = FUNTION
    return finalType

# Returns the variables created by the user
def processVariables(variablesBlock, listBlocks):
    if variablesBlock.find('variable') != -1:
        for variable in variablesBlock.findall('variable'):
            listBlocks.append(createBlock(variablesBlock.find('variable').text, getType("variables"), None, variable))
    return listBlocks

# Returns the parameters into a function, given by the "field" element in xml (Variables)
# Otherwise, if the block is a variable, returns that variable
def getVariables(blockTree):
    result = None
    # Blocks with "variables" on their type are variables
    if "variables" in blockTree.get('type'):
        blockTree.set('blocktextname', blockTree.find('field').text)
        if blockTree.get('type') == "variables_set_dynamic":  # Variable's setter
            if blockTree.find('field') != -1:
                if result == None:
                    result = []
                # Only the first value at the right of the setter will be assigned
                result.append(blockTree.find('value').find('block').find('field').text)
    # Are not variables, but parameters
    elif blockTree != None:
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
    if block.find('value') != -1:
        result = block.find('value')
    return result


# Inserts in firstBlock all the blocks at its right
def processValues(firstBlock, value):
    valueBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block'))
    if valueBlock != None and firstBlock != None:
        # Done in case a block inside a statement has other(s) block(s) at its right, so they won't be processed next to the first block inside the statement
        blockBottom = firstBlock[1]["BOTTOM"]
        if blockBottom != None:
            end = False
            while end == False:
                if blockBottom[1]["BOTTOM"] == None:
                    firstBlock = blockBottom
                    end = True
                else:
                    blockBottom = blockBottom[1]["BOTTOM"]
        insertBlock(firstBlock, valueBlock, "RIGHT")
        # Creates and inserts all the blocks at the right of the given, one by one
        while(value != None):
            value = getValues(value)
            if value != None:
                insertBlock(firstBlock, createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')), getVariables(value.find('block')), value.find('block')), "RIGHT")


# Returns the element inside a block (BottomIn)
def getStatements(statTree, firstBlock):
    result = None
    newBlock = None
    block = statTree.find('block')
    next_ = block.find('next')
    value = block.find('value')
    statement = block.find('statement')

    # If the first block has other blocks at the right, processes those blocks (Right, getValues)
    if value != None:
        # This process returns all the blocks at the right, not only the first one
        result = getValues(value)
        processValues(firstBlock, value)

    # If the first block has other blocks inside it, processes those blocks (BottomIn, getStatements)
    if statement != None:
        # Recursion to get the elements inside the block
        result = getStatements(statement, createBlock(statement.get('blocktextname'), getType(statement.get('type')), getVariables(statement), statement))

    # If the first block has other blocks under it, processes those blocks (Bottom, getNext)
    if next_ != None:
        result = getNext(next_, firstBlock, True)[0]  # The first block under the given one
        if firstBlock != None:
            if result != None:
                # If the block has other blocks under it, processes them
                newBlock = createBlock(result.find('block').get('blocktextname'), getType(result.find('block').get('type')), getVariables(result.find('block')), result.find('block'))
            else:
                # If the block does not have other blocks under it, creates it as if it was the last one
                newBlock = createBlock(next_.find('block').get('blocktextname'), getType(next_.find('block').get('type')), getVariables(next_.find('block')), next_.find('block'))
            insertBlock(firstBlock, newBlock, "BOTTOM")
    return result


# Returns the element under a block (Bottom)
def getNext(nextTree, firstBlock, insideStatement):
    result = None
    newBlock = None
    block = nextTree.find('block')
    value = block.find('value')
    statement = block.find('statement')
    next_ = block.find('next')

    # If there is a block under the given one
    if block != None:
        newBlock = createBlock(block.get('blocktextname'), getType(block.get('type')), getVariables(block), block)

        # If the block has other blocks at its right, processes them (Right, getValues)
        if value != None:
            # This process returns all the blocks at the right, not only the first one
            if insideStatement:
                result = nextTree
            processValues(newBlock, value)

        # If the block has other blocks inside it, processes them (BottomIn, getStatements)
        if statement != None:
            statementBlock = createBlock(statement.find('block').get('blocktextname'), getType(statement.find('block').get('type')), getVariables(statement.find('block')), statement.find('block'))
            insertBlock(newBlock, statementBlock, "BOTTOMIN")
            while(statement != None):
                statement = getStatements(statement, statementBlock)

        # If the block has other block under it, inserts it at Bottom attribute
        if next_ != None:
            result = next_
            if result != None and firstBlock != None:
                insertBlock(firstBlock, newBlock, "BOTTOM")
    return result, newBlock



# Function to convert the xml string returned from the workspace to a block structure that can be processed by the Block-Text parser
def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    listBlocks = []
    for block in root:

        # First, user variables must be processed
        if block.tag == "variables":
            listBlocks = processVariables(block, listBlocks)
        else:
            # The first block must be always a main block or an user function block
            mainBlock = createBlock(block.get('blocktextname'), getType(block.get('type')), getVariables(block), block)

            # The next elements to be processed are the blocks inside the first one (statements, BottomIn)
            statement = block.find('statement')
            if statement != None:
                # Processes the first element inside the block, creates and inserts it at BottomIn
                firstStat = statement.find('block')
                statementBlock = createBlock(statement.find('block').get('blocktextname'), getType(statement.find('block').get('type')), getVariables(statement.find('block')), statement.find('block'))
                insertBlock(mainBlock, statementBlock, "BOTTOMIN")

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
                    newBlock = createBlock(insideStatement.find('block').get('blocktextname'), getType(insideStatement.find('block').get('type')), getVariables(insideStatement.find('block')), insideStatement.find('block'))
                    insertBlock(statementBlock, newBlock, "BOTTOMIN")
                    while(insideStatement != None):
                        insideStatement = getStatements(insideStatement, newBlock)

                # Otherwise, if the first element has blocks under it, processes them (Bottom)
                nextBlock = firstStat.find('next')
                if nextBlock != None:
                    lastBlock = createBlock("Last", None, None, nextBlock)  # Aux block
                    while nextBlock != None and lastBlock != None:
                        # If nextBlock or lastBlock are None, it means that the current block is the last one
                        nextValue = getNext(nextBlock, statementBlock, False)
                        nextBlock = nextValue[0]
                        lastBlock = nextValue[1]
                    insertBlock(statementBlock, lastBlock, "BOTTOM")

                # ListBlocks contains the user variables, the user procedures and the main
                listBlocks.append(mainBlock)
            print(mainBlock)
    return listBlocks


