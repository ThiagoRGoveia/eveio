<template>
  <form class="container">
    <div class="container">
      <div class="columns">
        <div class="column form-container">
          <checkout-form
            :paymentMethod.sync="clientData.paymentMethod"
            :address.sync="clientData.address"
            :city.sync="clientData.city"
            :state.sync="clientData.state"
            :zipCode.sync="clientData.zipCode"
           />
          <divider />
          <finish-by-phone-number />
        </div>
        <div class="column">
          <div class="produts">
            <div class="checkout-cart-container">
              <product-list />
            </div>
            <div class="proceed-to-payment">
              <router-link :to="{ name: 'payment' }">
                <b-button
                  expanded
                  native-type="submit"
                  type="is-primary"
                >
                  Proceder para Pagamento
                </b-button>
              </router-link>
            </div>
          </div>
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
      clientData: {
        paymentMethod: undefined,
        address: '',
        city: '',
        state: '',
        zipCode: '',
      }
    }
  },
  components: {
    CheckoutForm,
    Divider,
    FinishByPhoneNumber,
    ProductList
  },
  created () {
    const data = CheckoutInformation.getUserData()
    if (Object.keys(data).length > 0) {
      this.clientData.paymentMethod = data.paymentMethod
      this.clientData.address = data.address
      this.clientData.city = data.city
      this.clientData.state = data.state
      this.clientData.zipCode = data.zipCode
    }
  },
  watch: {
    clientData: {
      handler () {
        CheckoutInformation.setUserData({
          paymentMethod: this.clientData.paymentMethod,
          address: this.clientData.address,
          city: this.clientData.city,
          state: this.clientData.state,
          zipCode: this.clientData.zipCode
      })
      },
      deep: true
    }
  }
}
</script>

<style>
  .checkout-cart-container{
    margin-bottom: 50px;
  }

  form .produts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form .produts > div {
    width: 100%;
  }

  .proceed-to-payment {
    widows: 100%;
    padding: 0 1rem;
  }

  .proceed-to-payment button {
    height: 3rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>