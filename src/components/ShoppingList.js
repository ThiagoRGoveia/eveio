class ShoppingList {
  constructor() {
    this.items = [];
    this.itemWatcher = {};
  }

  addItem(item) {
    const itemIndex = this.items.findIndex(i => i.id === item.id)
    if (itemIndex === -1) {
      this.items.push(item);
    } else {
      this.items[itemIndex].ammount = item.ammount;
    }
    this.itemWatcher['add'].forEach(watcher => watcher(item));
  }

  removeItem(item) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.itemWatcher['remove'].forEach(watcher => watcher(item));
  }

  getItems() {
    return this.items;
  }

  addWatcher(type, watcher) {
    if (typeof watcher === 'function') {
      if (!this.itemWatcher[type]) {
        this.itemWatcher[type] = [watcher];
      } else {
        this.itemWatcher[type].push(watcher);
      }
    }
  }
}

export default new ShoppingList();