<template>
  <form @submit.prevent="handleSubmition">
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
            <cart />
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
import Cart from '@/components/ShoppingCart/Cart.vue'
import CheckoutForm from '@/components/Checkout/CheckoutForm.vue'
import Divider from '@/components/Checkout/Divider.vue'
import FinishByPhoneNumber from '@/components/Checkout/FinishByPhoneNumber.vue'
import CheckoutInformation from '@/components/Checkout/CheckoutInformation.js'
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
    Cart,
    CheckoutForm,
    Divider,
    FinishByPhoneNumber
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

</style>