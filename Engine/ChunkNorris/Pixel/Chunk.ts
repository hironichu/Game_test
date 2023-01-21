// import { createCanvas, Canvas, CanvasRenderingContext2D }  from "../../dwm/dwm/ext/canvas.ts";
// import TileSet from "./Tileset.ts";
// export default class Chunk {
//     public canvas : Canvas;
//     public ctx : CanvasRenderingContext2D;
//     public width : number;
//     public height : number;
//     public blocsize : number;
//     public tilesize : number;
//     public tileset : string;
// 	constructor (chunk: any, tileset: TileSet) {
// 		// console.info(`Generating Chunk ${chunk.name}`)
// 		// this.canvas = document.createElement('canvas')
// 		// this.ctx = this.canvas.getContext('2d')
// 		// this.width = 1024
// 		// this.height = 1024
// 		// this.canvas.width = this.width
// 		// this.canvas.height = this.height

// 		// this.blocsize = 32;
// 		// this.tilesize = 32;
// 		// this.tileset = tileset.url
// 		// this.tilesetdata = tileset.data
// 		// this.chunk = chunk
// 		// return this.#generate()
// 	}
// 	// #generate = async () => {
// 	// 	const result = await this.#loadset()
// 	// 	Object.values(this.chunk.layers).forEach((layer) => {
// 	// 		// console.log('Name ', this.chunk.name, 'Layer ', layer.name)
// 	// 		if (layer.tiles.length > 0) {
// 	// 			if (layer.tiles.length <= 1024) {
// 	// 				for (let i = layer.tiles.length; i < 1024; i++) {
// 	// 					layer.tiles.push(-1)
// 	// 				}
// 	// 			}
// 	// 			Object.values(layer.tiles).forEach((key, index) => {
// 	// 				if (key !== -1) {
// 	// 					const x = Math.floor(index % this.chunk.width)
// 	// 					const y = Math.floor(index / this.chunk.height)
// 	// 					const tile = result.get(key)
// 	// 					// console.log(tile)
// 	// 					this.ctx.drawImage(tile.image, 0, 0, this.blocsize, this.blocsize, x * this.blocsize, y * this.blocsize, this.blocsize, this.blocsize);
// 	// 				}
// 	// 			})
// 	// 		}
// 	// 	})
// 	// 	const chunkdata = await new Promise(resolve => this.canvas.toBlob(resolve,'image/png', 1)); //this.canvas.toBlob((blob) => {console.log(blob)}, 'image/webp', 1)
// 	// 	return chunkdata
// 	// }
// 	// async #loadsets (img) {
// 	// 	const tiles = this.tilesetdata.tiles;
// 	// 	const urls = Object.values(tiles).reduce(async (accu ,tile, index) => {
// 	// 		const bitmap = await createImageBitmap(img,  tile.x,  tile.y, 32, 32, {resizeQuality: "pixelated", resizeWidth: this.blocsize, resizeHeight: this.blocsize})
// 	// 		const canvasDebug = document.createElement('canvas')
// 	// 		canvasDebug.height = 32
// 	// 		canvasDebug.width = 32
// 	// 		canvasDebug.getContext('2d').drawImage(bitmap, 0, 0, this.blocsize, this.blocsize);
// 	// 		let ret = await accu
// 	// 		ret.set(index, {name: tile.name ,index:index, image: bitmap, data: canvasDebug.toDataURL()})
// 	// 		return ret
// 	// 	}, new Map)
// 	// 	return urls
// 	// }

// 	// async #loadset (){
// 	// 	return new Promise((resolve, reject) => {
// 	// 		const img = new Image()
// 	// 		img.src = this.tileset
// 	// 		img.onload = () => resolve(this.#loadsets(img))
// 	// 		img.onerror = () => reject(`Error LOL`)
// 	// 	})
// 	// }
// }
