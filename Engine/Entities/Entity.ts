import { Size, Vec } from "math";
import Hitbox, { HitboxType } from "../Objects/Hitbox.ts";
import IEntity from "../Interfaces/IEntity.ts";
// export type EntityType = "solid" | "entity" | "player" | "enemy" | "item" | "trigger" | "background" | "foreground" | "ui" | "none";
export enum EntityType {
  None,
  Entity,
  Player,
  Enemy,
  Item,
  Trigger,
  UI,
  Solid,
}
export enum EntityLayer {
  Background,
  Middle,
  Foreground,
  UI,
}

export type EntityData = {
  id?: number;
  name?: string;
  size?: Size;
  type: EntityType;
  hitbox?: Hitbox;
};

export default abstract class Entity implements IEntity {
  public readonly type: EntityType;

  public abstract layer: EntityLayer;
  public abstract position: Vec;
  public abstract readonly mass: number;
  public readonly hitbox: Hitbox;
  constructor(entityData: EntityData) {
    this.type = entityData.type || EntityType.None;

    this.hitbox = entityData.hitbox ?? (() => {
      switch (this.type) {
        case EntityType.Player: {
          return new Hitbox({
            offset: new Vec(0, 0),
            size: { width: 32, height: 32 },
            type: HitboxType.Rect,
          });
        }
        case EntityType.Solid: {
          return new Hitbox({
            offset: new Vec(0, 0),
            size: { width: 32, height: 32 },
            type: HitboxType.Rect,
          });
        }
        case EntityType.Trigger: {
          return new Hitbox({
            offset: new Vec(0, 0),
            size: { width: 32, height: 32 },
            type: HitboxType.Rect,
          });
        }
        default: {
          return new Hitbox({
            offset: new Vec(0, 0),
            size: { width: 32, height: 32 },
            type: HitboxType.Rect,
          });
        }
      }
    })();
  }
  public update() {
    //
  }
  public draw() {
    //
  }
}
