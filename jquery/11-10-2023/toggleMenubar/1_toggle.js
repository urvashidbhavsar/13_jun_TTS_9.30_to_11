// target class / element => .nav 
// perform class / element => .togglebtn
// for change icon => icon
$(document).ready(function () {
    $i = $("#icon");
    $(".togglebtn").click(function () {
        $(".nav").toggleClass("navigation")

        // hasClass() = check class it is exist or not
        if ($(".nav").hasClass("navigation") == true) {
            $i.removeClass("fa-bars-staggered")
            $i.addClass("fa-close")
        } else {
            $i.removeClass("fa-close")
            $i.addClass("fa-bars-staggered")
        }
    })
})