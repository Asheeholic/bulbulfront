<template>
  <v-sheet max-width="300" class="mx-auto">
<!--    v-alert 넣기 -->

<!--    @submit.prevent="submit" => 이게 함수 실행 -->
    <v-form
        validate-on="submit lazy"
        @submit.prevent="submit"
    >
      <!-- 유저네임
      :rules -> v-bind:rulse="rules"
      -->
      <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="아이디"
      ></v-text-field>

      <v-text-field
          v-model="password"

          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="show1 = !show1"
          :type="show1 ? 'text' : 'password'"

          :rules="[passwordRules.require, passwordRules.length]"
          hint="패스워드는 최소한 8글자 이상입니다."
          label="비밀번호"

      ></v-text-field>

      <v-btn :loading="loading" type="submit" block class="mt-2" text="확인"/>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "LoginComponent.vue",
  data: () => ({
    loading : false,

    // 함수로 바인드시 지정법 []
    // rules : [value => this.checkApi(value)],
    usernameRules: [value => !!value || '아이디가 필요합니다.'],
    passwordRules: {
      require: value => !!value || '패스워드가 필요합니다.',
      length: value => value.length >= 8 || '패스워드는 최소한 8글자 이상입니다.',
    },

    show1: false,
    show2: true,

    // 타임아웃
    timeout: null,

    // 데이터 바인딩
    username : '',
    password : ''
  }),

  methods: {
    // submit 펑션
    async submit(event) {
      this.loading = true;
      console.log("submit login");

      // valid 는 무조건 await 로 받아야함
      const resultValid = await event;
      if (!resultValid.valid) {
        this.loading = false;
        console.log("submit login fail");
        return;
      }

      const results = await this.loginApi(this.username, this.password)
      console.log(results)
      this.loading = false;
      this.username = '';
      this.password = '';
      // this.$router.push('/home')
    },

    // 로그인 API
    async loginApi(username, password) {

      //parameter test
      console.log("testApi");
      console.log(username, password);

      // axios 이렇게 해야함..
      // 나중에 로컬스토리지 저장 활용 ㄱㄱ
      let response = null;
      await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
          .then(res => {
            response = res.data;
          })
          .catch(err => {
            return err;
          })
      return response;
    }

  }
}
</script>

<style scoped>

</style>