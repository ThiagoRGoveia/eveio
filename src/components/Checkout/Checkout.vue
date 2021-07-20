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
          <div class="checkout-cart-container">
            <cart />
          </div>
          <b-button native-type="submit" type="is-primary">Proceder para Pagamento</b-button>
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

    }
  }
}
</script>

<style>

</style>