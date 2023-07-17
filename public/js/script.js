//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Form to Google Sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbzyqOZYwY0JkiQZTBgHAH53arI7PRkOnSDgmTUkRY3PR3iPmMkmuzPNV9yVjOj-FHfNWQ/exec";
const form = document.forms["wpu-contact-form"];
const btnKirim = document.querySelector("#submit");
// const btnLoading = document.querySelector(".btn-loading");
// const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
e.preventDefault();
btnLoading.classList.toggle("d-none");
btnKirim.classList.toggle("d-none");
fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
    //btnLoading.classList.toggle("d-none");
    btnKirim.classList.toggle("d-none");
    //myAlert.classList.toggle("d-none");
    form.reset();
    console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});