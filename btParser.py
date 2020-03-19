from learnbot_dsl.learnbotCode.guiCreateBlock import *
from learnbot_dsl.learnbotCode.VisualBlock import toLBotPy
from parser import searchName, createBlock, convert

def parserBlockText(blocks):
    preResult = convert(blocks)
    #result = toLBotPy(preResult, 1)
    result = convertMainFunctions(preResult)
    return result




# De momento na
def convertUserFunctions(blocks):
    text = ""
    for b in [block for block in blocks if block[1]["TYPE"] is USERFUNCTION]:
        text += "def " + toLBotPy(b, 1)
        text += "\nend\n\n"
    return text

# FUNSIONAH
def convertMainFunctions(blocks):
    text = ""
    for b in [block for block in blocks if "main" == block[0]]:
        text += b[0] + ":\n"
        if b[1]["BOTTOMIN"] is not None:
            text += "\t" + toLBotPy(b[1]["BOTTOMIN"], 2)
        else:
            text += "pass"
        text += "\nend\n\n"
    return text
