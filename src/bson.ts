import { serialize, deserialize } from 'bson';

export function testBson(input: any): number {
  const encoded = serialize(input);
  //console.log('encoded', encoded);
  const decoded = deserialize(encoded);
  //console.log('decoded', decoded);
  return encoded.length;
}
