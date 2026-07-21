document.querySelectorAll(".nav-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var nav = document.getElementById(btn.getAttribute("aria-controls"));
    var isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

document.querySelectorAll(".gif-player").forEach(function (player) {
  function play() {
    if (player.classList.contains("playing")) return;
    var img = player.querySelector("img");
    var gifSrc = player.getAttribute("data-gif");
    if (img && gifSrc) {
      img.src = gifSrc;
      player.classList.add("playing");
    }
  }
  player.addEventListener("click", play);
  player.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      play();
    }
  });
});
