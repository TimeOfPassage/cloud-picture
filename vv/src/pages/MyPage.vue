<template>
  <div class="app-my">
    <div class="profile">
      <div class="profile-img">
        <van-image
          round
          width="100%"
          height="100%"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
        />
      </div>
      <div class="profile-info">
        <div style="font-weight: 700; font-size: 1.2rem;padding-left: 15px;">登录/注册</div>
        <div style="font-size: 0.4rem;padding-left: 15px;">
          <van-icon name="phone-o" :style="{'top': '2px'}" />登录后享受更多特权
        </div>
      </div>
      <div class="profile-arrow">
        <van-icon name="arrow" color="#ffffff" />
      </div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png" text="红包" />
      <van-grid-item icon="search" text="金币" />
    </van-grid>
    <van-cell-group :style="{'margin-top': '6px'}"> 
      <van-cell title="我的地址" is-link>
          <van-icon name="location-o" color="blue" slot="icon" size="1rem" :style="{'top': '3px'}"/>
      </van-cell>
    </van-cell-group>
    <van-cell-group :style="{'margin-top': '6px'}"> 
      <van-cell title="金币商城" is-link>
          <van-icon name="bag-o" color="green" slot="icon" size="1rem" :style="{'top': '3px'}"/>
      </van-cell>
      <van-cell title="分享拿20元现金" is-link icon="point-gift-o"/>
    </van-cell-group>
    <van-cell-group :style="{'margin-top': '6px','margin-bottom': '6px'}"> 
      <van-cell title="我的客服" is-link>
          <van-icon name="bag-o" color="green" slot="icon" size="1rem" :style="{'top': '3px'}"/>
      </van-cell>
      <van-cell title="下载饿了么APP" is-link icon="point-gift-o"/>
      <van-cell title="规则中心" is-link icon="point-gift-o"/>
    </van-cell-group>
    <div style="width: 100%;height: 44px;font-size: 12px;text-align: center;color: #4da6f0;">
        隐私政策
    </div>
    <AppFooter active="my" />
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import { Image, Icon, Grid, GridItem, Cell, CellGroup } from "vant";
export default {
  name: "MyPage",
  components: {
    AppFooter,
    [Image.name]: Image,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
.app-my {
    background: #f5f5f5;
    min-height: 100vh;
}
.app-my .profile {
  height: 20vw;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 6vw 4vw;
  display: flex;
  align-items: center;
}
.app-my .profile .profile-img {
  width: 3.6rem;
  height: 3.6rem;
}
.app-my .profile .profile-info {
  color: #ffffff;
}
.app-my .profile .profile-arrow {
  position: absolute;
  right: 1rem;
}
.app-my .van-cell {
    color: #000000;
}
</style>