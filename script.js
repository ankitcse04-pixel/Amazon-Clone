alert("Welcome to Ankit Amazon Clone: ! ");

let cartCount = localStorage.getItem("cartCount") || 0;
cartCount = parseInt(cartCount);

const cart = document.querySelector(".nav-cart");

// update cart UI
function updateCart() {
    cart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
}
updateCart();


document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();

        cartCount++;
        localStorage.setItem("cartCount", cartCount);

        updateCart();
        showToast("Item added to cart 🛒");
    });
});


const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();

        box.style.display = title.includes(value) ? "block" : "none";
    });
});


document.querySelectorAll(".see-more").forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();

        let category = link.parentElement.querySelector("h2").innerText;
        showToast(`Opening ${category} section 🚀`);
    });
});


document.querySelector(".foot-panal1").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.querySelector(".nav-signin").addEventListener("click", () => {
    showToast("Redirecting to Login Page...");
});

document.querySelector(".nav-return").addEventListener("click", () => {
    showToast("Opening your Orders...");
});

document.querySelector(".nav-cart").addEventListener("click", () => {
    showToast(`You have ${cartCount} items in cart`);
});


document.querySelectorAll(".panal-ops p").forEach(item => {
    item.addEventListener("click", () => {
        showToast(`Showing ${item.innerText}`);
    });
});


document.querySelector(".hero-msg").addEventListener("click", () => {
    showToast("Redirecting to Amazon India 🌍");
});


function showToast(message) {
    let toast = document.createElement("div");
    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#232f3e";
    toast.style.color = "white";
    toast.style.padding = "10px 15px";
    toast.style.borderRadius = "5px";
    toast.style.zIndex = "1000";
    toast.style.fontSize = "14px";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}
