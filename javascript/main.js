// main.js
$(function(){
  // 탭 버튼
  $('#btn-l').on('click', function(){
    // 기존 목록들 초기화
    $('#notice ul').removeClass('show');
    // 현재 목록을 표시
    $('#notice-list').addClass('show');

    // 버튼 선택 스타일
    $('.tab-group > a').removeClass('show');
    $(this).addClass('show');
    return false;
  })
  $('#btn-r').on('click', function(){
    // 기존 목록들 초기화
    $('#notice ul').removeClass('show');
    // 현재 목록을 표시
    $('#gallery-list').addClass('show');
    
    // 버튼 선택 스타일
    $('.tab-group > a').removeClass('show');
    $(this).addClass('show');    
    return false;
  })



  // 슬라이더
  var img_num = 0;
  var img_height = 100; // 높이
  var duration = 3000;

  setInterval(function(){
    if(img_num >= 3){ img_num = 0;}
    $('.sliders').css({
      top: -(img_height * img_num) + '%'
    });
    img_num++;
  }, duration);




}) // end $()