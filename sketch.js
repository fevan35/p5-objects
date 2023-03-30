class Sprite {
  constructor(x, y, drawFunction) {
    this.x = x;
    this.y = y;
    this.drawFunction = drawFunction;
  }

  draw() {
    this.update();
    this.drawFunction();
  }
  // update: change the state with each frame
  update() {

  }
}

class emojiHead extends Sprite {
  constructor(x, y, speed, emoji, goingUp) {
    super(x, y, () => text(this.emoji, this.x, this.y));
    this.speed = speed;
    this.emoji = emoji;
    this.up = goingUp;
  }

  update() {
    if(this.up == true){
    this.y -= this.speed;
    } else {
      this.y += this.speed;
    }
    if(this.y > height) {
      this.up = true;
    }
    if(this.y < 12) {
      this.up = false;
    }
  }
}

class Rock extends Sprite {
  constructor(x, altitude, speed) {
    super(x, height - altitude, () => ellipse(this.x, this.y, 10));
    this.speed = speed;
  }
  
  update() {
    this.y += this.speed;
    if(this.y >= height - 4) {
      this.y = height - 4;
    }
  }
}

let myEmoji;
let myEmoji2;
let myEmoji3;
let myEmoji4;
let myEmoji5;
let myEmoji6;
let rock;

function setup () {
  createCanvas(300,300);
  myEmoji = new emojiHead(100, 0, 3, '😀', false);
  myEmoji2 = new emojiHead(200, 0, 4, '🤣', true);
  myEmoji3 = new emojiHead(150, 0, 2, '🥶', false);
  myEmoji4 = new emojiHead(50, 0, 5, '😡', true);
  myEmoji5 = new emojiHead(250, 0, 1, '🤑', false);
  myEmoji6 = new emojiHead(25, 0, 1, '🤖', true);
  rock = new Rock(125, height, 1);
}

function draw () {
  background(200);
  myEmoji.draw();
  myEmoji2.draw();
  myEmoji3.draw();
  myEmoji4.draw();
  myEmoji5.draw();
  myEmoji6.draw();
  rock.draw();
}
