const nav = document.querySelector(".nav nav");
document.querySelector(".menu-btn").addEventListener("click", () => nav.classList.toggle("open"));

let cart = 0;
const count = document.getElementById("cartCount");
const toast = document.getElementById("toast");

document.querySelectorAll(".add").forEach(btn => {
  btn.addEventListener("click", () => {
    cart++;
    count.textContent = cart;
    toast.textContent = `${btn.dataset.product} added to bag.`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

document.getElementById("cartBtn").addEventListener("click", () => {
  toast.textContent = cart ? `Your bag has ${cart} item${cart === 1 ? "" : "s"}.` : "Your bag is empty.";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
});

document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks — you're on the Xenova list.";
  e.target.reset();
});
