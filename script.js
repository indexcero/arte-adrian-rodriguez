$(document).ready(function(){
  $( "#obras" ).hover(function() {
    $( "#fecha" ).slideDown( "slow" );
    $( "#veintiun_u" ).hover(function() {
      $( "#veintiun" ).slideDown( "slow" );
    });
    $( "#veinte_u" ).hover(function() {
      $( "#veinte" ).slideDown( "slow" );
    });
    $( "#diecinueve_u" ).hover(function() {
      $( "#diecinueve" ).slideDown( "slow" );
    });
    $( "#dieciocho_u" ).hover(function() {
      $( "#dieciocho" ).slideDown( "slow" );
    });
    $( "#diecisiete_u" ).hover(function() {
      $( "#diecisiete" ).slideDown( "slow" );
    });
  });
  $( ".menu" ).mouseleave(function() {
    $( "#fecha" ).delay(300).slideUp( "slow" );
  })


});