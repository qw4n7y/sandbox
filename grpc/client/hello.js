const grpc = require('grpc');

const helloProtoPath = require('path').resolve(__dirname, './../protos/hello.proto');
const hello_proto = grpc.load(helloProtoPath).hello;

function main() {
    var client = new hello_proto.Hello('localhost:50051',
                                         grpc.credentials.createInsecure());

    const request = {name: 'Universe', titles: ['Mr', 'Ms']};

    client.greet(request, function(err, response) {
      console.log('Hello.greet:', response);
    });

    const call = client.greet10Times(request);
    call.on('data', function(response) {
      console.log('Hello.greet10Times:', response);
    });
    call.on('end', () => {
      console.log('Hello.greet10Times: done');
    });
  }
  
  main();