<template>
  <span>
    <b-tag
      v-if="filters.name"
      closable
      @close="handleClose('name')"
    >
      {{filters.name}}
    </b-tag>
    <b-tag
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

</style>