//This is selecting all the elements that we will be
//working with.
const hexNumbers = [0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

//Adding event listener to the button. Type of event is click
//Once clicked, the function getHex will be called
hexBtn.addEventListener('click', getHex);

//Function getHex with empty parentheses bc no parameter
function getHex(){
    let hexCol = '#';

    //for loop to generate 6 numbers and letters from the array
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);

        //To test in console log
        //console.log(random)
        hexCol += hexNumbers[random];
        //console.log(hexCol);
    }

    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}
