window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":

    for (let i = 0; i < doors.length; i++) {
      const door = doors[i]

      if (
        player.hitbox.position.x <=
        collisionBlock.position.x + collisionBlock.width &&
      player.hitbox.position.x + player.hitbox.width >=
        collisionBlock.position.x &&
      player.hitbox.position.y + player.hitbox.height >=
        collisionBlock.position.y &&
      player.hitbox.position.y <=
        collisionBlock.position.y + collisionBlock.height
        ) {

        }
    }
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
