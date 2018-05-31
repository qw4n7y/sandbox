const DataLoader = require('dataloader');
const data = require('./data');

class Human {
  constructor(data) {
    this.id = data.id;
    this.data = data;
  }

  async friends(obj, context) {
    return this.data.friendIds.map(id => context.humanLoader.load(id));
  }
}

class Storage {
  static async get(ids) {
    console.log(`Dataloader Human: loading ${ids}`);
    const items = data.filter(human => ids.includes(human.id));
    return items.map(item => new Human(item));
  }
}

function createDataLoader() {
  const loader = new DataLoader(keys => Storage.get(keys));
  return loader;
}

module.exports = {
  createDataLoader
};