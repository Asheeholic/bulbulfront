<template>
  <v-card elevation="10">

<!--    별명 변경     -->
    <v-card elevation="24">
      <v-card-title>
        나의 별명 정보
      </v-card-title>
      <v-row>
        <v-col cols="12" lg="5">
          <v-card-text>
            현재 별명 : {{ currentNickname }}
          </v-card-text>

          <v-card-text>

          </v-card-text>

        </v-col>
        <v-col v-show="!clickedUpdateNicknameBtn" cols="12" lg="5">
          <v-btn variant="outlined" @click="clickUpdateBtnMethod('nickname')">
            별명 변경
          </v-btn>
        </v-col>
        <v-col v-show="clickedUpdateNicknameBtn" cols="12" lg="5">
          <v-card-text>
            <v-text-field
                label="별명"
                v-model="nickname"
                :rules="nicknameRules"
                required
            ></v-text-field>
          </v-card-text>
        </v-col>
        <v-col v-show="clickedUpdateNicknameBtn" cols="12" lg="2">
          <v-card-text>
            <v-btn variant="outlined" @click="updateWarningDialog = true">
              변경
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn variant="outlined" @click="clickedUpdateNicknameBtn = !clickedUpdateNicknameBtn">
              취소
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

<!--    이메일 변경     -->

    <v-card elevation="24">
      <v-card-title>
        이메일 정보
      </v-card-title>
      <v-row>
        <v-col cols="12" lg="5">
          <v-card-text>
            현재 이메일 주소 : {{ currentEmail }}
          </v-card-text>
        </v-col>
        <v-col v-show="!clickedUpdateEmailBtn" cols="12" lg="5">
          <v-btn variant="outlined" @click="clickUpdateBtnMethod('email')">
            이메일 변경
          </v-btn>
        </v-col>
        <v-col v-show="clickedUpdateEmailBtn" cols="12" lg="5">
          <v-card-text>
            <v-text-field
                label="이메일"
                v-model="email"
                :rules="emailRules"
                required
            ></v-text-field>
          </v-card-text>
        </v-col>
        <v-col v-show="clickedUpdateEmailBtn" cols="12" lg="2">
          <v-card-text>
            <v-btn variant="outlined" @click="updateWarningDialog = true">
              변경
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn variant="outlined" @click="clickedUpdateEmailBtn = !clickedUpdateEmailBtn">
              취소
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>

<!--    전화번호 변경     -->
    <v-card elevation="24">
      <v-card-title>
        전화번호 정보
      </v-card-title>
      <v-row>
        <v-col cols="12" lg="5">
          <v-card-text>
            현재 전화번호 : {{ currentNumber }}
          </v-card-text>
        </v-col>
        <v-col v-show="!clickedUpdateNumberBtn" cols="12" lg="5">
          <v-btn variant="outlined" @click="clickUpdateBtnMethod('number')">
            전화번호 변경
          </v-btn>
        </v-col>
        <v-col v-show="clickedUpdateNumberBtn" cols="12" lg="5">
          <v-card-text>
            <v-text-field
                label="전화번호"
                v-model="number"
                :rules="numberRules"
                required
            ></v-text-field>
          </v-card-text>
        </v-col>
        <v-col v-show="clickedUpdateNumberBtn" cols="12" lg="2">
          <v-card-text>
            <v-btn variant="outlined" @click="updateWarningDialog = true">
              변경
            </v-btn>
          </v-card-text>
          <v-card-text>
            <v-btn variant="outlined" @click="clickedUpdateNumberBtn = !clickedUpdateNumberBtn">
              취소
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-card>


  <!--Dialog List-->
  <div class="text-center">
    <!--    backup warning-->
    <v-dialog
        v-model="updateWarningDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          정보 변경 경고
        </v-card-title>
        <v-card-text>
          원하시는 정보로 변경하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="updateUserInfo">정보 변경</v-btn>
          <v-btn color="error" @click="updateWarningDialog = false">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--    success-->
    <v-dialog
        v-model="updateSuccessDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          정보 변경 성공 알림
        </v-card-title>
        <v-card-text>
          정보가 변경 되었습니다.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warn" @click="updateSuccessDialog = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--    fail-->
    <v-dialog
        v-model="updateFailedDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          정보 변경 실패 알림
        </v-card-title>
        <v-card-text>
          정보 변경이 실패 되었습니다.
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" block @click="updateFailedDialog = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--  Dialog List End -->
</template>

<script>
import myaccountGetApi from "@/axioses/account/myaccountGetApi";
import VueCookies from "vue-cookies";

export default {
  name: "UserInfoComponent",
  data: () => ({

    clickedUpdateNicknameBtn: false,
    clickedUpdateEmailBtn: false,
    clickedUpdateNumberBtn: false,

    currentNickname: '',
    currentEmail: '',
    currentNumber: '',


    allUserInfo: [],

    nickname: '',
    email: '',
    number: '',
    nicknameRules: [
      v => !!v || '별명을 입력해주세요.',
      v => (v && v.length <= 10) || '별명은 10자 이내로 입력해주세요.',
    ],
    emailRules: [
      v => !!v || '이메일을 입력해주세요.',
      v => /.+@.+/.test(v) || '이메일 형식에 맞지 않습니다.',
    ],
    numberRules: [
      v => !!v || '전화번호를 입력해주세요.',
      v => (v && v.length === 11 && /[0-9]/.test(v)) || '전화번호는 11자로 "-" 없이 숫자만 입력해주세요.',
    ],

    updateWarningDialog: false,
    updateSuccessDialog: false,
    updateFailedDialog: false,

  }),

  async mounted() {
    // console.log("mounted");
    const token = VueCookies.get('token');
    const result = await myaccountGetApi(token);
    console.log(result);
    this.allUserInfo = result;
    this.currentNickname = result.nickname;
    this.currentEmail = result.email;
    this.currentNumber = result.phoneNumber;
  },

  methods: {
    clickUpdateBtnMethod(btnName) {
      this.nickname = '';
      this.email= '';
      this.number= '';

      if (btnName === 'nickname') {
        this.clickedUpdateNicknameBtn = true;
        this.clickedUpdateEmailBtn = false;
        this.clickedUpdateNumberBtn = false;
      }
      else if (btnName === 'email') {
        this.clickedUpdateNicknameBtn = false;
        this.clickedUpdateEmailBtn = true;
        this.clickedUpdateNumberBtn = false;
      }
      else if (btnName === 'number') {
        this.clickedUpdateNicknameBtn = false;
        this.clickedUpdateEmailBtn = false;
        this.clickedUpdateNumberBtn = true;
      } else {
        console.error("clickUpdateBtnMethod error");
      }
    },

    async updateUserInfo() {
      console.log(this.allUserInfo);
    },

  }
}
</script>

<style scoped>

</style>