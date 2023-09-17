<template>
  <v-app>

    <v-layout
      class="bg-grey-darken-4"
      :class="loadingClass"
    >
      <LoadingComponent :loading="loading"/>
      <div v-show="$route.name!=='login'">
        <NavigationComponent/>
      </div>
      <v-main>
        <v-card elevation="0">
          <router-view/>
        </v-card>
        <FooterComponent/>
      </v-main>
    </v-layout>

  </v-app>
</template>

<script>
import NavigationComponent from "./components/drawer/NavigationComponent";
import FooterComponent from "@/components/drawer/FooterComponent";
import LoadingComponent from "@/components/drawer/LoadingComponent";

export default {
  name: 'App',

  components: {
    LoadingComponent,
    FooterComponent,
    NavigationComponent,
  },
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
  //   console.log(this.loadingClass);
  // },
  // beforeMount() {
  //   console.log("");
  //   console.log("[App] : [beforeMount] : [start]");
  //   console.log("설 명 : DOM 렌더링 준비");
  //   console.log("");
  //   console.log(this.loadingClass);
  // },
  mounted() {
    // console.log("");
    // console.log("[App] : [mounted] : [start]");
    // console.log("설 명 : DOM 렌더링 완료");
    // console.log("");
    this.loading = false;
    // console.log(this.loadingClass);
  },
  beforeUpdate() {
    // console.log("");
    // console.log("[App] : [beforeUpdate] : [start]");
    // console.log("설 명 : DOM 상태 및 데이터 변경 시작");
    // console.log("");
    this.loading = true;
    // console.log(this.loadingClass);
  },
  updated() {
    // console.log("");
    // console.log("[App] : [updated] : [start]");
    // console.log("설 명 : DOM 상태 및 데이터 변경 완료");
    // console.log("");
    this.loading = false;
    // console.log(this.loadingClass);
  },
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
    data: "APP VUE",
    loading: true,
    loadingClass: "loading"
  }),

  computed: {},

  watch: {
    loading: function (newVal) {
      // console.log("");
      // console.log("[App] : [watch] : [loading] : [start]");
      // console.log("설 명 : loading 값 변경 감지");
      // console.log("newVal : " + newVal);
      // console.log("oldVal : " + oldVal);
      // console.log("");
      if (newVal === true) {
        // console.log("loading true")
        this.loadingClass = "loading";
      } else {
        // console.log("loading false")
        this.loadingClass = "";
      }
      // console.log(this.loadingClass);
    }
  },
}
</script>
<style>
.loading {
  opacity: 0.5;
}
</style>
