<template>
    <section class="hero">
    <div class="hero-body">
    <div class = "container logo-and-cart">
            <router-link to="/" class="coisa-pra-alterar">
            <img src="@/assets/logo.png" alt="home">
            </router-link>
            <b-button
            type="is-primary"
            class = "is-pulled-right cart-btn"
            @click="handleClick"
            rounded
            >
            <b-icon icon="cart"/>
            </b-button> 
    </div>
    <div class="container search-bar">
        <b-field>
            <b-input class="is-expanded"
            v-model="productFilter"
            type="search"
            placeholder="Exemplo: picanha"
            @keyup.enter.native="handleSearch"
            />
        <b-button @click="handleSearch">
            <b-icon icon="magnify" size="mdi-18px"/>
        </b-button>
        </b-field>
    </div>
    </div>
    </section>
</template>
<script>
import ProductList from '@/components/Products/ProductList.js'

export default {
  name: 'mobileHeader',
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

.home-btn {
    margin-bottom: 1rem !important;
    height: 5rem !important;
    padding: 0 !important;
}

.home-btn img{
    height: 100% !important;
}

.cart-btn{
    width: 4rem !important;
    height: 4rem !important;
}

.cart-btn span.icon{
    width: 4rem !important;
    height: 4rem !important;
}

.cart-btn .mdi-24px.mdi:before{
    font-size: 2.5rem !important;
}
.logo-and-cart{
    margin-top: 0rem !important;
    margin-bottom: 1rem !important;
}
.search-bar{
    margin-top: 2rem !important;
    margin-bottom: 0.5rem !important;
}
.coisa-pra-alterar{
    width: 4rem !important;
    height: 4rem !important;
}
</style>