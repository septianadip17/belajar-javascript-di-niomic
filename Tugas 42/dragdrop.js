function dragStart(event){
    event.dataTransfer.setData("Text", event.target.id);

}

function dragging(event){
    document.getElementById("objectText").innerHTML = "Element sedang didrag";
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault;
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("objectText").innerHTML = "Element sudah didrop";
}