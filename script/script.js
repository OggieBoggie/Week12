const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton); #checks if code is working 

function clickHandler ()
{
    alert("You clicked me!");
    // clickMeButton.removeEventListener('click', clickHandler);
}

clickMeButton.addEventListener('click', clickHandler, {once:true});

function pinkbackground (color)
{
    // document.body.style.background = color
    document.body.classList.add("pink")
}

clickMeButton.addEventListener('click', pinkbackground)
// clickMeButton.addEventListener('click', function() {pinkbackground('pink')});

