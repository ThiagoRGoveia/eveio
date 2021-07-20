<template>
  <div>
    <b-field label="Método de pagamento">
      <b-select
        @input="this.$emit('update:paymentMethod')"
      >
        <option value="card">Cartão de crédito</option>
        <option value="money">Dinheiro na entrega</option>
      </b-select>
    </b-field>

    <b-field label="Endereço de entrega">
      <b-input
        @input="this.$emit('update:city')"
        type="text"
      />
    </b-field>
    <b-field grouped>
      <b-field
        label="cidade"
      >
        <b-input @input="this.$emit('update:city')" />
      </b-field>
      <b-field
        label="UF"
      >
        <b-input
          @input="this.$emit('update:state')"
        />
      </b-field>
      <b-field
        label="CEP"
      >
        <b-input
          @input="this.$emit('update:zipCode')"
        />
      </b-field>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  props: ['paymentMethod', 'address', 'city', 'state', 'zipCode']
}
</script>

<style>

</style>