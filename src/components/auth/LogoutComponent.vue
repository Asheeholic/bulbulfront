<template>
<div>logoutComponent In</div>
</template>

<script>
export default {
  name: "LogoutComponent",
  data: () => ({
    show1: false
  }),
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    next('/login')
  }
}
</script>

<style scoped>

</style>