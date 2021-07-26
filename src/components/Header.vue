<template>
    <!-- Top part -->
    <section class="hero">
      <div class="hero-body">
        <div class = "container">
          <div class = "columns">
            <div class = "column is-one-fifth">
              <router-link to="/" class="button is-primary">
                <h1>E-Veio</h1>
              </router-link>
            </div>
            <div class = "column is-three-fifths">
              <b-field>
                  <b-input class="is-expanded"
                    v-model="productFilter"
                    type="search"
                    placeholder="Exemplo: picanha"
                    @keyup.enter.native="handleSearch"
                  />
                <b-button @click="handleSearch">Procurar</b-button>
              </b-field>
            </div>
            <div class = "column is-one-fifth">
              <b-button
                class = "is-pulled-right"
                @click="handleClick"
              >
                Carrinho
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import ProductList from '@/components/Products/ProductList.js'

export default {
  name: 'Header',
  data () {
    return {
      productFilter: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('open')
    },
    handleSearch () {
      ProductList.setFilter({name: this.productFilter})
      ProductList.filter()
    }
  }
}
</script>

<style>
.hero-body {
  padding: 30px;
  background-color: #003d4e;
}
</style>