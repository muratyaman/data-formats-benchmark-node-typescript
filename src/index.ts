import { input } from './input';
import { testMsgPack } from './msgpack';
import { testJson } from './json';
import { testBson } from './bson';
import * as pb from './protobuf';

main(1000);
main(1000000);

export function main(ops = 1000000) {
  console.log('');
  console.log(`we will run ${ops} encode/decode ops for inputs like`, input());
  console.log('');
  const manyOps = ops > 1000;
  if (manyOps) {
    console.log('format   \ttime (s) \tserialized (MB)');
  } else {
    console.log('format   \ttime (ms) \tserialized (KB)');
  }
  batch('json   ', ops, manyOps, () => testJson(input()));
  batch('bson   ', ops, manyOps, () => testBson(input()));
  batch('msgpack', ops, manyOps, () => testMsgPack(input()));
  batch('protobuf', ops, manyOps, () => pb.testProtobuf(pb.input()));
  console.log('');
  return 0;
}

function batch(msg: string, ops: number, manyOps = false, func: Function) {
  let t0: number, t1: number, size = 0;
  t0 = (new Date()).getTime();
  for (let i = 0; i < ops; i++) size += func();
  t1 = (new Date()).getTime();
  let delta = t1 - t0; // ms
  size /= 1024; // KB
  if (manyOps) {
    delta /= 1000; // seconds
    size  /= 1024; // MB
  }
  console.log(msg, '\t', String(delta).padStart(8, ' '), '\t', Math.round(size * 10) / 10);
}
