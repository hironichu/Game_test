// const tfile = Deno.makeTempFileSync({
//   prefix: "proto_",
//   dir: "./",
// });
/**
 * const chunkLayer1buffer = new ArrayBuffer(chunktest.layers[0].tiles.length * 2);

const buffview = new DataView(chunkLayer1buffer);

const layer = chunktest.layers[0];

for (let i = 0; i < layer.tiles.length; i++) {
  buffview.setUint16(i * 2, layer.tiles[i], true);
}
 */
const file = Deno.openSync("./chunktest5.layer", {
  read: true,
  write: true,
  truncate: false,
  create: false,
});
file.seekSync(49 * 2, Deno.SeekMode.Start);
Promise.all([
  (
    () => {
      setInterval(() => {
        //using the code we use to write the layer file, get the layer data from byte 49 to 639 //Test
        const layerData = new Uint8Array(640);
        // file.seekSync(49, Deno.SeekMode.Start);
        //Take note of the fact that we use Uint16 bytes, so we need to seek 2 bytes at a time
        file.readSync(layerData);
        const dataview = new DataView(layerData.buffer);
        let store = [];
        for (let i = 0; i < 320; i++) {
          store.push(dataview.getUint16(i * 2, true));
        }
        console.log(store);
        store = [];
        file.seekSync(49 * 2, Deno.SeekMode.Start);
      }, 3000);
    }
  )(),
]);
// // advance cursor 6 bytes
// const cursorPosition = file.seekSync(6, Deno.SeekMode.Start);
// console.log(cursorPosition); // 6
// const buf = new Uint8Array(100);
// file.readSync(buf);
// console.log(new TextDecoder().decode(buf)); // "world"
// //seek to the beginning of the file
// file.seekSync(0, Deno.SeekMode.Start);
// //truncate the file to 11 bytes
// file.truncateSync(11);
// //close the file
// file.close();
