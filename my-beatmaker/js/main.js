window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visuals = document.querySelector(".visual");
  const colors = [
    "#6ed187",
    "#FF5C33",
    "gold",
    "aqua",
    "#21003D",
    "hotpink"
  ]

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      jumpingBalls(index)
    });
  });

  function jumpingBalls(index){
    const balls = document.createElement("div");
    visuals.appendChild(balls);
    balls.style.backgroundColor = colors[index];
    balls.style.animation = `jump 1s ease`;
    balls.addEventListener("animationend", function() {
      visuals.removeChild(this);
    });
  };
});