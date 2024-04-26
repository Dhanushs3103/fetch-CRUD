let form = document.querySelector("form");
let userName = document.querySelector("#username");
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");
let passwordConfirmation = document.querySelector("#confirmPassword");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
    e.preventDefault(); 
    if(userName.value && userEmail.value && userPassword.value && passwordConfirmation.value) {
        if(userPassword.value === passwordConfirmation.value) {
           let userData = await fetch ("http://localhost:3000/users",{
               method: "POST",
               headers: {
                   "Content-Type": "application/json"
               },
               body: JSON.stringify({
                   name: userName.value,
                   email: userEmail.value,
                   password: userPassword.value
               })
           })
           console.log(userData);
        }else {
            alert("Password and confirm password should be same");
        }
    }else {
        alert("Please fill all the fields");
    }  
}