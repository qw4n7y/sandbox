// ref: https://developers.google.com/protocol-buffers/docs/reference/javascript-generated
const sizeof = require('object-sizeof');

const hello = require('./protos/hello_pb.js');

let r = new hello.HelloRequest();
r.setName('Bobo');
r.setTitlesList(['Dog', 'Friend']);

console.log(`r.getName() = `, r.getName());
console.log(`r.toObject() = `, r.toObject());
console.log(`sizeof(r) = `, sizeof(r), `bytes`);

const protoBinWireRespresentationOfR = r.serializeBinary();

console.log(`protoBinWireRespresentationOfR = `, protoBinWireRespresentationOfR);
console.log(`sizeof(protoBinWireRespresentationOfR) = `, sizeof(protoBinWireRespresentationOfR), `bytes`);

const deserializedR = hello.HelloRequest.deserializeBinary(protoBinWireRespresentationOfR);

console.log(`deserializedR.toObject() = `, deserializedR.toObject());