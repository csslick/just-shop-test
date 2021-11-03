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

  // slider
  var top = 0;
  setInterval(function(){
    top = top - 300;
    if(top < -600) top = 0; // 처음 이미지로
    $('.sliders').css('margin-top', top);

  }, 3000);

}); // $