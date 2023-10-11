// target => dispmenu
// task perform => innermenu
$(function () {
    $(".InnerMenu").click(function () {
        $(".dispmenu").toggleClass("dropdown")
    })
})