console.log("your index.js file is loaded correctly!");

function scrollToAnchor(aid){
  const destination = $("#about"+ aid);
    $('html,body').animate({
      scrollTop: destination.offset().top
    },'slow');
}

$(document).on('click', '#smooth-link1', function(){
  scrollToAnchor('#about');
})

function scrollToAnchor(aid){
    const destination = $("#skills"+ aid);
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '#smooth-link2', function(){
    scrollToAnchor('#skills');
  })
  
  function scrollToAnchor(aid){
    const destination = $("#work"+ aid);
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '#smooth-link3', function(){
    scrollToAnchor('#work');
  })