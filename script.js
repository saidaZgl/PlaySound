const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  console.log(event);
  audio.play();
};

window.addEventListener("keydown", playSound);
