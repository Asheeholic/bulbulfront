<template>
  <v-row>
    <v-col cols="12" lg="4">
      <BackupCard/>
    </v-col>
    <v-col cols="12" lg="8">
      <BackupStatusCard/>
    </v-col>
    <v-col cols="12" lg="8">
      <MyAccountCard/>
    </v-col>
    <v-col cols="12" lg="4">
      <NetBackupCheckCard/>
    </v-col>
  </v-row>
</template>

<script>
import BackupCard from "@/components/maincards/BackupCard";
import BackupStatusCard from "@/components/maincards/BackupStatusCard";
import MyAccountCard from "@/components/maincards/MyAccountCard";
import NetBackupCheckCard from "@/components/maincards/NetBackupCheckCard";
export default {
  name: "MainComponent",
  components: {NetBackupCheckCard, MyAccountCard, BackupStatusCard, BackupCard},
  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  // [형태 : <MainComponent msg="MainComponent"/>]
  props: {
    msg: String
  },

}
</script>

<style scoped>

</style>