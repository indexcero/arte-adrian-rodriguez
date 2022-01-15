console.log('Holii')
    $("#menu").click(function() {
       $(this).toggleClass("on");
        $("#submenu").slideToggle();
      });
    $("#submenu").mouseleave(function(){
        $("#submenu").toggle();
       })
 
    $("#menu").hover(function() {
        $(this).toggleClass("on");
         $("#submenu").slideToggle();
       });
