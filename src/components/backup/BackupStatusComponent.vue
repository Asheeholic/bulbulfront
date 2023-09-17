<template>
<!--  v-data-table-server는 아직 테스트 단계라서 제대로 주입이 안되어 있음
그래서 vuetify.js 에 직접 주입한 상태-->
  <v-row>
    <v-col cols="12">
      <v-card title="백업 현황">
        <v-card-text>
          <p>현재까지 진행 된 백업의 현황입니다.</p>
          <p>백업 번호와 백업 용량 등을 오름 및 내림차순으로 정렬 할 수 있습니다.</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="serverItems"
            :loading="loading"
            :search="search"
            class="elevation-1"
            item-value="name"
            @update:options="loadItems"
        ></v-data-table-server>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import backupJobsApi from "@/axioses/backupstatus/backupJobsApi";
import VueCookies from "vue-cookies";

export default {
  name: "BackupStatusComponent",

  data: () => ({
    itemsPerPage: 5,
    headers: [
      { title: '백업 번호',  align: 'start', key: 'jobId' },
      { title: '백업 용량 (KB)', align: 'end', key: 'kilobytesTransferred' },
      { title: '백업 시작 시간', align: 'end', sortable: false, key: 'startTime' },
      { title: '백업 끝 시간', align: 'end', sortable: false, key: 'endTime' },
      { title: '백업 기간', align: 'end', sortable: false, key: 'elapsedTime' },
      { title: '백업 상태', align: 'end', key: 'state' },
      { title: '상태 번호', align: 'end', key: 'status' },
    ],

    search: '',
    serverItems : [],
    loading: true,
    totalItems: 0,
  }),


  methods: {

    // v-data-table-server로 제공하는 함수
    async loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      // 서버에서 데이터를 들고 옴
      const result = await backupJobsApi(VueCookies.get('token'));

      // 테이블 데이터 정보 주입 준비
      let serverItemsBefore = [];
      let serverItem = {};
      result.data.map((item) => {

        serverItem = {
          jobId: item.attributes.jobId,
          kilobytesTransferred: item.attributes.kilobytesTransferred,
          startTime: new Date(item.attributes.startTime).toLocaleString(),
          endTime: new Date(item.attributes.startTime).toLocaleString(),
          elapsedTime: item.attributes.elapsedTime,
          state: item.attributes.state,
          status: item.attributes.status,
        }
        serverItemsBefore.push(serverItem);
      });

      // Sorting
      const start = (page - 1) * itemsPerPage
      const end = start + itemsPerPage

      const items = serverItemsBefore.slice()

      if (sortBy.length) {
        const sortKey = sortBy[0].key
        const sortOrder = sortBy[0].order
        items.sort((a, b) => {
          const aValue = a[sortKey]
          const bValue = b[sortKey]
          return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
        })
      }

      // Injecting data
      this.serverItems = items.slice(start, end)
      this.totalItems = result.data.length;
      this.loading = false;

    },
  },
}
</script>

<style scoped>

</style>