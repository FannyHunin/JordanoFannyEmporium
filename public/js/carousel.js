//imgs
let row1 = document.getElementsByClassName("divRow-section5")[0];
let row2 = document.getElementsByClassName("divRow-section5")[1];
row2.classList.add("d-none");
let row3 = document.getElementsByClassName("divRow-section5")[2];
row3.classList.add("d-none");

//boutons
let btn1 = document.getElementsByClassName("btnRond")[0];
btn1.style.backgroundColor = "#dd4545"
let btn2 = document.getElementsByClassName("btnRond")[1];
let btn3 = document.getElementsByClassName("btnRond")[2];

//eventListeners
btn1.addEventListener("click", () => {
    row1.classList.remove("d-none");
    btn1.style.backgroundColor = "#dd4545";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";
    row2.classList.add("d-none")
    row3.classList.add("d-none")
})
btn2.addEventListener("click", () => {
    row2.classList.remove("d-none");
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "#dd4545";
    btn3.style.backgroundColor = "";
    row1.classList.add("d-none");
    row3.classList.add("d-none");
})
btn3.addEventListener("click", () => {
    row3.classList.remove("d-none");
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "#dd4545";
    row1.classList.add("d-none")
    row2.classList.add("d-none")
})