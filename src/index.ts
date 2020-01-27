import "../styles.css";

const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;
ctx.fillStyle = "#FFFFFF";
// const draw = (
//   fn: (params: {
//     ctx: CanvasRenderingContext2D;
//     width: number;
//     height: number;
//   }) => void
// ) => {
//   const width = canvas.width;
//   const height = canvas.height;
//   ctx.translate(width / 2, height / 2);
//   ctx.scale(1, -1);
//   fn({ ctx, width, height });
// };

// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;

const centerX = width / 2;
const centerY = height / 2;
const radiusX = 200;
const radiusY = 100;
let speedX = 0.01;
let speedY = 0.1;
let angleX = 0;
let angleY = 0;

render();

function render() {
  ctx.clearRect(0, 0, width, height);
  const x = cord(centerX, angleX, radiusX)(Math.cos);
  const y = cord(centerY, angleY, radiusY)(Math.sin);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
  angleX += speedX;
  angleY += speedY;
  requestAnimationFrame(render);
}

function cord(c, a, r) {
  return fn => c + fn(a) * r;
}

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, 10, 0, Math.PI * 2);
//   ctx.fillStyle = "#0095DD";
//   ctx.fill();
//   ctx.closePath();
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBall();
//   x += dx;
//   y += dy;
// }

// setInterval(draw, 10);

// draw(({ ctx }) => {
//   for (let i = 0; i < Math.PI * 2; i += 0.01) {
//     // const x = i * 100;
//     // const y = Math.sin(i) * 100;
//     ctx.fillRect(0, 0, 50, 50);
//   }
// });

// draw(({ ctx, height, width }) => {
//   const cY = 0; //height * 0.5;
//   const cX = 0; //width * 0.5;
//   const offsetY = height * 0.4;
//   const offsetX = -height * 0.4;
//   const offsetA = 0.4;
//   const speed = 0.009;
//   let angle = 0;
//   function render() {
//     const y = cY + Math.sin(angle) * offsetY;
//     const x = cX + Math.cos(angle) * offsetX;
//     const a = cX + Math.sin(angle) * offsetA;

//     ctx.clearRect(-width, -height, 2 * width, 2 * height);
//     ctx.beginPath();
//     ctx.arc(cX, y, 50, 0, Math.PI * 2, false);
//     ctx.fillStyle = "rgba(0,255,0,0.5)";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(x, cY, 50, 0, Math.PI * 2, false);
//     ctx.fillStyle = "rgba(255,0,0,0.5)";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//     ctx.fillStyle = "rgba(0,0,255,0.5)";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(-x, y, 50, 0, Math.PI * 2, false);
//     ctx.fillStyle = `rgba(0,255,255,${Math.abs(a)})`;
//     ctx.fill();

//     console.log(a);

//     angle += speed;
//     requestAnimationFrame(render);
//   }
//   render();
// });
