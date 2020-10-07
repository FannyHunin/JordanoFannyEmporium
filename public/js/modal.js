let myModal = document.getElementById("myModal");
let myModalInscr = document.getElementById("myModalInscr");
let connexionBtn = document.querySelector("button");
let closeBtn = document.querySelectorAll("button")[1];
let inscrireBtn = document.querySelectorAll("button")[2];
let inscrireBtn2 = document.querySelectorAll("button")[3];

connexionBtn.onclick = function () {
    myModal.style.display = "block";
}
inscrireBtn.onclick = function () {
    myModalInscr.style.display = "block"
}
closeBtn.onclick = function () {
    myModal.style.display = "none";
}
inscrireBtn2.onclick = function () {
    myModalInscr.style.display = "none"
}
window.onclick = function(e) {
    if (e.target == myModal || e.target == myModalInscr) {
      myModal.style.display = "none";
      myModalInscr.style.display = "none";
    }
  }