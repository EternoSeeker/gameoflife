  const bgMusic = document.getElementById('bg-music');
    let musicOn = true;

    function toggleMusic() {
      if (musicOn) {
        bgMusic.pause();
        document.querySelector('.music-text').textContent = 'Music Off'; // Change button text
        document.querySelector('.toggle-button i').className = 'fa-solid fa-volume-xmark';
      } else {
        bgMusic.play();
        document.querySelector('.music-text').textContent = 'Music On'; // Change button text
        document.querySelector('.toggle-button i').className = 'fa-solid fa-volume-high'; 
      }
      musicOn = !musicOn; 
    }
