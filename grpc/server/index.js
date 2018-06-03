const grpc = require('grpc');

const helloProtoPath = require('path').resolve(__dirname, './../protos/hello.proto');
const hello_proto = grpc.load(helloProtoPath).hello;

function greet(call, callback) {
    const message = `Hello, ${call.request.name}`;
    callback(null, { message: message });
}

function main() {
    var server = new grpc.Server();
    server.addService(hello_proto.Hello.service, {
        greet: greet
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('GRPC server started on 0.0.0.0:50051');
  }
  
  main();