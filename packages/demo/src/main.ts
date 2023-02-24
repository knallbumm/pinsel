import './style.css';

import {
  AdaptiveRunner,
  CanvasRenderer,
  circle,
  ContinuousRunner,
  downloadImage,
  font,
  label,
  path,
  Pinsel,
  rectangle,
  rotation,
} from 'pinsel';

const container = document.getElementById('app');
const renderer = new CanvasRenderer({ container, size: 'MAX' });

const runner = new AdaptiveRunner();

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer,
  renderBehavior: 'CONTINUOUS' as const,
  runner,
});

const rect = rectangle({ width: 0.5, height: 0.3, x: 0.1, y: 0 });
rect.stroke.color = '#FB39FF';
rect.stroke.width = 0.005;
p.scene.add(rect);

p.scene.fill = 'white';

p.scene.add(
  rectangle({
    width: p.scene.widthConstraint({ multiplier: 0.5 }),
    height: 0.2,
    x: p.scene.leadingConstraint(),
    y: rect.bottomConstraint(),
    fill: '#FB007B',
  })
);

const circ = circle({
  radius: 0.1,
  x: 0.5,
  y: 0.2,
});
circ.stroke.color = 'black';
circ.stroke.width = 0.01;
circ.fill = '#FFC02D';
circ.anchor = 'CENTER';
p.scene.add(circ);

const positionRect = rectangle({
  x: circ.trailingConstraint(),
  y: circ.bottomConstraint(),
  width: 0.05,
  height: 0.05,
  fill: 'green',
});
p.scene.add(positionRect);

const NUM = 30;

for (let i = 0; i < NUM; i++) {
  const dot = circle({
    x: 0.4,
    y: 0.4,
    radius: 0.005,
    fill: 'green',
  });
  p.scene.add(dot);
  dot.rotation = rotation({
    deg: i * (360 / NUM),
    point: {
      x: positionRect.trailingConstraint(),
      y: positionRect.bottomConstraint(),
    },
  });
}

const text = label({
  text: 'PINSEL is the best!',
  x: 0.5,
  y: 0.5,
});
text.font = font(32, 'Fira Code');
text.font.size = 35;

p.scene.add(text);

p.scene.add(
  rectangle({
    x: text.trailingConstraint(),
    y: text.topConstraint(),
    width: 0.3,
    height: 2,
    fill: 'yellow',
  })
);

// const pa = path()
//   .fromPoints([
//     { x: 0.1, y: 0.8 },
//     { x: 0, y: 0.2 },
//     { x: 0.3, y: 0.3 },
//   ])
//   .close();

const controlPointCoordinates = { x: 0.2, y: 0.5 };

// const anotherPath = path()
//   .start({ x: 0, y: 0.8 })
//   .linearTo({ x: 0, y: 0.2 })
//   .linearTo({ x: 0.3, y: 0.3 })
//   .arcTo({ x: 0.5, y: 0.5 }, controlPointCoordinates)
//   .close();

// p.scene.add(anotherPath);

const nowAnotherPath = path()
  .start({ x: 0, y: 1 })
  .bezierTo({ x: 1, y: 0 }, { x: 0.83, y: 1 }, { x: 0.17, y: 0 });

p.scene.add(nowAnotherPath);

const controlPoint = circle({ ...controlPointCoordinates, radius: 0.005 });
controlPoint.anchor = 'CENTER';
controlPoint.fill = 'blue';
p.scene.add(controlPoint);

p.commit();

document.addEventListener('click', (event) => {
  p.scene.updateBatch(() => {
    rect.x = Math.random();
    rect.y = Math.random();
    rect.fill = 'red';
  });
  if (event.ctrlKey) renderCanvas();
});

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key == 'c') renderCanvas();
});

const renderCanvas = async () => {
  const image = await renderer.getImage('image/png');
  downloadImage(image);
};

// void renderCanvas();

// runner.draw = ({ frameCount }) => {
//   console.log('Something to draw', frameCount);
// };
// runner.start();

// console.log(anotherPath);
