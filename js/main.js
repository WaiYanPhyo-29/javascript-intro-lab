const myHeading = document.getElementById("myHeading")

myHeading.innerHTML = "Wai"

const myLink = document.querySelector("nav ul li ")

myLink.setAttribute("class", "currentPage")

let colourButtons = document.querySelector(".colPicker");
console.dir(colourButtons); //

//for (let i = 0; i < colourButtons.length; i++) {
  //  colourButtons[i].style.backgroundColor = "green";
// }

document.getElementById("myTestBtn").addEventListener("click",function(ev){
    console.info(ev.target)
})

const redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){
    console.info("Red Button clicked")
    document.body.setAttribute("class", "redBack")

})

const greendBtn= document.querySelector(".green")
greendBtn.addEventListener("click", function(){
    console.info("Green Button clicked")
    document.body.setAttribute("class", "greenBack" )
})

const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function(){
    console.info("Blue Button clicked")
    document.body.setAttribute("class", "blueBack")
})



const defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click",function(){
    console.info("Reset Button clicked")
    document.body.removeAttribute("class")
})


////        document.querySelector(".red").addEventListener('click', function(ev){
////        document.body.setAttribute('class', "redBack");
///          })