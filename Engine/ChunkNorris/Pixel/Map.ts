// import {tileset} from './Tileset.js'
import Tileset from "./Tileset.ts";
// import Chunk from './Chunk.ts'
import { Vec } from "math";

// console.log(tileset)
const chunktest = {
  name: "chunktest",
  id: 1,
  x: 0,
  y: 0,
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((x) => x % 2 ? 11 : 2),
    },
    {
      name: "middle",
      tiles: [],
    },
    {
      name: "foreground",
      tiles: [4, 4, 4, 4, 4, 4, 4, 4],
    },
  ],
};

const chunktest2 = {
  name: "chunktest2",
  id: 2,
  x: 1,
  y: 0,
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((x) => x % 2 ? 5 : 4),
    },
    {
      name: "middle",
      tiles: [],
    },
    {
      name: "foreground",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
  ],
  objects: [
    {
      name: "box",
      type: "box",
      slug: "box",
      x: 15,
      y: 5,
    },
  ],
};

const chunktest3: ChunkInfo = {
  name: "chunktest3",
  id: 3,
  coord: new Vec(2, 0),
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((x) => {
        return x % 2 ? 3 : 5;
      }),
    },
    {
      name: "middle",
      tiles: [],
    },
    {
      name: "foreground",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
  ],
  objects: [
    {
      name: "box",
      type: "box",
      slug: "box",
      coord: new Vec(6, 2),
    },
  ],
};
const chunktest4: ChunkInfo = {
  name: "chunktest4",
  id: 4,
  coord: new Vec(0, 1),
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((x) => x % 2 ? 2 : 8),
    },
    {
      name: "middle",
      tiles: [],
    },
    {
      name: "foreground",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
  ],
  objects: [],
};

const chunktest5: ChunkInfo = {
  name: "chunktest5",
  id: 5,
  coord: new Vec(2, 1),
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((_x) => 1),
    },
    {
      name: "middle",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
    {
      name: "foreground",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
  ],
};
const chunktest6: ChunkInfo = {
  name: "chunktest5",
  id: 5,
  coord: new Vec(1, 1),
  width: 32,
  height: 32,
  layers: [
    {
      name: "background",
      tiles: Array.from(Array(1024).keys()).map((_x) => 1),
    },
    {
      name: "middle",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
    {
      name: "foreground",
      tiles: Array.from(Array(1024).keys()).map((_x) => -1),
    },
  ],
};

export type ChunkInfo = {
  id: number;
  name: string;
  coord: Vec;
  width: number;
  height: number;
  layers: Array<{
    name: string;
    tiles: Array<number>;
  }>;
  objects?: Array<{
    name: string;
    type: string;
    slug: string;
    coord: Vec;
  }>;
};

export class MapGen {
  #tileset: Tileset = new Tileset();
  constructor() {
    const listChunk = [
      chunktest,
      chunktest2,
      chunktest3,
      chunktest4,
      chunktest5,
      chunktest6,
    ];

    // this.chunks = Promise.all(chunks)
    // const mapdata = this.chunks.then((chunks) => {
    // 	const width = (3 * 1024) * 1.7//chunks.reduce((acu, chunk) => acu + (chunk.data.x * 1024) , 0)
    // 	const height = (2 * 1024)  * 1.7 //chunks.reduce((acu, chunk) => acu + (chunk.data.y * 1024) , 0)
    // 	const map = document.createElement('canvas')
    // 	map.width = width
    // 	map.height = height
    // 	const context = map.getContext('2d')
    // 	context.scale(1.7, 1.7)
    // 	for (const chunk of chunks) {
    // 		context.drawImage(chunk.image, 0, 0, 1024, 1024, (chunk.data.x * 1024), chunk.data.y * 1024, 1024, 1024);
    // 	}
    // 	return {map:map, width: map.width, height: map.height}
    // })
    // return mapdata
  }
  async #image(blobdata: any, chunk: ChunkInfo[]) {
    // const blob = await blobdata
    // const newImg = document.createElement('img')
    // const url = URL.createObjectURL(blob);
    // newImg.classList.add(`chunk-${chunk.name}`)
    // newImg.src = url;
    // await newImg.decode();
    // // URL.revokeObjectURL(url);
    // // return newImg.onload = function() {
    // 	// };
    // return newImg
  }
}
