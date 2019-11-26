const quotes = [
    {
        name:'Dalai Lama',
        quote:'If you think you are too small to make a difference, try sleeping with a mosquito.'
    },
    {
        name:'A.A. Milne',
        quote:'People say nothing is impossible, but I do nothing every day.'
    },
    {
        name:'Miles Kington',
        quote:'Knowledge is knowing tomato is a fruit; wisdom is not putting it in a fruit salad.'
    },
    {
        name:'Benjamin Franklin',
        quote:'Wine is constant proof that God loves us and loves to see us happy.'
    },
    {
        name:'Thomas Edison',
        quote:'Opportunity is missed by most people because it is dressed in overalls and looks like work.'
    },
    {
        name:'Steven Wright',
        quote:'You can\'t have everything. Where would you put it?'
    },
    {
        name:'Will Rogers',
        quote:'Even if you are on the right track, you’ll get run over if you just sit there.'
    },
    {
        name:'Robert Frost',
        quote:'By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.'
    },
    {
        name:'Ellen DeGeneres',
        quote:'Follow your passion, stay true to yourself, never follow someone else’s path unless you’re in the woods and you’re lost and you see a path then by all means you should follow that.'
    },
    {
        name:'Michael Scott',
        quote:'I am an early bird and a night owl… so I am wise and I have worms.'
    },
    {
        name:'Michael Scott',
        quote:'Dwight, you ignorant slut!'
    },
    {
        name:'Michael Scott',
        quote:'I’m not superstitious, but I am a little ‘stitious.'
    },
    {
        name:'Michael Scott',
        quote:'Presents are the best way to show someone how much you care. It\'s like this tangible thing that you can point to and say, "Hey, man, I love you this many dollars worth."'
    },
    {
        name:'Michael Scott',
        quote:'Now, you may look around and see two groups here. White collar, blue collar. But I don’t see it that way. And you know why not? Because I am collar-blind.'
    },
    {
        name:'Victoria Hong',
        quote:'you are defined by the effort you put into the solution, not how fast you get it done or how smart you are.'
    } 
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    // console.log(random)
    quoteAuthor.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
}
