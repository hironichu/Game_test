import { Size, Vec } from "math";
import IEntity from "../Interfaces/IEntity.ts";
export default class Prop {
  constructor(public propdata: unknown) {
  }
  //Function that manage [PROPS] Objects within the Game
  // const spritedata = Engine.assets.get('props').find(prop => prop.name === propdata.sprite);
  // this.name = propdata.name;
  // this.id = propdata.id;
  // this.layer = propdata.layer;

  // Engine.Prop.prototype.update = function() {
  // 	// this.mapx = (this.x - this.width / 2) - Engine.Game.camera.xView;
  // 	// this.mapy = (this.y - this.height / 2) - Engine.Game.camera.yView;
  // }
  // Engine.Prop.prototype.draw = function() {
  // 	// if ((this.x + this.width) < Engine.Game.camera.xView || (this.x + this.width) > Engine.Game.camera.xView + Engine.CTX[2].canvas.width || (this.y + this.height) < Engine.Game.camera.yView || (this.y + this.height) > Engine.Game.camera.yView + Engine.CTX[2].canvas.height) {
  // 	// 	this.drawn = false;
  // 	// 	Game.DrawnObjects.delete(this)
  // 	// } else {
  // 	// 	Engine.CTX[2].drawImage(this.sprite.sprite, this.mapx, this.mapy, this.width, this.height);
  // 	// 	this.drawn = true;
  // 	// 	Game.DrawnObjects.add(this)
  // 	// }
  // 	// //Draw the hitbox
  // 	// Engine.CTX[2].beginPath();
  // 	// Engine.CTX[2].strokeStyle = '#ff0000';
  // 	// Engine.CTX[2].rect(this.mapx + this.hitbox.x, this.mapy + this.hitbox.y, this.hitbox.width, this.hitbox.height);
  // 	// Engine.CTX[2].stroke();
  // }
  // Engine.Prop.prototype.changeLayer = function(layer) {
  // 	this.layer = layer;
  // }
  // Engine.Prop.prototype.colided = function(ColisionOrigin,x, y, step) {
  // 	// if (this.movable) {
  // 	// 	if (ColisionOrigin.direction === 'left') {
  // 	// 		if (this.x < x) this.x -= this.weight * step;
  // 	// 	}
  // 	// 	if (ColisionOrigin.direction === 'up') {
  // 	// 		if (this.y < y) this.y -= this.weight * step;
  // 	// 	}
  // 	// 	if (ColisionOrigin.direction === 'right') {
  // 	// 		if (this.x > x) this.x += this.weight * step;
  // 	// 	}
  // 	// 	if (ColisionOrigin.direction === 'down') {
  // 	// 		if (this.y > y)  this.y += this.weight * step;
  // 	// 	}
  // 	// }
  // }
}
