<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="railMethod"
  >
    <v-list-item
        :prepend-avatar="require('@/assets/logo.png')"
        v-model:title="username"
        nav
    >
      <template v-slot:append>
        <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

<!--        <v-divider></v-divider>-->

    <v-list density="compact" nav>
      <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="메인"
          value="home"
          @click="this.$router.push('/main');"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-account"
          title="내 계정"
          value="account"
          @click="this.$router.push('/my-account');"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-format-list-checks"
          title="백업 현황"
          value="backupStatus"
          @click="this.$router.push('/backup-status');"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-folder-upload-outline"
          title="백업"
          value="backup"
          @click="this.$router.push('/backup');"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-logout"
          title="로그아웃"
          value="logout"
          @click="logoutFunc"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import GlobalAPIAddress from "@/axioses/globalAPIAddress";
export default {
  name: "NavigationComponent",

  // props: {
  //   mainClick: Boolean
  // },

  data: () => ({
    drawer: true,
    rail: true,
    logout: false,
    username : '',
  }),

  // computed: {
  //   welcomeUsername() {
  //     return this.username + this.welcome
  //   }
  // },

  watch: {
    async $route(to, from) {
      if (to !== from) {
        console.log("route changes recognized")
        console.log(to.name)
        console.log(from.name)
        console.log(this.$cookies.get('token'))

        await this.$axios.get(GlobalAPIAddress + "/members/username", {
          headers: {
            'Authorization': 'Bearer ' + this.$cookies.get('token'),
          }
        }).then((res) => {
          console.log(res)
          this.username = res.data;
        }).catch((error) => {
          console.error(error)
          this.username = "아무개";
        })
      }
    }
  },

  mounted: () => {
    // this.navShow = this.$route.path !== '/login';
  },

  methods: {
    goHome() {

    },
    logoutFunc() {
      this.logout = true
    },
    railMethod() {
      if (this.logout) {
        this.rail = true;
        this.logout = false;
        this.$router.push('logout')
      } else {
        this.rail = false;
      }
    }
  }
}
</script>

<style scoped>

</style>