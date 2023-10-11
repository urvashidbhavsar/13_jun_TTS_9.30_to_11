// target class = header
// perform = window
$(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("headerFixed")
        } else {
            $("header").removeClass("headerFixed")
        }
    })
})