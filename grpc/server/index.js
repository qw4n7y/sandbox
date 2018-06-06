const grpc = require('grpc');

const helloProtoPath = require('path').resolve(__dirname, './../protos/hello.proto');
const hello_proto = grpc.load(helloProtoPath).hello;
const hello = require('./../protos/hello_pb');

function generateGreetingMessages(request) {
    const greeting = request.lang == 'RU' ? 'Привет' : 'Hello';
    let titles = request.titles;
    if (titles.length === 0) { titles = ['']; }
    const messages = titles.map(title => {
        return `${greeting}, ${title} ${request.name}`;
    });
    return messages;
}

function greet(call, callback) {
    // NOTE: No fromObject. LOL. https://github.com/google/protobuf/issues/1591
    // const request = hello.HelloRequest.fromObject(call.request);
    const { request } = call;
    const messages = generateGreetingMessages(request);
    callback(null, { messages });
}

/**
 * @param {Writable} call Writable stream for responses with an additional 
 *                        request property for the request value.
 */
function greet10Times(call) {
    const { request } = call;

    const messages = generateGreetingMessages(request);
    const responses = [...new Array(10)].map(_ => ({ messages }));
    
    let promise = Promise.resolve();
    for (const response of responses) {
        promise = promise.then(() => {
            return new Promise((res, _) => setTimeout(res, 300));
        }).then(() => {
            call.write(response);
        })
    }
    promise.then(() => {
        call.end();
    }).catch(console.log);
}

function main() {
    var server = new grpc.Server();
    server.addService(hello_proto.Hello.service, {
        greet, greet10Times
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('GRPC server started on 0.0.0.0:50051');
  }
  
  main();