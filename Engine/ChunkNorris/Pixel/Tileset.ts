import { Vec } from "math";

export default class TileSet {
  public tilesize = 32;
  public size = [8, 8];
  constructor(public url: string = "assets/tileset/Tileset_Grass.png") {
    //
  }
  get tiles(): Vec[] {
    const tiles: Vec[] = [];
    if (this.size[0] * this.size[1] > 0) {
      for (let i = 0; i < (this.size[0] * this.size[1]); i++) {
        tiles.push(
          new Vec(
            (i % this.size[0]) * this.tilesize,
            (Math.floor(i / this.size[0])) * this.tilesize,
          ),
        );
      }
    }
    return tiles;
  }
}
