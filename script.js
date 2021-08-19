function login(){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if(user === "admin" && pwd === "secret"){
        alert("you have successfully signed in");
    }else{
        alert("invalid credentials");
    }
}

function changeColor(){
    document.getElementById("outer").style.backgroundColor = "red";
}

function inputData(){
    let textbox = document.getElementsByClassName("input");
    textbox[0].value = "admin";
    textbox[1].value = "secret";
}

let num = 5;
let num = 6;
console.log(num);