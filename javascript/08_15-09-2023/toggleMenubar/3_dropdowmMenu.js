// target => dispmenu
// task perform => innermenu

let inner = document.querySelector(".InnerMenu")
let disp = document.querySelector(".dispmenu")

inner.addEventListener("click", function () {
    disp.classList.toggle("dropdown")
})