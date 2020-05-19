from parser import createBlock, convert
from learnblockCode.VisualBlock import toLBotPy
from learnblockCode.Block import *

listVariables = []

# Gets the user variables definitions. Only variable declarations at the beginning of the code
def processVars(variables):
    global listVariables
    listVariables = variables.split(",")
    listVariables.pop()

# Gets the user variables and parses them to give the initial definition (var = None)
def convertVariables():
    text = ""
    if len(listVariables) > 0:
            for name in listVariables:
                text += name + " = None\n"
            text += "\n\n"
    return text

# Gets the user functions definitions and the blocks inside the main block, and parses them to Block-Text
def convertUserFunctionsAndMain(blocks):
    text = ""
    for b in [block for block in blocks if block[1]["TYPE"] is USERFUNCTION]:
        text += "def " + toLBotPy(b, 1)
        text += "\nend\n\n"
    for b in [block for block in blocks if "main" == block[0]]:
        text += b[0] + ":\n"
        if b[1]["BOTTOMIN"] is not None:
            text += "\t" + toLBotPy(b[1]["BOTTOMIN"], 2)
        else:
            text += "pass"
        text += "\nend\n\n"
    return text

# Returns the complete code in Block-Text according to the blocks in the workspace
def parserBlockText(blocks):
    result = ""
    result += convertVariables()
    result += convertUserFunctionsAndMain(convert(blocks))
    return result
