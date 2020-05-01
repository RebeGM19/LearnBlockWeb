import json
from flask import Flask, render_template, request
from learnblockCode.guiCreateBlock import *
from learnblockCode.Parser import __parserFromString, __generatePy, cleanCode, parserLearntBotCodeFromCode
from btParser import processVars, parserBlockText
from blocksLoader import loadBlocks, loadLBBlocks
app = Flask(__name__)


@app.route("/")
def init():
    # Loads blocks from json definition
    control = loadLBBlocks("blocks/Control.conf")
    operators = loadLBBlocks("blocks/Operators.conf")
    values = loadBlocks("blocks/values.json")
    variables = loadBlocks("blocks/variables.json")
    expressions = loadLBBlocks("blocks/Expressions.conf")
    proprioceptive = loadLBBlocks("blocks/Proprioceptive.conf")
    motor = loadLBBlocks("blocks/Motor.conf")
    perceptual = loadLBBlocks("blocks/Perceptual.conf")

    # Gets the English and Spanish names of the blocks
    language = control[1] + operators[1] + expressions[1] + proprioceptive[1] + motor[1] + perceptual[1]

    # Gets all blocks' type and category, from all files
    allBlocks = getBlocksTypes(control[0]) + getBlocksTypes(operators[0]) + getBlocksTypes(expressions[0]) + getBlocksTypes(proprioceptive[0]) + getBlocksTypes(motor[0]) + getBlocksTypes(perceptual[0])

    return render_template('index.html', language=language, control=control[0], operators=operators[0], values=values, variables=variables, expressions=expressions[0], proprioceptive=proprioceptive[0], motor=motor[0], perceptual=perceptual[0], allBlocks=allBlocks)

# Gets the variables declared by the user
def getVars(result):
    finalVars = result.find("\n")
    variables = result[:finalVars]
    return variables

# Gets the category a block belongs to
def getCategoryFromBlock(block):
    obtType = block["type"].split("_")
    return obtType[0]

# Gets blocks' type and category
def getBlocksTypes(blocks):
    allBlocks = []
    jsonBlocks = json.loads(blocks)
    for i in range(0, len(jsonBlocks)):
        block = [jsonBlocks[i]["type"], getCategoryFromBlock(jsonBlocks[i])]
        allBlocks.append(block)
    return allBlocks

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
