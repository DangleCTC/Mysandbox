const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

//This function will collect the values inputed into the text box
//Let content be the value of messageIn then set messageOut = content
function sendMsg(){
    let content = messageIn.value;
    //console.log(content);
    if(content === ''){
        alert('Please enter a message')
    }
    else{
    messageOut.innerHTML = content;
    //this will clear the message box once function is executed
    messageIn.value = '';
    }
}