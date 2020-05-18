//Gets the names of the user's variables
function getVarsNames(vars) {
    var i;
    var result = "";
    for (i = 0; i < vars.length; i++) {
        result = result + vars[i].name + ",";
    }
    return result;
}

//Returns both Block-Text and Python code, each of them in a different position inside an array
function getBothCodes(fullCode) {
    var array = fullCode.split("----------\n\n");
    return array;
}

//Loads the blocks currently on the workspace
function execute() {
    var loadBlocks;
    var vars;
    var result;
    if (window.sessionStorage) {
        var xml = LearnBlock.Xml.workspaceToDom(Code.workspace);
        var text = LearnBlock.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
    try {
        loadBlocks = window.sessionStorage.loadOnceBlocks;
        vars = Code.workspace.getAllVariables();
        result = getVarsNames(vars) + '\n' + loadBlocks;
    } catch (e) {
        loadBlocks = null;
        vars = null;
    }
    $.ajax({ //When blocks are loaded, the parser function is executed and the Block-Text code is returned
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/result",
        traditional: "true",
        data: JSON.stringify(result),
        dataType: "text",
        success: function (data) { //The code is shown in an html element
            codes = getBothCodes(data);
            if (codes[0] != "") {
                document.getElementById("resultblocktext").value = "\n" + codes[0];
                if (codes[1] != "") {
                    document.getElementById("resultCode").innerHTML = MSG['codeGenerated'] + " ";
                    document.getElementById("resultpython").value = "\n" + codes[1];
                    var x = document.createElement("IMG");
                    x.setAttribute("src", "./static/Styles/img/up-arrow.png"); //CAMBIAR
                    document.getElementById("resultCode").appendChild(x);
                    document.getElementById("resultCode").setAttribute("style", "border-color: rgba(0, 204, 0, 0.8); box-shadow: inset 0 0 5px rgba(0, 77, 0, 0.5);")
                } else {
                    document.getElementById("resultCode").innerHTML = MSG['codePyNotGenerated'] + " ";
                    var x = document.createElement("IMG");
                    x.setAttribute("src", "./static/Styles/img/down-arrow.png"); //CAMBIAR
                    document.getElementById("resultCode").appendChild(x);
                    document.getElementById("resultCode").setAttribute("style", "border-color: rgba(153, 0, 0, 0.8); box-shadow: inset 0 0 5px rgba(77, 0, 0, 0.5);")
                    document.getElementById("resultCode2").innerHTML = "";
                    document.getElementById("resultpython").value = "";
                }
            } else {
                document.getElementById("resultCode").innerHTML = MSG['codeBTNotGenerated'] + " ";
                var x = document.createElement("IMG");
                x.setAttribute("src", "./static/Styles/img/down-arrow.png"); //CAMBIAR
                document.getElementById("resultCode").appendChild(x);
                document.getElementById("resultCode").setAttribute("style", "border-color: rgba(153, 0, 0, 0.8); box-shadow: inset 0 0 5px rgba(77, 0, 0, 0.5);")
                document.getElementById("resultCode2").innerHTML = "";
                document.getElementById("resultblocktext").value = "";
                document.getElementById("resultpython").value = "";
            }
        }
    });
}

//Loads the Block-Text code to generate Python code
function executeBT2Py() {
    var result;
    try {
        result = document.getElementById("resultblocktext").value;
    } catch (e) {
        result = "";
    }
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/resultBT",
        traditional: "true",
        data: JSON.stringify(result),
        dataType: "text",
        success: function (data) { //The code is shown in an html element
            if (data != "") {
                document.getElementById("resultCode2").innerHTML = MSG['codeGenerated'] + " ";
                document.getElementById("resultpython").value = data;
                var x = document.createElement("IMG");
                x.setAttribute("src", "./static/Styles/img/up-arrow.png"); //CAMBIAR
                document.getElementById("resultCode2").appendChild(x);
                document.getElementById("resultCode2").setAttribute("style", "border-color: rgba(0, 204, 0, 0.8); box-shadow: inset 0 0 5px rgba(0, 77, 0, 0.5);")
            } else {
                document.getElementById("resultCode2").innerHTML = MSG['codePyNotGenerated'] + " ";
                var x = document.createElement("IMG");
                x.setAttribute("src", "./static/Styles/img/down-arrow.png"); //CAMBIAR
                document.getElementById("resultCode2").appendChild(x);
                document.getElementById("resultCode2").setAttribute("style", "border-color: rgba(153, 0, 0, 0.8); box-shadow: inset 0 0 5px rgba(77, 0, 0, 0.5);")
            }
        }
    });
}
