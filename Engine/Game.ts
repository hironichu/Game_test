import {
  CanvasRenderingContext2D,
  getPrimaryMonitor,
  mainloop,
  WindowCanvas,
} from "dwmc";

import { GameConfig } from "../init.ts";
import { Vec } from "math";
import { Asl } from "./Assets/Asl.ts";
export class Engine {
  protected readonly boottime = performance.now();
  // DWM
  public window!: WindowCanvas;
  public ctxs: CanvasRenderingContext2D[] = [];
  protected monitor = getPrimaryMonitor();

  // Math
  public Vec = Vec;

  // Engine Config
  #config: GameConfig;
  // RunTime
  public Cursor!: Vec;

  private assetLoader!: Asl;
  constructor(config: GameConfig) {
    this.#config = config;
    // this.#init();
    this.assetLoader = new Asl(this.#config);
  }
  public async start() {
    await this.#init();
  }
  async #init() {
    this.window = new WindowCanvas({
      title: `Frostbite - Prototype ${this.#config.version}`,
      resizable: true,
      removeDecorations: this.#config.settings.graphics.borderless,
      maximized: this.#config.settings.graphics.borderless,
    });
    this.window.window.setSizeLimits(
      400,
      300,
      this.monitor.workArea.width,
      this.monitor.workArea.height,
    );
    this.window.window.setCursorPos(
      this.monitor.workArea.width / 2,
      this.monitor.workArea.height / 2,
    );
    this.window.window.setInputMode("cursor", "disabled");
    console.log(
      `Engine v${this.#config.version} initialized [${
        Math.round(performance.now() - this.boottime)
      }ms]`,
    );
    this.ctxs.push(this.window.ctx);
    this.Cursor = new this.Vec(
      this.window.canvas.width / 2,
      this.window.canvas.height / 2,
    );
    this.window.onDraw = this.#draw.bind(this);
    addEventListener("pointermove", (e) => {
      if (!this.window.window.focused) {
        e.preventDefault();
      }
      this.Cursor.x = e.x;
      this.Cursor.y = e.y;
    });

    await mainloop(() => {
      this.window.draw();
    });
  }
  /**
   * Load all AssetLoader classes.
   */
  #load() {
    const starTTime = performance.now();
    // 		const player_default = await (await import('./entities/Player.entity.js')).Player
    // 		const player_girl =  await (await import('./entities/Player2.entity.js')).Player
    // 		const props  = await (await import('./entities/Default.entity.js')).Props
  }
  #draw() {
    this.ctxs[0].clearRect(
      0,
      0,
      this.window.canvas.width,
      this.window.canvas.height,
    );
    //draw cursor
    this.ctxs[0].fillStyle = "white";
    //draw a circle
    this.ctxs[0].beginPath();
    this.ctxs[0].arc(
      this.Cursor.x,
      this.Cursor.y,
      5,
      0,
      Math.PI * 2,
      true,
    );
    this.ctxs[0].fill();
    //draw text
    this.ctxs[0].fillStyle = "white";
    this.ctxs[0].font = "20px Arial";
    this.ctxs[0].fillText(
      `Cursor: ${this.Cursor.x} ${this.Cursor.y}`,
      10,
      20,
    );
    this.ctxs[0].fillText("Romain est un gros con", 10, 40);
    //draw fps
    this.ctxs[0].fillStyle = "white";
    this.ctxs[0].font = "20px Arial";
    this.ctxs[0].fillText("Version 0.0.1", 10, 60);
  }
}

