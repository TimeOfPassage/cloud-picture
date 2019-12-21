<template>
    <div>
        <AppOneHeader title="短视频" />
        <AppFooter active="short-video"/>
    </div>
</template>

<script>
import AppOneHeader from '../components/AppOneHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'ShortVideo',
    components: {
        AppOneHeader,
        AppFooter
    }
}
</script>

<style>

</style>