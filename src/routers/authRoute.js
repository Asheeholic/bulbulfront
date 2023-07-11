const authRoute = [
    {
        path: "/login",
        name: "login",
        component: () => import('@/components/auth/LoginComponent.vue'),
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import('@/components/auth/LogoutComponent.vue'),
    },
    {
        path: "/my-account",
        name: "myAccount",
        component: () => import('@/components/auth/MyAccountComponent.vue'),
    },
]

export default authRoute