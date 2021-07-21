<template>
  <section class="section">
    <div class="container">
      <b-carousel-list
          v-model="values"
          :data="items"
          arrow
          :items-to-show="4"
          repeat
          has-drag
        >
          <template #item="category">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by4">
                  <a
                    @click="handleClick(category)">
                    <img
                      :src="category.image"
                      :alt="category.alt"
                    >
                  </a>
                </figure>
              </div>
            </div>
        </template>
        </b-carousel-list>
    </div>
  </section>
</template>

<script>
import adega from '@/assets/imgs/adega.jpg'
import carne from '@/assets/imgs/carne.jpg'
import limpeza from '@/assets/imgs/limpeza.jpg'
import refrigerados from '@/assets/imgs/refrigerados.jpg'
import verdura from '@/assets/imgs/verdura.jpg'
import ProductList from '@/components/Products/ProductList.js'

export default {
  name: 'Carousel',
  props: ['gray'],
  data() {
    return {
        values: undefined,
        items: [
            {
              alt: 'Bebidas',
              image: adega,
              category: 'bebidas'
            },
            {
              alt: 'Açougue',
              image: carne,
              category: 'carnes'
            },
            {
              alt: 'Produtos de limpeza',
              image: limpeza,
              category: 'limpeza'
            },
            {
              alt: 'Refrigerados',
              image: refrigerados,
              category: 'refrigerados'
            },
            {
              alt: 'Hortifruti',
              image: verdura,
              category: 'verduras'
            }
        ]
    }
  },
  methods: {
    handleClick({category}) {
      ProductList.setFilter({category})
      ProductList.filter()
    }
  }
}
</script>

<style>

</style>