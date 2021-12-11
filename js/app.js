let isPlayed = false;
var audio = new Audio("../audio/audio.mp3");

let flag = 1;

function createSnowFlake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-snowflake");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snow_flake.style.opacity = Math.random();
  snow_flake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

window.addEventListener("click", () => {
  setInterval(createSnowFlake, 110);
  if (flag == 1) {
    setTimeout(() => {
      document.querySelector("#content").style.display = "block";
      const cake = document.querySelector("#cake");
      animate(cake, "bounceInDown");
      const h1 = document.querySelector("#h1");
      animate(h1, "fadeInUpBig");
    }, 2000);

    setTimeout(() => {
      setInterval(createSnowFlake, 110);
    }, 10000);
    flag++;
  }

  if (!isPlayed) {
    audio.play();
    isPlayed = true;
  } else {
    audio.pause();
    isPlayed = false;
  }
});

function animate(element, animation) {
  element.classList.add(animation);
  const wait = setTimeout(() => {
    element.classList.remove(animation);
  }, 2000);
}
