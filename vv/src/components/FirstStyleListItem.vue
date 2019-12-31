<template>
  <div class="app-home-recommend">
    <van-panel>
      <div slot="header" style="text-align:left;">
        {{ newItem.title }}
      </div>
      <div slot="default" style="display: flex; flex-direction: row; justify-content: space-around;">
        <div 
          v-for="(url,index) in newItem.images" 
          :key="index" 
          :style="{'width': '32%', 'height': '80px', 'border-radius': '10px','': '','background-image':'url('+url+')', 'background-repeat': 'no-repeat','background-size':'cover'}">
        </div>
      </div>
      <div slot="footer" style="height: 15px;font-size:10px;color:grey;display: flex; flex-direction: row;justify-content: space-between;">
        <div style="display: flex; flex-direction: row;">
          <div style="line-height: 15px;">{{ newItem.author }} </div>
          <div style="line-height: 15px;margin-left: 5px;"> {{ newItem.publishDate }} </div>
        </div>
        <div style="line-height: 15px;">x</div>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel } from 'vant';
export default {
    name: 'FirstStyleListItem',
    props: {
      item: {
        required: true,
        type: Object
      }
    },
    components: {
      [Panel.name]: Panel
    },
    data() {
      return {
        newItem: this.item
      }
    }
}
</script>

<style scoped>
.app-home-recommend {
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid gray #cccccc;
}
.van-cell-group .van-panel__footer {
  padding:8px 4px;
}
.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after, .van-hairline--top::after {
  border-top-width: 0;
  border-width: 0;
}
</style>