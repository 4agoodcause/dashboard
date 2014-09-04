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
  
  navToggle();

});