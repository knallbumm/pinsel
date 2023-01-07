import './style.css';

import { Pinsel, rectangle } from '@pinsel/core';
import { AdptiveCanvasRenderer } from '@pinsel/renderer';

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer(),
});

const rect = rectangle({ width: 50, height: 50, x: 0, y: 0 });
p.add(rect);

const rec2 = rectangle({ width: 50, height: 50, x: 50, y: 50 });
p.add(rec2);

p.commit();

const app = document.getElementById('app');
if (!p.scene.renderer.domElement) {
  console.log('There is no dom element');
} else {
  app?.appendChild(p.scene.renderer.domElement);
  console.log(p);
}
