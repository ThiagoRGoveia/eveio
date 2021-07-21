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
  }

  filter() {
    if (this.#nameFilter) {
      this.filterListByProductName(this.#nameFilter)
    } else if (this.#categoryFilter) {
      this.filterListByCategory(this.#categoryFilter)
    }
    this.#events['list-change'].forEach(callback => callback(this.#filteredList))
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
}

export default new ProductList()
