<template>
  <v-footer
      app
      class="d-flex flex-column">
    <div class="bg-grey-darken-4 d-flex w-100 align-center px-10">
      <strong>저의 SNS를 통해서 만나보세요!</strong>

      <v-spacer></v-spacer>

      <v-btn
          v-for="icon in icons"
          :key="icon.image"
          class="mx-4"
          :icon="icon.image"
          variant="plain"
          size="small"
          @click="gotoUrl(icon.url)"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Han Jae Ho as Asheeholic</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    icons: [
      { image:'mdi-github', url:'https://github.com/Asheeholic' },
    ],
  }),

  methods: {
    gotoUrl(url) {
      window.open(url, '_blank');
    },
  }
}
</script>

<style scoped>

</style>