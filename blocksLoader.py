import json

# Loads a file to process blocks in Json with Blockly definition
def loadBlocks(route):
    f = open(route, "r")
    if f.mode == 'r':
        result = f.read()
    return result

# Loads a file to process blocks in Json with LearnBlock definition
def loadLBBlocks(route):
    f = open(route, "r")
    if f.mode == 'r':
        blocks = f.read()
    result = json.loads(blocks)
    return convertLB2Blockly(result)

# Loads and translates a block's parameters from LearnBlock to Blockly definition
def getParameters(variables):
    resultParameters = ""
    for par in variables:
        # Definition for Float and Int parameters
        if par["type"] == "float" or par["type"] == "int":
            resultParameters += "{\"type\": \"input_value\", \"name\": \"PARAM\", \"check\": [\"Number\", \"var\"]}, "
        # Definition for String parameters
        if par["type"] == "string" or par["type"] == "apriltext":
            resultParameters += "{\"type\": \"input_value\", \"name\": \"PARAM\", \"check\": [\"Text\", \"var\"]}, "
        # Definition for Boolean parameters
        if par["type"] == "boolean":
            resultParameters += "{\"type\": \"input_value\", \"name\": \"PARAM\", \"check\": [\"Bool\", \"var\"]}, "
    resultParameters = resultParameters[:-2]
    return resultParameters, len(variables)

# Translates the definition to add parameters to a block
def returnParameters(inputPos):
    strParam = "("
    for i in range (1, inputPos):
        strParam += "%"+str(i)+", "
    strParam = strParam[:-2]
    strParam += ")"
    return strParam  # Something like: (%1, %2, %3)


# Loads and translates a block's name and shape from LearnBlock to Blockly definition
def getNameAndShape(block, name, shape):
    resultShape = ""
    bkyName = name.upper()
    if shape == "block8":  # Block8 blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], "

    if shape == "block6":  # Block6 blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", \"args0\": [{\"type\": \"input_value\", \"name\": \"IF\", \"check\": null}], \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], \"previousStatement\": null, \"nextStatement\": null, "

    if shape == "block5":  # Block5 blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}\", \"message1\": \"%1\", \"args1\": [{\"type\": \"input_statement\", \"name\": \"DO\"}], \"previousStatement\": null, \"nextStatement\": null, "

    if shape == "block4" or shape == "blockLeft":  # BlockLeft blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}"
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape += " " + returnParameters(inputPos) + " \", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], \"inputsInline\": true, "
        else:
            resultShape += "\", "
        if bkyName == "TRUE" or bkyName == "FALSE":
            resultShape += "\"output\": \"Bool\", "
        else:
            resultShape += "\"output\": null, "

    if shape == "block3" or shape == "blockBoth":  # BlockBoth blocks' shape
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} " + returnParameters(inputPos) + " %" + str(inputPos) + "\", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + ", {\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], \"inputsInline\": true, "
        else:
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", "
            resultShape += "\"args0\": [{\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        if bkyName == "TRUE" or bkyName == "FALSE":
            resultShape += "\"output\": \"Bool\", "
        else:
            resultShape += "\"output\": null, "

    if shape == "block1" or shape == "blockVertical":  # BlockVertical blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}"
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape += " " + returnParameters(inputPos) + " \", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], \"inputsInline\": true, "
        else:
            resultShape += "\", "
        resultShape += "\"previousStatement\": null, \"nextStatement\": null, "

    return resultShape


# The block's colour depends on its category
def getColour(category):
    colour = "\"0\""
    if category == "control":
        colour = "\"#b3b300\""
    if category == "operator":
        colour = "\"#2e5cb8\""
    if category == "Motor":
        colour = "\"#b32d00\""
    if category == "Base":
        colour = "\"#800080\""
    if category == "Camera":
        colour = "\"#009999\""
    if category == "Distances":
        colour = "\"#cc7a00\""
    if category == "Emotion":
        colour = "\"#339966\""
    if category == "Ground":
        colour = "\"#5c5c8a\""
    if category == "Speaker":
        colour = "\"#996633\""
    return colour

# Gets the function's name both in English and Spanish
def getLanguages(block, name):
    languages = block["languages"]
    # This procedure must be modified in case others languages are included
    blockContent = [name.upper(), languages["ES"], languages["EN"]]
    return blockContent


# Loads and translates one block from LearnBlock to Blockly definition
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
    blocklyJson += "\"colour\": " + getColour(block["category"])
    if 'languages' in block:
        blockContent = getLanguages(block, vName.replace(" ", "_"))

    return blocklyJson, blockContent


# Loads and translates all the blocks
def convertLB2Blockly(lbJson):
    blocklyJson = "["
    blockContent = []
    for b in lbJson:
        vShape = b["shape"]
        for i in range (0, len(vShape)):
            alt = "_" + str(i)
            if len(vShape) == 1:
                alt = ""
            result = convertBlock(b, vShape[i], alt)
            blocklyJson += result[0]
            languagesContent = result[1]
            if len(languagesContent) != 0:
                blockContent.append(result[1])
            blocklyJson += "}, "
    blocklyJson = blocklyJson[:-2]
    blocklyJson += "]"

    return blocklyJson, blockContent
