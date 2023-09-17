// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8081/main

// [라우터 import 수행 실시]
import { createWebHistory, createRouter } from 'vue-router';
import VueCookies from 'vue-cookies';
import loginValidation from "@/axioses/account/loginValidation";

// 라우트 임포트
import etcRoute from "@/routers/etcRoute";
import authRoute from "@/routers/authRoute";
import mainRoute from "@/routers/mainRoute";
import backupRoute from "@/routers/backupRoute";

// [라우터 path 접속 경로 설정]
const routes = [
    ...authRoute,
    ...mainRoute,
    ...etcRoute,
    ...backupRoute
]

// [라우터 설정 실시]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//// BAD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   // if the user is not authenticated, `next` is called twice
//   next()
// })
//// GOOD
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

// const toFromLog = (to, from) => {
//     console.log("to.name");
//     console.log(to.name);
//     console.log("from.name");
//     console.log(from.name);
// }

// 라우터 마다 접근시 시행되는 함수
router.beforeEach(async (to, from, next) => {
    // [로그인 여부 확인]
    const token = VueCookies.get('token');

    // console.log("before If");
    // toFromLog(to, from);

    // 억지로 login 창 들어오면 바로 로그아웃
    if (to.name === 'login') {
        await VueCookies.keys().forEach(cookie => VueCookies.remove(cookie))
    }

    const isAuthenticate = await loginValidation(token);

    // 비인가 구역 접근시 로그아웃 후 로그인 진입
    if (!isAuthenticate && (to.name !== 'login')) {

        // console.log("In If");
        // toFromLog(to, from);
        // console.log(token);

        await VueCookies.keys().forEach(cookie => VueCookies.remove(cookie))

        next('/login');
    } else next();


});

export default router;