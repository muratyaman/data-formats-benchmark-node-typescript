const { resolve } = require('path');
const pbjs = require('protobufjs');
//const { InputMessage } = require('./bundle.js'); // TODO generate+use static code

export function init() {

  const root = pbjs.loadSync(resolve(__dirname, '..', 'benchmark.proto'));

  const InputMessage = root.lookupType('benchmark.InputMessage');

  function input(rawObj) {
    const msg = InputMessage.create(rawObj);
    return msg;
  }
  
  function testProtobuf(msg) {
    const encoded = InputMessage.encode(msg).finish(); // buffer
    //console.log('encoded', Array.prototype.toString.call(buffer));
    const decoded = InputMessage.decode(encoded);
    //console.log('decoded', decoded);
    return encoded.length;
  }

  return { input, testProtobuf };
}
