import './style.css';

import { Pinsel, rectangle } from '@pinsel/core';
import { AdptiveCanvasRenderer } from '@pinsel/renderer';

const container = document.getElementById('app');

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer({ container, size: 'MAX' }),
});

const rect = rectangle({ width: 0.5, height: 0.3, x: 0, y: 0 });
p.scene.add(rect);

const rec2 = rectangle({ width: 0.2, height: 0.2, x: 0.3, y: 0.4 });
p.scene.add(rec2);

p.commit();
