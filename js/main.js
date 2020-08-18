$(function(){

  /* ********************* main page ********************** */
  /* ********** navigation ********** */
  var gnb_ul = $('nav>ul');
  var header = $('header');

  gnb_ul.hover(
    function(){
      header.css('overflow', 'visible');
    },
    function(){
      header.css('overflow', 'hidden');
    }
  );

  // 화이트스페이스 제거코드
  gnb_ul.contents().filter(function(){
    return this.nodeType === 3
 }).remove();



 /* ********** flip box ********** */
 var flip_box = $('#mainview h2 .flip-box');
 var index = 2;

 function flipLoop(){
  flip_box.children().css('display', 'none');
  $('#mainview .flip-box #flip'+index+'').css('display', 'inline-block');
  
  if(index == 3){
    index = 1;
  } else {
    index++;
  }
 }

 var Timer = setInterval(flipLoop, 4000);

 

  /* ********************* sub2 page ********************** */
  var hover_item = $('#sub2 .hover-items-box>div a');
  var cover = $('#sub2 .hover-items-box>div a>div');
  var hover_items_box = $('#sub2 .hover-items-box');
  var first_item = $('#sub2 .hover-items-box>div:first-child a>div');

  hover_item.hover(
    function(){
      cover.stop().animate({'bottom' : -400}, 50);
      $(this).find('div').stop().animate({'bottom' : 0}, 50);
    }, function(){
      cover.stop().animate({'bottom' : -400}, 50);
    }
  );
  hover_items_box.mouseleave(
    function(){
      first_item.stop().animate({'bottom' : 0}, 50);
    }
  );



  /* ********************* sub3 page ********************** */
  var menuItem = $('#sub3 .qna-box ul li:nth-child(odd)>a');

  //  초기값 설정
  $('#sub3 .qna-box ul li:first-child .spr_faq_arrow').addClass('act');
  $('#sub3 .qna-box ul li:nth-child(2)').css('display', 'block');

  menuItem.click(function(){
    $(this).find('.spr_faq_arrow').toggleClass('act').parent().parent().next().slideToggle(400);
    event.preventDefault();
  });


  /* ********************* wow.js ********************** */
  new WOW().init();

});