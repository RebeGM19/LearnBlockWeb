function getVarsNames(vars){
    var i;
    var result = "";
    for(i=0; i<vars.length; i++){
        result = result + vars[i].name + ",";
    }
    return result;
}

function getBothCodes(fullCode){
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
        success: function(data) { //The code is shown in an html element
            codes = getBothCodes(data);
            document.getElementById("resultblocktext").innerHTML = codes[0];
            document.getElementById("resultpython").innerHTML = codes[1];
        }
    });
}


