import { Size, Vec } from "math";
import Entity, { EntityLayer, EntityType } from "./Entity.ts";
// import { HitboxType } from "./Hitbox.ts";
import IEntity from "../Interfaces/IEntity.ts";
export type PlayerData = {
  id: number;
  name: string;
  uuid: string;
  wsid: string;
  layer: number;
  sprite: string;
  size: Size;
  position: Vec;
  velocity: Vec;
  type: EntityType.Player;
  self: boolean;
};

export default class Player extends Entity implements IEntity {
  // //Function that manage [PLAYER] Objects within the Game
  public position: Vec = new Vec(0, 0);
  public velocity: Vec = new Vec(0, 0);
  public speed = 0;
  public layer = EntityLayer.Middle;
  public mass: number;
  public size: Size;
  constructor(public playerdata: PlayerData) {
    super(playerdata);
    this.position = playerdata.position;
    this.velocity = playerdata.velocity;
    this.mass = 1;
    this.size = playerdata.size;
    //     const name = this.playerdata.name;
    //     const id = playerdata.id;
    //     const uuid = playerdata.uuid;
    //     const wsid = playerdata.wsid;
    //     const layer = playerdata.layer;
    //     const sprite = Engine.assets.get(playerdata.sprite);
    //     const width = this.sprite.size[0];
    //     const self = playerdata.self || false;
    //     const height = this.sprite.size[1];
    //     const position = new Vec2(playerdata.position.x, playerdata.position.y);
    //     const velocity = new Vec2(playerdata.velocity.x, playerdata.velocity.y);
    //     const speed = playerdata.speed || 0;
    //     const mass = playerdata.mass;
    //     const direction = playerdata.direction;
    //     const health = playerdata.health;
    //     const maxHealth = playerdata.maxhealth;
    //     const posinmap = new Engine.Vector(0,0);
    //     const spriteFrame = new Engine.Vector(0, 0);
    //     const StaggerFrames = 8;
    //     const type = playerdata.type
    //     const hitbox = this.sprite.hitbox
    //     const drawn = true
    //     const canMove = false
    //     const walking = false
    //     const hitbox = this.sprite.hitbox
    //     const movements = {
    //         angle: 0,
    //         direction: 0,
    //         distance: 0,
    //         weight: 0,
    //         inputs: new Map(),
    //         history: new Map(),
    //         sight: new Map()
  }

  // }
  // this.update = function(netdata) {
  // 	console.log(netdata)
  // 	if (netdata.health === 0) return ;
  // 	this.name = netdata.name;
  // 	this.direction = netdata.direction;
  // 	this.walking = netdata.walking;
  // 	this.movements.weight = (this.mass * 0.98)
  // 	//Interpolate position and velocity to smooth movement with the server based on the netdata.movements.detla and the position and velocity sent
  // 	// console.log((netdata.position.x - this.position.x) * netdata.movements.delta)

  // 	//Update the position of the player
  // 	this.position.x = netdata.position.x;
  // 	this.position.y = netdata.position.y;
  // 	// this.velocity.lerp(new Engine.Vector(netdata.velocity.x, netdata.velocity.y), netdata.movements.detla);
  // 	this.velocity.x = netdata.velocity.x;
  // 	this.velocity.y = netdata.velocity.y;

