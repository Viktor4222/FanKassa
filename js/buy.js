$(document).ready(function() {

  $('#but1').click(function(){
    $('#modal').fadeIn(300);
  });
  $('#modal').on('click', function(e){
    if (e.target.id == 'modal'){
      $(this).hide();
    }
  });

  $('#but2').click(function(){
    $('#modal1').fadeIn(300);
  });
  $('#modal1').on('click', function(e){
    if (e.target.id == 'modal1'){
      $(this).hide();
    }
  });

  $('#but3').click(function(){
    $('#modal2').fadeIn(300);
  });
  $('#modal2').on('click', function(e){
    if (e.target.id == 'modal2'){
      $(this).hide();
    }
  });

});
