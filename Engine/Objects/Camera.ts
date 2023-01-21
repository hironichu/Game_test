import { Rect, Vec } from "math";
import Player from "../Entities/Player.ts";

const AXIS = {
  NONE: 1,
  HORIZONTAL: 2,
  VERTICAL: 3,
  BOTH: 4,
};
export default class Camera {
  //Function that manage [CAMERA] Objects within the Game

  public view: Vec;
  public wView: number;
  public hView: number;
  // public xDeadZone: number;
  // public yDeadZone: number;
  public Deadzone: Vec;
  public worldWidth: number;
  public worldHeight: number;
  public axis: number;
  public followed: Player | null;
  public viewportRect: Rect;
  public worldRect: Rect;
  public map: string;

  constructor(
    xView: number,
    yView: number,
    viewportWidth: number,
    viewportHeight: number,
    worldWidth: number,
    worldHeight: number,
    map: string,
  ) {
    this.view = new Vec(xView || 0, yView || 0);
    this.Deadzone = new Vec(0, 0);
    this.wView = viewportWidth;
    this.hView = viewportHeight;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.axis = AXIS.BOTH;
    this.followed = null;
    this.map = map;
    this.viewportRect = new Rect(
      this.view.x,
      this.view.y,
      this.wView,
      this.hView,
    );
    this.worldRect = new Rect(0, 0, worldWidth, worldHeight);
  }

  public follow(PlayerObject: Player, xDeadZone: number, yDeadZone: number) {
    this.followed = PlayerObject;
    this.Deadzone.x = xDeadZone;
    this.Deadzone.y = yDeadZone;
  }
  public update() {
    if (this.followed != null) {
      const x = this.followed.position.x + 64 / 2 - this.wView / 2 +
        this.followed.velocity.x;
      const y = this.followed.position.y + 64 / 2 - this.hView / 2 +
        this.followed.velocity.y;
      //lerp method

      //Make the camera follow with a smooth movement (lerp)
      this.view.x += x - this.view.x;
      this.view.y += y - this.view.y;
      //replace the above with vec method
      // this.view.lerp(new Vec(x, y), 0.1);

      if (this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH) {
        if (this.view.x < this.worldRect.width) {
          this.view.x = this.worldRect.width;
        }
        if (
          this.view.x + this.wView > this.worldRect.width + this.worldRect.width
        ) {
          this.view.x = this.worldRect.width + this.worldRect.width -
            this.wView;
        }
      }
      if (this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH) {
        if (this.view.y < this.worldRect.height) {
          this.view.y = this.worldRect.height;
        }
        if (
          this.view.y + this.hView >
            this.worldRect.height + this.worldRect.height
        ) {
          this.view.y = this.worldRect.height + this.worldRect.height -
            this.hView;
        }
      }
    }
    this.viewportRect.set(this.view.x, this.view.y);

    if (!this.viewportRect.within(this.worldRect)) {
      if (this.viewportRect.left < this.worldRect.left) {
        this.view.x = this.worldRect.left;
      }
      if (this.viewportRect.top < this.worldRect.top) {
        this.view.y = this.worldRect.top;
      }
      if (this.viewportRect.right > this.worldRect.right) {
        this.view.x = this.worldRect.right - this.wView;
      }
      if (this.viewportRect.bottom > this.worldRect.bottom) {
        this.view.y = this.worldRect.bottom - this.hView;
      }
    }
  }
  //Create a method that check if a Camera is within this Camera
  public within(Camera: Camera) {
    return (this.viewportRect.within(Camera.viewportRect));
  }
}
