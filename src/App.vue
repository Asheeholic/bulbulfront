<template>
  <v-app>
    <v-main>
<!--      <HelloWorld/>-->
      <div>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },
  // [생명 주기 : 라이프 사이클]
  // beforeCreate() {
  //   console.log("");
  //   console.log("[App] : [beforeCreate] : [start]");
  //   console.log("설 명 : 인스턴스 초기화 준비");
  //   console.log("");
  // },
  // created() {
  //   console.log("");
  //   console.log("[App] : [created] : [start]");
  //   console.log("설 명 : 인스턴스 생성 완료");
  //   console.log("");
  // },
  // beforeMount() {
  //   console.log("");
  //   console.log("[App] : [beforeMount] : [start]");
  //   console.log("설 명 : DOM 렌더링 준비");
  //   console.log("");
  // },
  // mounted() {
  //   console.log("");
  //   console.log("[App] : [mounted] : [start]");
  //   console.log("설 명 : DOM 렌더링 완료");
  //   console.log("");
  // },
  // beforeUpdate() {
  //   console.log("");
  //   console.log("[App] : [beforeUpdate] : [start]");
  //   console.log("설 명 : DOM 상태 및 데이터 변경 시작");
  //   console.log("");
  // },
  // updated() {
  //   console.log("");
  //   console.log("[App] : [updated] : [start]");
  //   console.log("설 명 : DOM 상태 및 데이터 변경 완료");
  //   console.log("");
  // },
  // beforeUnmount() {
  //   console.log("");
  //   console.log("[App] : [beforeUnmount] : [start]");
  //   console.log("설 명 : 인스턴스 마운트 해제 준비");
  //   console.log("");
  // },
  // unmounted() {
  //   console.log("");
  //   console.log("[App] : [unmounted] : [start]");
  //   console.log("설 명 : 인스턴스 마운트 해제 완료");
  //   console.log("");
  // },

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data: () => ({
    data: "APP VUE"
  }),
}
</script>
<style>

</style>
