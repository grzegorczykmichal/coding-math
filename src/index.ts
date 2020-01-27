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

  fn({ ctx, width, height });
};

draw(({ ctx, height, width }) => {
  const arrowX = width / 2;
  const arrowY = height / 2;

  let angle = 0;

  let dx = 0;
  let dy = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    ctx.save();

    ctx.translate(arrowX, arrowY);
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

    requestAnimationFrame(render);
  }

  document.addEventListener("mousemove", e => {
    dx = e.clientX - arrowX;
    dy = e.clientY - arrowY;
    angle = Math.atan2(dy, dx);
  });

  render();
});
