from __future__ import print_function, absolute_import
from math import *
import pickle, os, json
from learnblockCode.Block import *

def toLBotPy(inst, ntab=1):
    text = inst[0]
    if inst[1]["TYPE"] is USERFUNCTION:
        text = inst[0] + "()"
    if inst[1]["TYPE"] is CONTROL:
        if inst[1]["VARIABLES"] is not None:
            text = inst[0] + "("
            for var in inst[1]["VARIABLES"]:
                text += var + ", "
            text = text[0:-2] + ""
            text += ")"
    if inst[1]["TYPE"] is FUNTION:
        text = "function." + inst[0] + "("
        if inst[1]["VARIABLES"] is not None:
            for var in inst[1]["VARIABLES"]:
                text += var + ", "
            text = text[0:-2] + ""
        text += ")"
    elif inst[1]["TYPE"] is VARIABLE:
        text = inst[0]
        if inst[1]["VARIABLES"] is not None:
            text += " = "
            for var in inst[1]["VARIABLES"]:
                text += var

    if inst[1]["RIGHT"] is not None:
        text += " " + toLBotPy(inst[1]["RIGHT"])
    if inst[1]["BOTTOMIN"] is not None:
        text += ":\n" + "\t" * ntab + toLBotPy(inst[1]["BOTTOMIN"], ntab + 1)
    if inst[0] in ["while", "while True"]:
        text += "\n" + "\t" * (ntab - 1) + "end"
    if inst[0] == "else" or (inst[0] in ["if", "elif"] and (inst[1]["BOTTOM"] is None or (
            inst[1]["BOTTOM"] is not None and inst[1]["BOTTOM"][0] not in ["elif", "else"]))):
        text += "\n" + "\t" * (ntab - 1) + "end"
    if inst[1]["BOTTOM"] is not None:
        text += "\n" + "\t" * (ntab - 1) + toLBotPy(inst[1]["BOTTOM"], ntab)
    return text
