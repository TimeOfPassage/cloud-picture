import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ShortVideo from '../pages/ShortVideo.vue'
import SmallVideo from '../pages/SmallVideo.vue'
import MyPage from '../pages/MyPage.vue'

import Animation from '../pages/test/Animation.vue'
import Form from '../pages/test/Form.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: HomePage
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
        },
        //测试组件
        {
            path: '/test/animation',
            component: Animation
        },
        {
            path: '/test/form',
            component: Form
        }
    ]
});