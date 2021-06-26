const any_pb = require('google-protobuf/google/protobuf/any_pb');
const timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb');
const benchmark = require('./benchmark_pb');

export function input() {
  const msg = new benchmark.InputMessage();
  // a: any[]
  msg.setAList([]);
  msg.addA(new any_pb.Any(1));
  msg.addA(new any_pb.Any('2'));
  msg.addA(new any_pb.Any(true));
  msg.addA(new any_pb.Any(new timestamp_pb.Timestamp()));

  msg.setB(true);
  msg.setC(123456);
  msg.setD(new timestamp_pb.Timestamp());
  msg.setE(Math.E);
  msg.setF(123.456789);
  msg.setPi(Math.PI);
  msg.setR(Math.random());
  msg.setS('string');
  msg.setT('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque diam diam, dapibus tempus augue volutpat non. Morbi vehicula in mi id egestas. Ut euismod tempus elementum. Curabitur auctor mattis ipsum a dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rhoncus erat eget consequat feugiat. Aliquam volutpat a dolor ut placerat. Curabitur ultricies, mauris ac tempus rhoncus, mauris nulla egestas mi, sit amet finibus lectus purus eget leo.');
  return msg;
}

export function testProtobuf(msg) {
  const encoded = msg.serializeBinary();
  //console.log('encoded', encoded);
  const decoded = benchmark.InputMessage.deserializeBinary(encoded);
  //console.log('decoded', decoded);
  return encoded.length;
}
