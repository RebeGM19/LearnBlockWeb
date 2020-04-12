import json

def loadBlocksPrueba(route):
    f = open(route, "r")
    if f.mode == 'r':
        blocks = f.read()
    result = json.loads(blocks)
    print(len(result))
    convertLB2Blockly(result)
    return result

def getParameters(variables):
    resultParameters = ""
    for par in variables:
        if par["type"] == "float" or par["type"] == "int":
            parType = "field_number"
            parName = "NUM"
            resultParameters += "{\"type\": \"field_number\", \"name\": \"NUM\", \"value\": 0}, "
    resultParameters = resultParameters[:-2]
    return resultParameters, len(variables)

# Part of the shape is given in the name of the block
def getNameAndShape(block, name, shape):
    resultShape = ""
    bkyName = name.upper()
    if shape == "block8":  # Main blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], "

    if shape == "block6":  # If/Elif blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", \"args0\": [{\"type\": \"input_value\", \"name\": \"IF\", \"check\": null}], \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], \"previousStatement\": null, \"nextStatement\": null, "

    if shape == "block5":  # Else/Forever blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], \"previousStatement\": null, \"nextStatement\": null, "

    if shape == "block4" or shape == "blockLeft":  # ElapsedTime1 blocks' shape REVISAR blockLeft
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", "
        if 'variables' in block:
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        resultShape += "\"output\": null, "

    if shape == "block3" or shape == "blockBoth":  # ElapsedTime2 blocks' shape REVISAR blockBoth
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %" + str(inputPos) + "\", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + ", {\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        else:
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", "
            resultShape += "\"args0\": [{\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        resultShape += "\"output\": null, "

    if shape == "block1" or shape == "blockVertical":  # Wait blocks' shape REVISAR blockVertical
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", "
        if 'variables' in block:
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        resultShape += "\"previousStatement\": null, \"nextStatement\": null, "

    return resultShape

def getColour(category):
    colour = 0
    if category == "control":
        colour = 60
    if category == "operator":
        colour = 230
    return colour

def convertBlock(block, shape, alt):
    vType = block["type"]
    vName = block["name"]
    vCategory = block["category"]
    if vType == "others":
        vCategory = "f" + vCategory.lower()
    blocklyJson = "{\"type\": \"" + vCategory.lower() + "_" + vName.replace(" ", "_") + alt + "\", "
    blocklyJson += "\"blocktextname\": \"" + vName + "\", "
    blocklyJson += getNameAndShape(block, vName.replace(" ", "_"), shape)
    blocklyJson += "\"colour\": " + str(getColour(block["category"]))

    return blocklyJson

def convertLB2Blockly(lbJson):
    blocklyJson = "["
    for b in lbJson:
        vShape = b["shape"]
        for i in range (0, len(vShape)):
            alt = "_" + str(i)
            if len(vShape) == 1:
                alt = ""
            blocklyJson += convertBlock(b, vShape[i], alt)
            blocklyJson += "}, "
    blocklyJson = blocklyJson[:-2]
    blocklyJson += "]"
    print(blocklyJson)
