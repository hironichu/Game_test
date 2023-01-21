/** Assets Loader */

import { GameConfig } from "../../init.ts";
import { join } from "https://deno.land/std@0.173.0/path/mod.ts";
export class Asset {
}
export class Asl {
  private static _instance: Asl;
  private sourceURL: string;
  private _assets: { [key: string]: Asset } = {};
  private _loaders: { [key: string]: Asset } = {};
  private _loaded = false;
  public constructor(EngineConfig: GameConfig) {
    Asl._instance = this;
    this._loaders = {};
    this.sourceURL = join(EngineConfig.settings.installLocation, "assets");
  }
}
