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

  // 탭버튼
  $('#tab1').click(function(){
    // 공지사항 표시
    $('.notice ').addClass('show');
    // 나머지 비표시
    $('.gallery').removeClass('show');

    // tab button style
    $('.tab-group a').removeClass('show');
    $(this).addClass('show');
  })

  $('#tab2').click(function(){
    $('.gallery').addClass('show');
    $('.notice').removeClass('show');

    // tab button style
    $('.tab-group a').removeClass('show');
    $(this).addClass('show');
  })
  
  // 모달창(레이어팝업창)
  // 1.공지사항 첫번째 글을 클릭하면 모달창 표시
  $('.notice li:first').click(function(){
    $('#modal').addClass('show');
  })

  // 2.모달창 닫기 버튼을 클리하면 모달창 비표시  
  $('.modal-close-btn').click(function(){
    $('#modal').removeClass('show');
  })

}); // $