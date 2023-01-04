import type { Shape } from './shapes/Shape/Shape';

export class Scene {
  private objects: Shape[] = [];

  add(shape: Shape) {
    if (!this.objects.includes(shape)) {
      this.objects.push(shape);
    }
  }

  remove(shape: Shape) {
    const index = this.objects.indexOf(shape);
    if (index > -1) {
      this.objects.splice(index, 1);
    }
  }
}
