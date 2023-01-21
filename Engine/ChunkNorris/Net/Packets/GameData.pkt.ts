import {
  IDecodedPacket,
  IEncodedPacket,
  IPacket,
} from "../Interface/IPacket.ts";
import { PacketType } from "../Types.ts";

export default class GameDataPacket implements IPacket<PacketType.GameData> {
  protected type: PacketType.GameData = PacketType.GameData;

  read(_buffer: Uint8Array): IDecodedPacket<PacketType.GameData> {
    throw new Error("Method not implemented.");
  }
}
