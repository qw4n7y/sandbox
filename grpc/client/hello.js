const grpc = require('grpc');

const helloProtoPath = require('path').resolve(__dirname, './../protos/hello.proto');
const hello_proto = grpc.load(helloProtoPath).hello;

function main() {
    var client = new hello_proto.Hello('localhost:50051',
                                         grpc.credentials.createInsecure());
    client.greet({name: 'Universe'}, function(err, response) {
      console.log('Hello.greet: ', response.message);
    });
  }
  
  main();