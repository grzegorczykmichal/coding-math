import "../styles.css";

const canvas: HTMLCanvasElement = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const draw = (
  fn: (params: {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
  }) => void
) => {
  const width = canvas.width;
  const height = canvas.height;
  ctx.translate(width / 2, height / 2);
  ctx.scale(1, -1);
  fn({ ctx, width, height });
};

// draw(({ ctx }) => {
//   for (let i = 0; i < Math.PI * 2; i += 0.01) {
//     // const x = i * 100;
//     // const y = Math.sin(i) * 100;
//     ctx.fillRect(0, 0, 50, 50);
//   }
// });

draw(({ ctx, height, width }) => {
  const cY = 0; //height * 0.5;
  const cX = 0; //width * 0.5;
  const offsetY = height * 0.4;
  const offsetX = -height * 0.4;
  const offsetA = 0.4;
  const speed = 0.009;
  let angle = 0;
  function render() {
    const y = cY + Math.sin(angle) * offsetY;
    const x = cX + Math.cos(angle) * offsetX;
    const a = cX + Math.sin(angle) * offsetA;

    ctx.clearRect(-width, -height, 2 * width, 2 * height);
    ctx.beginPath();
    ctx.arc(cX, y, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(0,255,0,0.5)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, cY, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(-x, y, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(0,255,255,${Math.abs(a)})`;
    ctx.fill();

    console.log(a);

    angle += speed;
    requestAnimationFrame(render);
  }
  render();
});
