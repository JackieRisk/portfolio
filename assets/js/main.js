document.querySelectorAll(".nav-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var nav = document.getElementById(btn.getAttribute("aria-controls"));
    var isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// Header: hide when scrolling down, reveal on any scroll up. Always visible near the top
// of the page and while the mobile menu is open.
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var lastY = window.pageYOffset;

  function update() {
    var y = window.pageYOffset;
    var menuOpen = header.querySelector(".site-nav.open");
    var delta = y - lastY;
    if (y <= header.offsetHeight || menuOpen || delta < -6) {
      header.classList.remove("is-hidden");
    } else if (delta > 6) {
      header.classList.add("is-hidden");
    }
    if (Math.abs(delta) > 6) lastY = y;
  }

  // The handler only toggles a class, so it is cheap enough to run on every scroll event.
  window.addEventListener("scroll", update, { passive: true });

  // Keyboard users tabbing into the header should always see it.
  header.addEventListener("focusin", function () {
    header.classList.remove("is-hidden");
  });
})();

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
