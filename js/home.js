let bulletBox = document.getElementById("bulletBox")
let whiteModBtn = document.getElementById("whiteBtn")
let darkModBtn = document.getElementById("darkBtn")
let spinnerBtn = document.getElementById("spinner")
let allLis = document.querySelectorAll("ul li")
let logOutBtn = document.getElementById("logOutBtn")
let homeHeader = document.getElementById("homeHeader")
let imagOne = document.getElementById("moveOne")
let imagTwo = document.getElementById("moveTwo")
let allWelcomeImgs = document.querySelectorAll(".welcome-img")

logOutBtn.addEventListener("click",function(){

window.location.assign("../index.html")
localStorage.setItem("isloged","false")
localStorage.setItem("animated","false")
})


window.addEventListener("load",function(){
    welcomeUser()
if (JSON.parse(localStorage.getItem("animated")) === true) {
    allWelcomeImgs.forEach(e=>e.classList.add("active"))
}

})

function welcomeUser(){
if (localStorage.getItem("data") !== null) {
    let userData = JSON.parse(localStorage.getItem("data"))
     let headerText = document.textContent = `Welcome ${userData[userData.length - 1].name}`
      
  homeHeader.append(headerText)
}

}












spinnerBtn.addEventListener("click",e=>{
    bulletBox.classList.toggle("show")

})


if (localStorage.getItem("mode") !== null) {
    document.body.classList.add(localStorage.getItem("mode") )
    allLis.forEach(e=>e.classList.remove("active"))
    allLis.forEach(e=>{
    if (e.getAttribute("data-mode") === localStorage.getItem("mode")) {
        e.classList.add("active")
    }
    })

}else{
    document.body.classList.add("dark-theme" )

}

whiteModBtn.addEventListener("click",e=>{
document.body.classList.add("white-theme")
document.body.classList.remove("dark-theme")
allLis.forEach(e=>e.classList.remove("active"))
e.target.classList.add("active")
localStorage.setItem("mode",e.target.getAttribute("data-mode"))

})


darkModBtn.addEventListener("click",e=>{
    document.body.classList.add("dark-theme")
    document.body.classList.remove("white-theme")
    allLis.forEach(e=>e.classList.remove("active"))
    e.target.classList.add("active")
    localStorage.setItem("mode",e.target.getAttribute("data-mode"))
    })
