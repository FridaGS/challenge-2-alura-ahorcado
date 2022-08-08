/*
**Requisitos:**
- La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
- Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.

-----
*/
'use strict';
/*Palabras*/
let words = ["DEFENDER", "ACEITUNA", "HOLA"];
let wordLetters; 
let letters = [];
let lettersLi = [];
let lettersLiContent = [];
let incorrectLettersArray = [];
let incorrectLetterTry = [];
/*Main para insertar los renders */
let mainContainer = document.querySelector('main');

function renderNewWord(){
    clearMain();
    const container = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const word = document.createElement("input");
    const conditiosContainer = document.createElement("div");
    const conditionsImg = document.createElement("img");
    const conditionsP = document.createElement("p");
    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    
    container.classList.add("new-word-container");
    textContainer.classList.add("text-container");
    word.classList.add("text-input");
    conditiosContainer.classList.add("conditions-container");
    buttonsContainer.classList.add("buttons-container");
    saveButton.classList.add("saveButton");
    cancelButton.classList.add("cancelButton");
    saveButton.classList.add("blue-button");
    cancelButton.classList.add("white-button");

    word.setAttribute('type', "text");
    word.setAttribute('placeholder', "Ingrese una palabra");
    word.setAttribute('minlength', "0");
    word.setAttribute('maxlength', "8");
    conditionsImg.setAttribute('src', "./img/exclamation.png");
    conditionsImg.setAttribute('alt', "exclamation circle");

    saveButton.setAttribute('onclick', "addNewWord()");
    cancelButton.setAttribute('onclick', "renderMain()");

    conditionsP.innerHTML = "Máx. de 8 letras";
    saveButton.innerHTML = "Guardar y empezar";
    cancelButton.innerHTML = "Cancelar";

    mainContainer.appendChild(container);

    container.appendChild(textContainer);
    container.appendChild(conditiosContainer);
    container.appendChild(buttonsContainer);

    textContainer.appendChild(word);

    conditiosContainer.appendChild(conditionsImg);
    conditiosContainer.appendChild(conditionsP);

    buttonsContainer.appendChild(saveButton);
    buttonsContainer.appendChild(cancelButton);
}

function renderGame(){
    clearMain();
    clearArray(incorrectLettersArray);
    const container = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const gameContainer = document.createElement("div");
    const drawContainer = document.createElement("div");
    const draw = document.createElement("canvas");
    const wordContainer = document.createElement("div");
    const correctWord = document.createElement("div");
    const correctWordLetters = document.createElement("ul");
    const incorrectLetters = document.createElement("div");
    const incorrectTry = document.createElement("ul");
    const newGameButton = document.createElement("button");
    const giveUpButton = document.createElement("button");

    const conditiosContainer = document.createElement("div");
    const conditionsImg = document.createElement("img");
    const conditionsP = document.createElement("p");
    
    container.classList.add("main-game-container");
    gameContainer.classList.add("game-container");
    drawContainer.classList.add("draw-container");
    draw.classList.add("draw-canvas");
    conditiosContainer.classList.add("conditions-container");
    wordContainer.classList.add("word-container");
    correctWord.classList.add("correct-word-container");
    correctWordLetters.classList.add("correct-word");
    incorrectLetters.classList.add("incorrect-letters-container");
    incorrectTry.classList.add("incorrect-letters");
    buttonsContainer.classList.add("buttons-container");
    newGameButton.classList.add("newGameButton");
    giveUpButton.classList.add("giveUpButton");

    newGameButton.setAttribute('onclick', "renderMain()");
    giveUpButton.setAttribute('onclick', "loseAlert()");
    conditionsImg.setAttribute('src', "./img/exclamation.png");
    conditionsImg.setAttribute('alt', "exclamation circle");

    draw.setAttribute("height", "400");//////////////////////////////////////
    draw.setAttribute("width", "600");///////////////////////////////////////

    newGameButton.innerHTML = "Nuevo juego";
    giveUpButton.innerHTML = "Desistir";
    conditionsP.innerHTML = "SOLO LETRAS MAYÚSCULAS";

    mainContainer.appendChild(container);

    container.appendChild(gameContainer);
    container.appendChild(conditiosContainer);
    container.appendChild(buttonsContainer);
    
    gameContainer.appendChild(drawContainer);
    gameContainer.appendChild(wordContainer);

    drawContainer.appendChild(draw);
    
    conditiosContainer.appendChild(conditionsImg);
    conditiosContainer.appendChild(conditionsP);

    wordContainer.appendChild(correctWord);
    wordContainer.appendChild(incorrectLetters);

    correctWord.appendChild(correctWordLetters);

    incorrectLetters.appendChild(incorrectTry);

    buttonsContainer.appendChild(newGameButton);
    buttonsContainer.appendChild(giveUpButton);

    drawMan();
    selectWord();
}

