<template>
  <v-card>
    <v-card-title>
      유저 정보 공간
    </v-card-title>
    <v-tabs
      v-model="tab"
      bg-color="secondary"
      class="rounded-lg"
    >
      <v-tab value="userInfo">계정 정보 수정</v-tab>
      <v-tab value="changePassword">비밀번호 변경</v-tab>
      <v-tab value="userRemove">계정 삭제</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="userInfo">
          <UserInfoComponent />
        </v-window-item>

        <v-window-item value="changePassword">
          <ChangePasswordComponent />
        </v-window-item>

        <v-window-item value="userRemove">
          <UserRemoveComponent />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import UserInfoComponent from "@/components/auth/myaccounttab/UserInfoComponent";
import ChangePasswordComponent from "@/components/auth/myaccounttab/ChangePasswordComponent";
import UserRemoveComponent from "@/components/auth/myaccounttab/UserRemoveComponent";
export default {
  name: "MyAccountComponent",
  components: {UserRemoveComponent, ChangePasswordComponent, UserInfoComponent},
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>

</style>