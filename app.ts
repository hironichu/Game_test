// import { getPrimaryMonitor, mainloop, WindowCanvas } from "dwmc";
import { Engine } from "./Engine/Game.ts";
import { config } from "./init.ts";

const ENG = new Engine(config(false));

await ENG.start();
