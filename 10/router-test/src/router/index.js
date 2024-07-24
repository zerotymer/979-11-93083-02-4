import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue');
const About = () => import(/* webpackChunkName: "home" */ '@/pages/About.vue');
const Members = () => import(/* webpackChunkName: "members" */ '@/pages/Members.vue');
const MemberInfo = () => import(/* webpackChunkName: "members" */ '@/pages/MemberInfo.vue');
const Videos = () => import(/* webpackChunkName: "videos" */ '@/pages/Videos.vue');
const VideoPlayer = () => import(/* webpackChunkName: "home" */ '@/pages/VideoPlayer.vue');
import NotFound from '@/pages/NotFound.vue';


/// region - Route Navigation Guards
const membersIdGuard = (to, from) => {
    // 이전 경로 주소 체크
    if (from.name === 'members')        return true;
    if (from.name === 'members/id')     return true;
    
    return false;
}
/// endregion


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/members', name: 'members', component: Members },
        { path: '/members/:id', name: 'members/id', component: MemberInfo, 
            beforeRouteEnter: membersIdGuard, props: true 
        },
        { path: '/videos', name: 'videos', component: Videos,
            children: [
                { path: ':id', name: 'videos/id', component: VideoPlayer }
            ]
        },
        { path: '/:paths(.*)+', name: 'NotFound', component: NotFound }
    ]
});


/// region - Global Navigation Guards
router.beforeEach((to, from) => {
    // 쿼리 제거
    if (to.query && Object.keys(to.query).length > 0)
        return { ...to, query: {} };
});
router.afterEach((to, from, failure) => {
    isNavigationFailure(failure) && console.log('Navigation Failure', failure);
});
/// endregion

export default router;