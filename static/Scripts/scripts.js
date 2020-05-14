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
            if (codes[0] != ""){
                document.getElementById("resultblocktext").innerHTML = "\n" + codes[0];
                if (codes[1] != ""){
                    document.getElementById("resultCode").innerHTML = MSG['codeGenerated'];
                    document.getElementById("resultpython").innerHTML = "\n" + codes[1];
                }else{
                    document.getElementById("resultCode").innerHTML = MSG['codePyNotGenerated'];
                    document.getElementById("resultpython").innerHTML = "";
                }
            }else{
                document.getElementById("resultCode").innerHTML = MSG['codeBTNotGenerated'];
                document.getElementById("resultblocktext").innerHTML = "";
            }
        }
    });
}
