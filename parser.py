from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
from learnbot_dsl.learnbotCode.guiCreateBlock import *
import xml.etree.ElementTree as ET
import re


def createBlock(name, type_):
    #print("Crea block " + name)
    dic = {}
    dic["RIGHT"] = None
    dic["BOTTOMIN"] = None
    dic["BOTTOM"] = None
    dic["VARIABLES"] = None
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
    print(finalType)
    return finalType


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
        newBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')))
        if newBlock != None and firstBlock != None:
            insertBlock(firstBlock, newBlock, "RIGHT")
            while(value != None):
                value = getValues(value)
                if value != None:
                    thisBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')))
                    insertBlock(firstBlock, thisBlock, "RIGHT")  # Cambiar FirstBlock, debe insertar el anterior (se puede recuperar con el return newBlock??)
    if statement != None:
        blockStatement = createBlock(statement.get('blocktextname'), getType(statement.get('type')))
        result = getStatements(statement, blockStatement)[0]
    if next_ != None:
        result = getNext(next_, firstBlock)[0]
        if firstBlock != None:
            if result != None:
                newBlock = createBlock(result.find('block').get('blocktextname'), getType(result.find('block').get('type')))
            else:
                newBlock = createBlock(next_.find('block').get('blocktextname'), getType(result.find('block').get('type')))
            insertBlock(firstBlock, newBlock, "BOTTOM")
    return result, newBlock

def getNext(nextTree, firstBlock):
    result = None
    newBlock = None
    block = nextTree.find('block')
    if block != None:
        print(block.tag, block.get('blocktextname'))
        newBlock = createBlock(block.get('blocktextname'), getType(block.get('type')))

        value = block.find('value')
        if value != None:
            valTree = value
            valueBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')))
            insertBlock(newBlock, valueBlock, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')))
                    insertBlock(newBlock, thisBlock, "RIGHT")

        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            statementBlock = createBlock(firstStat.get('blocktextname'), getType(firstStat.get('type')))
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

        mainBlock = createBlock(block.get('blocktextname'), getType(block.get('type')))

        value = block.find('value')
        if value != None:
            valTree = value
            valueBlock = createBlock(value.find('block').get('blocktextname'), getType(value.find('block').get('type')))
            insertBlock(mainBlock, valueBlock, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                # Creates a block and adds it at RIGHT
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')))
                    insertBlock(valueBlock, thisBlock, "RIGHT")
            #print(valueBlock)

        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            statementBlock = createBlock(statement.find('block').get('blocktextname'), getType(statement.find('block').get('type')))
            insertBlock(mainBlock, statementBlock, "BOTTOMIN")
            print(firstStat.tag, firstStat.get('blocktextname'))

            if firstStat.find('value') != -1 and firstStat.find('value') != None:
                valTree = firstStat.find('value')
                firstValue = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')))
                insertBlock(statementBlock, firstValue, "RIGHT")
                while(valTree != None):
                    valTree = getValues(valTree)
                    if valTree != None:
                        thisBlock = createBlock(valTree.find('block').get('blocktextname'), getType(valTree.find('block').get('type')))
                        insertBlock(statementBlock, thisBlock, "RIGHT")

            if firstStat.find('statement') != -1 and firstStat.find('statement') != None:
                insideStatement = firstStat.find('statement')
                insideTree = insideStatement
                newBlock = createBlock(insideStatement.find('block').get('blocktextname'), getType(insideStatement.find('block').get('type')))
                insertBlock(statementBlock, newBlock, "BOTTOMIN")
                while(insideTree != None):
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

