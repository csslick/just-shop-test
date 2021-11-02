// main.js
$(function(){
  // 2단계 메뉴 hover
  $('#gnb .depth1 > li').hover(
    function(){
      $(this).find('.depth2').stop().fadeIn();
    },
    function(){
      $(this).find('.depth2').stop().fadeOut();
    }
  )


}); // $