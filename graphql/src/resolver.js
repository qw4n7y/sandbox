const Human = require('./human');

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },

  ip: (args, request) => {
    return request.ip;
  },

  human(args, context) {
    const human = new Human(args.id)
    return human.load()
  },
};

module.exports = root;