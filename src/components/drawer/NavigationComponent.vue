<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
  >
    <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
        title="John Leider"
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
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
      ></v-list-item>
      <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationComponent",

  data: () => ({
    drawer: true,
    rail: true,
    navShow: false,
  }),

  mounted: () => {
    // this.navShow = this.$route.path !== '/login';
  },

  methods: {

  }
}
</script>

<style scoped>

</style>