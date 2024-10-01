let form = document.getElementById("loginForm")
let inputEmail = document.getElementById("email")
let inputPassword = document.getElementById("password")
let loginBtn = document.getElementById("logBtn")
let allInputs = document.querySelectorAll(".form-control")
let signUpBtn = document.getElementById("transSignBtn")
let bulletBox = document.getElementById("bulletBox")
let whiteModBtn = document.getElementById("whiteBtn")
let darkModBtn = document.getElementById("darkBtn")
let spinnerBtn = document.getElementById("spinner")
let allLis = document.querySelectorAll("ul li")
let errorP = document.getElementById("errorP")
let errorU = document.getElementById("errorU")
let hiddenPError = document.getElementById("hiddenError")
let emailValue;
let passValue

//  sinner box logic
spinnerBtn.addEventListener("click",e=>{
     bulletBox.classList.toggle("show")

})


form.addEventListener("submit",e=>{
    e.preventDefault()
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










loginBtn.addEventListener("click",e=>{
emailValue = inputEmail.value
passValue = inputPassword.value
validation()
formtValue()
})




allInputs.forEach(e=>{
    e.addEventListener("focus",function(){
        hiddenPError.classList.add("d-none")
    })
})




function validation(){
    if (emailValue === "" || passValue === "") {
        hiddenPError.innerText = " All Data Are Required"
        hiddenPError.classList.remove("d-none")
    }else
if (localStorage.getItem("data") === null ) {
    hiddenPError.innerText = " Please create an account first"
    hiddenPError.classList.remove("d-none")

}else{

    getDataFromStrorage()

}


}



function getDataFromStrorage(){
let dataStorage = JSON.parse(localStorage.getItem("data"))

for (let i = 0; i < dataStorage.length ; i++) {

   
    
if (dataStorage[i].email === emailValue.trim().toLowerCase() && dataStorage[i].password === passValue.trim().toLowerCase() ) {
   
window.location.assign("home.html")
localStorage.setItem("isloged","true")
localStorage.setItem("animated","true")
}else if(dataStorage[i].email.includes(emailValue.trim().toLowerCase()) === false){
    hiddenPError.innerText = " Email Not found and Need  to create an account"
    hiddenPError.classList.remove("d-none")
}else if(dataStorage[i].password !== passValue.trim().toLowerCase()){
    hiddenPError.innerText = " Password Not Correct"
    hiddenPError.classList.remove("d-none")
}


    
}




}






function formtValue(){
allInputs.forEach(input=>{
    input.value = ""
   
    
})




}




signUpBtn.addEventListener("click",e=>{
    window.location.assign("sinup.html")
})