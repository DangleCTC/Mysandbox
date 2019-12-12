let counter = document.querySelector('.counter')
const incbutton = document.querySelector('#incbutton')
const decbutton = document.querySelector('#decbutton')

let count =0;


incbutton.addEventListener('click', increment);
decbutton.addEventListener('click', decrement);

function increment(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = 'rgb(255, 200, 61)';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:600,fill:'forwards'});
}

function decrement() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'crimson';
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 600, fill: 'forwards' });
};