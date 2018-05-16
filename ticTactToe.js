// ***** ------------------------ **** ------------------------ ***** //
                    // ***** GLOBAL VARIABLES ***** //
// ***** ------------------------ **** ------------------------ ***** //

var attachClassFC,
    boxesClicked = 0,
    counterForXO = 0,
    displayScore,
    flexContainer,
    forfeiter = "X",
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

var counterDisplayWin = document.createElement("p"),
    playerOne = document.createElement("p"),
    playerTwo = document.createElement("p"),
    draw = document.createElement("p"),
    playerOneScore = document.createElement("p"),
    playerTwoScore = document.createElement("p"),
    drawScore = document.createElement("p"),
    startGame = document.createElement("button"),
    forfeitGame = document.createElement("button"),
    resetGame = document.createElement("button");

var titleCanvas = document.getElementById("canvas-title"),
    ctxCanvasTitle = titleCanvas.getContext("2d");

var scorePlayer1 = 0,
    scorePlayer2 = 0,
    scoreDraw = 0;

// ***** ------------------------ **** ------------------------ ***** //
                    // *********** CODE *********** //
// ***** ------------------------ **** ------------------------ ***** //

flexContainer = document.getElementsByTagName("div")[5];
attachClassFC = document.createAttribute("class");
attachClassFC.value = "flex-container";
flexContainer.setAttributeNode(attachClassFC);

// ***** ------------------------ **** ------------------------ ***** //
                    // ****** Creating Boxes ****** //
// ***** ------------------------ **** ------------------------ ***** //

