// target class / element => .menubar 
// perform class / element => .togglebtn

let tbtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".menubar");
tbtn.addEventListener("click", () => {
    nav.classList.add("menubar-show")
})
let cbtn = document.querySelector(".cbtn");
cbtn.addEventListener("click", () => {
    nav.classList.remove("menubar-show")
})