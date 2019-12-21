<template>
    <van-tabbar v-model="mode">
        <van-tabbar-item ref="homeRef" name="home" icon="home-o" url='#/home/recommend'>首页</van-tabbar-item>
        <van-tabbar-item name="short-video" icon="video-o" url='#/short-video'>短视频</van-tabbar-item>
        <van-tabbar-item name="small-video" icon="play-circle-o" url="#/small-video">小视频</van-tabbar-item>
        <van-tabbar-item name="my" icon="user-o" url="#/my">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    name: 'AppFooter',
    props: {
        active: String
    },
    data() {
        return {
            mode: this.active
        }
    },
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    }
}
</script>

<style>

</style>