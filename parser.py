from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
import xml.etree.ElementTree as ET
import re
app = Flask(__name__)


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
                if valTree != None:
                    thisBlock = createBlock(value.find('block').get('blocktextname'), None)
                    insertBlock(firstBlock, thisBlock, "RIGHT")
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

        value = block.find('value')
        valTree = value
        while(valTree != None):
            valTree = getValues(valTree)

        statement = block.find('statement')
        if statement != None:
            firstStat = statement.find('block')  # Primer bloque del statement
            print(firstStat.tag, firstStat.get('blocktextname'))
            next_ = firstStat.find('next')
            statTree = next_
            while(statTree != None):
                statTree = getStatements(statTree, None)[0]

        next_ = block.find('next')
        if next_ != None:
            result = next_
            if result != None and firstBlock != None:
                newBlock = createBlock(block.get('blocktextname'), None)
                insertBlock(firstBlock, newBlock, "BOTTOM")

    return result, newBlock



def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    print(root.tag, root.attrib)
    for block in root:
        print (block.tag, block.get('blocktextname'))

        mainBlock = createBlock(block.get('blocktextname'), None)

        value = block.find('value')
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
        firstStat = statement.find('block')  # Primer bloque del statement
        statementBlock = createBlock(statement.find('block').get('blocktextname'), None)
        insertBlock(mainBlock, statementBlock, "BOTTOMIN")
        print(firstStat.tag, firstStat.get('blocktextname'))

        if firstStat.find('value') != -1:
            valTree = firstStat.find('value')
            firstValue = createBlock(valTree.find('block').get('blocktextname'), None)
            insertBlock(statementBlock, firstValue, "RIGHT")
            while(valTree != None):
                valTree = getValues(valTree)
                if valTree != None:
                    thisBlock = createBlock(valTree.find('block').get('blocktextname'), None)
                    insertBlock(statementBlock, thisBlock, "RIGHT")

        if firstStat.find('statement') != -1:
            insideStatement = firstStat.find('statement')
            insideTree = insideStatement
            newBlock = createBlock(insideStatement.find('block').get('blocktextname'), None)
            insertBlock(statementBlock, newBlock, "BOTTOMIN")
            while(insideTree != None):
                insideTree = getStatements(insideTree, newBlock)[0]
        print(statementBlock)


        next_ = firstStat.find('next')
        statTree = next_
        while(statTree != None):
            statTree = getStatements(statTree, None)[0]
            # Crear bloque y meterlo en BOTTOMIN


        nextBlock = block.find('next')
        nextTree = nextBlock
        while(nextTree != None):
            nextTree = getNext(nextTree, None)[0]
            # Crear bloque y meterlo en BOTTOM
        #print(mainBlock)


# Mirar:
    # Fields
    # Variables


if __name__ == '__main__':
    app.run(debug=False)
