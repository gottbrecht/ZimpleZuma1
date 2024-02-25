import LinkedList from './linked-list.js';

"use strict"
class ZumaModel {
  constructor() {
    this.linkedList = new LinkedList();
  }

  generateRandomBall() {
    const balltype = Math.ceil(Math.random() * 6);
    console.log(`Generated random ball of type: ${balltype}`);
    return this.createBallElement(balltype);
  }

  createBallElement(balltype) {
    const ball = document.createElement("div");
    ball.className = "ball";
    const img = document.createElement("img");
    img.src = `images/marble${balltype}.png`;
    img.dataset.balltype = balltype;
    img.className = "ball-img";
    ball.dataset.balltype = balltype;
    ball.appendChild(img);
    console.log(`Created ball element with type: ${balltype}`);
    return ball;
  }

  loadCannonWithBall(newCannonBall) {
    const cannonContainer = document.querySelector("#cannon");
    cannonContainer.innerHTML = '';
    cannonContainer.appendChild(newCannonBall);
    console.log("Loaded cannon with a new ball");
  }
}

class ZumaView {
  constructor() {}

  initializeView() {
    console.log("Initialized view");
  }

  updateView(modelData) {
    console.log("Updated view with model data", modelData);
  }
}

class ZumaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.initializeView();
    this.initializeGame();
  }

  initializeGame() {
    console.log("Initializing the game");
    for (let i = 0; i < 6; i++) {
      const ball = this.model.generateRandomBall();
      this.model.linkedList.append(ball);
      this.view.updateView(this.model.linkedList);
    }

    const cannonBall = this.model.generateRandomBall();
    this.model.loadCannonWithBall(cannonBall);
    this.view.updateView(this.model.linkedList);
  }

  handleBallClick(event) {
    console.log("Handling ball click");
  }
}

window.addEventListener("load", () => {
  console.log("Window loaded");
  const model = new ZumaModel();
  const view = new ZumaView();
  const controller = new ZumaController(model, view);
});
