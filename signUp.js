let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    handleSubmit(e);
});

async function handleSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // making network request
            try {
                let postData = await fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password })
                });
                let res = await postData.json();
                console.log(res);
                alert("SignUp Successfull");
                window.location.href = "login.html";
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            alert("Both the password and confirm Password should be the same");
        }
    } else {
        alert("Enter all the details");
    }
}
