<template>
  <div class="main_Wrap">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_Wrap {
  width: 90%;
  min-width: 600px;
  min-height: 400px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-color: #fff;
}
</style>