function renderMain(){
    clearMain();
    const container = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const startButton = document.createElement("button");
    const newWordButton = document.createElement("button");

    
    container.classList.add("main-buttons-container");
    buttonsContainer.classList.add("buttons-container");
    startButton.classList.add("start-game");
    newWordButton.classList.add("new-word");

    startButton.setAttribute('onclick', "renderGame()");
    newWordButton.setAttribute('onclick', "renderNewWord()");

    startButton.innerHTML = "Nuevo juego";
    newWordButton.innerHTML = "Agregar nueva palabra";

    mainContainer.appendChild(container);
    container.appendChild(buttonsContainer);

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(newWordButton);
}

function clearMain(){
    mainContainer.innerHTML = '';
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function drawMan(){
    let screen = document.querySelector("canvas");
    let pen = screen.getContext("2d");
    
    pen.fillStyle = "lightgray";
    pen.fillRect(0,0,600,400);

    pen.fillStyle = "red";
    pen.fillRect(100,100,5,300);
    pen.fillRect(100,100,200,5);
    pen.fillRect(20,390,400,5);
    pen.fillRect(300,100,5,40);


/*
    pen.fillStyle = "blue";
    pen.beginPath();
    pen.arc(305,170,30,0,2*3.14);
    pen.fill();
    pen.fillStyle = "lightgray";
    pen.beginPath();
    pen.arc(305,170,25,0,2*3.14);
    pen.fill();

    pen.fillStyle = "blue";
    pen.fillRect(300,200,5,120);

    pen.lineWidth = 5;
    pen.strokeStyle = "blue";
    pen.beginPath();
    pen.moveTo(303, 220);
    pen.lineTo(340, 250);
    pen.stroke();

    pen.lineWidth = 5;
    pen.strokeStyle = "blue";
    pen.beginPath();
    pen.moveTo(303, 220);
    pen.lineTo(267, 250);
    pen.stroke();

    pen.lineWidth = 5;
    pen.strokeStyle = "blue";
    pen.beginPath();
    pen.moveTo(303, 318);
    pen.lineTo(330, 348);
    pen.stroke();

    pen.lineWidth = 5;
    pen.strokeStyle = "blue";
    pen.beginPath();
    pen.moveTo(303, 318);
    pen.lineTo(277, 348);
    pen.stroke();
*/
    
}

function selectWord(){
    
    let index = Math.floor(Math.random() * words.length+1)-1;
    wordLetters = words[index].split('');
    let wordUl = document.querySelector(".correct-word");
    console.log(wordLetters);
    for(let i = 0; i < wordLetters.length; i++){
        lettersLi[i] = document.createElement("li");
        letters[i] = document.createElement("input");
        letters[i].setAttribute('type', "text");
        letters[i].setAttribute('minlength', "0");
        letters[i].setAttribute('maxlength', "1");
        letters[i].setAttribute('onkeyup', "matchLetter(" + i + ")");

        wordUl.appendChild(lettersLi[i]);

        lettersLi[i].appendChild(letters[i]);
    }
}

function addNewWord(){
    let inputContainer = document.querySelector('input');
    words.push(inputContainer.value);
    renderMain();
}

function matchLetter(i){
    letters[i].value = letters[i].value.toUpperCase();
    let container = document.querySelector(".conditions-container");
    container.style.border = "none"
    if(verifyText(letters[i].value)){
        if(wordLetters[i] == letters[i].value){
            lettersLi[i].innerHTML = wordLetters[i];
            lettersLiContent[i] = wordLetters[i];
        }
        else{
            console.log('nope');
            wrongLetter(letters[i].value);
        }
    }
    if(wordLetters.join('') == lettersLiContent.join('')){
        winAlert();
    }
}

function verifyText(letter){
    let container = document.querySelector(".conditions-container");
    if((letter.charCodeAt(0) >= 65)  && (letter.charCodeAt(0) <= 90 )){
            return true
        }
    else{
        container.style.border = "1px solid red"
        return false;
    }
}

function wrongLetter(letter){
    let screen = document.querySelector("canvas");
    let pen = screen.getContext("2d");

    
    let incorrectWordLetters = incorrectLettersArray.join('');
    let incorrectLettersUl = document.querySelector(".incorrect-letters");
    if(incorrectWordLetters.includes(letter)){
        console.log("ya estaba aquí");
    }
    else{
        incorrectLettersArray.push(letter);
        incorrectLettersUl.innerHTML = '';
        for(let i = 0; i < incorrectLettersArray.length; i++){
            incorrectLetterTry[i] = document.createElement("li");
            incorrectLetterTry[i].innerHTML = incorrectLettersArray[i];
            incorrectLettersUl.appendChild(incorrectLetterTry[i]);

            switch (i){
                case 0:
                    pen.fillStyle = "blue";
                    pen.beginPath();
                    pen.arc(305,170,30,0,2*3.14);
                    pen.fill();
                    pen.fillStyle = "lightgray";
                    pen.beginPath();
                    pen.arc(305,170,25,0,2*3.14);
                    pen.fill();
                break;
                case 1:
                    pen.fillStyle = "blue";
                    pen.fillRect(300,200,5,120);
                break;
                case 2:
                    pen.lineWidth = 5;
                    pen.strokeStyle = "blue";
                    pen.beginPath();
                    pen.moveTo(303, 220);
                    pen.lineTo(340, 250);
                    pen.stroke();
                break;
                case 3:
                    pen.lineWidth = 5;
                    pen.strokeStyle = "blue";
                    pen.beginPath();
                    pen.moveTo(303, 220);
                    pen.lineTo(267, 250);
                    pen.stroke();
                break;
                case 4:
                    pen.lineWidth = 5;
                    pen.strokeStyle = "blue";
                    pen.beginPath();
                    pen.moveTo(303, 318);
                    pen.lineTo(277, 348);
                    pen.stroke();
                break;
                case 5:
                    pen.lineWidth = 5;
                    pen.strokeStyle = "blue";
                    pen.beginPath();
                    pen.moveTo(303, 318);
                    pen.lineTo(330, 348);
                    pen.stroke();
                    loseAlert();
                break;
                default:
                break;
            }
        }
    }
    console.log(incorrectLettersArray)
}

function winAlert(){
    let container = document.querySelector(".draw-container");
    const winnerP = document.createElement("p");
    container.innerHTML = '';
    winnerP.innerHTML = "FELICIDADES, GANASTE (:";

    container.append(winnerP);
}

function loseAlert(){
    let container = document.querySelector(".draw-container");
    const loserP = document.createElement("p");
    container.innerHTML = '';
    loserP.innerHTML = "JUEGO TERMINADO, PERDISTE. ):";

    container.append(loserP);
}

function clearArray(array){
    let aux;
    for(let i = 0; i < array.length; i++){
        aux = array.shift();
    }   
}