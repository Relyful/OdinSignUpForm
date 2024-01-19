const password = document.querySelector("#pwd");
const cpassword = document.querySelector("#cpwd");

function checkPwd() {
    if(password.value == cpassword.value) {
        password.style.border = "1px solid rgb(97, 196, 230)";
        cpassword.style.border = "1px solid rgb(97, 196, 230)";
    }
    else {
        password.style.border = "solid 1px red";
        cpassword.style.border = "solid 1px red";
        console.log("xdd");
    }
}