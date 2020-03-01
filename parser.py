from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
import xml.etree.ElementTree as ET
import re
app = Flask(__name__)


def createBlock(name, type_, value, statement, next_):
    #print("Crea block " + name)
    dic = {}
    dic["RIGHT"] = value
    dic["BOTTOM"] = next_
    dic["BOTTOMIN"] = statement
    # Añadir VARIABLES
    dic["TYPE"] = type_
    return name, dic

def searchName(string):
    positionIni = string.find("blocktextname=\"")
    positionFinal = string.find("\" id=")
    name = string[positionIni+15:positionFinal]
    return name



def getValues(valuesTree):
    result = None
    block = valuesTree.find('block')
    print(block.tag, block.get('blocktextname'))
    if block.find('value') != -1:
        value = block.find('value')
        result = value
    return result

def getStatements(statTree):
    result = None
    block = statTree.find('block')
    print(block.tag, block.get('blocktextname'))
    next_ = block.find('next')
    value = block.find('value')
    if next_ != None:
        result = next_
    return result

def getNext(nextTree):
    result = None
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
                statTree = getStatements(statTree)

        next_ = block.find('next')
        if next_ != None:
            result = next_

    return result

def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    print(root.tag, root.attrib)
    for block in root:
        print (block.tag, block.get('blocktextname'))

        value = block.find('value')
        valTree = value
        while(valTree != None):
            valTree = getValues(valTree)
            # Crear bloque y meterlo en RIGHT
            # Lalala


        statement = block.find('statement')
        firstStat = statement.find('block')  # Primer bloque del statement
        print(firstStat.tag, firstStat.get('blocktextname'))
        next_ = firstStat.find('next')
        statTree = next_
        while(statTree != None):
            statTree = getStatements(statTree)
            # Crear bloque y meterlo en BOTTOMIN


        nextBlock = block.find('next')
        nextTree = nextBlock
        while(nextTree != None):
            nextTree = getNext(nextTree)
            # Crear bloque y meterlo en BOTTOM


# Mirar:
    # Fields
    # Variables


if __name__ == '__main__':
    app.run(debug=False)
