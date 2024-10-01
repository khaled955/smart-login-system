let form = document.getElementById("loginForm")
let inputName = document.getElementById("userName")
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
const userList = []
let emailvalueToCheck;



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


//  validation value from inputs

let regName = /^[A-Z][A-Za-z0-9\s]{6,}$/
let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/


let allRegex = [regName,regexEmail ,regexPassword]

allInputs.forEach((input,index)=>{
    input.addEventListener("input",e=>{
        validation(allRegex[index] , input)

    })



})




allInputs.forEach((input,index)=>{
    input.addEventListener("blur",e=>{
        
        input.nextElementSibling.classList.add("d-none")
        input.nextElementSibling.classList.remove("d-block")
        input.classList.remove("is-invalid")

    })



})


allInputs.forEach(input=>{
    input.addEventListener("focus",function(){
        document.querySelector("#hiddenError").classList.add("d-none")
        document.querySelector("#hiddenError").classList.remove("d-block")

    })
})






loginBtn.addEventListener("click",e=>{
  
   
    


    if (Array.from(allInputs).every(el=>el.classList.contains("is-valid"))) {
        
        emailvalueToCheck = inputEmail.value.match(/\S/g).join("").toLowerCase()
        
         
      
             if ( checkStorageValidity()) {
           
                 document.querySelector("#hiddenError").textContent = "Email is Already Exist"
                 document.querySelector("#hiddenError").classList.remove("d-none")
                 formtValue()
            }else{
                collectData()
                
                 document.querySelector("#hiddenError").textContent = "Sucess Registeration"
                 document.querySelector("#hiddenError").classList.remove("d-none")
                 formtValue()


         }


       
    }else{
       document.querySelector("#hiddenError").textContent = "All Inputs are Required"
       document.querySelector("#hiddenError").classList.remove("d-none")
    }


})






function collectData(){
const userInfo = {
name:inputName.value.match(/\S/g).join("").toLowerCase(),
email:inputEmail.value.match(/\S/g).join("").toLowerCase(),
password:inputPassword.value.match(/\S/g).join("").toLowerCase(),
}

userList.push(userInfo)
localStorage.setItem("data",JSON.stringify(userList))

}




function checkStorageValidity(){

if (localStorage.getItem("data") !== null) {
    let dataStoredToLocalStorage = JSON.parse(localStorage.getItem("data"))

for (let i = 0; i < dataStoredToLocalStorage.length; i++) {
    if (dataStoredToLocalStorage[i].email === emailvalueToCheck) {
        return true
    }
    
}


}



}










function validation(regex , element){
if (regex.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    element.nextElementSibling.classList.add("d-none")
    document.querySelector("#hiddenError").classList.add("d-none")
    
}else{
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
    element.nextElementSibling.classList.remove("d-none")
   
}




}




function formtValue(){
allInputs.forEach(input=>{
    input.value = ""
    input.classList.remove("is-valid")
})




}




signUpBtn.addEventListener("click",e=>{
    window.location.assign("index.html")
})











