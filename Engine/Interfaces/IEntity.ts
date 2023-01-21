import { Size, Vec } from "math";
import { EntityType } from "../Entities/Entity.ts";
import Hitbox from "../Objects/Hitbox.ts";

export default interface IEntity {
  id?: number;
  name?: string;
  size?: Size;

  position: Vec;
  type: EntityType;
  mass: number;
  hitbox: Hitbox;
  layer: number;

  update?(): void;
  draw?(): void;
  move?(vec: Vec): void;
}
