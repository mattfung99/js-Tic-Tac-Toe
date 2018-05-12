var attachClass,
    counterForXO = 0,
    flexContainer,
    idTracker = [],
    numberOfBoxes = 9;

var trackerO = {
    oHorizontal123: 0,
    oHorizontal456: 0,
    oHorizontal789: 0,
    oVertical123: 0,
    oVertical456: 0,
    oyVertical789: 0,
    oDiagonal159: 0,
    oDiagonal357: 0,
};

var trackerX = {
    xHorizontal123: 0,
    xHorizontal456: 0,
    xHorizontal789: 0,
    xVertical123: 0,
    xVertical456: 0,
    xVertical789: 0,
    xDiagonal159: 0,
    xDiagonal357: 0,
};

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
    box.id = "box" + parseInt(idTracker.length+1);
    box.style = "background: beige; cursor: pointer; height: 150px; margin-bottom: 20px; outline: 0; text-align: center; width: 150px";
    box.addEventListener("click", function () {
        mouseClickCounter();
        console.log(box.id);
        switch (counterForXO) {
            case 1:
                document.getElementById(box.id).innerHTML = "X";
                document.getElementById(box.id).disabled = true;
                switch (box.id) {
                    case "box1":
                        trackerX.xHorizontal123++;
                        trackerX.xVertical123++;
                        trackerX.xDiagonal159++;
                        break;
                    case "box2":
                        trackerX.xHorizontal123++;
                        trackerX.xVertical123++;
                        break;
                    case "box3":
                        trackerX.xHorizontal123++;
                        trackerX.xVertical123++;
                        trackerX.xDiagonal357++;
                        break;
                    case "box4":
                        trackerX.xHorizontal456++;
                        trackerX.xVertical456++;
                        break;
                    case "box5":
                        trackerX.xHorizontal456++;
                        trackerX.xVertical456++;
                        trackerX.xDiagonal159++;
                        trackerX.xDiagonal357++;
                        break;
                    case "box6":
                        trackerX.xHorizontal456++;
                        trackerX.xVertical456++;
                        break;
                    case "box7":
                        trackerX.xHorizontal789++;
                        trackerX.xVertical789++;
                        trackerX.xDiagonal357++;
                        break;
                    case "box8":
                        trackerX.xHorizontal789++;
                        trackerX.xVertical789++;
                        break;
                    case "box9":
                        trackerX.xHorizontal789++;
                        trackerX.xVertical789++;
                        trackerX.xDiagonal159++;
                        break;
                }
                box.style.cursor = "default";
                break;

            case 2:
                document.getElementById(box.id).innerHTML = "O";
                document.getElementById(box.id).disabled = true;
                switch (box.id) {
                    case "box1":
                        trackerO.oHorizontal123++;
                        trackerO.oVertical123++;
                        trackerO.oDiagonal159++;
                        break;
                    case "box2":
                        trackerO.oHorizontal123++;
                        trackerO.oVertical123++;
                        break;
                    case "box3":
                        trackerO.oHorizontal123++;
                        trackerO.oVertical123++;
                        trackerO.oDiagonal357++;
                        break;
                    case "box4":
                        trackerO.oHorizontal456++;
                        trackerO.oVertical456++;
                        break;
                    case "box5":
                        trackerO.oHorizontal456++;
                        trackerO.oVertical456++;
                        trackerO.oDiagonal159++;
                        trackerO.oDiagonal357++;
                        break;
                    case "box6":
                        trackerO.oHorizontal456++;
                        trackerO.oVertical456++;
                        break;
                    case "box7":
                        trackerO.oHorizontal789++;
                        trackerO.oVertical789++;
                        trackerO.oDiagonal357++;
                        break;
                    case "box8":
                        trackerO.oHorizontal789++;
                        trackerO.oVertical789++;
                        break;
                    case "box9":
                        trackerO.oHorizontal789++;
                        trackerO.oVertical789++;
                        trackerO.oDiagonal159++;
                        break;
                }
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
    var counterDisplayWin = document.createElement("p");

    counterDisplayDiv.id = "div-container";
    document.getElementById("flex-container").appendChild(counterDisplayDiv);

    counterDisplayLine.id = "display-counter";
    counterDisplayLine.innerHTML = "0";
    document.getElementById("div-container").appendChild(counterDisplayLine);

    counterDisplayWin.id = "display-win";
    counterDisplayWin.style = "position: relative";
    counterDisplayWin.innerHTML = "N/A";
    document.getElementById("div-container").appendChild(counterDisplayWin);
}