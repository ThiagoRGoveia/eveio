<template>
  <form @submit.prevent="handleSubmition">
    <div class="columns">
    <div class="column is-1">
    </div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Tela inicial</a></li>
        <li><a href="#">Carrinho</a></li>
        <li class="is-active"><a href="#" aria-current="page">Tela de finalização</a></li>
      </ul>
    </nav>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <checkout-form
            :paymentMethod.sync="paymentMethod"
            :address.sync="address"
            :city.sync="city"
            :state.sync="state"
            :zipCode.sync="zipCode"
           />
          <divider />
          <finish-by-phone-number />
        </div>
        <div class="column">
        </div>
        <div class="column">
          <div class="checkout-cart-container">
            <product-list />
          </div>
          <router-link :to="{ name: 'payment' }">
            <b-button native-type="submit" type="is-primary">Proceder para Pagamento</b-button>
          </router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import CheckoutForm from '@/components/Checkout/CheckoutForm.vue'
import Divider from '@/components/Checkout/Divider.vue'
import FinishByPhoneNumber from '@/components/Checkout/FinishByPhoneNumber.vue'
import CheckoutInformation from '@/components/Checkout/CheckoutInformation.js'
import ProductList from '@/components/ShoppingCart/ProductList'
export default {
  name: 'Checkout',
  data () {
    return {
      paymentMethod: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    }
  },
  components: {
    CheckoutForm,
    Divider,
    FinishByPhoneNumber,
    ProductList
  },
  methods: {
    handleSubmition () {
      CheckoutInformation.setUserData({
        paymentMethod: this.paymentMethod,
        address: this.address,
        city: this.city,
        state: this.state,
        zipCode: this.zipCode
      })
    }
  },
  created () {
    const data = CheckoutInformation.getUserData()
    if (Object.keys(data).length > 0) {
      this.paymentMethod = data.paymentMethod
      this.address = data.address
      this.city = data.city
      this.state = data.state
      this.zipCode = data.zipCode
    }
  }
}
</script>

<style>
 .checkout-cart-container{
   margin-bottom: 50px;
 }
</style>