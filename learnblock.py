import json
from flask import Flask, render_template, request, send_file
from learnblockCode.Parser import parserLearntBotCodeFromCode
from btParser import processVars, parserBlockText
from blocksLoader import loadBlocks, loadLBBlocks
app = Flask(__name__)


# This procedure is executed when the web page is opened
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

def getRobot(result):
    finalRobot = result.find("\n")
    robot = result[:finalRobot]
    result = result[finalRobot+1:]
    return robot, result

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

# Creates a string with all the XML elements returned by the Blockly library that represents all the blocks in the workspace
# With that string, the parser from Blockly XML to LearnBlock Blocks structure can be executed
def formatBlocks(blocks):
    blocksList = blocks.split(">")
    string = "<?xml version=\"1.0\"?>"
    for i in range(1, len(blocksList)-2):
        blocksList[i] = blocksList[i] + ">"
        string += blocksList[i]
    return string


# When the button "Blocks to Text" is clicked, gets the blocks in the workspace, parses them and returns the equivalent Block-Text and Python codes
@app.route("/result", methods=['GET', 'POST'])
def getBlocks():
    if request.method == 'POST':
        blocks = request.get_json()
        robotAndBlocks = getRobot(blocks)
        robot = robotAndBlocks[0]
        blocks = robotAndBlocks[1]
        processVars(getVars(blocks))
        toParser = formatBlocks(blocks)
        blocktext = parserBlockText(toParser)

        text = parserLearntBotCodeFromCode(blocktext, robot)
        if text == False:
            text = "\n"

        result = blocktext + "----------\n" + text

        return result, 200
    else:
        return '', 200

# When the button "Block-Text to Python" is clicked, gets the Block-Text code (which can be modified), parses it and returns the equivalent Python code
@app.route("/resultBT", methods=['GET', 'POST'])
def getPyFromBT():
    if request.method == "POST":
        btCode = request.get_json()
        robotAndBlocks = getRobot(btCode)
        robot = robotAndBlocks[0]
        btCode = robotAndBlocks[1]
        result = parserLearntBotCodeFromCode(btCode, robot)
        if result != False:
            return result, 200
        else:
            return '', 200
    else:
        return '', 200

@app.route("/download")
def download_file():
    return send_file('downloads/LearnBlockWeb.zip', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=False)
