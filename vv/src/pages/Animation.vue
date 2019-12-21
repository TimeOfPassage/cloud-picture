<template>
    <div style="display:flex;flex-direction:column">
        <div class="progress">
            <div class="progress-wrapper" >
                <div class="progress-inner" :style="{ width: percent + '%' }" ></div>
            </div>
            <div class="progress-info" >{{ percent }}%</div>
        </div>
        <div class="btns">
            <button @click="decrease">-</button>
            <button @click="increase">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Animation',
    data() {
        return {
            percent: 0,
            inTimer: null,
            deTimer: null,
            targetPercent: 0
        }
    },
    methods: {
        increase() {
            this.percent += 10
        },
        decrease() {
            this.percent -= 10
        }
    }
}
</script>

<style scoped>
.progress {
    margin: 0;
    padding: 0;
    width: 600px;
    height: 20px;
    display: flex;
    flex-direction: row;
    margin: 10px;
}
.progress-wrapper {
    width: 560px;
    height: 12px;
    border-radius: 10px;
    background: #f5f5f5;
}
.progress-inner {
    transition: width 400ms cubic-bezier(0.08, 0.82, 0.17, 1);
    height: 12px;
    border-radius: 10px;
    background: #e64644;
}
.progress-info {
    width: 40px;
    height: 12px;
    line-height: 12px;
    text-align: center;
    color:#e5e5e5;
}
.btns {
    width: 80px;
    height: 40px;
}
</style>