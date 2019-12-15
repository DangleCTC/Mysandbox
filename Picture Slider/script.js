const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    container.animate([{ opacity: '.3' }, { opacity: '1'}], {duration:1000,fill:'forwards'});
    if(counter ===6){
        counter =-1;
    }
    counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
};

function prevSlide() {
    container.animate([{ opacity: '.3' }, { opacity: '1' }], { duration: 1000, fill: 'forwards' });
    if(counter ===0){
        counter = 7;
    }
    counter--;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
};