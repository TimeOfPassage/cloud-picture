<template>
    <div>
        <AppOneHeader title="小视频" />
        <AppFooter active="small-video"/>
    </div>
</template>

<script>
import AppOneHeader from '../components/AppOneHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'SmallVideo',
    components: {
        AppOneHeader,
        AppFooter
    }
}
</script>

<style>

</style>