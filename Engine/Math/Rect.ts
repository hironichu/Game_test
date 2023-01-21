export default class Rectangle {
  left: number;
  top: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
  constructor(left: number, top: number, width: number, height: number) {
    this.left = left || 0;
    this.top = top || 0;
    this.width = width || 0;
    this.height = height || 0;
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
  }
  set(
    left: number,
    top: number,
    width?: number | undefined,
    height?: number | undefined,
  ) {
    this.left = left;
    this.top = top;
    this.width = width || this.width;
    this.height = height || this.height;
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
  }
  within(r: Rectangle) {
    return (r.left <= this.left && r.right >= this.right && r.top <= this.top &&
      r.bottom >= this.bottom);
  }
  overlaps(r: Rectangle) {
    return (this.left < r.right && r.left < this.right && this.top < r.bottom &&
      r.top < this.bottom);
  }
}
