import type { Anchor } from '../../types';
import type { Height } from '../../types/Height';
import type { Point } from '../../types/Point';
import type {
  CloseElement,
  CreationPath,
  PathPointElement,
  SpecificLineElement,
} from '../../types/shapes/path';
import type { Width } from '../../types/Width';
import { Shape } from '../shape/Shape';

export class Path extends Shape {
  protected RENDER_ANCHOR: Anchor = 'CENTER';

  constructor({ fill }: CreationPath) {
    super({ fill, type: 'PATH' });
  }

  path: (PathPointElement | SpecificLineElement | CloseElement)[] = [];

  private get mostLeftPathPoint() {
    return Math.min(...this.points().map((point) => point.x));
  }

  private get mostRightPathPoint() {
    return Math.max(...this.points().map((point) => point.x));
  }

  private get mostTopPathPoint() {
    return Math.min(...this.points().map((point) => point.y));
  }

  private get mostBottomPathPoint() {
    return Math.max(...this.points().map((point) => point.y));
  }

  get x() {
    return this.mostLeftPathPoint;
  }

  get y() {
    return this.mostTopPathPoint;
  }

  get width(): Width {
    return this.mostRightPathPoint - this.mostLeftPathPoint;
  }

  get height(): Height {
    return this.mostBottomPathPoint - this.mostTopPathPoint;
  }

  points(): PathPointElement[] {
    return this.path.filter(
      ({ type }) => type == 'POINT'
    ) as PathPointElement[];
  }

  fromPoints(points: Point[]): Path {
    this.path = [];

    points.forEach(({ x, y }, i) => {
      this.path.push({ type: 'POINT', x, y });
      if (i < points.length - 1) {
        this.path.push({ type: 'LINE', variant: 'LINEAR' });
      }
    });
    return this;
  }

  smoothen(): Path {
    //TODO: Implement smoothing
    return this;
  }

  start({ x, y }: Point): Path {
    this.path = [{ type: 'POINT', x, y }];
    return this;
  }

  linearTo({ x, y }: Point): Path {
    if (this.path.length == 0) {
      throw Error('You need a startpoint');
    }
    this.path.push({ type: 'LINE', variant: 'LINEAR' });
    this.path.push({ type: 'POINT', x, y });
    return this;
  }

  bezierTo(
    { x, y }: Point,
    controlPoint1?: Point,
    controlPoint2?: Point
  ): Path {
    if (this.path.length == 0) {
      throw Error('You need a startpoint');
    }
    this.path.push({
      type: 'LINE',
      variant: 'BEZIER',
      controlPoint1,
      controlPoint2,
    });
    this.path.push({ type: 'POINT', x, y });
    return this;
  }

  arcTo({ x, y }: Point, controlPoint: Point): Path {
    if (this.path.length == 0) {
      throw Error('You need a startpoint');
    }
    this.path.push({
      type: 'LINE',
      variant: 'ARC',
      controlPoint,
    });
    this.path.push({ type: 'POINT', x, y });
    return this;
  }

  close(): this {
    if (this.path.length < 3) {
      throw new Error('The path is not long enough to be closed');
    }
    this.path.push({ type: 'CLOSE' });
    return this;
  }
}
