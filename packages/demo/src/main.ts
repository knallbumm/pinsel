import './style.css';

import { Pinsel, rectangle } from '@pinsel/core';
import { AdptiveCanvasRenderer } from '@pinsel/renderer';

const container = document.getElementById('app');

const p = new Pinsel({
  coordinateSpace: 'ADAPTIVE',
  renderer: new AdptiveCanvasRenderer({ container, size: 'MAX' }),
});

const rect = rectangle({ width: 50, height: 50, x: 0, y: 0 });
p.add(rect);

const rec2 = rectangle({ width: 50, height: 50, x: 50, y: 50 });
p.add(rec2);

p.commit();
