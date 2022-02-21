const divSquares = document.querySelector('.container');
const eraserButton = document.getElementById('eraser');
const blackButton = document.getElementById('black');
const grayButton = document.getElementById('gray');
const rgbButton = document.getElementById('RGB');
const resetButton = document.getElementById('reset');
const resizeButton = document.getElementById('resize');
const userInput = prompt("Choose a number between 2 and 100")

function makeGrid(userInput, userInput) {
    if (userInput < 2 || userInput > 100) {
        alert(`${userInput} is not a number between 2 and 100. Here's a 16x16 grid instead.`)
        userInput = 16;
    }
    for (let i = 0; i < (userInput * userInput); i++) {
        const squares = document.createElement('div')
        squares.style.background = "white";
        divSquares.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        divSquares.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
        divSquares.appendChild(squares).classList.add('squares');
    }
}

makeGrid(userInput,userInput);

function blackColor() {
    const squares = divSquares.querySelectorAll('.squares');
    blackButton.addEventListener('click', () => {
        squares.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "black";
        }))
    });
}

blackColor();

function grayColor() {
    const squares = divSquares.querySelectorAll('.squares');
    grayButton.addEventListener('click', () => {
        squares.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "gray";
        }))
    });
}

grayColor();

function rgbColor() {
    const squares = divSquares.querySelectorAll('.squares');
    rgbButton.addEventListener('click', () => {
        squares.forEach(box => box.addEventListener('mouseover', () => {
            const randomRed = Math.random() * 255;
            const randomGreen = Math.random() * 255;
            const randomBlue = Math.random() * 255;
            box.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        }))
    });
}

rgbColor();

function eraser() {
    const squares = divSquares.querySelectorAll('.squares');
    eraserButton.addEventListener('click', () => {
        squares.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'white';
        }))
    });
}

eraser();

function resetColor() {
    const squares = divSquares.querySelectorAll('.squares');
    resetButton.addEventListener('click', () => {
        squares.forEach(box => {
            box.style.background = 'white';
        });
    })
}

resetColor();

function reset() {
    const squares = divSquares.querySelectorAll('.squares');
    squares.forEach(box => box.remove());
}

function resize() {
    resizeButton.addEventListener('click', () => {
        newUserInput = prompt('What size would you like the new grid to be?')

        if (newUserInput == null) {
            return;
        } else if (newUserInput < 2 || newUserInput > 100) {
            alert(`${newUserInput} is not a number between 1 and 100.`)
        } else {
            reset()
            makeGrid(newUserInput, newUserInput);
            eraser();
            blackColor();
            grayColor();
            rgbColor();
            resetColor();
        }
    })
}

resize();