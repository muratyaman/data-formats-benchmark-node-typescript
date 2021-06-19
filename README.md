# data-formats-benchmark-node-typescript
benchmark of serialize/deserialize operations for data formats like JSON, BSON, MessagePack, etc.

BSON: https://github.com/mongodb/js-bson

MessagePack: https://github.com/msgpack/msgpack-javascript

Protocol Buffers: https://www.npmjs.com/package/google-protobuf

Also, check: https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats

## install

```sh
npm i
```

## build

```sh
npm run build
```

## benchmarks

we can run many encode/decode operations for inputs like:

```
{
  a: [ 1, '2', true, 2021-06-19T15:24:01.012Z ],
  b: true,
  c: 123456789,
  d: 2021-06-19T15:24:01.012Z,
  e: 2.718281828459045,
  f: 123.456789,
  pi: 3.141592653589793,
  r: 0.960430998670188,
  s: 'string',
  t: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque diam diam, dapibus tempus augue volutpat non. Morbi vehicula in mi id egestas. Ut euismod tempus elementum. Curabitur auctor mattis ipsum a dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur rhoncus erat eget consequat feugiat. Aliquam volutpat a dolor ut placerat. Curabitur ultricies, mauris ac tempus rhoncus, mauris nulla egestas mi, sit amet finibus lectus purus eget leo.'
}
```

### TS-Node

* ts-node 10.0.0
* typescript 4.3.4


```sh
npm run bench:ts
```

result for 1000 operations

```
format    time (ms)   serialized (KB)
json             17    671.1
bson             72    603.5
msgpack          66    570.3
protobuf        111    530.3
```

result for 1000000 operations

```
format    time (s)  serialized (MB)
json          9.457    655.4
bson         18.685    589.4
msgpack      13.234    556.9
protobuf     21.182    517.8
```

## Node

Node 14.17.0

```sh
npm run bench:js
```

result for 1000 operations

```
format    time (ms)   serialized (KB)
json             15    671.1
bson             77    603.5
msgpack          71    570.2
protobuf        116    530.3
```

result for 1000000 operations

```
format    time (s)  serialized (MB)
json           9.66    655.4
bson          18.31    589.4
msgpack      13.082    556.9
protobuf      21.27    517.8
```

## conclusion

Native JSON module is still doing a good job!
