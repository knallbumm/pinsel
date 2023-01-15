import './style.css';

import { AdptiveCanvasRenderer, Pinsel, rectangle } from 'pinsel';

const start = performance.now();

const container = document.getElementById('app');

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer({ container, size: 'MAX' }),
});

const rect = rectangle({ width: 0.5, height: 0.3, x: 0.1, y: 0 });
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

p.commit();
const end = performance.now();

console.log(`Performance indicator: ${end - start}`);

document.addEventListener('click', () => {
  p.scene.updateBatch(() => {
    rect.x = Math.random();
    rect.y = Math.random();
    rect.fill = 'red';
  });
});
