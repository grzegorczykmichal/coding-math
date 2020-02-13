import "../styles.css";

const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

// const draw = (
//   fn: (params: {
//     ctx: CanvasRenderingContext2D;
//     width: number;
//     height: number;
//   }) => void
// ) => {
//   const width = canvas.width;
//   const height = canvas.height;

//   fn({ ctx, width, height });
// };

const arrowX = canvas.width / 2;
const arrowY = canvas.height / 2;

let adX = 0;
let adY = 0;

let angle = 0;

let dx = 0;
let dy = 0;

const keys = new Set([]);
// draw(({ ctx, height, width }) => {
function render() {
  requestAnimationFrame(render);

  keys.forEach(k => {
    if (k === "w") {
      adY -= 10;
    }
    if (k === "a") {
      adX -= 10;
    }
    if (k === "s") {
      adY += 10;
    }
    if (k === "d") {
      adX += 10;
    }
  });

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  ctx.save();

  ctx.translate(arrowX + adX, arrowY + adY);
  ctx.rotate(angle);

  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(-20, 0);
  ctx.moveTo(20, 0);
  ctx.lineTo(10, -10);
  ctx.moveTo(20, 0);
  ctx.lineTo(10, 10);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#FFFFFF";
  ctx.stroke();

  ctx.restore();
}

render();

document.addEventListener("mousemove", e => {
  dx = e.clientX - arrowX - adX;
  dy = e.clientY - arrowY - adY;
  angle = Math.atan2(dy, dx);
});

document.addEventListener("keyup", e => {
  keys.delete(e.key);
});

document.addEventListener("keydown", e => {
  keys.add(e.key);
});
