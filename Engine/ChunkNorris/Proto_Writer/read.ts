const file = Deno.openSync("./chunktest5.layer", {
  read: true,
  write: true,
  truncate: false,
  create: false,
});
file.seekSync(49 * 2, Deno.SeekMode.Start);

//every 5 seconds, write a Uint16 byte from the Seek position to the byte 639
let index = 0;
setInterval(() => {
  const newbyte = new Uint16Array(1);
  newbyte[0] = 0xFFFFFF0;
  file.writeSync(new Uint8Array(newbyte));
  index++;
  file.seekSync(49 * 2 + index * 2, Deno.SeekMode.Start);
  if (index > 320) {
    Deno.exit(0);
  }
}, 100);
