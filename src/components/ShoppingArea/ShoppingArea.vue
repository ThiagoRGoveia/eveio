<template>
  <section>
    <carousel :gray="false" />
    <filter-list />
    <product-list />
  </section>
</template>

<script>
import Carousel from '@/components/ShoppingArea/Carousel.vue'
import ProductList from '@/components/ShoppingArea/ProductList.vue'
import FilterList from '@/components/ShoppingArea/FilterList.vue'

export default {
  name: 'ShoppingArea',
  components: {
    Carousel,
    ProductList,
    FilterList
  }
}
</script>

<style>

</style>