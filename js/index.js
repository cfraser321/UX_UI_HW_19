console.log("your index.js file is loaded correctly!");

function scrollToAnchor(aid){
    const destination = $("#skills"+ aid);
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '.smooth-link', function(){
    scrollToAnchor('.skills');
  })
  
 