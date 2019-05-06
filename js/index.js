$(function () {
    $("#index .sec1 ul.tit li").click(function () {
        $("#index .sec1 li").removeClass("active")
        $("#index .sec1 ul.tit li").eq($(this).index()).addClass("active")
        $("#index .sec1 ul.con li").eq($(this).index()).addClass("active")
    })
    $("#left-button").click(function () {
        $(".pager-next.icon-angle-right").click()
        changeClass()
    })
    setInterval('$(".pro .dd li").removeClass("active").eq($(".pointer li.active").index()).addClass("active")', 500)
    
    function changeClass() {
        $(".pro .dd li").removeClass("active").eq($(".pointer li.active").index()).addClass("active")
    }
    for (var i = 0; i < $(".pointer li").length-1; i++){
        $(".pro .dd").append("<li></li>")
    }
    $(".sec2 .advan li .advan-div").hover(
        function () {
        $(".sec2 .advan li .advan-div").removeClass("active")
        $(this).addClass('active')
        $(this).find("img").attr("src",$(this).find("img").attr("data-hover-src"))
        },
        function () {
            $(".sec2 .advan li .advan-div").removeClass("active")
            $(this).find("img").attr("src",$(this).find("img").attr("data-src"))
        }
    )
    $(".advan-div")
})