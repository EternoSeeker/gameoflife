const bgMusic = document.getElementById('bg-music');

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    document.querySelector('.toggle-button').textContent = 'Music Off'; // Change button text
  } else {
    bgMusic.pause();
    document.querySelector('.toggle-button').textContent = 'Music On'; // Change button text
  }
}