<template>
  <span class="filtersList">
    <b-tag class="primeira-b-tag"
      v-if="filters.name"
      closable
      @close="handleClose('name')"
    >
      {{filters.name}}
    </b-tag>
    <b-tag class="segunda-b-tag"
      v-if="filters.category"
      closable
      @close="handleClose('category')"
    >
      {{filters.category}}
    </b-tag>
  </span>
</template>

<script>
import ProductList from '@/components/Products/ProductList.js'
export default {
  name: 'FilterList',
  data () {
    return {
      filters: {},
    }
  },
  methods: {
    handleClose (key) {
      ProductList.removeFilter(key)
      ProductList.filter()
    },
    updateFilters(filters) {
      this.filters = filters
    }
  },
  created() {
    ProductList.on('filter-change', this.updateFilters)
  }
}
</script>

<style>
.tag:not(body){
  margin-top: 0rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.primeira-b-tag {
  margin-left: 15rem;
  margin-right: 3rem;
  width: 1.1em;
  height: 1.1rem;
  align-items: center;
  -webkit-box-align: center;
  background-color: whitesmoke;
  border-radius: 20px;
  color: #4a4a4a;
  justify-content: center;
  line-height: 1rem;
  white-space: wrap;
}
.segunda-b-tag {
  margin-left: 3rem;
  margin-right: 0rem;
  width: 1.1rem;
  height: 1.1rem;
  align-items: center;
  -webkit-box-align: center;
  background-color: whitesmoke;
  border-radius: 20px;
  color: #4a4a4a;
  justify-content: center;
  line-height: 1rem;
  white-space: wrap;
}
</style>