$(document).ready(function(){
    $('#citybox').keypress(function(e){
      if(e.keyCode==13)
      $('#submitBtn').click();
    });
});