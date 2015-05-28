$(function(){
  var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('.container1').addClass('animated bounceInRight').one(animationend, function(){
    $(this).removeClass('animated bounceInRight');
  });

  $('.container2').addClass('animated bounceInLeft').one(animationend, function(){
    $(this).removeClass('animated bounceInLeft');
  });

  $('.main > li').mouseout(function(){
    $(this).addClass('animated bounceIn').one(animationend, function(){
      $(this).removeClass('animated bounceIn');
    });
  });
});