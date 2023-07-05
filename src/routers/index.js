// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8081/main

// [라우터 import 수행 실시]
import { createWebHistory, createRouter } from 'vue-router';
import VueCookies from 'vue-cookies';

// [라우터 path 접속 경로 설정]
const routes = [
    {
        path: "/", // [경로]
        name: "main", // [이름]
        component: () => import('@/components/MainComponent.vue') // [로드 파일]
    },
    {
        path: "/hello", // [경로]
        name: "hello", // [이름]
        component: () => import('@/components/HelloWorld.vue') // [로드 파일]
    },
    {
        path: "/main", // [경로]
        name: "main", // [이름]
        component: () => import('@/components/MainComponent.vue') // [로드 파일]
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/components/LoginComponent.vue')
    }
];

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

router.beforeEach(async (to, from, next) => {
    // [로그인 여부 확인]
    const token = VueCookies.get('token');
    console.log("before If")
    console.log("to.name");
    console.log(to.name);
    console.log("from.name");
    console.log(from.name);
    console.log(token)
    if (!token && (to.name !== 'login')) {
        console.log("In If")
        console.log("to.name");
        console.log(to.name);
        console.log("from.name");
        console.log(from.name);
        console.log(token)
        next('/login');
    } else next();
});

export default router;