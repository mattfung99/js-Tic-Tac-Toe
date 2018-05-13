var attachClass,
    boxesClicked = 0,
    counterForXO = 0,
    flexContainer,
    idTracker = [],
    numberOfBoxes = 9;

var trackerO = [
    oHorizontal123 = 0,
    oHorizontal456 = 0,
    oHorizontal789 = 0,
    oVertical147 = 0,
    oVertical258 = 0,
    oVertical369 = 0,
    oDiagonal159 = 0,
    oDiagonal357 = 0,
];

var trackerX = [
    xHorizontal123 = 0,
    xHorizontal456 = 0,
    xHorizontal789 = 0,
    xVertical147 = 0,
    xVertical258 = 0,
    xVertical369 = 0,
    xDiagonal159 = 0,
    xDiagonal357 = 0,
];

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
                boxesClicked++;
                // console.log("Number of Boxes Clicked " + boxesClicked);
                switch (box.id) {
                    case "box1":
                        trackerX[0]++;
                        trackerX[3]++;
                        trackerX[6]++;
                        break;
                    case "box2":
                        trackerX[0]++;
                        trackerX[4]++;
                        break;
                    case "box3":
                        trackerX[0]++;
                        trackerX[5]++;
                        trackerX[7]++;
                        break;
                    case "box4":
                        trackerX[1]++;
                        trackerX[3]++;
                        break;
                    case "box5":
                        trackerX[1]++;
                        trackerX[4]++;
                        trackerX[6]++;
                        trackerX[7]++;
                        break;
                    case "box6":
                        trackerX[1]++;
                        trackerX[5]++;
                        break;
                    case "box7":
                        trackerX[2]++;
                        trackerX[3]++;
                        trackerX[7]++;
                        break;
                    case "box8":
                        trackerX[2]++;
                        trackerX[4]++;
                        break;
                    case "box9":
                        trackerX[2]++;
                        trackerX[5]++;
                        trackerX[6]++;
                        break;
                }
                loopToCheckStatus();
                box.style.cursor = "default";
                break;

            case 2:
                document.getElementById(box.id).innerHTML = "O";
                document.getElementById(box.id).disabled = true;
                boxesClicked++;
                // console.log("Number of Boxes Clicked " + boxesClicked);
                switch (box.id) {
                    case "box1":
                        trackerO[0]++;
                        trackerO[3]++;
                        trackerO[6]++;
                        break;
                    case "box2":
                        trackerO[0]++;
                        trackerO[4]++;
                        break;
                    case "box3":
                        trackerO[0]++;
                        trackerO[5]++;
                        trackerO[7]++;
                        break;
                    case "box4":
                        trackerO[1]++;
                        trackerO[3]++;
                        break;
                    case "box5":
                        trackerO[1]++;
                        trackerO[4]++;
                        trackerO[6]++;
                        trackerO[7]++;
                        break;
                    case "box6":
                        trackerO[1]++;
                        trackerO[5]++;
                        break;
                    case "box7":
                        trackerO[2]++;
                        trackerO[3]++;
                        trackerO[7]++;
                        break;
                    case "box8":
                        trackerO[2]++;
                        trackerO[4]++;
                        break;
                    case "box9":
                        trackerO[2]++;
                        trackerO[5]++;
                        trackerO[6]++;
                        break;
                } 
                loopToCheckStatus();
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

function mouseClickCounter() {
    counterForXO++;
    document.getElementById("display-counter").innerHTML = counterForXO;
}

function loopToCheckStatus() {
    for (var i in trackerX) {
        console.log(trackerX[i]);
        if (trackerX[i] == 3) {
            document.getElementById("display-win").innerHTML = "X Wins";
        }
    }
    for (var j in trackerO) {
        console.log(trackerO[j]);
        if (trackerO[j] == 3) {
            document.getElementById("display-win").innerHTML = "O Wins";
        }
    }
    console.log(trackerX);
    console.log(trackerO);
}
