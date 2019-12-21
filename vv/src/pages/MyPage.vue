<template>
    <div>
        <AppOneHeader title="我的" rightIconClass='setting-o'/>
        <AppFooter active="my"/>
    </div>
</template>

<script>
import AppOneHeader from '../components/AppOneHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'MyPage',
    components: {
        AppOneHeader,
        AppFooter
    }
}
</script>

<style>

</style>