var attachClass,
    counterForXO = 0,
    flexContainer,
    idTracker = [],
    numberOfBoxes = 9;

flexContainer = document.getElementsByTagName("div")[0];
attachClass = document.createAttribute("class");
attachClass.value = "flex-container";
flexContainer.setAttributeNode(attachClass);

function createBoxes() {
    for (var i = 1; i <= numberOfBoxes; i++) {
        generateBoxes();
    }
    generateCounterDisplay();
}

function generateBoxes() {
    var box = document.createElement("button");
    box.id = "box" + idTracker.length;
    box.style = "background: beige; cursor: pointer; height: 150px; margin-bottom: 20px; outline: 0; text-align: center; width: 150px";
    box.addEventListener("click", function () {
        mouseClickCounter();
        console.log(box.id);
        switch (counterForXO) {
            case 1:
                document.getElementById(box.id).innerHTML = "X";
                document.getElementById(box.id).disabled = true;
                box.style.cursor = "default";
                break;

            case 2:
                document.getElementById(box.id).innerHTML = "O";
                document.getElementById(box.id).disabled = true;
                box.style.cursor = "default";
                counterForXO = 0;
                break;
        }
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
    counterForXO++;
    document.getElementById("display-counter").innerHTML = counterForXO;
}