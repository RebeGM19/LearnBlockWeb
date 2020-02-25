from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
app = Flask(__name__)


def createBlock(name, type, value, statement, next):
    dic = {}
    dic["RIGHT"] = value
    dic["BOTTOM"] = next
    dic["BOTTOMIN"] = statement
    # Añadir VARIABLES
    dic["TYPE"] = type
    return name, dic

def searchName(string):
    positionIni = string.find("blocktextname=\"")
    positionFinal = string.find("\" id=")
    name = string[positionIni:positionFinal]
    return name

def process(arrayBlocks, position):
    block = arrayBlocks[position]
    value = None
    statement = None
    next = None
    if block.find("<block ") != -1:
        name = searchName(block)
        if block.find("/>") != -1:
            result = createBlock(name, None, value, statement, next)
        else:
            nextBlock = arrayBlocks[position+1]
            if nextBlock.find("<statement ") != -1:
                statement = process(arrayBlocks, position+2)
            if nextBlock.find("<value ") != -1:
                value = process(arrayBlocks, position+2)
            if nextBlock.find("<next ") != -1:
                next = process(arrayBlocks, position+2)
            # Quedan por procesar variables y funciones
            # Asignar tipo
            # Mirar los fields
            result = createBlock(name, None, value, statement, next)

    return result

# Mirar:
    # Si con una llamada a process es suficiente
    # Si se necesita un array con lo que devuelve process por cada bloque


if __name__ == '__main__':
    app.run(debug=False)
