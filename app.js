const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-in-mode");
})