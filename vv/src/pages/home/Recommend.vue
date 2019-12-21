<template>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
        <div v-for="(item,index) in list" :key="index">
            <FirstStyleListItem :item="item" v-if="item.style === 1"/>
        </div>
    </van-list>
</template>

<script>
import FirstStyleListItem from '../../components/FirstStyleListItem.vue';
import { List } from 'vant';
export default {
    name: 'Recommend',
    components: {
        [List.name]: List,
        FirstStyleListItem
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false
        }
    },
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    // this.list.push(
                    //     {
                    //         docId: 'doc-'+i,
                    //         title: '5元纸币出现这两个"字母"打死也别花，一张能卖到550元',
                    //         author: '大伟说史',
                    //         publishDate: '2019-12-17',
                    //         style: 1,
                    //         images: [
                    //             'https://n.sinaimg.cn/sinacn20190524s/40/w480h360/20190524/2f04-hxntqyy2081448.jpg',
                    //             'http://ib11.go2yd.com/image.php?url=V_02cLkCxYTK',
                    //             'http://publish-pic-cpu.baidu.com/5621802c-a67e-47fc-9494-e023b9e176cd.png@w_585,h_385'
                    //         ]
                    //     }
                    // );
                }
                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                // if (this.list.length >= 40) {
                //     this.finished = true;
                // }
                this.finished = true;
            }, 500);
        }
    }
}
</script>

<style>

</style>