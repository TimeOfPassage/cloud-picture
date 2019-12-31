<template>
  <div id="app-home-content">
    <AppTwoHeader :tabs="tabs"/>
    <AppFooter active="home"/>
  </div>
</template>

<script>
const tabsConst = [
    {
        index: 0,
        name: '关注',
        url: '/home'
    },
    {
        index: 1,
        name: '推荐',
        url: '/home'
    },
    {
        index: 2,
        name: '历史',
        url: '/home'
    },
    {
        index: 3,
        name: '南京',
        url: '/home'
    },
    {
        index: 4,
        name: '双11',
        url: '/home'
    },
    {
        index: 5,
        name: '小视频',
        url: '/home'
    },
    {
        index: 6,
        name: '财经',
        url: '/home'
    },
    {
        index: 7,
        name: '视频',
        url: '/home'
    }
]
import AppTwoHeader from '../components/AppTwoHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'HomePage',
    components: {
        AppTwoHeader,
        AppFooter
    },
    data() {
        return {
            tabs: tabsConst || []
        }
    }
}
</script>

<style scoped>

</style>