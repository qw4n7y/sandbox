const humans = [
  { id: 1, friendIds: [2, 3, 4] },
  { id: 2, friendIds: [1, 4] },
  { id: 3, friendIds: [1] },
  { id: 4, friendIds: [3] },
]

class Human {
  constructor(id) {
    this.id = id
  }

  async load() {
    this.data = humans.filter(human => human.id === this.id)[0];
    return this;
  }

  async friends() {
    const friends = []
    for(const id of this.data.friendIds) {
      const human = new Human(id, this.storage)
      await human.load()
      friends.push(human)
    }
    return friends
  }
}

module.exports = Human