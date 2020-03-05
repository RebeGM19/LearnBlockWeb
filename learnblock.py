from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
from parser import searchName, createBlock, convert
from learnbot_dsl.learnbotCode.LearnBlock import toLBotPy #, parserOtherBlocks
app = Flask(__name__)

@app.route("/")
def init():
    # Loads blocks from json definition in json files
    control = loadBlocks("blocks/control.json")
    operators = loadBlocks("blocks/operators.json")
    values = loadBlocks("blocks/values.json")
    variables = loadBlocks("blocks/variables.json")
    emotions = loadBlocks("blocks/emotions.json")
    speaker = loadBlocks("blocks/speaker.json")
    base = loadBlocks("blocks/base.json")
    motor = loadBlocks("blocks/motor.json")
    camera = loadBlocks("blocks/camera.json")
    distances = loadBlocks("blocks/distances.json")
    ground = loadBlocks("blocks/ground.json")

    return render_template('index.html', control=control, operators=operators, values=values, variables=variables, emotions=emotions, speaker=speaker, base=base, motor=motor, camera=camera, distances=distances, ground=ground)


# Loads a file
def loadBlocks(route):
    f = open(route, "r")
    if f.mode == 'r':
        result = f.read()
    return result

@app.route("/result", methods=['GET', 'POST'])
def getBlocks():
    if request.method == 'POST':
        blocks = request.get_json()
        blocksList = formatBlocks(blocks)
        print("------------------------------------------")
        preResult = convert(listToString(blocksList))
        result = toLBotPy(preResult, 1)
        print("------------------------------------------")
        #print(result)
        #print("------------------------------------------")
        blocktext = str(result)
        print(blocktext)
        return blocktext, 200
    else:
        return '', 200


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

def listToString(s):
    str1 = ""
    for ele in s:
        str1 += ele
    return str1


def prueba():
    textprueba = """


    when hay_alguien_triste = function.is_there_somebody_sad():
    	if 1 < time_hay_alguien_triste:
    		function.expressSadness()
    	end
    end

    when start:
    	function.look_up()
    	function.expressNeutral()
    end

    when hay_alguien_sorprendido = function.is_there_somebody_surprised():
    	if 1 < time_hay_alguien_sorprendido:
    		function.expressSurprise()
    	end
    end

    when hay_alguien_enfadado = function.is_there_somebody_angry():
    	if 1 < time_hay_alguien_enfadado:
    		function.expressAnger()
    	end
    end

    when hay_alguien_neutral = function.is_there_somebody_neutral():
    	if 1 < time_hay_alguien_neutral:
    		function.expressNeutral()
    	end
    end

    when hay_alguien_alegre = function.is_there_somebody_happy():
    	if 1 < time_hay_alguien_alegre:
    		function.expressJoy()
    	end
    end

    """
    try:
        print(textprueba)
        print("---------------Parser from string---------------\n\n")
        print(__parserFromString(textprueba))
        text = __generatePy(__parserFromString(textprueba))
        print("--------------Generate py----------------\n\n")
        print(text)
        text = cleanCode(_code=text)
        print("--------Clean code--------\n\n", text)
    except ParseException as pe:
        print(pe.line)
        print(' ' * (pe.col - 1) + '^')
        print(pe)


if __name__ == '__main__':
    app.run(debug=False)
