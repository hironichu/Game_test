// export interface Vec {
//     x: number;
//     y: number;
//     z: number;
// }

// export abstract class Vec implements Vec {

//     constructor(public x: number, public y: number, public z: number) {}

//     //Addition
//     abstract add(v: Vec): Vec
//     //Subtraction
//     abstract sub(v: Vec): Vec
//     //Multiplication
//     abstract mul(v: Vec): Vec
//     //Division
//     abstract div(v: Vec): Vec
//     //Dot Product
//     abstract dot(v: Vec): number
//     //Cross Product
//     abstract cross(v: Vec): Vec
//     //Length
//     abstract len(): number
//     //Length Squared
//     abstract len2(): number
//     //Distance
//     abstract dist(v: Vec): number
//     //Distance Squared
//     abstract dist2(v: Vec): number
//     //Normalize
//     abstract norm(): Vec
//     //Rotate
//     abstract rot(a: number): Vec
//     //Angle
//     abstract angle(v: Vec): number
//     //Angle between two
//     abstract angle2(v1: Vec, v2: Vec): number
//     //Lerp
//     abstract lerp(v: Vec, t: number): Vec
//     //Clamp
//     abstract clamp(min: Vec, max: Vec): Vec
//     //Clamp Length
//     abstract clampLen(min: number, max: number): Vec

// }

// export class Vec2 extends Vec {

//     constructor(public x: number, public y: number, public z: number = 0) {
//         super(x, y, z);
//     }
//     add(v: Vec) {
//         return new Vec2(this.x + v.x, this.y + v.y);
//     }
//     sub(v: Vec) {
//         return new Vec2(this.x - v.x, this.y - v.y);
//     }
//     mul(v: Vec) {
//         return new Vec2(this.x * v.x, this.y * v.y);
//     }
//     div(v: Vec) {
//         return new Vec2(this.x / v.x, this.y / v.y);
//     }
//     dot(v: Vec) {
//         return this.x * v.x + this.y * v.y;
//     }
//     cross(v: Vec) {
//         return new Vec2(this.x * v.y, this.y * v.x);
//     }
//     len() {
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//     len2() {
//         return this.x * this.x + this.y * this.y;
//     }
//     dist(v: Vec) {
//         return Math.sqrt(this.dist2(v));
//     }
//     dist2(v: Vec) {
//         const dx = this.x - v.x;
//         const dy = this.y - v.y;
//         return dx * dx + dy * dy;
//     }
//     norm() {
//         return this.div(new Vec2(this.len(), this.len()));
//     }
//     rot(a: number) {
//         const c = Math.cos(a);
//         const s = Math.sin(a);
//         return new Vec2(this.x * c - this.y * s, this.x * s + this.y * c);
//     }
//     angle(v: Vec) {
//         return Math.atan2(this.cross(v).len(), this.dot(v));
//     }
//     angle2(v1: Vec, v2: Vec) {
//         return v1.angle(v2);
//     }
//     lerp(v: Vec, t: number) {
//         return new Vec2(this.x + (v.x - this.x) * t, this.y + (v.y - this.y) * t);
//     }
//     clamp(min: Vec, max: Vec) {
//         return new Vec2(Math.max(min.x, Math.min(max.x, this.x)), Math.max(min.y, Math.min(max.y, this.y)));
//     }
//     clampLen(min: number, max: number) {
//         const len = this.len();
//         return this.mul(new Vec2(Math.max(min, Math.min(max, len)) / len, Math.max(min, Math.min(max, len)) / len));
//     }
// }

export default class Vec {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vec) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  set(vector: Vec) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }
  subtract(vector: Vec) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  delta(vector: Vec) {
    this.x = vector.x - this.x;
    this.y = vector.y - this.y;
    return this;
  }
  moveTowards(vector: Vec, distance: number) {
    const delta = vector.subtract(this);
    const length = delta.length();
    if (length < distance) {
      this.set(vector);
      return this;
    }
    delta.normalize();
    delta.scaler(distance);
    this.add(delta);
    return this;
  }
  direction(vector: Vec) {
    const delta = vector.subtract(this);
    delta.normalize();
    return delta;
  }
  scaler(scaler: number) {
    this.x *= scaler;
    this.y *= scaler;
    return this;
  }
  multiply(vector: Vec) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  }
  dot(vector: Vec) {
    return this.x * vector.x + this.y * vector.y;
  }
  clone() {
    return new Vec(this.x, this.y);
  }
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
  divide(scaler: number) {
    this.x /= scaler;
    this.y /= scaler;
    return this;
  }
  invertY() {
    this.y *= -1;
    return this;
  }
  invertX() {
    this.x *= -1;
    return this;
  }
  invert() {
    this.invertX();
    this.invertY();
    return this;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    const length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  }
  clamp(min: number, max: number) {
    this.x = Math.min(Math.max(this.x, min), max);
    this.y = Math.min(Math.max(this.y, min), max);
    return this;
  }
  lerp(vector: Vec, t: number) {
    this.x += (vector.x - this.x) * t;
    this.y += (vector.y - this.y) * t;
    return this;
  }
  lerpunclamped(vector: Vec, t: number) {
    this.x += (vector.x - this.x) * t;
    this.y += (vector.y - this.y) * t;
    this.x = Math.min(Math.max(this.x, -1), 1);
    this.y = Math.min(Math.max(this.y, -1), 1);
    return this;
  }
  rotate(angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = this.x;
    const y = this.y;
    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;
    return this;
  }
  angle(vector: Vec) {
    return Math.atan2(vector.y - this.y, vector.x - this.x);
  }
  distance(vector: Vec) {
    const dx = vector.x - this.x;
    const dy = vector.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
