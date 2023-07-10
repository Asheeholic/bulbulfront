<template>
  <div>
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다.</p>
    <v-btn @click="toMainBtn">메인으로</v-btn>
  </div>
</template>

<script>
export default {
  name: "NotFound",

  methods: {
    toMainBtn() {
      this.$router.push("/main");
    }
  }
}
</script>

<style scoped>

</style>