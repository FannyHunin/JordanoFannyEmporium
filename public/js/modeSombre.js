let divModeSombre = document.getElementsByClassName("li-sectionHeaderLast")[0];
let myBody = document.querySelector("body");

divModeSombre.addEventListener("click", () => {
    myBody.classList.toggle("classModeSombre");
})