window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":
      if (player.velocity.y === 0) player.velocity.y = -25;

      break;
    case "ArrowLeft":
      // move player to left
      keys.a.pressed = true;
      break;
    case "ArrowRight":
      // move player to right
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowUp":
      keys.w.pressed = false;

      break;
    case "ArrowLeft":
      // move player to left
      keys.a.pressed = false;
      break;
    case "ArrowRight":
      // move player to right
      keys.d.pressed = false;
      break;
  }
});
