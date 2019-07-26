// main.js
$(function(){
  // 슬라이더
  var img_num = 0;
  var img_height = 100; // 높이
  var duration = 1000;

  setInterval(function(){
    if(img_num >= 3){ img_num = 0;}
    $('.sliders').css({
      top: -(img_height * img_num) + '%'
    });
    img_num++;
  }, duration);




}) // end $()