<template>
  <v-row>
    <v-col cols="12">
      <v-card title="백업하기">
        <v-card-text>
          <p>백업을 하는 탭입니다.</p>
          <p>한번에 여러 파일 등을 이용해서 백업을 진행 해도 됩니다.</p>
        </v-card-text>
        <v-card-text>
          <p>백업 후에는 백업 현황 탭으로 갈지, 계속 백업을 진행할지 정하면 됩니다.</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card
        class="pa-md-4 ma-lg-auto"
      >
        <v-row>
          <v-col cols="12" md="10">
            <v-file-input
                v-model="files"
                placeholder="Upload your documents"
                label="파일 선택"
                multiple
                prepend-icon="mdi-paperclip"
            >
              <template v-slot:selection="{ fileNames }">
                <template v-for="fileName in fileNames" :key="fileName">
                  <v-chip
                      size="small"
                      label
                      color="primary"
                      class="me-2"
                  >
                    {{ fileName }}
                  </v-chip>
                </template>
              </template>
            </v-file-input>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn
                color="secondary"
                @click="backupWarningDialog = true"
            >
              백업하기
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

<!--Dialog List-->
  <div class="text-center">
<!--    backup warning-->
    <v-dialog
        v-model="backupWarningDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          백업 알림
        </v-card-title>
        <v-card-text>
          업로드 후 파일이 백업이 진행되며, 백업이 진행된 후에는 서버에 있는 파일이 삭제됩니다. 진행하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="upload">백업 시작</v-btn>
          <v-btn color="error" @click="backupWarningDialog = false">취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!--    success-->
    <v-dialog
        v-model="backupSuccessDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          백업 성공 알림
        </v-card-title>
        <v-card-text>
          업로드 및 파일 백업이 진행됩니다. 백업 현황을 확인하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="MoveToBackupStatus">현황 확인</v-btn>
          <v-btn color="warn" @click="backupSuccessDialog = false">더 백업하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<!--    fail-->
    <v-dialog
        v-model="backupFailedDialog"
        width="auto"
    >
      <v-card>
        <v-card-title>
          백업 실패 알림
        </v-card-title>
        <v-card-text>
          {{ backupFailedDialogText }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" block @click="backupFailedDialog = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
<!--  Dialog List End -->
</template>

<script>
import backupApi from "@/axioses/backup/backupApi";

export default {
  name: "BackupComponent",

  data: () => ({
    files: [],
    backupWarningDialog: false,
    backupStatusDialog: false,
    backupFailedDialog: false,
    backupFailedDialogText: '',
    backupSuccessDialog: false,
  }),

  methods: {
    async upload() {
      this.backupWarningDialog = false;

      if (this.files.length === 0) {
        this.backupFailedDialog = true;
        this.backupFailedDialogText = '파일이 없습니다. 파일을 선택해주세요.';
        return
      }

      const formData = new FormData();

      for (let i = 0; i < this.files.length; i++) {
        formData.append('files', this.files[i])
      }

      const result = await backupApi(this.$cookies.get('token'), formData);

      if (result === "fail") {
        this.backupFailedDialog = true;
        this.backupFailedDialogText = '백업이 실패 되었습니다.';
        return
      }

      this.backupSuccessDialog = true;
    },

    async MoveToBackupStatus() {
      this.backupSuccessDialog = false;
      this.$router.push({path: '/backup-status'})
    }
  }
}
</script>

<style scoped>

</style>