// 	start: async () => {
// 		const time = performance.now();
// 		const player_default = await (await import('./entities/Player.entity.js')).Player
// 		const player_girl =  await (await import('./entities/Player2.entity.js')).Player
// 		const props  = await (await import('./entities/Default.entity.js')).Props
// 		Engine.assets.set('props', await props)
// 		Engine.assets.set('player_default', await player_default)
// 		Engine.assets.set('player_girl', await player_girl)
// 		Engine.assets.set('walls', await (await import('./entities/Walls.entity.js')).Props)
// 		Engine.Game = await (await import('./Game.js')).Game;
// 		await console.info(`Asset loaded [${Math.round(performance.now() - time)}ms]`)
// 		if (!(window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')) {
// 			Engine.serverName = "wss://frostbite-engine.deno.dev"
// 			// if (!Engine.serverName || Engine.serverName === "") {
// 			// 	await Engine.Game.stop("No server name provided, stopping the game");
// 			// 	return;
// 			// }
// 		}
// 		Engine.playername = prompt("Choose a Username ");
// 		if (!Engine.playername) Engine.playername = "bob";
// 		Engine.ws = new WebSocket((window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'  ? 'ws://localhost:8080': Engine.serverName));
// 		var id = new Uint32Array(32);
// 		const rand = window.crypto.getRandomValues(id);
// 		const UUIDurl = URL.createObjectURL(new Blob(rand))
// 		const UUID = UUIDurl.substring(UUIDurl.lastIndexOf('/') + 1)
// 		Engine.ws.id = UUID;
// 		Engine.ws.onerror = async (e) => {
// 			await Engine.Game.stop(e.reason || `The Server or the client found a nasty bug`);
// 		}
// 		Engine.ws.onopen = async () => {
// 			await Engine.ws.send(JSON.stringify({
// 				type: 'init',
// 				id: Engine.ws.id,
// 				data: {
// 					wsid: Engine.ws.id,
// 					name: Engine.playername,
// 					version: Engine.version,
// 					screenWidth: Engine.CTX[2].canvas.clientWidth,
// 					screenHeight: Engine.CTX[2].canvas.clientHeight,
// 					fps: fps
// 				}
// 			}));
// 		}
// 		Engine.ws.onclose = async (data) => {
// 			console.log(`Connection closed [${data.code}] ${data.reason}`, data);
// 			switch(data.type) {
// 				case 'close':
// 					await Engine.Game.stop(data.reason || `The Server closed the connection`);
// 					break;
// 				case 'error':
// 					await Engine.Game.stop(data.reason || `Error while joining the server`);
// 					break;
// 			}
// 			//Stop the game
// 			// await Engine.Game.stop(data.reason);
// 		}
// 		Engine.ws.onmessage = async (event) => {
// 			const message = JSON.parse(event.data);
// 			switch (message.type) {
// 				case 'player.init':
// 					// console.log('INIT', message.data);
// 					console.info(`Game started [${Math.round(performance.now() - window.loadedtime)}ms]`);
// 					await Engine.Game.start(message.data.data, message.data.visiblePlayers, Engine);
// 					break;
// 				case'player.new':
// 					//
// 					console.info(`Player online [${Math.round(performance.now() - window.loadedtime)}ms] Name : ${message.data.player.name}`);
// 					Engine.Game.newOnlinePlayer(message.data.player);
// 					break;
// 				case 'player.update':
// 					// alert(`Player update`);
// 					//Check updatetype
// 					switch (message.data.updatetype) {
// 						case 'player.move':
// 							if (Engine.Game.Players.has(message.data.id)) {
// 								// alert(`Player move`);
// 								Engine.Game.Players.get(message.data.id).update(message.data.data);
// 							}
// 						break;
// 						default:
// 							//
// 						break;
// 					}
// 					break;
// 				case 'player.meet':

// 					break;
// 				case 'player.disconnect':
// 					console.info(`Player offline [${Math.round(performance.now() - window.loadedtime)}ms]`);
// 					Engine.Game.Players.delete(message.data.clientid);
// 					break;
// 				case 'error':
// 					console.error(message);
// 					break;
// 				default:
// 					console.error(message);
// 				break;
// 			}
// 		}
// 	},
// 	Vector: await (await import('./Engine/Vector.js')).default,
// 	Map: await (await import('./Engine/Map.js')).default,
// 	Player: await (await import('./Game/Player.js')).default,
// 	Entity: await (await import('./Game/Entity.js')).default,
// 	Prop: await (await import('./Game/Prop.js')).default,
// 	Wall: await (await import('./Game/Wall.js')).default,
// 	Rectangle: await (await import('./Engine/Rectangle.js')).default,
// 	Camera: await (await import('./Engine/Camera.js')).default,
// }

// export default Engine;
