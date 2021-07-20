<template>
  <div>
    <b-field label="Método de pagamento">
      <b-select
        @input="(value) => this.$emit('update:paymentMethod', value)"
      >
        <option value="card">Cartão de crédito</option>
        <option value="money">Dinheiro na entrega</option>
      </b-select>
    </b-field>

    <b-field label="Endereço de entrega">
      <b-input
        @input="(value) => this.$emit('update:city')"
        type="text"
      />
    </b-field>
    <b-field grouped>
      <b-field
        label="cidade"
      >
        <b-input @input="(value) => this.$emit('update:city', value)" />
      </b-field>
      <b-field
        label="UF"
      >
        <b-input
          @input="(value) => this.$emit('update:state', value)"
        />
      </b-field>
      <b-field
        label="CEP"
      >
        <b-input
          @input="(value) => this.$emit('update:zipCode', value)"
        />
      </b-field>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  props: ['paymentMethod', 'address', 'city', 'state', 'zipCode'],
}
</script>

<style>

</style>