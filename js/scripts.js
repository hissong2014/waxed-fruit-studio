function showAnswer(id){
    $("#"+id).toggle();
    $("#reveal-"+id).toggle();
}

function toggleMenu() {
    const menu = document.getElementById('menu');

   
    if (menu.style.display === 'inline-block') {
      menu.style.display = 'none';
      document.getElementById("hamburger-menu").innerHTML = "☰ Menu";
      $("main").removeClass("opacity-overlay");
      $("footer").removeClass("opacity-overlay");
   
    } else {
      menu.style.display = 'inline-block';
      document.getElementById("hamburger-menu").innerHTML = "X Close";
      $("main").addClass("opacity-overlay");
      $("footer").addClass("opacity-overlay");
    
    }
  }

  baguetteBox.run('.baguetteBoxTwo');

  window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');

    if (window.innerWidth > 900) {
      menu.style.display = 'flex';
      $("main").removeClass("opacity-overlay");
      $("footer").removeClass("opacity-overlay");
    } else {
      menu.style.display = 'none';
      document.getElementById("hamburger-menu").innerHTML = "☰ Menu";
      $("main").removeClass("opacity-overlay");
      $("footer").removeClass("opacity-overlay");
    }
  });

  $(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var windowWidth = $(window).width();
    var $defaultHeight = 50;

    if (($heightScrolled > $defaultHeight) && (windowWidth > 900))  {
        $('.navigation-image').addClass("smaller-icon");
        $('.logo-image').addClass("smaller-icon");
    }
    else {
        $('.navigation-image').removeClass("smaller-icon")
        $('.logo-image').removeClass("smaller-icon");
    }

});

window.onload = function() {
  baguetteBox.run('.baguetteBoxTwo', {
    captions:true,
    buttons:'auto'
});
};