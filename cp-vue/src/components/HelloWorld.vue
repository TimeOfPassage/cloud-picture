<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="服装" dot/>
      <van-sidebar-item title="男鞋" info="5"/>
      <van-sidebar-item title="女鞋" />
    </van-sidebar>
    <van-button type="default" @click="show = true">弹出浮层</van-button>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="showPopup = true">展示弹出层</van-button>
    <van-overlay :show="show" @click="show = false" />
    <br/>
    <van-uploader v-model="fileList" multiple :after-read="afterRead" />
    <van-popup
      v-model="showPopup"
      position="left"
      :style="{ height: '100%', width: '60%' }"
    >
     <van-cell-group title="native">
      <van-cell title="相机" value="打开摄像头" is-link />
      <van-cell title="电池" value="显示电量信息" is-link />
     </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { Button, Sidebar, SidebarItem, Overlay, Uploader, Popup, Cell , CellGroup } from "vant";
export default {
  name: "HelloWorld",
  components: {
    [Button.name]: Button,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Overlay.name]: Overlay,
    [Uploader.name]: Uploader,
    [Popup.name]: Popup,
    [Cell.name]: Cell,
    [CellGroup]: CellGroup
  },
  data() {
    return {
      msg: "Vue+Cordova+Vant",
      activeKey: 0,
      show: false,
      fileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg'
        }
      ],
      showPopup: false
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
