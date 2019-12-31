<template>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
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
    </van-pull-refresh>
</template>

<script>
import { List, PullRefresh } from 'vant';
import FirstStyleListItem from './FirstStyleListItem.vue';
export default {
    name: 'TabContent',
    props: {
        url: {
            required: true,
            type: String
        },
        tabName: {
            type: String
        },
        tabIndex: {
            type: Number
        }
    },
    components: {
        [List.name]: List,
        [PullRefresh.name]: PullRefresh,
        FirstStyleListItem
    },
    data() {
        return {
            inputObj: {
                url: this.url,
                tabName: this.tabName,
                tabIndex: this.tabIndex
            },
            list: [],
            loading: false,
            finished: false
        }
    },
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    this.list.unshift(
                        {
                            docId: 'doc-' + i,
                            title: '5元纸币出现这两个"字母"打死也别花，一张能卖到'+ parseInt(Math.random() * 100) +'元',
                            author: '大伟说史',
                            publishDate: '2019-12-17',
                            style: 1,
                            images: [
                                'https://n.sinaimg.cn/sinacn20190524s/40/w480h360/20190524/2f04-hxntqyy2081448.jpg',
                                'http://ib11.go2yd.com/image.php?url=V_02cLkCxYTK',
                                'http://publish-pic-cpu.baidu.com/5621802c-a67e-47fc-9494-e023b9e176cd.png@w_585,h_385'
                            ]
                        }
                    );
                }
                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                // if (this.list.length >= 20) {
                //     this.finished = true;
                // }
            }, 1000);
        },
        onRefresh() {
            this.list = []
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    this.list.unshift(
                        {
                            docId: 'doc-' + i,
                            title: '5元纸币出现这两个"字母"打死也别花，一张能卖到'+ parseInt(Math.random() * 100) +'元',
                            author: '大伟说史',
                            publishDate: '2019-12-17',
                            style: 1,
                            images: [
                                'https://n.sinaimg.cn/sinacn20190524s/40/w480h360/20190524/2f04-hxntqyy2081448.jpg',
                                'http://ib11.go2yd.com/image.php?url=V_02cLkCxYTK',
                                'http://publish-pic-cpu.baidu.com/5621802c-a67e-47fc-9494-e023b9e176cd.png@w_585,h_385'
                            ]
                        }
                    );
                }
                // 加载状态结束
                this.loading = false;
            }, 2000);
        }
    }
}
</script>

<style>

</style>