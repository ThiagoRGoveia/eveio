import products from "./products"

class ProductList {
  #list
  #filteredList
  #nameFilter
  #categoryFilter
  constructor() {
    this.#list = products
    this.#filteredList = this.list
  }

  filterListByProductName(name) {
    this.filteredList = this.list.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
  }

  filterListByCategory(category) {
    this.filteredList = this.list.filter(product => product.category === category)
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
  }

  getList() {
    return this.filteredList
  }

  getFilters() {
    return {
      name: this.#nameFilter,
      category: this.#categoryFilter
    }
  }
}

export default new ProductList()
