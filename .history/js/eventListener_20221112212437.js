window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":

    for (let i = 0; i < doors.length; i++) {
      const door = doors[i]

      if (this.hitbox.position.x <=
        collisionBlock.position.x + collisionBlock.width &&
      this.hitbox.position.x + this.hitbox.width >=
        collisionBlock.position.x &&
      this.hitbox.position.y + this.hitbox.height >=
        collisionBlock.position.y &&
      this.hitbox.position.y <=
        collisionBlock.position.y + collisionBlock.height) {
          
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
