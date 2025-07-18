function showAnswer(id){
    $("#"+id).toggle();
    $("#reveal-"+id).toggle();
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'inline-block') {
      menu.style.display = 'none';
      document.getElementById("hamburger-menu").innerHTML = "☰ Menu";
    } else {
      menu.style.display = 'inline-block';
      document.getElementById("hamburger-menu").innerHTML = "X Close";
    }
  }

  window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 900) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
      document.getElementById("hamburger-menu").innerHTML = "☰ Menu";
    }
  });

  $(window).scroll(function () {
    var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 50;

    if ($heightScrolled < $defaultHeight) {
        $('.navigation-image').removeClass("smaller-icon")
    }
    else {
        $('.navigation-image').addClass("smaller-icon")
    }

});