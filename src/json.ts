export function testJson(input: any): number {
  const encoded = JSON.stringify(input);
  //console.log('encoded', encoded);
  const decoded = JSON.parse(encoded);
  //console.log('decoded', decoded);
  return encoded.length;
}
