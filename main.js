let root = document.getElementById("root");

// function to fetch data
async function getData() {
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    console.log(data);
    displayData(data);
}

getData();

// function to display data
function displayData(products) {
    products.forEach((product) => {
        // card creation
        let card = document.createElement("div");
        card.className = "card";
        
        // image creation
        let img = document.createElement("img");
        img.src = product.image;
        
        // title creation
        let title = document.createElement("p");
        title.textContent =`Product Name: ${ product.title}`;
        
        // price creation
        let price = document.createElement("p");
        price.textContent =`Price: ₹ ${product.price}`;
        
        // appending
        card.append(img, title, price);
        root.append(card);
    });
}
    