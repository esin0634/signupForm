

const firstname = document.querySelector("#name")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")

let inputName = "";
let inputLastName = "";
let inputEmail = "";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailValid ; 
let inputPassword = "";

firstname.addEventListener("input", function(e){
    inputName = firstname.value
    console.log(inputName)
})
lastname.addEventListener("input", function(e){
    inputLastName = lastname.value
    console.log(inputLastName)
})

email.addEventListener("input",function(e){
    inputEmail = e.target.value
    if(emailRegex.test(inputEmail)){
        emailValid = true
    }else{
        emailValid = false
    }
})

password.addEventListener("input", function(e){
    inputPassword = password.value
    console.log("password:" + inputPassword)
})



submit.addEventListener("click",function(e){
    e.preventDefault();
    if(inputName === "" ){
        alert("you should enter a name")
    }else if(inputLastName == "" ){
            alert("you should enter a last name")
    }else if(inputEmail == ""){
            alert("you should enter a mail")
    }else if(emailValid == false){
        alert("please enter a valid email")
    }else if(inputPassword == ""){
        alert("you should enter a password")
    }else if(inputPassword.length < 8 ){
        alert("please enter at lest 8 char for password")
    }else{
        alert("form submitted")
        firstname.value = "";
        lastname.value = "";
        email.value = "";
        password.value = "";

    }
})
