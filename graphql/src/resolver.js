const simpleHuman = require('./human/simple');

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },

  ip: (args, context) => {
    return context.request.ip;
  },

  simpleHuman(args, context) {
    return simpleHuman.Storage.get([args.id]).then(humans => humans[0]);
  },

  dataloaderHuman(args, context) {
    return context.humanLoader.load(args.id);
  }
};

module.exports = root;