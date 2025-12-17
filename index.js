// Cart counter
let cartCount = 0;
const cart = document.getElementById("cart-count");
const grid = document.getElementById("productGrid");

// ================== 40 Unique Products ==================
const products = [
{ name:"Classic Sneakers", price:"$49.99", img:"Classic Sneakers red.png" },
{ name:"Stylish Jacket", price:"$79.99", img:"a.png" },
{ name:"Trendy Backpack", price:"$39.99", img:"b.png" },
{ name:"Cool Sunglasses", price:"$29.99", img:"c.png" },
{ name:"Leather Boots", price:"$89.99", img:"d.png" },
{ name:"Casual Shirt", price:"$35.99", img:"y.png" },
{ name:"Elegant Dress", price:"$99.99", img:"f.png" },
{ name:"Sports Cap", price:"$19.99", img:"g.png" },
{ name:"Wrist Watch", price:"$59.99", img:"h.png" },
{ name:"Slim Jeans", price:"$45.99", img:"i.png" },
{ name:"Hoodie Sweatshirt", price:"$49.99", img:"j.png" },
{ name:"Winter Coat", price:"$119.99", img:"k.png" },
{ name:"Backpack Pro", price:"$69.99", img:"l.png" },
{ name:"Sunglasses XL", price:"$34.99", img:"y.png" },
{ name:"Casual Sneakers", price:"$39.99", img:"a.png" },
{ name:"Fashion Belt", price:"$24.99", img:"c.png" },
{ name:"Leather Wallet", price:"$29.99", img:"b.png" },
{ name:"Smart Watch", price:"$129.99", img:"i.png" },
{ name:"Summer Hat", price:"$21.99", img:"d.png" },
{ name:"Classic Shirt", price:"$35.99", img:"j.png" },
{ name:"Elegant Pants", price:"$59.99", img:"k.png" },
{ name:"Running Shoes", price:"$79.99", img:"l.png" },
{ name:"Leather Jacket", price:"$149.99", img:"h.png" },
{ name:"Casual Hoodie", price:"$44.99", img:"f.png" },
{ name:"Sports Shorts", price:"$29.99", img:"g.png" },
{ name:"Summer Dress", price:"$89.99", img:"h.png" },
{ name:"Winter Boots", price:"$99.99", img:"i.png" },
{ name:"Canvas Bag", price:"$39.99", img:"a.png" },
{ name:"Eyewear Pro", price:"$49.99", img:"y.png" },
{ name:"Fashion Scarf", price:"$19.99", img:"c.png" },
{ name:"Leather Gloves", price:"$29.99", img:"b.png" },
{ name:"Casual Sandals", price:"$34.99", img:"d.png" },
{ name:"Denim Jacket", price:"$79.99", img:"f.png" },
{ name:"Smart T-shirt", price:"$24.99", img:"b.png" },
{ name:"Elegant Skirt", price:"$49.99", img:"y.png" },
{ name:"Sport Socks", price:"$12.99", img:"d.png" },
{ name:"Leather Bag", price:"$89.99", img:"f.png" },
{ name:"Classic Cap", price:"$19.99", img:"y.png" },
{ name:"Fashion Necklace", price:"$29.99", img:"a.png" },
{ name:"Sleek Sunglasses", price:"$39.99", img:"h.png" }
];

// ================== Generate Product Cards ==================
products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;
    grid.appendChild(card);
});

// ================== Add to Cart ==================
function addToCart() {
    cartCount++;
    cart.textContent = cartCount;
    cart.style.transform = "scale(1.3)";
    setTimeout(()=>{cart.style.transform="scale(1)";},200);
}

// ================== Scroll to Products ==================
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

// ================== Contact Form ==================
document.querySelector(".contact form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});
