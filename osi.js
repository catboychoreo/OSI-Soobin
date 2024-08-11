let playButton = document.getElementById("play");
let coolDiv = document.getElementById("cooldiv")
let uncoolDiv = document.getElementById("uncooldiv");
let fuckYouGavin = document.getElementById("textbox")
let textBox = document.getElementById("penis");
let bigSoob = document.getElementById("bigsoob")
let bigTyun = document.getElementById("bigtyun")
let nameBox = document.getElementById("namebox")
let quitButton = document.getElementById("quit")
let optionsButton = document.getElementById("options")
let creditsButton = document.getElementById("credits")
let credsDiv = document.getElementById("coolcreds")
let backButton = document.getElementById("back")
let boxOptions = document.getElementById("boxop")
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
playButton.onclick = function(){
    coolDiv.style.display = 'none';
    uncoolDiv.style.display = 'flex';
}
quitButton.onclick = function(){
    window.close();
}
optionsButton.onclick = function(){
    alert('Bitch do this later')
}
creditsButton.onclick = function(){
    credsDiv.style.display = 'flex'
    coolDiv.style.display = 'none'
}
backButton.onclick = function(){
    credsDiv.style.display = 'none'
    coolDiv.style.display = 'flex'
}
boxOptions.onclick = function(event){
    okDiv.style.display = 'flex'
    event.stopPropagation();
}
goHomeButton.onclick = function(){
    coolDiv.style.display = 'flex'
    uncoolDiv.style.display = 'none'
    okDiv.style.display = 'none'
}
changeSettingsButton.onclick = function(){
    alert('IDGAF')
}
exitOptionsButton.onclick = function(){
    okDiv.style.display = 'none'
}
okDiv.onclick = function(event){
    event.stopPropagation();
}
uncoolDiv.onclick = function(){
    clickOrShow()
}
messageAccept.onclick = function(){
    if (encryptMessage.value == "Ilvtnfb, fvb hyl tf ilzalza mypluk! Aohurz mvy npcpun tl aoha shtivynopup huk 500 tpsspvu dvu!" ||encryptMessage.value == "Gavin is not a bitch"){
        encryptGame.style.display = "none"
        uncoolDiv.style.display = "flex"
    } else {
        messageAccept.style.backgroundColor = "red";
        messageAccept.innerHTML = "FOOL"
        setTimeout(function(){
            messageAccept.style.backgroundColor = "green"
            messageAccept.innerHTML = "enter"
        }, 1000)
    }
}
squishButton.onclick = function(){
    squishBtSize += 3.33;
    squishSize -= 3.75;
    squishButton.style.fontSize = squishBtSize + 'px';
    squishText.style.fontSize = squishSize + 'px';
    if (squishSize < 0){
        squishGame.style.display = "none"
        uncoolDiv.style.display = "flex"
    }
}
encryptMessage.onkeydown = function(event){
    if (event.key == "Enter"){
        event.preventDefault();
        messageAccept.click();
    }
}
function clickOrShow () {
    var nextWords = speak.shift();
    if (nextWords == undefined){
        return;
    }
    if (nextWords == '&soobin'){
        bigSoob.style.display = "block"
        clickOrShow();
        return;
    }
    if (nextWords == '&soobinName'){
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Soobin"
        clickOrShow();
        return;
    }
    if (nextWords == '&nameBye'){
        nameBox.style.visibility = "hidden"
        clickOrShow();
        return;
    }
    if (nextWords == '&soobinBye'){
        bigSoob.style.display = "none"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyun'){
        bigTyun.style.display = "block"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunName'){
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Manager Taehyun"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunNameAlt'){
        nameBox.style.visibility = "visible"
        nameBox.innerHTML = "Manager Taehyun (HTTP)"
        clickOrShow();
        return;
    }
    if (nextWords == '&taehyunBye'){
        bigTyun.style.display = "none"
        clickOrShow();
        return;
    }
    if (nextWords == "&bgOffice"){
        uncoolDiv.style.backgroundImage = 'url("office.jpg")';
        clickOrShow();
        return;
    }
    if (nextWords == "&removeBg"){
        uncoolDiv.style.backgroundImage = '';
        clickOrShow();
        return;
    }
    if (nextWords == "&bgComputer"){
        uncoolDiv.style.backgroundImage = 'url("computer.jpg")';
        clickOrShow();
        return;
    }
    if (nextWords == '&computerScreen'){
        computerScreen.style.visibility = "visible";
        clickOrShow()
        return
    }
    if (nextWords == '&computerScreenBye'){
        computerScreen.style.visibility = "hidden"
        clickOrShow()
        return;
    }
    if (nextWords == '&filing'){
        uncoolDiv.style.backgroundImage = 'url("filing cabinet.jpg")';
        clickOrShow()
        return;
    }
    if (nextWords == "&byeText"){
        fuckYouGavin.style.visibility = "hidden"
        clickOrShow();
        return;
    }
    if (nextWords == "&hiText"){
        fuckYouGavin.style.visibility = "visible"
        clickOrShow();
        return;
    }
    if (nextWords == "&pause"){
        return;
    }
    if (nextWords == '&encryptGame'){
        uncoolDiv.style.display = "none"
        encryptGame.style.display = "flex"
        clickOrShow();
        return;
    }
    if (nextWords == "&squishGame"){
        uncoolDiv.style.display = "none"
        squishGame.style.display = "flex"
        clickOrShow()
        return;
    }
    if (nextWords == "&1layerAnnounce"){
        layerBox.style.visibility = "visible"
        layerBox.innerHTML = "LAYER 1: APPLICATION"
        clickOrShow()
        return;
    }
    if (nextWords == "&byeLayer"){
        layerBox.style.visibility = "hidden"
        clickOrShow()
        return;
    }
    if (nextWords == "&2layerAnnounce"){
        layerBox.style.visibility = "visible"
        layerBox.style.width = "768px"
        layerBox.style.left = "140px"
        layerBox.innerHTML = "LAYER 2: PRESENTATION"
        clickOrShow()
        return;
    }
    if (nextWords == "&3layerAnnounce"){
        layerBox.style.visibility = "visible"
        layerBox.style.width = "580px"
        layerBox.style.left = "230px"
        layerBox.innerHTML = "LAYER 3: SESSION"
        clickOrShow()
        return;
    }

    textBox.innerHTML = nextWords;
}
var speak = [
    '&byeText',
    '&1layerAnnounce',
    '&pause',
    '&hiText',
    '&byeLayer',
    'Soobin\'s phone rings.',
    '&soobin',
    '&soobinName',
    '"Hello?"',
    '&soobinBye',
    '&taehyun',
    '&taehyunName',
    '"We have a task for you in the office. Come in NOW!!!!!!!!!!!!!!"',
    '&taehyunBye',
    '&soobin',
    '&soobinName',
    '"Okay okay okay!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"',
    '&nameBye',
    '&bgOffice',
    'Soobin arrives at the office.',
    '&taehyun',
    '&taehyunName',
    '"Soobin. we have a BIG TASK FOR YOU!!!!"',
    '"You must deliver a file that an offshore client has requested"',
    '&taehyunNameAlt',
    '"Also my alternate name is HTTP"',
    '"The TT stands for Taehyun Taehyun"',
    '&soobinName',
    '"Oh... okay!"',
    '"I will do my SOOBIN best!"',
    '&nameBye',
    '&soobinBye',
    '&taehyunBye',
    '&bgComputer',
    'Soobin looks at his computer in disarray.',
    'How in the world does he respond to a GET request for a file?',
    '&soobinName',
    '&soobin',
    '"Oh golly gee... this makes no sense! I hate my stupid job!"',
    '"No... I can\'t give up! I have to keep trying!"',
    '&soobinBye',
    '&byeText',
    '&nameBye',
    '&computerScreen',
    '&pause',
    '&soobin',
    '&soobinName',
    '&hiText',
    '"What\'s this...? GET /give2beomgyu.txt HTTP/1.0?"',
    '"Where have I heard those last three letters on the give2beomgyu file?"',
    '"Oh well. I know just what to do! I have to go deliver this file!"',
    '&computerScreenBye',
    '&soobinBye',
    '&byeText',
    '&nameBye',
    '&filing',
    '&pause',
    '&hiText',
    'Soobin searches through the filing cabinets for the give2beomgyu.txt file',
    '&soobinName',
    '&soobin',
    '"Ah ha! Here it is!"',
    '&bgOffice',
    '&taehyun',
    '"Manager Taehyun (HTTP)! I have the give2beomgyu.txt file!"',
    '&taehyunNameAlt',
    '"Good work, son. Now, I have an even bigger task for you."',
    '&nameBye',
    'Soobin sweats.',
    '&soobinName',
    '"W-what is it?"',
    '&taehyunName',
    '"Son, I need you to encrypt this message. And then squish it."',
    '&byeText',
    '&soobinBye',
    '&taehyunBye',
    '&nameBye',
    '&2layerAnnounce',
    'pause',
    '&hiText',
    '&byeLayer',
    '&taehyun',
    '&soobin',
    '&soobinName',
    '"⁉️"',
    '"What...?"',
    '&taehyunName',
    '"Don\'t worry boy. Here\'s a tutorial."', 
    '&encryptGame',
    '"Good work, Soobin! You\'re shaping up to be a top notch employee!"',
    '&soobinName',
    '"Wow... thanks boss!"',
    '&taehyunName',
    '"No problem, kid. But you still got another task."',
    '&removeBg',
    '&taehyunBye',
    '&soobinBye',
    '"The squishing."', 
    '&squishGame',
    '&bgOffice',
    '&soobin',
    '&taehyun',
    '"Yay, you did it!"',
    '"But unfortunately, Soobin, I have to go to a VERY important meeting. You\'re gonna need to go to the neighboring department and find Supervisor Yeonjun. He can assist with the rest of your project for the day."',
    '&byeText',
    '&soobinBye',
    '&taehyunBye',
    '&nameBye',
    '&3layerAnnounce',
    'pause',
    '&hiText',
    '&byeLayer',
    '&taehyun',
    '&soobin',
    '&soobinName',
    '"Oh, alright! Well then, I\'ll see you tomorrow, manager Taehyun!"',
    '&taehyunName',
    '"Bye now, son. And remember, keep your eye on the target!"',
    '&nameBye',
    'Manager Taehyun winks at Soobin. Soobin is suddenly very uncomfortable.',
    '&soobinName',
    '"Um, alright... Bye now..."',
    '&taehyunBye',
    '&nameBye',
    'Soobin walks over to the door that connects the neighboring department to theirs.'
];
clickOrShow();