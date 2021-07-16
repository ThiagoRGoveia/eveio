<template>
<div class="card">
  <div class="card-content">
      <div class="content">
        <img :src="img" alt="img" />
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  props:  ['img']
}
</script>

<style>

</style>