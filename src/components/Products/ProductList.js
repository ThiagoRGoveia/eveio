import products from "./products"

class ProductList {
  #list
  #filteredList
  #nameFilter
  #categoryFilter
  #events
  constructor() {
    this.#list = products
    this.#filteredList = this.#list
    this.#events = {}
  }

  filterListByProductName(name) {
    this.#filteredList = this.#list.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
  }

  filterListByCategory(category) {
    this.#filteredList = this.#list.filter(product => product.category === category)
  }

  setFilter({name, category}) {
    if(name) {
      this.#nameFilter = name
    } else if (category) {
      this.#categoryFilter = category
    }
    if (this.#events['filter-change']) {
      this.#events['filter-change'].forEach(watcher => watcher(this.getFilters()))
    }
  }

  filter() {
    if (this.#nameFilter) {
      this.filterListByProductName(this.#nameFilter)
    } else if (this.#categoryFilter) {
      this.filterListByCategory(this.#categoryFilter)
    } else {
      this.#filteredList = this.#list
    }
    if (this.#events['list-change']) {
      this.#events['list-change'].forEach(watcher => watcher(this.#filteredList))
    }
  }

  getList() {
    return this.#filteredList
  }

  getFilters() {
    return {
      name: this.#nameFilter,
      category: this.#categoryFilter
    }
  }

  on(eventName, callback) {
    if (this.#events[eventName]) {
      this.#events[eventName].push(callback)
    } else {
      this.#events[eventName] = [callback]
    }
  }

  removeFilter(key) {
    if (key === 'name') {
      this.#nameFilter = null
    } else if (key === 'category') {
      this.#categoryFilter = null
    }
    this.filter()
    if (this.#events['filter-change']) {
      this.#events['filter-change'].forEach(watcher => watcher(this.getFilters()))
    }
  }
}

export default new ProductList()
