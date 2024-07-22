const colorsArray = ["pink","purple","yellow","blue","red","green","black","orange"];
const butn = document.getElementById("butn");
const color = document.querySelector('.color');
butn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.innerHTML = colorsArray[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}