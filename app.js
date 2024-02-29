// register
let signupName =document.getElementById('username');
let signupEmail =document.getElementById('useremail');
let signupPass =document.getElementById('userpassword');

function signup(){
    if (signupName.value !=='' && signupEmail.value !=='' && signupPass.value !=='' ){
        localStorage.setItem('name',signupName.value);
        localStorage.setItem('mail',signupEmail.value);
        localStorage.setItem('password',signupPass.value);
    
        window.location.href = "index.html";
    
    }
    else{
        alert("Please Fill Details")
    }
}


// login

let loginEmail = document.getElementById('useremail');
let loginPass = document.getElementById('userpassword');

function login(){
    let storeMail = localStorage.getItem('mail');
    let storePass = localStorage.getItem('password')
    if(loginEmail.value == storeMail && loginPass.value == storePass){
         alert("Login Successfull");
        window.location.href = "dashboard.html"
    }
    else{
        alert("Please enter valid data")
    }


}

