<template>
  <van-row>
    <van-col span="24">
      <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">进度条</van-divider>
      <van-row style="height: 40px;">
        <van-row style="height: 30px;">
          <van-col span="24">
            <van-progress :percentage="percent" />
          </van-col>
        </van-row>
        <van-row>
          <van-col>
            <van-button type="primary" plain size="mini" @click="decrease">-</van-button>
          </van-col>
          <van-col>
            <van-button type="info" plain size="mini" @click="increase">+</van-button>
          </van-col>
        </van-row>
      </van-row>
      <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">通知栏</van-divider>
      <van-notice-bar
        mode="link"
      >hello，this is van-notice-bar. can you see me ? if you can see me, please input 'yes'</van-notice-bar>
      <van-notice-bar
        mode="closeable"
      >hello，this is van-notice-bar. can you see me ? if you can see me, please input 'yes'</van-notice-bar>
      <van-notice-bar
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
        mode="closeable"
      >hello，this is van-notice-bar. can you see me ? if you can see me, please input 'yes'</van-notice-bar>
      <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">倒计时</van-divider>
      <van-count-down :time="time" />
      <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      <van-count-down :time="time">
        <template v-slot="timeData">
          <div
            style="display:flex; flex-direction: row;color:white;width: 100px;justify-content: space-between;"
          >
            <div
              style="width: 32px; height: 22px; background:#1989fa;line-height:22px;text-align:center;"
            >{{ timeData.hours}}</div>
            <div
              style="width: 32px; height: 22px; background:#1989fa;line-height:22px;text-align:center;"
            >{{ timeData.minutes}}</div>
            <div
              style="width: 32px; height: 22px; background:#1989fa;line-height:22px;text-align:center;"
            >{{ timeData.seconds}}</div>
          </div>
        </template>
      </van-count-down>
      <van-divider
        content-position="left"
        :style="{ color: '#1989fa', borderColor: '#1989fa' }"
      >Collapse</van-divider>
      <!-- accordion: 设置手风琴模式-->
      <van-collapse v-model="activeNames" accordion :border="false">
        <van-collapse-item title="标题1" name="1" icon="info-o" value="右侧">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2" icon="setting-o">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3" icon="home-o" disabled>这里内容不可点击</van-collapse-item>
      </van-collapse>
      <van-divider
        content-position="left"
        :style="{ color: '#1989fa', borderColor: '#1989fa' }"
      >图片懒加载</van-divider>
      <img
        v-for="(img,index) in lazyImageList"
        :src="img"
        :key="index"
        width="100%"
        height="200px"
        v-lazy="img"
      />
      <van-divider
        content-position="left"
        :style="{ color: '#1989fa', borderColor: '#1989fa' }"
      >图片预览</van-divider>
      <van-button type="danger" @click="picPreviewSwitch = true">预览图片</van-button>
      <van-image-preview v-model="picPreviewSwitch" :images="lazyImageList" />
      <van-divider
        content-position="left"
        :style="{ color: '#1989fa', borderColor: '#1989fa' }"
      >Tag标签</van-divider>
      <van-row>
        <van-tag>标签</van-tag>
        <van-tag type="primary">标签</van-tag>
        <van-tag type="success">标签</van-tag>
        <van-tag type="danger">标签</van-tag>
        <van-tag type="warning">标签</van-tag>
      </van-row>
      <van-row>
        <van-tag round>标签</van-tag>
        <van-tag round type="primary">标签</van-tag>
        <van-tag round type="success">标签</van-tag>
        <van-tag round type="danger">标签</van-tag>
        <van-tag round type="warning">标签</van-tag>
      </van-row>
      <van-row>
        <van-tag mark>标签</van-tag>
        <van-tag mark type="primary">标签</van-tag>
        <van-tag mark type="success">标签</van-tag>
        <van-tag mark type="danger">标签</van-tag>
        <van-tag mark type="warning">标签</van-tag>
      </van-row>
      <van-row>
        <van-tag plain>标签</van-tag>
        <van-tag plain type="primary">标签</van-tag>
        <van-tag plain type="success">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="warning">标签</van-tag>
      </van-row>
      <van-row>
        <van-tag color="#f2826a">标签</van-tag>
        <van-tag color="#f2826a" plain>标签</van-tag>
        <van-tag color="#7232dd">标签</van-tag>
        <van-tag color="#7232dd" plain>标签</van-tag>
        <van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag>
      </van-row>
      <van-row>
        <van-tag type="danger">标签</van-tag>
        <van-tag type="danger" size="medium">标签</van-tag>
        <van-tag type="danger" v-if="showTag" closeable @close="showTag = false" size="large">标签</van-tag>
      </van-row>
      <van-divider content-position="left" :style="{ color: '#1989fa', borderColor: '#1989fa' }">轮播</van-divider>
      <van-swipe :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in lazyImageList" :key="index">
          <img v-lazy="image" width="100%" height="200px" />
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </van-row>
</template>

<script>
import Vue from "vue";
import {
  Row,
  Col,
  Button,
  Divider,
  NoticeBar,
  Progress,
  CountDown,
  Collapse,
  CollapseItem,
  Lazyload,
  ImagePreview,
  Tag,
  Swipe,
  SwipeItem
} from "vant";
// options 为可选参数，无则不传
Vue.use(Lazyload, {});
Vue.use(ImagePreview);
export default {
  name: "Animation",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [NoticeBar.name]: NoticeBar,
    [Progress.name]: Progress,
    [CountDown.name]: CountDown,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Tag.name]: Tag,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      percent: 10,
      time: 30 * 60 * 60 * 60,
      activeNames: ["1"],
      lazyImageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
        "https://img.yzcdn.cn/vant/apple-5.jpg",
        "https://img.yzcdn.cn/vant/apple-6.jpg",
        "https://img.yzcdn.cn/vant/apple-7.jpg",
        "https://img.yzcdn.cn/vant/apple-8.jpg"
      ],
      picPreviewSwitch: false,
      showTag: true
    };
  },
  methods: {
    increase() {
      this.percent = this.percent + 10 >= 100 ? 100 : (this.percent += 10);
    },
    decrease() {
      this.percent = this.percent - 10 <= 0 ? 0 : (this.percent -= 10);
    }
  }
};
</script>

<style scoped>
</style>