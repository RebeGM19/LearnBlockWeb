import json

def loadBlocksPrueba(route):
    f = open(route, "r")
    if f.mode == 'r':
        blocks = f.read()
    result = json.loads(blocks)
    return convertLB2Blockly(result)

def getParameters(variables):
    resultParameters = ""
    for par in variables:
        if par["type"] == "float" or par["type"] == "int":
            resultParameters += "{\"type\": \"field_number\", \"name\": \"NUM\", \"value\": 0}, "
        if par["type"] == "string" or par["type"] == "apriltext":
            resultParameters += "{\"type\": \"field_input\", \"name\": \"TEXT\", \"text\": \"%{BKY_SAMPLE_TEXT}\"}, "
        if par["type"] == "boolean":
            resultParameters += "{\"type\": \"field_dropdown\", \"name\": \"BOOL\", \"options\": [[\"%{BKY_TRUE}\", \"TRUE\"], [\"%{BKY_FALSE}\", \"FALSE\"]]}, "
    resultParameters = resultParameters[:-2]
    return resultParameters, len(variables)

def returnParameters(inputPos):
    strParam = "("
    for i in range (1, inputPos):
        strParam += "%"+str(i)+", "
    strParam = strParam[:-2]
    strParam += ")"
    return strParam

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
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}"
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape += " " + returnParameters(inputPos) + " \", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        else:
            resultShape += "\", "
        resultShape += "\"output\": null, "

    if shape == "block3" or shape == "blockBoth":  # ElapsedTime2 blocks' shape REVISAR blockBoth
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} " + returnParameters(inputPos) + " %" + str(inputPos) + "\", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + ", {\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        else:
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", "
            resultShape += "\"args0\": [{\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        resultShape += "\"output\": null, "

    if shape == "block1" or shape == "blockVertical":  # Wait blocks' shape REVISAR blockVertical
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}"
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape += " " + returnParameters(inputPos) + " \", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        else:
            resultShape += "\", "
        resultShape += "\"previousStatement\": null, \"nextStatement\": null, "

    return resultShape

def getColour(category):
    colour = 0
    if category == "control":
        colour = 60
    if category == "operator":
        colour = 230
    return colour

def getLanguages(block, name):
    languages = block["languages"]
    # There are only two languages: spanish and english. This procedure must be modified in case others languages are included
    blockContent = [name.upper(), languages["ES"], languages["EN"]]
    return blockContent


def convertBlock(block, shape, alt):
    blockContent = []
    vType = block["type"]
    vName = block["name"]
    vCategory = block["category"]
    if vType == "others":
        vCategory = "f" + vCategory.lower()
    blocklyJson = "{\"type\": \"" + vCategory.lower() + "_" + vName.replace(" ", "_") + alt + "\", "
    blocklyJson += "\"blocktextname\": \"" + vName + "\", "
    blocklyJson += getNameAndShape(block, vName.replace(" ", "_"), shape)
    blocklyJson += "\"colour\": " + str(getColour(block["category"]))
    if 'languages' in block:
        blockContent = getLanguages(block, vName.replace(" ", "_"))

    return blocklyJson, blockContent

def convertLB2Blockly(lbJson):
    blocklyJson = "["
    blockContent = []
    for b in lbJson:
        vShape = b["shape"]
        for i in range (0, len(vShape)):
            alt = "_" + str(i)
            if len(vShape) == 1:
                alt = ""
            blocklyJson += convertBlock(b, vShape[i], alt)[0]
            languagesContent = convertBlock(b, vShape[i], alt)[1]
            if len(languagesContent) != 0:
                blockContent.append(convertBlock(b, vShape[i], alt)[1])
            blocklyJson += "}, "
    blocklyJson = blocklyJson[:-2]
    blocklyJson += "]"

    return blocklyJson, blockContent
