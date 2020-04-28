import json
from flask import Flask, render_template, request
from learnblockCode.guiCreateBlock import *
from learnblockCode.Parser import __parserFromString, __generatePy, cleanCode, parserLearntBotCodeFromCode
from btParser import processVars, parserBlockText
from blocksLoader import loadBlocksPrueba
app = Flask(__name__)

# Loads a file
def loadBlocks(route):
    f = open(route, "r")
    if f.mode == 'r':
        result = f.read()
    return result

@app.route("/")
def init():
    # Loads blocks from json definition in json files
    #control = loadBlocks("blocks/control.json")
    #operators = loadBlocks("blocks/operators.json")
    #emotions = loadBlocks("blocks/emotions.json")
    #speaker = loadBlocks("blocks/speaker.json")
    #base = loadBlocks("blocks/base.json")
    #motor = loadBlocks("blocks/motor.json")
    camera = loadBlocks("blocks/camera.json")
    distances = loadBlocks("blocks/distances.json")
    ground = loadBlocks("blocks/ground.json")

    control = loadBlocksPrueba("Control.conf")
    operators = loadBlocksPrueba("Operators.conf")
    values = loadBlocks("blocks/values.json")
    variables = loadBlocks("blocks/variables.json")
    expressions = loadBlocksPrueba("Expressions.conf")
    proprioceptive = loadBlocksPrueba("Proprioceptive.conf")
    motor = loadBlocksPrueba("Motor.conf")
    perceptual = loadBlocksPrueba("Perceptual.conf")

    language = control[1] + operators[1] + expressions[1] + proprioceptive[1] + motor[1]
    print(motor[0])

    return render_template('index.html', language=language, control=control[0], operators=operators[0], values=values, variables=variables, expressions=expressions[0], proprioceptive=proprioceptive[0], motor=motor[0], camera=camera, distances=distances, ground=ground)

# Gets the variables declared by the user
def getVars(result):
    finalVars = result.find("\n")
    variables = result[:finalVars]
    return variables

# Mirar esto ?????
def formatBlocks(blocks):
    blocksList = blocks.split(">")
    array = []
    array.append("<?xml version=\"1.0\"?>")
    for i in range(1, len(blocksList)-2):
        blocksList[i] = blocksList[i] + ">"
        array.append(blocksList[i])
    for block in array:
        print(block)
    return array

# Mirar esto ?????
def listToString(s):
    str1 = ""
    for ele in s:
        str1 += ele
    return str1

# When the button "execute" is clicked, gets the blocks in the workspace, parses them and returns the equivalent Block-Text (and Python) code
@app.route("/result", methods=['GET', 'POST'])
def getBlocks():
    if request.method == 'POST':
        blocks = request.get_json()
        processVars(getVars(blocks))
        blocksList = formatBlocks(blocks)
        print("------------------------------------------")
        toParser = listToString(blocksList)
        blocktext = parserBlockText(toParser)
        print("------------------------------------------")
        print(blocktext)

        text = parserLearntBotCodeFromCode(blocktext, 'LearnBotClient')
        print("--------Clean code--------\n\n", text)

        result = blocktext + "----------\n" + text

        return result, 200
    else:
        return '', 200


if __name__ == '__main__':
    app.run(debug=False)
