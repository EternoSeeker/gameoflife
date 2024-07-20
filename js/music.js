  const bgMusic = document.getElementById('bg-music');
    let music = false;

    function toggleMusic() {
      if (music) {
        bgMusic.pause();
      } else {
        bgMusic.play();
      }
      music = !music;
      document.getElementById("music-toggle").checked = music;
    }