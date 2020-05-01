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
            resultParameters += "{\"type\": \"field_number\", \"name\": \"NUM\", \"value\": 0}, "
        # Definition for String parameters
        if par["type"] == "string" or par["type"] == "apriltext":
            resultParameters += "{\"type\": \"field_input\", \"name\": \"TEXT\", \"text\": \"%{BKY_SAMPLE_TEXT}\"}, "
        # Definition for Boolean parameters
        if par["type"] == "boolean":
            resultParameters += "{\"type\": \"field_dropdown\", \"name\": \"BOOL\", \"options\": [[\"%{BKY_TRUE}\", \"TRUE\"], [\"%{BKY_FALSE}\", \"FALSE\"]]}, "
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
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        else:
            resultShape += "\", "
        resultShape += "\"output\": null, "

    if shape == "block3" or shape == "blockBoth":  # BlockBoth blocks' shape
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} " + returnParameters(inputPos) + " %" + str(inputPos) + "\", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + ", {\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        else:
            resultShape = "\"message0\": \"%{BKY_" + bkyName + "} %1\", "
            resultShape += "\"args0\": [{\"type\": \"input_value\", \"name\": \"NUM\", \"check\": null}], "
        resultShape += "\"output\": null, "

    if shape == "block1" or shape == "blockVertical":  # BlockVertical blocks' shape
        resultShape = "\"message0\": \"%{BKY_" + bkyName + "}"
        if 'variables' in block:
            inputPos = getParameters(block["variables"])[1]+1
            resultShape += " " + returnParameters(inputPos) + " \", "
            resultShape += "\"args0\": [" + getParameters(block["variables"])[0] + "], "
        else:
            resultShape += "\", "
        resultShape += "\"previousStatement\": null, \"nextStatement\": null, "

    return resultShape

# The block's colour depends on its category
def getColour(category):
    colour = 0
    if category == "control":
        colour = 60
    if category == "operator":
        colour = 230
    # Add colours
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
    blocklyJson = "{\"type\": \"" + vCategory.lower() + "_" + vName.replace(" ", "_") + alt + "\", "
    blocklyJson += "\"blocktextname\": \"" + vName + "\", "
    blocklyJson += getNameAndShape(block, vName.replace(" ", "_"), shape)
    blocklyJson += "\"colour\": " + str(getColour(block["category"]))
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
            blocklyJson += convertBlock(b, vShape[i], alt)[0]
            languagesContent = convertBlock(b, vShape[i], alt)[1]
            if len(languagesContent) != 0:
                blockContent.append(convertBlock(b, vShape[i], alt)[1])
            blocklyJson += "}, "
    blocklyJson = blocklyJson[:-2]
    blocklyJson += "]"

    return blocklyJson, blockContent