function createWebpage() {
    for (var i = 1; i <= numberOfBoxes; i++) {
        generateBoxes();
    }
    console.log(forfeiter);
    generateScoreboard();
    loopToDisableClick();
    stateLoad();
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ***** Box Functionality **** //
// ***** ------------------------ **** ------------------------ ***** //

function generateBoxes() {
    var box = document.createElement("button");
    box.id = "box" + parseInt(idTracker.length + 1);
    box.style = "background: #2c4266; color: brown; cursor: pointer; font-size: 50px; height: 150px; margin-bottom: 20px; outline: 0; text-align: center; width: 150px";
    box.addEventListener("click", function () {
        mouseClickCounter();
        switch (counterForXO) {
            case 1:
                document.getElementById(box.id).innerHTML = "X";
                document.getElementById(box.id).disabled = true;
                boxesClicked++;
                forfeiter = "O";
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
                forfeiter = "X";
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

// ***** ------------------------ **** ------------------------ ***** //
                    // *** Generating Scoreboard ** //
// ***** ------------------------ **** ------------------------ ***** //

function generateScoreboard() {
    counterDisplayWin.id = "display-win";
    counterDisplayWin.innerHTML = "N/A";
    counterDisplayWin.style.color = "black";
    document.getElementById("div-container-row-one").appendChild(counterDisplayWin);

    playerOne.id = "player-one";
    playerOne.innerHTML = "Player One";
    document.getElementById("div-container-row-two").appendChild(playerOne);

    playerTwo.id = "player-two";
    playerTwo.innerHTML = "Player Two";
    document.getElementById("div-container-row-two").appendChild(playerTwo);

    draw.id = "draw";
    draw.innerHTML = "Draw";
    document.getElementById("div-container-row-two").appendChild(draw);

    playerOneScore.id = "player-one-score";
    playerOneScore.innerHTML = parseInt(scorePlayer1);
    document.getElementById("div-container-row-three").appendChild(playerOneScore);

    playerTwoScore.id = "player-two-score";
    playerTwoScore.innerHTML = parseInt(scorePlayer2);
    document.getElementById("div-container-row-three").appendChild(playerTwoScore);

    drawScore.id = "draw-score";
    drawScore.innerHTML = parseInt(scoreDraw);
    document.getElementById("div-container-row-three").appendChild(drawScore);

    startGame.id = "start-game";
    startGame.innerHTML = "Start Game";
    startGame.addEventListener('click', optionStart);
    document.getElementById("div-container-row-four").appendChild(startGame);
    
    forfeitGame.id = "forfeit-game";
    forfeitGame.innerHTML = "Forfeit";
    forfeitGame.addEventListener('click', optionForfeit);
    document.getElementById("div-container-row-four").appendChild(forfeitGame);

    resetGame.id = "reset-game";
    resetGame.innerHTML = "Reset";
    resetGame.addEventListener('click', optionReset);
    document.getElementById("div-container-row-four").appendChild(resetGame);
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ****** Keeping Track ****** //
// ***** ------------------------ **** ------------------------ ***** //

function mouseClickCounter() {
    counterForXO++;
    // document.getElementById("display-counter").innerHTML = counterForXO;
}

// ***** ------------------------ **** ------------------------ ***** //
                    // *** Checking for Result *** //
// ***** ------------------------ **** ------------------------ ***** //

function loopToCheckStatus() {
    for (var i in trackerX) {
        if (trackerX[i] == 3) {
            document.getElementById("display-win").innerHTML = "Player 1 Wins";
            document.getElementById("display-win").style.color = "brown";
            scorePlayer1++;
            document.getElementById("player-one-score").innerHTML = scorePlayer1;
            loopToDisableClick();
            stateReset();
        }
    }

    for (var j in trackerO) {
        if (trackerO[j] == 3) {
            document.getElementById("display-win").innerHTML = "Player 2 Wins";
            document.getElementById("display-win").style.color = "brown";
            scorePlayer2++;
            document.getElementById("player-two-score").innerHTML = scorePlayer2;
            loopToDisableClick();
            stateReset();
        }
    }
    
    if (boxesClicked == 9 && document.getElementById("display-win").innerHTML == "N/A") {
        document.getElementById("display-win").innerHTML = "Draw";
        document.getElementById("display-win").style.color = "brown";
        scoreDraw++;
        document.getElementById("draw-score").innerHTML = scoreDraw;
        stateReset();
    }
}

// ***** ------------------------ **** ------------------------ ***** //
                    // * Disable Mouse Clicking * //
// ***** ------------------------ **** ------------------------ ***** //

function loopToDisableClick() {
    for (var k = 1; k <= idTracker.length; k++) {
        document.getElementById(String("box" + k)).disabled = true;
        document.getElementById(String("box" + k)).style.cursor = "default";
    }
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ** Enable Mouse Clicking * //
// ***** ------------------------ **** ------------------------ ***** //

function loopToEnableClick() {
    for (var m = 1; m <= idTracker.length; m++) {
        document.getElementById(String("box" + m)).disabled = false;
        document.getElementById(String("box" + m)).style.cursor = "pointer";
    }
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ***** DRAW CANVAS TEXT ***** //
// ***** ------------------------ **** ------------------------ ***** //

ctxCanvasTitle.font = "italic 70px Arial";
ctxCanvasTitle.fillStyle = "brown";
ctxCanvasTitle.textAlign = "center";
ctxCanvasTitle.fillText("Tic-Tac-Toe", titleCanvas.width / 2, titleCanvas.height / 1.2);

// ***** ------------------------ **** ------------------------ ***** //
                    // ****** Forfeit Button ****** //
// ***** ------------------------ **** ------------------------ ***** //

function optionForfeit() {
    if (forfeiter == "X") {
        scorePlayer2++;
        document.getElementById("player-two-score").innerHTML = scorePlayer2;
        loopToDisableClick();
        stateReset();   
    }

    else if (forfeiter == "O") {
        scorePlayer1++;
        document.getElementById("player-one-score").innerHTML = scorePlayer1;
        loopToDisableClick();
        stateReset();
    }
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ******* Reset Button ******* //
// ***** ------------------------ **** ------------------------ ***** //

function optionReset() {
    for (var l = 1; l <= idTracker.length; l++) {
        document.getElementById(String("box" + l)).innerHTML = "";
    }

    boxesClicked = 0,
    counterForXO = 0,
    forfeiter = "X";

    trackerO = [
        oHorizontal123 = 0,
        oHorizontal456 = 0,
        oHorizontal789 = 0,
        oVertical147 = 0,
        oVertical258 = 0,
        oVertical369 = 0,
        oDiagonal159 = 0,
        oDiagonal357 = 0,
    ];

    trackerX = [
        xHorizontal123 = 0,
        xHorizontal456 = 0,
        xHorizontal789 = 0,
        xVertical147 = 0,
        xVertical258 = 0,
        xVertical369 = 0,
        xDiagonal159 = 0,
        xDiagonal357 = 0,
    ];
    
    document.getElementById("reset-game").disabled = true;
    document.getElementById("reset-game").style.background = "#121b2b";
    document.getElementById("reset-game").style.color = "#492d27";
    document.getElementById("reset-game").style.cursor = "default";
    document.getElementById("start-game").disabled = false;
    document.getElementById("start-game").style.background = "#2c4266";
    document.getElementById("start-game").style.color = "brown";
    document.getElementById("start-game").style.cursor = "pointer";
}


// ***** ------------------------ **** ------------------------ ***** //
                    // ******* Start Button ******* //
// ***** ------------------------ **** ------------------------ ***** //

function optionStart() {
    loopToEnableClick();
    document.getElementById("forfeit-game").disabled = false;
    document.getElementById("forfeit-game").style.background = "#2c4266";
    document.getElementById("forfeit-game").style.color = "brown";
    document.getElementById("forfeit-game").style.cursor = "pointer";
    document.getElementById("start-game").disabled = true;
    document.getElementById("start-game").style.background = "#121b2b";
    document.getElementById("start-game").style.color = "#492d27";
    document.getElementById("start-game").style.cursor = "default";
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ******* State: Load ******** //
// ***** ------------------------ **** ------------------------ ***** //

function stateLoad() {
    document.getElementById("forfeit-game").disabled = true;
    document.getElementById("forfeit-game").style.background = "#121b2b";
    document.getElementById("forfeit-game").style.color = "#492d27";
    document.getElementById("forfeit-game").style.cursor = "default";
    document.getElementById("reset-game").disabled = true;
    document.getElementById("reset-game").style.background = "#121b2b";
    document.getElementById("reset-game").style.color = "#492d27";
    document.getElementById("reset-game").style.cursor = "default";
}

// ***** ------------------------ **** ------------------------ ***** //
                    // ******* State: Reset ******* //
// ***** ------------------------ **** ------------------------ ***** //

function stateReset() {
    document.getElementById("reset-game").disabled = false;
    document.getElementById("reset-game").style.background = "#2c4266";
    document.getElementById("reset-game").style.color = "brown";
    document.getElementById("reset-game").style.cursor = "pointer";
    document.getElementById("forfeit-game").disabled = true;
    document.getElementById("forfeit-game").style.background = "#121b2b";
    document.getElementById("forfeit-game").style.color = "#492d27";
    document.getElementById("forfeit-game").style.cursor = "default";
}