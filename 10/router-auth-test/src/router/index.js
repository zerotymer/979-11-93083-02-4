import { createRouter, createWebHistory } from "vue-router";

import Home from '@/pages/Home.vue';
import Users from '@/pages/Users.vue';
import Admins from '@/pages/Admins.vue';
import Login from '@/pages/Login.vue';
import { isMatchToRoles } from "@/utils/AuthUtil";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home }, 
        { path: '/login', name: 'login', component: Login },
        { path: '/users', name: 'users', component: Users },
        { path: '/admins', name: 'admins', component: Admins },
    ]
});

router.beforeEach((to, from) => {
    // Global Navigation Guard - Authentication
    if (!isMatchToRoles(to.path)) // 비로그인 사용자
        return { name: 'login', query: { fromname: to.name } };

    return true
});

export default router;