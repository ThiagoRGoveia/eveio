<template>
  <span>
    <b-tag
      v-for="key in filterListKeys"
      :key="key"
      closable
      @close="handleClose(key)"
    >
      {{filterListKeys[key]}}
    </b-tag>
  </span>
</template>

<script>
import ProductList from '@/components/Products/ProductList.js'
export default {
  name: 'FilterList',
  data () {
    return {
      filters: ProductList.getFilters(),
    }
  },
  methods: {
    handleClose (key) {
      ProductList.removeFilter(key, undefined)
    }
  },
  computed: {
    filterListKeys() {
      return Object.keys(this.filters)
    }
  }
}
</script>

<style>

</style>