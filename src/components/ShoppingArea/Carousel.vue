<template>
  <section class="section">
    <div class="container">
      <b-carousel-list
          v-model="values"
          :data="items"
          :arrow="arrow"
          :arrow-hover="arrowHover"
          :items-to-show="perList"
          :items-to-list="increment"
          :repeat="repeat"
          :has-drag="drag"
          :has-grayscale="gray"
          :has-opacity="opacity"
        >
          <template #item="category">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by4">
                  <a @click="handleClick(category)"><img :src="category.image"></a>
                </figure>
                <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>50%</b></b-tag>
              </div>
            </div>
        </template>
        </b-carousel-list>
    </div>
  </section>
</template>

<script>
import ProductList from '@/components/Products/ProductList.js'
export default {
  name: 'Carousel',
  props: ['gray'],
  data() {
    return {
        items: [
            {
                alt: 'Slide 1',
                title: 'Slide 1',
                image: 'https://picsummm.photos/id/0/1230/500',
                srcFallback: 'https://picsum.photos/id/0/1230/500'
            },
        ]
    }
  },
  methods: {
    handleClick(category) {
      ProductList.setFilter({category: category})
      ProductList.filter()
    }
  }
}
</script>

<style>

</style>