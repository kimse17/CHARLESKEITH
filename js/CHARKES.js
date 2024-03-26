
var cnt = 0;

var btn_r = document.querySelector(".r_row_icon_l");
var frame_all = document.querySelector(".r_row_all");
btn_r.addEventListener('click', function() {
    console.log('frame_all -> ', frame_all);
    frame_all.style.left = "20px";
});
var btn_l = document.querySelector(".r_row_icon_r");
var frame_all = document.querySelector(".r_row_all");
btn_l.addEventListener('click', function() {
    console.log('frame_all -> ', frame_all);
    frame_all.style.left = "-1100px"
});




$(function(){
    var item_width = $(".m_img_01 >").outerWidth(true);
    $(".m_img_01:first").before($(".m_img_01:last"));
    $(".main_img").css({
   'left':-item_width+"px"
    });
function slide_main_ani(){
    var left_indent = parseInt($("main_img").css("left"))-item_width;
    $("main_img").stop().animate({
        'left': left_indent +'px'
    },700,function(){
        $("m_img_01:last").after($(".m_img_01:first"));
        $("main_img").css("left", -item_width + "px")
    });
}
function main_timer(){
    main_timer =setInterval(slide_main_ani, 2000 );
}
// main_timer();

function main_stop_timer(){
    clearInterval(main_timer, 2000);
}
$(".slide_img_01").hover(main_stop_timer, main_timer);
main_timer()
})

 


$(function () {
    var item_top = $('.event_01>').outerHeight(true);
    $('.event_01:first').before($('.event_01:last'));
    $('.event').css({
        'top': -item_top + 'px'
    });
    function slide_ani() {
        var top_indent = parseInt($('.event').css('top')) - item_top;
        $('.event').stop().animate({
            'top': top_indent + 'px'
        }, 700, function () {
            $('.event_01:last').after($('.event_01:first'));
            $('.event').css('top', -item_top + 'px');
        });
    }
    function stat_timer() {
        timer = setInterval(slide_ani, 2000);
    }
    function stop_timer() {
        clearInterval(timer);
    }

    $('.slide_img').hover(stop_timer, stat_timer);
    stat_timer()

})




$(function () {
    var item_top = $('.event_01>').outerHeight(true);
    $('.event_01:first').before($('.event_01:last'));
    $('.event').css({
        'top': -item_top + 'px'
    });
    function slide_ani() {
        var top_indent = parseInt($('.event').css('top')) - item_top;
        $('.event').stop().animate({
            'top': top_indent + 'px'
        }, 700, function () {
            $('.event_01:last').after($('.event_01:first'));
            $('.event').css('top', -item_top + 'px');
        });
    }
    function stat_timer() {
        timer = setInterval(slide_ani, 2000);
    }
    function stop_timer() {
        clearInterval(timer);
    }

    $('.slide_img').hover(stop_timer, stat_timer);
    stat_timer()

})

