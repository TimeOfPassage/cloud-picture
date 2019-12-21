import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ShortVideo from '../pages/ShortVideo.vue'
import SmallVideo from '../pages/SmallVideo.vue'
import MyPage from '../pages/MyPage.vue'

//import Animation from '../pages/Animation'


import Attention from '../pages/home/Attention.vue'
import Recommend from '../pages/home/Recommend.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HomePage,
            children: [
                {
                    path: 'attention',// 相对路径
                    component: Attention
                },
                {
                    path:'recommend',
                    component: Recommend
                }
            ]
        },
        {
            path: '/short-video',
            component: ShortVideo
        },
        {
            path: '/small-video',
            component: SmallVideo
        },
        {
            path: '/my',
            component: MyPage
        },
        {
            path: '',
            component: HomePage
        }
    ]
});