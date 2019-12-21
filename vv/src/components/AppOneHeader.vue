<template>
  <div class="app-one-header">
    <van-nav-bar :title="newTitle">
        <van-icon v-if="isDisplaySearchIcon" :name="displayRightIconClass" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant';
export default {
    name: 'AppOneHeader',
    props: {
        title: {
            required: true,
            type: String
        },
        rightIconClass: String
    },
    components: {
        [NavBar.name]: NavBar,
        [Icon.name]: Icon
    },
    data() {
        return {
            newTitle: this.title,
            displayRightIconClass: this.rightIconClass || ""
        }
    },
    computed: {
        isDisplaySearchIcon() {
            return this.displayRightIconClass !== ''
        }
    }
}
</script>

<style scoped>
.app-one-header >>> i{
    color: black;
}
</style>