from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
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

def processStatements(arrayBlocks, position, next_, result):
    if(arrayBlocks[position].find("</statement>") == -1):
        if arrayBlocks[position].find("<block ") != -1:
            name = searchName(arrayBlocks[position])
            if arrayBlocks[position].find("/>") == -1:  #Bloque normal
                if arrayBlocks[position+1].find("<next>") == -1:
                    next_ = processStatements(arrayBlocks, position+2, next_, result) #Procesa el siguiente bloque de debajo
            name = searchName(arrayBlocks[position])
            result = createBlock(name, None, None, None, next_)
    return result

def processValues(arrayBlocks, position, value, result):
    name = ""
    if(arrayBlocks[position].find("</value>") == -1):
        if arrayBlocks[position].find("<block ") != -1:
            name = searchName(arrayBlocks[position])
            if arrayBlocks[position].find("/>") == -1:  #Bloque normal
                if arrayBlocks[position+1].find("<value ") != -1:
                    value = processValues(arrayBlocks, position+2, value, result) #Procesa el siguiente bloque de la derecha
            name = searchName(arrayBlocks[position])
            result = createBlock(name, None, value, None, None)
            #print(result)
    return result

def process(arrayBlocks, position, value, statement, next_, result, name):
    print("Entra proceso")
    block = arrayBlocks[position]
    if block.find("<block ") != -1: #Mirar esta condicion
        name = searchName(block)
        if block.find("/>") == -1:
            i = position + 1
            #if(arrayBlocks[i].find("</block>") == -1):
            if(i < len(arrayBlocks)):
                if arrayBlocks[i].find("<statement ") != -1:
                    print("Entra if statement")
                    statement = processStatements(arrayBlocks, i+1, None, None)
                if arrayBlocks[i].find("<value ") != -1:
                    value = processValues(arrayBlocks, i+1, None, None)
                process(arrayBlocks, i+1, value, statement, next_, result, name)
    result = createBlock(name, None, value, statement, next_)
    print(result)
    return result


# Mirar:
    # Si con una llamada a process es suficiente
    # Si se necesita un array con lo que devuelve process por cada bloque


if __name__ == '__main__':
    app.run(debug=False)
