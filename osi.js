let playButton = document.getElementById("play");
let coolDiv = document.getElementById("cooldiv")
let uncoolDiv = document.getElementById("uncooldiv");
let fuckYouGavin = document.getElementById("textbox")
let textBox = document.getElementById("penis");
let bigSoob = document.getElementById("bigsoob")
let bigTyun = document.getElementById("bigtyun")
let bigYeon = document.getElementById("bigyeon")
let nameBox = document.getElementById("namebox")
let quitButton = document.getElementById("quit")
let optionsButton = document.getElementById("options")
let creditsButton = document.getElementById("credits")
let credsDiv = document.getElementById("coolcreds")
let backButton = document.getElementById("back")
let boxOptions = document.getElementById("boxop")
let skipButton = document.getElementById("skip")
let okDiv = document.getElementById("okdiv")
let goHomeButton = document.getElementById("gohome")
let changeSettingsButton = document.getElementById("changesettings")
let exitOptionsButton = document.getElementById("exitops")
let computerScreen = document.getElementById("computerscreen")
let encryptGame = document.getElementById("encryptg")
let encryptMessage = document.getElementById("newmessage")
let messageAccept = document.getElementById("accept")
let squishGame = document.getElementById("squishgame")
let squishText = document.getElementById("squishtext")
let squishSize = 75;
let squishBtSize = 30;
let squishButton = document.getElementById("sqbutton")
let layerBox = document.getElementById("layerbox")
let doorGame = document.getElementById("openthedoor")
let doorButton = document.getElementById("dooropener");
playButton.onclick = function () {
    coolDiv.style.display = 'none';
    uncoolDiv.style.display = 'flex';
}
quitButton.onclick = function () {
    window.close();
}
// menu screen options button
optionsButton.onclick = function () {
    alert('Bitch do this later')
}
creditsButton.onclick = function () {
    credsDiv.style.display = 'flex'
    coolDiv.style.display = 'none'
}
backButton.onclick = function () {
    credsDiv.style.display = 'none'
    coolDiv.style.display = 'flex'
}
// text box options button
boxOptions.onclick = function (event) {
    okDiv.style.display = 'flex'
    event.stopPropagation();
}
goHomeButton.onclick = function () {
    coolDiv.style.display = 'flex'
    uncoolDiv.style.display = 'none'
    okDiv.style.display = 'none'
}
changeSettingsButton.onclick = function () {
    alert('IDGAF')
}
exitOptionsButton.onclick = function () {
    okDiv.style.display = 'none'
}
okDiv.onclick = function (event) {
    event.stopPropagation();
}
uncoolDiv.onclick = function () {
    clickOrShow()
}
// skip feature !
var spaceDown = false;
window.onkeydown = function (event) {
    if (event.key == " ") {
        spaceDown = true;
    }
}
window.onkeyup = function (event) {
    if (event.key == " ") {
        spaceDown = false;
    }
}
setInterval(function () {
    if (spaceDown && uncoolDiv.style.display != "none") {
        clickOrShow();
    }
}, 100)
skipButton.onclick = function () {
    spaceDown = !spaceDown
}
// this is encrypt minigame
messageAccept.onclick = function () {
    if (encryptMessage.value == "Ilvtnfb, fvb hyl tf ilzalza mypluk! Aohurz mvy npcpun tl aoha shtivynopup huk 500 tpsspvu dvu!" || encryptMessage.value == "Gavin is not a bitch") {
        encryptGame.style.display = "none"
        uncoolDiv.style.display = "flex"
    } else {
        messageAccept.style.backgroundColor = "red";
        messageAccept.innerHTML = "FOOL"
        setTimeout(function () {
            messageAccept.style.backgroundColor = "green"
            messageAccept.innerHTML = "enter"
        }, 1000)
    }
}
encryptMessage.onkeydown = function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        messageAccept.click();
    }
}
// squish minigame
squishButton.onclick = function () {
    squishBtSize += 3.33;
    squishSize -= 3.75;
    squishButton.style.fontSize = squishBtSize + 'px';
    squishText.style.fontSize = squishSize + 'px';
    if (squishSize < 0) {
        squishGame.style.display = "none"
        uncoolDiv.style.display = "flex"
    }
}
doorButton.onclick = function () {
    doorGame.style.backgroundImage = 'url("open door.jpg")';
    if (doorGame.style.backgroundImage == 'url("open door.jpg")') {
        doorGame.style.display = "none"
        uncoolDiv.style.display = "flex"
    }
}
// kills uncooldiv
function goAwayUncoolDiv() {
    uncoolDiv.style.display = "none";
    spaceDown = false;
}
// makes all my fancy cool variables and stuff to make people show up or go away or make a background change or anything yes i know its ugly IDGAF ive been coding for like only a year and in that year its been about like maybe 24 hours combined pls be nice and gentle
function clickOrShow() {
    var nextWords = speak.shift();
    if (nextWords == undefined) {
        return;
    }
    if (nextWords == '&soobin') {
        bigSoob.style.display = "block"
        clickOrShow();
        return;
    }
    if (nextWords == '&soobinName') {
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Soobin"
        clickOrShow();
        return;
    }
    if (nextWords == '&nameBye') {
        nameBox.style.visibility = "hidden"
        clickOrShow();
        return;
    }
    if (nextWords == '&soobinBye') {
        bigSoob.style.display = "none"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyun') {
        bigTyun.style.display = "block"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunName') {
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Manager Taehyun"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunNameAlt') {
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Manager Taehyun (HTTP)"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunBye') {
        bigTyun.style.display = "none"
        clickOrShow();
        return;
    }
    if (nextWords == '&yeonjun') {
        bigYeon.style.display = "block"
        clickOrShow();
        return;
    }
    if (nextWords == '&yeonjunName') {
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Supervisor Yeonjun"
        clickOrShow();
        return;
    }
    if (nextWords == '&secretName') {
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "?"
        clickOrShow();
        return;
    }
    if (nextWords == '&yeonjunBye') {
        bigYeon.style.display = "none"
        clickOrShow();
        return;
    }
    if (nextWords == "&bgOffice") {
        uncoolDiv.style.backgroundImage = 'url("office.jpg")';
        clickOrShow();
        return;
    }
    if (nextWords == "&bgYjOffice") {
        uncoolDiv.style.backgroundImage = 'url("yjoffice.jpeg")';
        clickOrShow();
        return;
    }
    if (nextWords == "&bgClosedDoor") {
        uncoolDiv.style.backgroundImage = 'url("closed door.jpg")';
        clickOrShow()
        return;
    }
    if (nextWords == "&bgOpenDoor") {
        uncoolDiv.style.backgroundImage = 'url("open door.jpg")';
        clickOrShow()
        return;
    }
    if (nextWords == "&removeBg") {
        uncoolDiv.style.backgroundImage = '';
        clickOrShow();
        return;
    }
    if (nextWords == "&bgComputer") {
        uncoolDiv.style.backgroundImage = 'url("computer.jpg")';
        clickOrShow();
        return;
    }
    if (nextWords == '&computerScreen') {
        computerScreen.style.visibility = "visible";
        clickOrShow()
        return
    }
    if (nextWords == '&computerScreenBye') {
        computerScreen.style.visibility = "hidden"
        clickOrShow()
        return;
    }
    if (nextWords == '&filing') {
        uncoolDiv.style.backgroundImage = 'url("filing cabinet.jpg")';
        clickOrShow()
        return;
    }
    if (nextWords == "&byeText") {
        fuckYouGavin.style.visibility = "hidden"
        clickOrShow();
        return;
    }
    if (nextWords == "&hiText") {
        fuckYouGavin.style.visibility = "visible"
        clickOrShow();
        return;
    }
    if (nextWords == "&pause") {
        return;
    }
    if (nextWords == '&encryptGame') {
        goAwayUncoolDiv();
        encryptGame.style.display = "flex"
        clickOrShow();
        return;
    }
    if (nextWords == "&squishGame") {
        goAwayUncoolDiv();
        squishGame.style.display = "flex"
        clickOrShow()
        return;
    }
    if (nextWords == "&1layerAnnounce") {
        layerBox.style.visibility = "visible"
        layerBox.innerHTML = "LAYER 1: APPLICATION"
        clickOrShow()
        return;
    }
    if (nextWords == "&byeLayer") {
        layerBox.style.visibility = "hidden"
        clickOrShow()
        return;
    }
    if (nextWords == "&2layerAnnounce") {
        layerBox.style.visibility = "visible"
        layerBox.style.width = "768px"
        layerBox.style.left = "140px"
        layerBox.innerHTML = "LAYER 2: PRESENTATION"
        clickOrShow()
        return;
    }
    if (nextWords == "&3layerAnnounce") {
        layerBox.style.visibility = "visible"
        layerBox.style.width = "580px"
        layerBox.style.left = "230px"
        layerBox.innerHTML = "LAYER 3: SESSION"
        clickOrShow()
        return;
    }
    if (nextWords == "&4layerAnnounce") {
        layerBox.style.visibility = "visible"
        layerBox.style.width = "600px"
        layerBox.style.left = "230px"
        layerBox.innerHTML = "LAYER 4: NETWORK"
        clickOrShow()
        return;
    }
    if (nextWords == "&doorOpenGame") {
        goAwayUncoolDiv();
        doorGame.style.display = "flex"
        clickOrShow()
        return;
    }
    textBox.innerHTML = nextWords;
}
clickOrShow();