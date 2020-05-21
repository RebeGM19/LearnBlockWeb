from learnblockCode.Block import *
import xml.etree.ElementTree as ET
import re

# Creates a block with the appropiate structure. The Block-Text parser gets this structure to generate the code.
def createBlock(name, type_, variables, block):
    # First of all, changes the block name depending on the type
    # String or num value
    if name == "val":
        # Number
        if "num" in block.get('type'):
            name = block.find('field').text
        # Text (name between "")
        elif "text" in block.get('type'):
            name = "\"" + block.find('field').text + "\""
        variables = None
    # User variable
    if type_ == VARIABLE and name == "undefined":
        name = block.get('blocktextname')
    # User procedure
    if type_ == USERFUNCTION:
        # Procedure definition
        if block.find('field') != None:
            name = block.find('field').text
        # Procedure call
        if block.find('mutation') != None:
            name = block.find('mutation').get('name')
        variables = None
    dic = {}
    dic["RIGHT"] = None
    dic["BOTTOMIN"] = None
    dic["BOTTOM"] = None
    dic["VARIABLES"] = variables
    dic["TYPE"] = type_

    # If the block is "while True", it must be created a "while" block with a "true" block at its right
    if name == "while True":
        name = "while"
        dic["RIGHT"] = createBlock("True", None, None, None)

    return name, dic

# Inserts a block into another block, on the pertinent dic attribute
def insertBlock(firstBlock, block, specification):
    end = False
    thisBlock = firstBlock
    while end == False:
        if thisBlock[1][specification] == None:
            end = True
            thisBlock[1][specification] = block
        else:
            aux = thisBlock[1][specification]
            thisBlock = aux
        if thisBlock[1]["VARIABLES"] != None and thisBlock[1]["TYPE"] == 3:
            # When variable's setter is processed, only the first value at its right is taken
            thisBlock[1]["RIGHT"] = None

# Gets the block type, given by its id
def getType(string):
    finalType = None
    if string != None:
        positionFinal = string.find("_")
        type_ = string[:positionFinal]
        if type_ == "control":
            finalType = CONTROL
        if type_ == "procedures":
            finalType = USERFUNCTION
        if type_ == "variables":
            finalType = VARIABLE
        if type_ == "base" or type_ == "camera" or type_ == "distances" or type_ == "emotion" or type_ == "ground" or type_ == "motor" or type_ == "speaker" or type_ == "fcontrol":
            finalType = FUNTION
    return finalType

# Returns the variables created by the user
def processVariables(variablesBlock, listBlocks):
    if variablesBlock.find('variable') != -1:
        for variable in variablesBlock.findall('variable'):
            listBlocks.append(createBlock(variablesBlock.find('variable').text, getType("variables"), None, variable))
    return listBlocks

# Returns the parameters into a function, given by the "field" element in xml (Variables)
# Otherwise, if the block is a variable, returns that variable
def getVariables(blockTree):
    result = None
    if blockTree.get('blocktextname') != None:
    # Blocks with "variables" on their type are variables
        if "variables" in blockTree.get('type'):
            blockTree.set('blocktextname', blockTree.find('field').text)
            if blockTree.get('type') == "variables_set_dynamic":  # Variable's setter
                if blockTree.find('field') != -1:
                    if result == None:
                        result = []
                    # Only the first value at the right of the setter will be assigned
                    rightBlock = blockTree.find('value').find('block')
                    value = rightBlock.find('field').text
                    if "text" in rightBlock.get('type'):
                        value = "\"" + rightBlock.find('field').text + "\""
                    result.append(value)
        # Are not variables, but parameters
        elif blockTree != None:
            if blockTree.find('field') != -1:
                for field in blockTree.findall('field'):
                    if result == None:
                        result = []
                    param = field.text
                    if field.get('name') == "TEXT":
                        param = "\"" + field.text + "\""
                    result.append(param)
    return result


def processBlock(currentData, prevBlock):
    currentBlock = createBlock(currentData.get('blocktextname'), getType(currentData.get('type')), getVariables(currentData), currentData)
    if currentData.find('value') != None:
        # Processes values: Block at the right of the given one
        valBlock = processBlock(currentData.find('value').find('block'), currentBlock)
        insertBlock(currentBlock, valBlock, "RIGHT")
    if currentData.find('statement') != None:
        # Processes values: Block inside the given one
        statBlock = processBlock(currentData.find('statement').find('block'), currentBlock)
        insertBlock(currentBlock, statBlock, "BOTTOMIN")
    if currentData.find('next') != None:
        # Processes next: Block under the given one
        nextBlock = processBlock(currentData.find('next').find('block'), currentBlock)
        insertBlock(currentBlock, nextBlock, "BOTTOM")

    return currentBlock

def convert(blocksString):
    root = ET.fromstring(re.sub(r"(<\?xml[^>]+\?>)", r"\1<root>", blocksString) + "</root>")
    listBlocks = []
    for block in root:
        # First, user variables must be processed
        if block.tag == "variables":
            listBlocks = processVariables(block, listBlocks)
        else:
            # The first block must be always a main block or an user function block
            mainBlock = createBlock(block.get('blocktextname'), getType(block.get('type')), getVariables(block), block)

            # The next element to be processed is the first block inside the main or the user function
            statement = block.find('statement').find('block')

            resultBlock = processBlock(statement, mainBlock)
            insertBlock(mainBlock, resultBlock, "BOTTOMIN")

            # ListBlocks contains the user variables, the user procedures and the main
            listBlocks.append(mainBlock)
    return listBlocks

