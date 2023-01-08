import './style.css';

import { Pinsel, rectangle } from '@pinsel/core';
import { AdptiveCanvasRenderer } from '@pinsel/renderer';

const container = document.getElementById('app');

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer({ container, size: 'MAX' }),
});

const rect = rectangle({ width: 0.5, height: 0.3, x: 0.1, y: 0 });
p.scene.add(rect);

const rec2 = rectangle({
  width: rect.widthAnchor({ multiplier: 0.5 }),
  height: 0.2,
  x: rect.trailingAnchor(),
  y: rect.bottomAnchor(),
});
p.scene.add(rec2);

p.commit();
