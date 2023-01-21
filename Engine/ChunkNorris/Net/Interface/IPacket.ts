import { PacketType } from "../Types.ts";
// export default interface IPacket<T> {
//   type: PacketType;
// }
export interface IEncodedPacket<T> {
  type: T;
}
export interface IDecodedPacket<T> {
  type: T;
}

export interface IPacket<T> {
  read?(buffer: Uint8Array): IDecodedPacket<T>;
  write?(packet: IEncodedPacket<T>): Uint8Array;
}
