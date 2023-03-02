const navLinks = document.querySelectorAll('.nav-link');
const title = document.getElementById("title")
const info = document.getElementById("info")
const userName = document.getElementById("userName")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const address = document.getElementById("address")
const telephone = document.getElementById("telephone")


userName.addEventListener("mouseover", function () { nameFunction("mi nombre es", "Nicolas") })
email.addEventListener("mouseover", function () { nameFunction("mi email es", "Nicolas123@hotmail.com") })
birthdate.addEventListener("mouseover", function () { nameFunction("mi fecha de nacimiento es", "11/09/1992") })
address.addEventListener("mouseover", function () { nameFunction("mi direccion es", "rafaela 1234") })
telephone.addEventListener("mouseover", function () { nameFunction("mi telefono es", "12345678") })






for (const link of navLinks) {
    link.addEventListener('click', clickHandler);
}


function clickHandler() {
    const href = this.getAttribute('href');
    const linkText = document.querySelector(href)
    linkText.classList.toggle('show');
}

function nameFunction(updateTitle, updateInfo) {
    title.textContent = updateTitle
    info.textContent = updateInfo
}

