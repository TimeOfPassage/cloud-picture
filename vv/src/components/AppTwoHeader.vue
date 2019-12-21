<template>
<div class="app-two-header">
      <van-tabs v-model="active" sticky animated swipeable @change="change" line-width='20'>
        <van-tab animated v-for="item of newTabs" :key="item.index" :to="{path: item.url}" :title="item.name" style="margin-bottom: 50px;">
            <router-view></router-view>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
    name:'AppTwoHeader',
    props: {
        tabs: {
            required: true,
            type: Array,
            default: () => []
        }
    },
    components: {
        [Tabs.name]: Tabs,
        [Tab.name]: Tab
    },
    data() {
        return {
            active: 1,
            newTabs: this.tabs
        }
    },
    methods: {
        change(name){
            //alert(name)
            window.console.log(name)
        }
    }
}
</script>

<style scoped>
.app-two-header >>> .van-tab--active>.van-ellipsis {
    font-size: 18px;
    font-weight: 700;
}
 /* 动画效果 */
.textchange-enter-active {
    animation: bounce-in 1s;
}
.textchange-leave-active {
    animation: bounce-in 1s reverse;
}
/* @keyframes自定义动画效果，然后可以被引用 */
@keyframes bounce-in {
    /* 若总共持续1秒，则0%表示0秒，50%表示0.5秒，100%表示1秒 */
    0% { transform: scale(0); }
    100% { transform: scale(2); }
}
</style>