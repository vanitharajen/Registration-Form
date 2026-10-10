const nameinput = document.getElementById("getname");
var email = document.getElementById("getemail");
var password = document.getElementById("getpassword");
var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    let valid = true;
    if (nameinput.value.trim() === "") {
        nameinput.placeholder = "Name is required";
        nameinput.classList.add("border-red-500");
        nameinput.classList.add("error-placeholder");
        valid = false;
    }
    else if (!/^[A-Za-z ]+$/.test(nameinput.value.trim())) {
        nameinput.value = "";
        nameinput.placeholder = "Name must contain letters only";
        nameinput.classList.add("border-red-500");
        nameinput.classList.add("error-placeholder");
        valid = false;
    }
    else {
        nameinput.placeholder = "Enter your name";
        nameinput.classList.remove("border-red-500");
        nameinput.classList.remove("error-placeholder");
        valid = true;
    }

    if (email.value.trim() === "") {
        email.placeholder = "Email is required";
        email.classList.add("border-red-500");
        email.classList.add("error-placeholder");
        valid = false;
    }
    else if (!email.checkValidity()) {
        email.value = "";
        email.placeholder = "Enter valid email"
        email.classList.add("border-red-500");
        email.classList.add("error-placeholder");
        valid = false;
    }
    else {

        email.classList.remove("border-red-500");
        email.classList.remove("error-placeholder");
        valid = true;
    }
    if (password.value.trim() === "") {
        password.placeholder = "Password is required";
        password.classList.add("border-red-500");
        password.classList.add("error-placeholder");
        valid = false;
    }
    else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/.test(password.value)) {
        password.value = "";
        password.placeholder = "Use Letters, numbers & symbols(min 8)";
        password.classList.add("border-red-500");
        password.classList.add("error-placeholder");
        valid = false;
    }
    else {
        password.placeholder = "Enter your password"
        password.classList.remove("border-red-500");
        password.classList.remove("error-placeholder");
        valid = true;
    }
    var message = document.getElementById("Submitmessage");
    if (valid) {
        console.log("sumitted");
        let confirmation = confirm("Please verify your details before submitting");
        if (confirmation) {
            message.textContent = "Submitted Successfully";
            nameinput.value="";
            email.value="";
            password.value="";
        }
    }
   
})
const togglepassword=document.getElementById("togglepassword");
togglepassword.style.display="none";
//show eye
password.addEventListener("input",function(){
    if (password.value.length>0){
    togglepassword.style.display="flex";
    togglepassword.addEventListener("click", function(){
       password.type=password.type==="password"?"text":"password";
    })
     }

else {
    togglepassword.style.display="none";
}
});