<template>
  <span class="divider">
    <p>OU</p>
  </span>
</template>

<script>
export default {
  name: 'Divider'
}
</script>

<style>
.divider {
  margin: 10px 0;
  position: relative;
}
.divider::before {
  position: absolute;
  top: 50px;
  left: -50px;
  background-color: lightgray;
  height: 1px;
  width: 50px;
}

.divider::after {
  position: absolute;
  top: 50%;
  right: 50px;
  background-color: lightgray;
  height: 1px;
  width: 50px;
}
</style>