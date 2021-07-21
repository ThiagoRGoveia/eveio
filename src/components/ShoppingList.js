class ShoppingList {
  #events
  constructor() {
    this.items = [];
    this.#events = {};
  }

  add(item) {
    const itemIndex = this.items.findIndex(i => i.id === item.id)
    if (itemIndex === -1) {
      this.items.push(item);
    } else {
      this.items[itemIndex].ammount = item.ammount;
    }
    if (this.#events['add']) {
      this.#events['add'].forEach(watcher => watcher(item));
    }
  }

  remove(item) {
    this.items = this.items.filter(i => i.id !== item.id);
    if (this.#events['remove']) {
      this.#events['remove'].forEach(watcher => watcher(this.items));
    }
  }

  getItems() {
    return this.items;
  }

  on(type, watcher) {
    if (typeof watcher === 'function') {
      if (!this.#events[type]) {
        this.#events[type] = [watcher];
      } else {
        this.#events[type].push(watcher);
      }
    }
  }
}

export default new ShoppingList();