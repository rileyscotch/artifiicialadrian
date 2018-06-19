const gifBox1 = document.querySelector('.gifBox1')
const gifBox2 = document.querySelector('.gifBox2')
const baseUrl = 'https://icanhazdadjoke.com';
const jokeText = document.querySelector('#jokeText');
const options = {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    }
const openingJoke = 'https://icanhazdadjoke.com/j/X8xAlq4E6Ed';
const gifRequest1 = 'http://api.giphy.com/v1/gifs/search?q=laugh&api_key=94nljuSXFmxmrFfM93bmBpsV3iwMMIrN'
const gifRequest2 = 'http://api.giphy.com/v1/gifs/search?q=eyeroll&api_key=94nljuSXFmxmrFfM93bmBpsV3iwMMIrN'

function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

//GIF Fetch and Popualtion
fetch(gifRequest1)
.then(resp => resp.json())
.then((gifArray) => {
    console.log(gifArray.data)
    return gifArray
})
.then((gifArray) => {
    if( gifArray.data ) {
        for (let i = 0; i < 10; i++) {
            let img = createNode('img')
            img.src = gifArray.data[i].images.original.url
            append(gifBox1, img)
        }
    }
})

fetch(gifRequest2)
    .then(resp => resp.json())
    .then((gifArray) => {
        console.log(gifArray.data)
        return gifArray
    })
    .then((gifArray) => {
        if (gifArray.data) {
            for (let i = 0; i < 10; i++) {
                let img = createNode('img')
                img.src = gifArray.data[i].images.original.url
                append(gifBox2, img)
            }
        }
    })

        
        

//Initial Joke Request by ID
fetch(openingJoke, options)
.then(resp => resp.json())
// .then((data) => console.log(data.joke))
.then((data) => {
    jokeText.textContent = data.joke
})

//Random joke functionality for button
const jokeAgain = () => fetch(baseUrl, options)
    .then(resp => resp.json())
    // .then(data => console.log(data.joke)
    .then(joke => jokeText.textContent = joke.joke)

//Button Attitude Functionality
let button = document.querySelectorAll(".newJoke")[0];
button.addEventListener('click', () => {
    (button.getAttribute("data-text-swap") == button.innerHTML); {
        button.innerHTML = button.getAttribute("data-text-swap");
    } 
});


