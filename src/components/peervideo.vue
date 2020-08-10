<template>
    <div class style="float:left">
        <video class="box" ref="video" autoplay />
    </div>
</template>

<script>
export default {
    props: ["videoStream"],
    data: function() {
        return {
            video: null
        };
    },
    mounted: function() {
        this.$refs.video.srcObject = this.videoStream;
    },
    beforeDestroy: function() {}
};
</script>

<style scoped>
.box {
    width: 400px;
    height: 380px;
}
</style>