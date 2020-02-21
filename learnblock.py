from flask import Flask, render_template, request
from learnbot_dsl.learnbotCode.Parser import __parserFromString, __generatePy, cleanCode
app = Flask(__name__)

@app.route("/")
def init():
    return render_template('index.html')


@app.route("/result", methods=['POST'])
def get_blocks():
    if request.method == 'POST':
        blocks = request.get_json()
        blocksList = format_blocks(blocks)
        prueba()
    return '', 200

def format_blocks(blocks):
    blocksList = blocks.split(">")
    array = []
    for i in range(1, len(blocksList)-2):
        blocksList[i] = blocksList[i] + ">"
        array.append(blocksList[i])
    for block in array:
        print(block)
    return array

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
