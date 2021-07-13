<template>
    <div>
        <section>
            <cart-header/>
        </section>
        <section>
           <BottomPart/>
        </section>

    </div>
</template>

<script>
import BottomPart from '@/components/BottomPart.vue'
import CartHeader from '@/components/CartHeader.vue'

export default {
  name: 'Cart',
  data() {
      return {
        inputValue: 'oi',
      }
  },
  methods: {
  },
  components: {
    BottomPart,
    CartHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
