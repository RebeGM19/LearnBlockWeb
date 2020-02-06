function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function duplicateBlock(str) {
    var para = document.createElement("div");
    para.setAttribute('id', "dBlock" + str);
    para.setAttribute('draggable', "true");
    para.setAttribute('ondragstart', "drag(event)");
    para.innerHTML = "Bloque";
    document.getElementById("div2").appendChild(para);
}

$(function () {
    $('#myTab a:last').tab('show');
})

$('a[data-toggle="tab"]').on('shown', function (e) {
    e.target // activated tab
    e.relatedTarget // previous tab
})

