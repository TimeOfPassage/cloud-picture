<template>
    <div>
        <!-- 优惠券单元格 -->
        <van-coupon-cell
            title="促销优惠券"
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
        />
        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="right" :style="{ width: '100%', height: '100%'}">
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
            />
        </van-popup>
    </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
import { CouponCell, CouponList, Popup } from 'vant';
export default {
    name: 'VantCouponList',
    components: {
        [CouponCell.name]: CouponCell,
        [CouponList.name]: CouponList,
        [Popup.name]: Popup
    },
    data() {
        return {
            showList: false,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon]
        }
    },
    methods: {
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(code);
        }
    }
}
</script>

<style>

</style>