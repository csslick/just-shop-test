// main.js
$(function(){
  $('#gnb .depth1 > li').hover(
    function(){
      $(this).find('.depth2').fadeIn();
    },
    function(){

    }
  )


}); // $