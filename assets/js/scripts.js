$(function(){

  $('#datepicker1, #datepicker2').datepicker({
    onSelect: function() {
      $(this).parent().find('label').hide();
    }
  });
  
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
          data: [47, 51, 63, 68, 70, 80]
        }
      ]
    };
    
    var ctx = $('#line-chart').get(0).getContext('2d');
    new Chart(ctx).Line(data, {
      responsive : true,
    });
  }
  

  chartBlockHeight = function() {

    var windowWidth = window.outerWidth;
    var block = $('.block-chart .block-content');
    var blockHeight = block.map(function() {
      $(this).removeAttr('style');
      return $(this).height();
    }).get();
    var maxHeight = Math.max.apply(Math, blockHeight);

    block.height(maxHeight);

/*
    if(windowWidth > 740) {
      block.height(maxHeight);
    }
*/

  }  

  var navToggle = function() {
    var navArrow = $('.icon-arrow-nav');
    var navLink = $('.side-nav .has-children > a');
    
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
  chartBlockHeight();
  navToggle();
  labelFade();

  $(window).resize(function() {
    chartBlockHeight();
  });
});