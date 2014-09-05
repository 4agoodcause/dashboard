$(function(){

  $('#datepicker1, #datepicker2').datepicker();

  var navToggle = function() {
    
    var navArrow = $('.icon-arrow-nav');
    var navLink = $('.side-nav a:first-child');
    
    navLink.bind('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).find(navArrow).toggleClass('active');
      $(this).parent().find('.child').toggle();
    });
    
  }

  var labelFade = function() {
    var label = $('.form-label-fade label');
    var input = $('.form-label-fade input');
  
    $(input).on("focus", function(){
      $(this).parent().find(label).fadeOut();
    });
    $(input).on("blur", function(){
      var iValue = $(this).val();
      if (iValue == "") {
        $(this).parent().find(label).fadeIn();
      }
    });
  }
  
  navToggle();
  labelFade();

});