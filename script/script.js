const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton); #checks if code is working 

function clickHandler ()
{
    alert("You clicked me!");
    clickMeButton.removeEventListener('click', clickHandler);
}

clickMeButton.addEventListener('click', clickHandler);

