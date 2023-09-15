// target class / element => .nav 
// perform class / element => .togglebtn
// for change icon => icon

let tbtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".nav");
let i = document.getElementById("icon")
tbtn.addEventListener("click", function () {
    nav.classList.toggle("navigation")

    if (nav.classList.contains("navigation") == true) {
        i.classList.remove("fa-bars-staggered")
        i.classList.add("fa-close")
    } else {
        i.classList.remove("fa-close")
        i.classList.add("fa-bars-staggered")
    }
})