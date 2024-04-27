let form = document.getElementById("form");

form.addEventListener("submit",function(e) {
    handleLogin(e);
})

async function handleLogin(event) {
      event.preventDefault();
      
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      try {
       if(email && password) {
        let res = await fetch("http://localhost:3000/users");
        let data = await res.json();
        console.log(data);
        // looping over the data
        data.forEach((user,i)=>{
            if(email === user.email && password === user.password) {
                console.log("login succesfull");
                alert("Login succesfull");
                localStorage.setItem("user",JSON.stringify(user.name));
                window.location.href ="index.html";
            }
        })
        alert("user not found");
       }else {
        alert("Enter the credentials");
       }
      } catch (error) {
        console.log(error);
        
      }      
      email.value = "";
      password.value = "";
}