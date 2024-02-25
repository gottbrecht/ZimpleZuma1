import LinkedList from './linked-list.js';


class ZumaModel {
  constructor() {
    this.linkedList = new LinkedList();
  }

  generateRandomBall() {
    const balltype = Math.ceil(Math.random() * 6);
    return this.createBallElement(balltype);
  }

  createBallElement(balltype) {
    const ball = document.createElement("div");
    ball.className = "ball";
    const img = document.createElement("img");
    img.src = `images/marble${balltype}.png`;
    img.dataset.balltype = balltype;
    ball.dataset.balltype = balltype;
    ball.appendChild(img);
    return ball;
  }

  // Other game logic functions
}

class ZumaView {
  constructor() {
    // Initialize DOM elements here
  }

  initializeView() {
    // Set up the initial view
  }

  updateView(modelData) {
    // Update the view based on modelData
  }

  // Animation and DOM manipulation functions
}

class ZumaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.initializeView();
    this.initializeGame();
  }

  initializeGame() {
    for (let i = 0; i < 6; i++) {
      const ball = this.model.generateRandomBall();
      this.model.linkedList.append(ball);
      this.view.updateView(this.model.linkedList);
    }

    // Load the cannon with a random ball
    const cannonBall = this.model.generateRandomBall();
    this.model.loadCannonWithBall(cannonBall);
    this.view.updateView(this.model.linkedList);
  }

  handleBallClick(event) {
    // Handle ball click logic
  }

  // Other game control functions
}

// Start the game when the window is loaded
window.addEventListener("load", () => {
  const model = new ZumaModel();
  const view = new ZumaView();
  const controller = new ZumaController(model, view);
});
