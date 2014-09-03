$(function(){

  var navToggle = function() {
    
    var navArrow = $('.icon-arrow-nav');
    var navLink = $('.side-nav a:first-child');
    
    navLink.bind('click', function(e){
      e.preventDefault();
      $(this).find(navArrow).toggleClass('active');
      $(this).parent().find('.child').toggle();
    });
    
  }

  navToggle();

});