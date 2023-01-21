import { getPrimaryMonitor } from "dwmc";
import { DwmMonitor } from "../dwm/dwm/src/core/monitor.ts";
const mon = getPrimaryMonitor();

export type InputType = "keyboard" | "gamepad";

export type GameConfig = {
  version: string;
  _internal: {
    _monitor: Partial<DwmMonitor>;
  };
  settings: {
    installLocation: string;
    audio: {
      masterVolume: number;
      musicVolume: number;
      sfxVolume: number;
    };
    controls: {
      mouse: {
        sensitivity: number;
        rawInput: boolean;
      };
      input: {
        selected: InputType;
        keyboard: {
          /// path to .binds file
          binds: string;
        } | null;
        gamepad: {
          /// path to .binds file
          binds: string;
        } | null;
      };
    };
    graphics: {
      vsync?: boolean; //Useless for now
      fpsLimit: number;
      fullscreen: boolean;
      borderless: boolean;
      resolution: {
        width: number;
        height: number;
      };
    };
  };
};
export const config = (override = true): GameConfig => {
  //From the above Type, create a default config containing the above values with Monitor, InputType, and other types replaced with their default values, translate it into JSOn
  //Then, write it to a file called "config.json" in the game's install location
  const defaultConfig: GameConfig = {
    version: "0.0.0",
    _internal: {
      _monitor: {
        name: mon.name,
        videoMode: mon.videoMode,
        contentScale: mon.contentScale,
        workArea: mon.workArea,
        position: mon.position,
      },
    },
    settings: {
      installLocation: "",
      audio: {
        masterVolume: 1,
        musicVolume: 1,
        sfxVolume: 1,
      },
      controls: {
        mouse: {
          sensitivity: 1,
          rawInput: false,
        },
        input: {
          selected: "keyboard",
          keyboard: {
            /// path to .binds file
            binds: "",
          },
          gamepad: {
            /// path to .binds file
            binds: "",
          },
        },
      },
      graphics: {
        fpsLimit: mon.videoMode.refreshRate,
        fullscreen: false,
        resolution: {
          width: mon.workArea.width,
          height: mon.workArea.height,
        },
        borderless: true,
      },
    },
  };
  const savepath = new URL("./game.json", import.meta.url);
  if (override) {
    try {
      Deno.writeTextFileSync(savepath, JSON.stringify(defaultConfig, null, 4));
    } catch (e) {
      console.error(e);
    }
    return defaultConfig;
  } else {
    return JSON.parse(Deno.readTextFileSync(savepath)) as GameConfig;
  }
};
