<template>
  <v-progress-circular
      class="spinner"
      :class="loading ? 'activate' : 'deactivate'"
      color="dark-blue"
      indeterminate
      :size="87"
      :width="6"
  >
  </v-progress-circular>
</template>

<script>
export default {
  name: "LoadingComponent",
  props: {
    loading: Boolean
  },

  // mounted() {
  //   console.log("LoadingComponent")
  //   console.log("mounted")
  //   console.log(this.loading)
  // },
  // beforeUpdate() {
  //   console.log("LoadingComponent")
  //   console.log("beforeUpdate")
  //   console.log(this.loading)
  // },
  // updated() {
  //   console.log("LoadingComponent")
  //   console.log("updated")
  //   console.log(this.loading)
  // },
}
</script>

<style scoped>
.spinner {
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -43.5px;
  margin-left: -43.5px;
  z-index: 9999;
}
.activate {
  visibility: visible;
  opacity: 1;
}

.deactivate {
  visibility: hidden;
  opacity: 0;
}
</style>