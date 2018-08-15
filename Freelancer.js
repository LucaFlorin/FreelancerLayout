$(document).ready(function(){
  $('.dropdown').click(function(){
     /* $('.dropdown_content').css('cssText', 'visibility: visible; opacity: 1;'  );
     $('.dropdown_content').toggleClass('dropdown_content_click');*/
      $('.menu_line1').toggleClass('menulinev1');
      $('.menu_line2').toggleClass('menulinev2');
      $('.menu_line3').toggleClass('menulinev3');

  });

  


  $('.dropdown').click(function(){ 
      $('.dropdown_content').toggleClass('dropdown_content_click');
   });


});