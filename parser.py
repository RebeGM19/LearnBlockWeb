from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
app = Flask(__name__)


def createBlock(name, type_, value, statement, next_):
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

def process(arrayBlocks, position):
    block = arrayBlocks[position]
    value = None
    statement = None
    next_ = None
    result = None
    #print(block)
    #print(position)
    if block.find("<block ") != -1:
        print("Entra primer if")
        name = searchName(block)
        if block.find("/>") != -1:
            result = createBlock(name, None, value, statement, next_)
            nextBlock = arrayBlocks[position+1]
            if nextBlock.find("</value>") != -1:
                print("entra")
                process(arrayBlocks, position+2)
        else:
            print("Hola")
            nextBlock = arrayBlocks[position+1]
            if nextBlock.find("<statement ") != -1:
                print("Entra statement")
                statement = process(arrayBlocks, position+2)
            if nextBlock.find("<value ") != -1:
                value = process(arrayBlocks, position+2)
            if nextBlock.find("<next>") != -1:
                next_ = process(arrayBlocks, position+2)


            result = createBlock(name, None, value, statement, next_)
            # Quedan por procesar variables y funciones
            # Asignar tipo
            # Mirar los fields
    elif block.find("<statement ") != -1:
        print("Entra if statement")
        print(arrayBlocks[position+1])
        statement = process(arrayBlocks, position+1)
        #print(statement)
        #print(result)
    #result = createBlock(searchName(arrayBlocks[position+1]), None, value, statement, next_)
    return result

# Mirar:
    # Si con una llamada a process es suficiente
    # Si se necesita un array con lo que devuelve process por cada bloque


if __name__ == '__main__':
    app.run(debug=False)
