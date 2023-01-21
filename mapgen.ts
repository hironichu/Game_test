import { Vec } from "math";
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

const chunktest3 = {
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
const chunktest4 = {
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

const chunktest5 = {
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
const chunktest6 = {
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

const chunks = [
  chunktest,
  chunktest2,
  chunktest3,
  chunktest4,
  chunktest5,
  chunktest6,
];
// from the chunks, generate a default.map file containing the chunks,
// create a {}.layer for each layer in each chunk, and a {}.object for each object in each chunk
//reference these layers and objects in the map file, by setting the layer and object properties to the correct layer and object names

//Encode each Bloc type as the smallest possible number of bits into a buffer
//Lets try a basic example for one chunk and one layer for now

// Use a buffer to store the chunk info
///  name: "chunktest5",
// id: 5,
// coord: new Vec(1, 1),
// width: 32,
// height: 32,

const chunkLayer1buffer = new ArrayBuffer(chunktest.layers[0].tiles.length * 2);

const buffview = new DataView(chunkLayer1buffer);

const layer = chunktest.layers[0];

for (let i = 0; i < layer.tiles.length; i++) {
  buffview.setUint16(i * 2, layer.tiles[i], true);
}

//write the file to disk
Deno.writeFileSync("chunktest5.layer", new Uint8Array(chunkLayer1buffer));
// const buffmap = new ArrayBuffer(chunkLayer1buffer.byteLength + 4);
