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
    var robot;
    var result;
    if (window.sessionStorage) {
        var xml = LearnBlock.Xml.workspaceToDom(Code.workspace);
        var text = LearnBlock.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
    try {
        loadBlocks = window.sessionStorage.loadOnceBlocks;
        vars = Code.workspace.getAllVariables();
        var element = document.getElementById("robotMenu");
        var i = element.selectedIndex;
        robot = element.options[i].text;
        result = robot + '\n' + getVarsNames(vars) + '\n' + loadBlocks;
    } catch (e) {
        loadBlocks = null;
        vars = null;
        robot = null;
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
                document.getElementById("resultCode2").innerHTML = "";
                document.getElementById("resultCode2").setAttribute("style", "border-style: hidden; box-shadow: 0 0 0px rgba(000, 000, 000, 0);")
                if (codes[1] != "") {
                    document.getElementById("resultCode").innerHTML = MSG['codeGenerated'];
                    document.getElementById("resultpython").value = "\n" + codes[1];
                    document.getElementById("resultCode").setAttribute("style", "border-style: inset; border-color: rgba(0, 204, 0, 0.8); background-color: rgba(230, 255, 230, 0.2); box-shadow: inset 0 0 3px rgba(0, 77, 0, 0.5);")
                } else {
                    document.getElementById("resultCode").innerHTML = MSG['codePyNotGenerated'];
                    document.getElementById("resultCode").setAttribute("style", "border-style: inset; border-color: rgba(153, 0, 0, 0.8); background-color: rgba(255, 230, 230, 0.2); box-shadow: inset 0 0 3px rgba(77, 0, 0, 0.5);")
                    document.getElementById("resultCode2").innerHTML = "";
                    document.getElementById("resultCode2").setAttribute("style", "border-style: hidden; box-shadow: 0 0 0px rgba(000, 000, 000, 0);")
                    document.getElementById("resultpython").value = "";
                }
            } else {
                document.getElementById("resultCode").innerHTML = MSG['codeBTNotGenerated'];
                document.getElementById("resultCode").setAttribute("style", "border-style: inset; border-color: rgba(153, 0, 0, 0.8); background-color: rgba(255, 230, 230, 0.2); box-shadow: inset 0 0 3px rgba(77, 0, 0, 0.5);")
                document.getElementById("resultCode2").innerHTML = "";
                document.getElementById("resultCode2").setAttribute("style", "border-style: hidden; box-shadow: 0 0 0px rgba(000, 000, 000, 0);")
                document.getElementById("resultblocktext").value = "";
                document.getElementById("resultpython").value = "";
            }
        }
    });
}

//Loads the Block-Text code to generate Python code
function executeBT2Py() {
    var robot;
    var result;
    try {
        var element = document.getElementById("robotMenu");
        var i = element.selectedIndex;
        robot = element.options[i].text;
        result = robot + '\n' + document.getElementById("resultblocktext").value;
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
                document.getElementById("resultCode2").innerHTML = MSG['codeGenerated'];
                document.getElementById("resultpython").value = data;
                document.getElementById("resultCode2").setAttribute("style", "border-style: inset; border-color: rgba(0, 204, 0, 0.8); background-color: rgba(230, 255, 230, 0.2); box-shadow: inset 0 0 3px rgba(0, 77, 0, 0.5);")
            } else {
                document.getElementById("resultpython").value = "";
                document.getElementById("resultCode2").innerHTML = MSG['codePyNotGenerated'];
                document.getElementById("resultCode2").setAttribute("style", "border-style: inset; border-color: rgba(153, 0, 0, 0.8); background-color: rgba(255, 230, 230, 0.2); box-shadow: inset 0 0 3px rgba(77, 0, 0, 0.5);")
            }
        }
    });
}

//Copies the Block-Text code
function copyBT() {
    var copyText = document.getElementById("resultblocktext");
    copyText.select();
    document.execCommand("copy");
}

//Copies the Python code
function copyPython() {
    var copyText = document.getElementById("resultpython");
    copyText.select();
    document.execCommand("copy");
}
