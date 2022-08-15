let d;
let sw;
let symmetry = 6;
let clearButton;
let slider;
let hue = 0;
let offset = 0;
let myCanvas;
let colorBtn;

function setup() {
  myCanvas = createCanvas(350, 350);
  myCanvas.parent("wrapper");
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 255, 255, 255);
  clearButton = createButton("clear");
  clearButton.parent("wrapper");
  clearButton.mousePressed(clearCanvas);
  clearButton.addClass("clearBtn");
  slider = createSlider(1, 32, 4, 0.1);
  slider.parent("wrapper");
  slider.addClass("slider1");
}

function clearCanvas() {
  background(0);
  window.location.reload();
}
function draw() {
  translate(width / 2, height / 2);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      hue = hue += noise(100);
      // hue = 255
      stroke(hue, 255, 255, 100);
      let angle = 360 / symmetry;

      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        sw = slider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(350, 350);
}
