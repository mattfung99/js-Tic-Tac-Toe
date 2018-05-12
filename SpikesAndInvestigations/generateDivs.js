var attachClass,
    flexContainer;
var counter = 0;
var idTracker = [];
var numberOfBoxes = 9;

flexContainer = document.getElementsByTagName("div")[0];
attachClass = document.createAttribute("class");
attachClass.value = "flex-container";
flexContainer.setAttributeNode(attachClass);

function createBoxes() {
    for(var i = 1; i <= numberOfBoxes; i++) {
        generateBoxes();
    }
    generateCounterDisplay();
}

function generateBoxes() {
    var box = document.createElement("div");

    box.id = "box" + idTracker.length;
    box.style = "background: beige; height: 150px; margin-bottom: 20px; width: 150px; text-align: center; width: 150px";
    box.addEventListener("click", function () {
        mouseClickCounter();
    });

    document.getElementById("flex-container").appendChild(box);
    idTracker.push(box);
}

function generateCounterDisplay() {
    var counterDisplayDiv = document.createElement("div");
    var counterDisplayLine = document.createElement("p");

    counterDisplayDiv.id = "div-container";
    document.getElementById("flex-container").appendChild(counterDisplayDiv);

    counterDisplayLine.id = "display-counter";
    counterDisplayLine.innerHTML = "0";
    document.getElementById("div-container").appendChild(counterDisplayLine);
}

function mouseClickCounter() {
    counter++;
    document.getElementById("display-counter").innerHTML = counter;
}