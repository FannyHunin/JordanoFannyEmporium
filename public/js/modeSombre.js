let divModeSombre = document.getElementsByClassName("li-sectionHeaderLast")[0];
let myBody = document.querySelector("body");
let header = document.getElementById("navBar");
let divSct3 = document.getElementsByClassName("divContainer-section3")[0]
let section5 = document.getElementById("section5")

divModeSombre.addEventListener("click", () => {
    myBody.classList.toggle("classModeSombre");
    header.classList.toggle("classModeSombre");
    divSct3.classList.toggle("classModeSombre");
    section5.classList.toggle("classModeSombre");
})