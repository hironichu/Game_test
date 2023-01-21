import { IDecodedPacket, IPacket } from "../Interface/IPacket.ts";
import { PacketType } from "../Types.ts";
export default class AuthPacket implements IPacket<PacketType> {
  type: PacketType = PacketType.Auth;
  read(_buffer: Uint8Array): IDecodedPacket<PacketType> {
    throw new Error("Method not implemented.");
  }
}
