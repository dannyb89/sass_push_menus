$(document).ready(function(){

  var navLeft = $('.cont-navLeft');
  var showLeft = $('#left-menu');
  
  var navRight = $('.cont-navRight');
  var showRight = $('#right-menu');
  
 $(showLeft).click(function(){
    $(navLeft).toggleClass("openLeft");
    $(document.body).toggleClass("push-right");
    return false;
  });
  
  $(showRight).click(function(){
    $(navRight).toggleClass("openRight");
    $(document.body).toggleClass("push-left");
    return false;
  });
});