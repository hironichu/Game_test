import { Size, Vec } from "math";

export enum HitboxType {
  Circle,
  Rect,
}

export interface IHitbox {
  offset: Vec;
  size: Size;
  type: HitboxType;
}

export default class Hitbox implements IHitbox {
  public offset: Vec;
  public size: Size;
  public type: HitboxType;

  constructor(hitbox: IHitbox) {
    this.offset = hitbox.offset;
    this.size = hitbox.size;
    this.type = hitbox.type;
  }
}
