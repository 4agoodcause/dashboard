$(function(){
  
  var pieChart = function() {
    var purple = '#993399';
    var green = '#339900';
    var blue = '#006699';
    var yellow = '#ffcc33';
    
    var data = [
      {
        value: 300,
        color: purple,
        //highlight: 'rgba(purple, 0.8)',
        label: 'Purple'
      },
      {
        value: 50,
        color: green,
        label: 'Green'
      },
      {
        value: 100,
        color: blue,
        label: 'Blue'
      },
      {
        value: 150,
        color: yellow,
        label: 'Yellow'
      }
    ]
    
    var ctx = $('#pie-chart').get(0).getContext('2d');
    new Chart(ctx).Doughnut(data, {
      responsive : true
    });
  }

  var lineChart = function() {
    var purple = '#993399';
    var green = '#339900';
    var blue = '#006699';
    var yellow = '#ffcc33';
    
    var data = {
      labels: ["February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: blue,
          pointColor: blue,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [40, 51, 63, 68, 70, 85]
        }
      ]
    };
    
    var ctx = $('#line-chart').get(0).getContext('2d');
    new Chart(ctx).Line(data, {
      responsive : true
    });
  }
  
  
  $('#datepicker1, #datepicker2').datepicker({
    onSelect: function() {
      $(this).parent().find('label').hide();
    }
  });

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
  
  pieChart();
  lineChart();
  navToggle();
  labelFade();

});