  // 	this.position.x += (netdata.position.x - this.position.x) * Engine.Game.deltaTime - netdata.movements.delta;
  // 	this.position.y += (netdata.position.y - this.position.y) * Engine.Game.deltaTime - netdata.movements.delta;
  // 	this.velocity.x += (netdata.velocity.x - this.velocity.x) * Engine.Game.deltaTime - netdata.movements.delta;
  // 	this.velocity.y += (netdata.velocity.y - this.velocity.y) * Engine.Game.deltaTime - netdata.movements.delta;
  // 	// this.checkPlayerCollision()
  // 	//Update the health of the player
  // 	this.health = netdata.health;
  // 	this.maxHealth = netdata.maxhealth;
  // 	//Update the position of the player in the map
  // 	if (this.self) {
  // 		if (this.position.x - this.width / 2 < 0) {
  // 			this.position.x = this.width / 2;
  // 			this.velocity.x = 0;
  // 		}
  // 		if (this.position.y - this.height / 2 < 0) {
  // 			this.position.y = this.height / 2;
  // 			this.velocity.y = 0;
  // 		}
  // 		if (this.position.x + this.width / 2 > Engine.Game.currentmap.width) {
  // 			this.position.x = Engine.Game.currentmap.width - this.width / 2;
  // 			this.velocity.x = 0;
  // 		}
  // 		if (this.position.y + this.height / 2 > Engine.Game.currentmap.height) {
  // 			this.position.y =  Engine.Game.currentmap.height - this.height / 2;
  // 			this.velocity.y = 0;
  // 		}
  // 		// Engine.Game.camera.update();
  // 	}
  // 	this.posinmap.x = (this.position.x - this.width / 2) - Engine.Game.camera.xView;
  // 	this.posinmap.y = (this.position.y - this.height / 2) - Engine.Game.camera.yView;

  // }
  public update(): void {
  }
  // this.move = function() {
  // 	this.behind()
  // 	this.velocity.scaler(0.85)
  // 	if (this.self) {
  // 		Engine.Game.camera.update();
  // 	}
  // 	this.position.add(this.velocity);
  // 	this.posinmap.add(this.velocity);
  // }
  // this.checkPlayerCollision = function() {
  // 	[...Engine.Game.Players].forEach(([sid, player]) => {
  // 		if (player != this) {
  // 			if (this.collision(player)) {t
  // 			}
  // 		}
  // 	})
  // }
  // this.collision = function(player) {
  // 	//Check of the player is coliding with another player with its hitbox
  // 	if (this.position.x + this.hitbox.x > player.position.x - player.hitbox.x && this.position.x - this.hitbox.x < player.position.x + player.hitbox.x && this.position.y + this.hitbox.y > player.position.y - player.hitbox.y && this.position.y - this.hitbox.y < player.position.y + player.hitbox.y) {
  // 		return true
  // 	}
  // 	return false
  // }
  // this.checkMapCollision = function() {
  // 	// if (this.position.x - this.width / 2 < 0) {
  // 	// 	this.position.x = this.width / 2;
  // 	// 	this.velocity.x = 0;
  // 	// }
  // 	// if (this.position.y - this.height / 2 < 0) {
  // 	// 	this.position.y = this.height / 2;
  // 	// 	this.velocity.y = 0;
  // 	// }
  // 	// if (this.position.x + this.width / 2 > Engine.Game.currentmap.width) {
  // 	// 	this.position.x = Engine.Game.currentmap.width - this.width / 2;
  // 	// 	this.velocity.x = 0;
  // 	// }
  // 	// if (this.position.y + this.height / 2 > Engine.Game.currentmap.height) {
  // 	// 	this.position.y =  Engine.Game.currentmap.height - this.height / 2;
  // 	// 	this.velocity.y = 0;
  // 	// }
  // }
  // this.behind = function() {
  // 	//Check if a player is behind the player
  // 	// [...Engine.Game.Players].forEach(([sid, player]) => {
  // 	// 	if (player != this) {
  // 	// 		if (player.position.y - 64 < this.position.y - 64) {

  // 	// 		} else {

  // 	// 		}
  // 	// 	}
  // 	// })

  // }
  // this.changeLayer = function(layer) {
  // 	this.layer = layer
  // }
  // this.colided = function(ColisionOrigin,x,y, step) {
  // }
  // this.colide = function(x, y, step) {

  // }
  // this.cursor = function() {

  // }
  // this.info = function() {

