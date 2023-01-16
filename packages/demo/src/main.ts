import './style.css';

import { AdptiveCanvasRenderer, circle, Pinsel, rectangle } from 'pinsel';

const container = document.getElementById('app');

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer({ container, size: 'MAX' }),
});

const rect = rectangle({ width: 0.5, height: 0.3, x: 0.1, y: 0 });
rect.stroke = 'pink';
p.scene.add(rect);

p.scene.fill = 'purple';

// const rec2 = rectangle({
//   width: rect.widthAnchor({ multiplier: 0.5 }),
//   height: 0.2,
//   x: rect.trailingAnchor(),
//   y: rect.bottomAnchor(),
// });
// p.scene.add(rec2);

p.scene.add(
  rectangle({
    width: p.scene.widthAnchor({ multiplier: 0.5 }),
    height: 0.2,
    x: p.scene.leadingAnchor(),
    y: rect.bottomAnchor(),
  })
);

const circ = circle({
  radius: 0.1,
  x: 0.5,
  y: 0.5,
});
circ.stroke = 'green';
p.scene.add(circ);

p.commit();

document.addEventListener('click', () => {
  p.scene.updateBatch(() => {
    rect.x = Math.random();
    rect.y = Math.random();
    rect.fill = 'red';
  });
});
