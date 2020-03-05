from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
import xml.etree.ElementTree as ET
import re


def createBlock(name, type_):
    #print("Crea block " + name)
    dic = {}
    dic["RIGHT"] = None
    dic["BOTTOMIN"] = None
    dic["BOTTOM"] = None
    # Añadir VARIABLES
    dic["TYPE"] = type_
    return name, dic

def searchName(string):
    positionIni = string.find("blocktextname=\"")
    positionFinal = string.find("\" id=")
    name = string[positionIni+15:positionFinal]
    return name

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


# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# Algo no funcionaba y ahora funciona wtf??

def getValues(valuesTree):
    result = None
    block = valuesTree.find('block')
    print(block.tag, block.get('blocktextname'))
    if block.find('value') != -1:
        value = block.find('value')
        result = value
    return result

def getStatements(statTree, firstBlock):
    result = None
    newBlock = None
    block = statTree.find('block')
    print(block.tag, block.get('blocktextname'))
    next_ = block.find('next')
    value = block.find('value')
    statement = block.find('statement')
    if value != None:
        result = getValues(value)
        newBlock = createBlock(value.find('block').get('blocktextname'), None)
        if newBlock != None and firstBlock != None:
            insertBlock(firstBlock, newBlock, "RIGHT")
            while(value != None):
                value = getValues(value)
                if value != None:
                    thisBlock = createBlock(value.find('block').get('blocktextname'), None)
                    insertBlock(firstBlock, thisBlock, "RIGHT")  # Cambiar FirstBlock, debe insertar el anterior (se puede recuperar con el return newBlock??)
    if statement != None:
        blockStatement = createBlock(statement.get('blocktextname'), None)
        result = getStatements(statement, blockStatement)[0]
    if next_ != None:
        result = getNext(next_, firstBlock)[0]
        if firstBlock != None:
            if result != None:
                newBlock = createBlock(result.find('block').get('blocktextname'), None)
            else:
                newBlock = createBlock(next_.find('block').get('blocktextname'), None)
            insertBlock(firstBlock, newBlock, "BOTTOM")
    return result, newBlock

def getNext(nextTree, firstBlock):
    result = None
    newBlock = None
    block = nextTree.find('block')
    if block != None:
        print(block.tag, block.get('blocktextname'))
        newBlock = createBlock(block.get('blocktextname'), None)

        value = block.find('value')
        if value != None:
            valTree = value
            valueBlock = createBlock(value.find('block').get('blocktextname'), None)
            insertBlock(newBlock, valueBlock, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), None)
                    insertBlock(newBlock, thisBlock, "RIGHT")

        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            statementBlock = createBlock(firstStat.get('blocktextname'), None)
            insertBlock(newBlock, statementBlock, "BOTTOMIN")
            while(statement != None):
                statement = getStatements(statement, statementBlock)[0]

        next_ = block.find('next')
        if next_ != None:
            result = next_
            if result != None and firstBlock != None:
                insertBlock(firstBlock, newBlock, "BOTTOM")

    return result, newBlock



def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    print(root.tag, root.attrib)
    for block in root:
        print (block.tag, block.get('blocktextname'))

        mainBlock = createBlock(block.get('blocktextname'), None)

        value = block.find('value')
        if value != None:
            valTree = value
            valueBlock = createBlock(value.find('block').get('blocktextname'), None)
            insertBlock(mainBlock, valueBlock, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                # Creates a block and adds it at RIGHT
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), None)
                    insertBlock(valueBlock, thisBlock, "RIGHT")
            #print(valueBlock)

        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            statementBlock = createBlock(statement.find('block').get('blocktextname'), None)
            insertBlock(mainBlock, statementBlock, "BOTTOMIN")
            print(firstStat.tag, firstStat.get('blocktextname'))

            if firstStat.find('value') != -1 and firstStat.find('value') != None:
                valTree = firstStat.find('value')
                firstValue = createBlock(valTree.find('block').get('blocktextname'), None)
                insertBlock(statementBlock, firstValue, "RIGHT")
                while(valTree != None):
                    valTree = getValues(valTree)
                    if valTree != None:
                        thisBlock = createBlock(valTree.find('block').get('blocktextname'), None)
                        insertBlock(statementBlock, thisBlock, "RIGHT")

            if firstStat.find('statement') != -1 and firstStat.find('statement') != None:
                insideStatement = firstStat.find('statement')
                insideTree = insideStatement
                newBlock = createBlock(insideStatement.find('block').get('blocktextname'), None)
                insertBlock(statementBlock, newBlock, "BOTTOMIN")
                while(insideTree != None):
                    print("buclesito")
                    print(newBlock[0])
                    insideTree = getStatements(insideTree, newBlock)[0]
            #print(statementBlock)

        nextBlock = firstStat.find('next')
        nextTree = nextBlock
        if nextBlock != None:  # Comprueba esto, a ver qué has hecho aquí, melona
            lastBlock = createBlock("Last", None)
            while(nextTree != None and lastBlock != None):
                nextValue = getNext(nextTree, statementBlock)
                nextTree = nextValue[0]
                lastBlock = nextValue[1]
                # Creates block and adds it at BOTTOM
            insertBlock(statementBlock, lastBlock, "BOTTOM")
        print(mainBlock)
        return mainBlock


# Mirar:
    # Fields
    # Variables

