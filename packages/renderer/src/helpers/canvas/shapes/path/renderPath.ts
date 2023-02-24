import type { ResolvedPath } from '@pinsel/core';

import { applyStyles } from '../../general/applyStyles';

export const renderPath = (
  context: CanvasRenderingContext2D,
  shape: ResolvedPath
) => {
  context.beginPath();

  const { path } = shape;

  if (path.length < 3) {
    console.error('Could not draw a line without enough data');
    return;
  }

  const start = path?.[0];
  if (start?.type == 'POINT') {
    context.moveTo(start.x, start.y);
  }

  for (let i = 1; i < path.length; i += 2) {
    const line = path?.[i];
    const point = path?.[i + 1];

    if (line.type == 'CLOSE') {
      context.closePath();
      applyStyles(
        { stroke: { color: 'red', width: 10 }, fill: 'green' },
        context
      );

      return;
    }

    if (!line || !point) {
      console.error('Path data invalid');
    }

    if (line.type != 'LINE' || point.type != 'POINT') {
      console.error('Path data is invalid');
      return;
    }

    switch (line.variant) {
      case 'LINEAR':
        context.lineTo(point.x, point.y);
        break;
      case 'BEZIER':
        context.bezierCurveTo(
          line.controlPoint1.x,
          line.controlPoint1.y,
          line.controlPoint2.x,
          line.controlPoint2.y,
          point.x,
          point.y
        );
        break;
      case 'ARC':
        context.quadraticCurveTo(
          line.controlPoint.x,
          line.controlPoint.y,
          point.x,
          point.y
        );
        break;
    }
  }
  applyStyles({ stroke: { color: 'red', width: 10 }, fill: 'green' }, context);
  context.closePath();
};
