function showAnswer(id){
    $("#"+id).toggle();
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'inline-block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'inline-block';
    }
  }

  window.addEventListener('resize', () => {
    const menu = document.getElementById('menu');
    if (window.innerWidth > 900) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });