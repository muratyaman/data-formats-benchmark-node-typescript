import { decode, encode } from '@msgpack/msgpack';

export function testMsgPack(input: any): number {
  const encoded = encode(input);
  //console.log('encoded', encoded);
  const decoded = decode(encoded);
  //console.log('decoded', decoded);
  return encoded.length;
}
