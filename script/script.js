const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton); #checks if code is working 

function clickHandler() {
    alert("You clicked me!");
    // clickMeButton.removeEventListener('click', clickHandler);
}

clickMeButton.addEventListener('click', clickHandler, { once: true });

function pinkbackground(color) {
    // document.body.style.background = color
    document.body.classList.add("pink")
}

clickMeButton.addEventListener('click', pinkbackground)
// clickMeButton.addEventListener('click', function() {pinkbackground('pink')});

function changeText()
// USE FOR DARK AND LIGHT THEME
{
    if (clickMeButton.textContent === "Click me!") {
        clickMeButton.textContent = "Clicked"
    }
    else if (clickMeButton.textContent === "Clicked") {
        clickMeButton.textContent = "Click me!"
    }

}
clickMeButton.addEventListener("click", changeText)

function updateImage(event) {
    console.log(event)
    const image = document.querySelector('#shoppingCart')
    image.src = "images/263142.png";
    image.width = 100;
    image.height = 100;
    image.alt = "Shopping cart"
}

clickMeButton.addEventListener("click", updateImage)

const buttonContainer = document.querySelector(".button-container");

function changeBGGreen(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.classList.add("green")
    }
}

buttonContainer.addEventListener("mouseover", changeBGGreen)

function changeTextColor (e)
{
   if (e.target.textContent === 'red')
   {
        e.target.classList.add("red")
   }
   else if (e.target.textContent === "blue")
   {
        e.target.classList.add("blue")
   }
   else if (e.target.textContent === "white")
   {
        e.target.classList.add("white")
   }
   else if (e.target.textContent === "yellow")
   {
        e.target.classList.add("yellow")
   }
}

buttonContainer.addEventListener("click", changeTextColor)