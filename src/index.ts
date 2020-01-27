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
    clear: () => void;
    translate: (x: number, y: number) => void;
    rotate: (a: number) => void;
  }) => void
) => {
  const width = canvas.width;
  const height = canvas.height;
  // ctx.translate(width / 2, height / 2);
  // ctx.scale(1, -1);

  const clear = () => {
    ctx.clearRect(0, 0, width, height);
  };

  const translate = (x: number, y: number) => {
    ctx.translate(x, y);
  };

  const rotate = (a: number) => {
    ctx.rotate(a);
  };

  fn({ ctx, width, height, clear, translate, rotate });
};

draw(({ ctx, height, width, clear, translate, rotate }) => {
  const arrowX = width / 2;
  const arrowY = height / 2;

  let angle = 0;

  let dx = 0;
  let dy = 0;

  function render() {
    clear();

    ctx.save();
    translate(arrowX, arrowY);
    rotate(angle);

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
