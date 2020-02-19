//Loads the blocks currently on the workspace
function execute() {
    var loadBlocks;
    if (window.sessionStorage) {
        var xml = LearnBlock.Xml.workspaceToDom(Code.workspace);
        var text = LearnBlock.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
    try {
        loadBlocks = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        loadBlocks = null;
    }
    splitArrayBlocks(loadBlocks);
}

//Formats the text that specifies the blocks on the workspace
function splitArrayBlocks(loadBlocks) {
    var result = loadBlocks.split(">");
    //Discards the first and the last element (xml definitions)
    for (var i = 1; i < result.length-1; i++) {
        if (result[i] != "") {
            result[i] = result[i] + ">";
            console.log(result[i]);
        }
    }
}
