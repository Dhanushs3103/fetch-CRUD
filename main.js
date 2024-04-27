let root = document.getElementById("root");
let logoutBtn = document.getElementById("logout");
let username = document.getElementById("userName");
let totalPrice = document.getElementById("totalPrice");

logoutBtn.addEventListener("click",function(e) {
   logout(e)
})

// function to fetch data
async function getData() {
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    console.log(data);
    displayData(data);
}

getData();

// assiging name of the customer
username.textContent = getName();

// function to display data
function displayData(products) {
    products.forEach((product,i) => {
        // card creation
        let card = document.createElement("div");
        card.className = "card";
        
        // image creation
        let img = document.createElement("img");
        img.src = product.image;
        
        // title creation
        let title = document.createElement("p");
        title.textContent =`Product: ${product.title}`;
        
        // price creation
        let price = document.createElement("p");
        price.textContent =`Price: ₹ ${product.price}`;

        // Add to cart button
        let cartBtn = document.createElement("button");
        cartBtn.textContent = "Add To Cart";
        cartBtn.addEventListener("click",function() {
            addToCart(product,i);
        })
        cartBtn.id = "cartBtn";
        
        // appending to card
        card.append(img, title, price, cartBtn);
        
        // appending to root
        root.append(card);
    });
}

let customerName = getName();
console.log(customerName);

let customerCart = [];


async function addToCart(product,i) {
   try {
    customerCart.push(...product);
    let userData = await fetch("http://localhost:3000/allUsersCart",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({customerName:customerCart})
    })
   } catch (error) {
    console.log(error);
   }
}

function getName () {
    let name = JSON.parse(localStorage.getItem("user"));
    return name;
    console.log(name); 
}

function logout() {
    console.log("click")
    localStorage.removeItem("user");
    alert("loged out successfully")
    window.location.href ="login.html"
   
}
    