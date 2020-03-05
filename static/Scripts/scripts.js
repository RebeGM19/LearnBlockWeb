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
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/result",
        traditional: "true",
        data: JSON.stringify(loadBlocks),
        dataType: "text",
        success: function(data) {
            //alert(data);
            document.getElementById("resultblocktext").innerHTML += data;
        }
    });
}


