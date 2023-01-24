import './style.css';

import {
  AdptiveCanvasRenderer,
  circle,
  font,
  label,
  Pinsel,
  rectangle,
} from 'pinsel';

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
    x: text.trailingAnchor(),
    y: text.topAnchor(),
    width: 20,
    height: 200,
    fill: 'yellow',
  })
);

p.commit();

document.addEventListener('click', () => {
  p.scene.updateBatch(() => {
    rect.x = Math.random();
    rect.y = Math.random();
    rect.fill = 'red';
  });
});
