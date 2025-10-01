const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1.addEventListener('ended', () => {
  video1.classList.remove('visible');
  video1.classList.add('hidden');

  video2.classList.remove('hidden');
  video2.classList.add('visible');
  video2.currentTime = 0;
  video2.play();
});

video2.addEventListener('ended', () => {
  video2.classList.remove('visible');
  video2.classList.add('hidden');

  video1.classList.remove('hidden');
  video1.classList.add('visible');
  video1.currentTime = 0;
  video1.play();
});
