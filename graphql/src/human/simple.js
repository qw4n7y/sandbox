const data = require('./data');

class Human {
  constructor(data) {
    this.id = data.id;
    this.data = data;
  }

  async friends(obj, context) {
    return Storage.get(this.data.friendIds);
  }
}

class Storage {
  static async get(ids) {
    console.log(`Simple Human: loading ${ids}`);
    const items = data.filter(human => ids.includes(human.id));
    return items.map(item => new Human(item));
  }
}

module.exports = {
  Storage
};