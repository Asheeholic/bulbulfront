const etcRoute = [
    {
        path: '/:pathMatch(.*)*',
            redirect: "/404"
    },
    {
        path: "/404",
            name: "NotFound",
        component: () => import('@/components/drawer/NotFound.vue'),
    },
    {
        path: "/", // [경로]
            redirect: { name : "main" }, // [경로로 접속 시 리다이렉트 경로]
    }
]

export default etcRoute