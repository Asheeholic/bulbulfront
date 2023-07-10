<template>
  <div>main Component</div>
</template>

<script>
export default {
  name: "MainComponent",

  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  // [형태 : <MainComponent msg="MainComponent"/>]
  props: {
    msg: String
  },

}
</script>

<style scoped>

</style>