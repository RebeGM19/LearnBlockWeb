from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def init():
    return render_template('index.html')


@app.route("/result", methods=['POST'])
def get_blocks():
    if request.method == 'POST':
        blocks = request.get_json()
        blocksList = format_blocks(blocks)
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


if __name__ == '__main__':
    app.run(debug=False)