  // }
  // this.draw = () => {
  // 	const posX = (this.position.x - this.width / 2) - Engine.Game.camera.xView
  // 	const posY = (this.position.y - this.height / 2) - Engine.Game.camera.yView

  // 	Engine.Game.DrawnObjects.add(this)
  // 	const SpritePosition = Math.floor(Engine.Game.gameFrames / this.StaggerFrames) % this.sprite.animations[this.direction].loc.length;
  // 	if (this.walking) {
  // 		this.spriteFrame.x = this.sprite.animation_step * SpritePosition;
  // 		this.spriteFrame.y = this.sprite.animations[this.direction].loc[SpritePosition].y

  // 	} else {
  // 		this.spriteFrame.x = this.sprite.animations[this.direction].loc[0].x
  // 		this.spriteFrame.y = this.sprite.animations[this.direction].loc[0].y
  // 	}
  // 	//print the current layer of the player

  // 	Engine.CTX[2].drawImage(this.sprite.canvas, this.spriteFrame.x, this.spriteFrame.y, this.width, this.height,posX, posY, this.width, this.height);

  // 	let color = '#00ff00'

  // 	// if (!this.self) {
  // 		if (this.health < 20) {
  // 			color = "red"
  // 			// Engine.CTX[2].canvas.style.boxShadow = `inset 0 0 100px ${red}`;
  // 			// if (!Engine.CTX[2].canvas.classList.contains('flash-health')) {
  // 			// 	Engine.CTX[2].canvas.classList.add('flash-health')
  // 			// }
  // 		} else if (this.health < 50) {
  // 			color = "yellow"
  // 		} else {
  // 			color = "green"
  // 		}
  // 		Engine.CTX[2].textAlign  = "center"
  // 		Engine.CTX[2].fillStyle = '#000';
  // 		Engine.CTX[2].fillRect(posX + 10, posY - 10, this.width, 5);
  // 		Engine.CTX[2].fillStyle = color;
  // 		Engine.CTX[2].fillRect(posX + 10, posY - 10, this.width * this.health / this.maxHealth, 5);
  // 		Engine.CTX[2].fillStyle = '#fff';
  // 		Engine.CTX[2].fillText(this.health + '/' + this.maxHealth, posX + 32, posY - 15);
  // 		Engine.CTX[2].fillStyle = '#fff';
  // 		Engine.CTX[2].fillText(this.name, posX + 32, posY - 25);
  // 		Engine.CTX[2].fillStyle = '#fff';
  // 		Engine.CTX[2].fillText(Math.round(this.posinmap.x) + ',' + Math.round(this.posinmap.y), posX + 80, posY - 5);
  // 		Engine.CTX[2].fillStyle = '#fff';
  // 		Engine.CTX[2].fillText(Math.round(this.position.x) + ',' + Math.round(this.position.y), posX + 80, posY + 5);
  // 	// }

  // 	const hbplayer = {
  // 		x: this.x ,
  // 		y: this.y,
  // 		radius: this.hitbox.width,
  // 		height: this.hitbox.height,
  // 	}

  // 	if (this.hitbox.type == 'circle') {
  // 		Engine.CTX[2].beginPath();
  // 		Engine.CTX[2].arc(posX + this.hitbox.x, posY + this.hitbox.y, this.hitbox.width, 0, 2 * Math.PI);
  // 		Engine.CTX[2].strokeStyle = '#fff';
  // 		Engine.CTX[2].stroke();
  // 	} else if (this.hitbox.type == 'square') {
  // 		Engine.CTX[2].beginPath();
  // 		Engine.CTX[2].strokeStyle = '#ff0000';
  // 		Engine.CTX[2].rect(posX + this.hitbox.x, posY + this.hitbox.y, hbplayer.radius, hbplayer.height);
  // 		// Engine.CTX[2].rect(hbobject.x, hbobject.y, hbobject.radius, hbobject.height);
  // 		Engine.CTX[2].stroke();
  // 	}
  // }
}
