<template>
  <div class="body text-center m-2 p-1 bg-dark text-secondary" style="float:left">
    <h6>Video</h6>
    <hr />
    <video class="box" ref="video" autoplay />
    <div>{{}}</div>
  </div>
</template>

<script>
export default {
  props: ["videoStream"],
  data: function () {
    return {
      video: null,
    };
  },
  mounted: function () {
    this.$refs.video.srcObject = this.videoStream;
    console.log;
  },
};
</script>

<style scoped>
.body {
  border: 1px solid black;
  border-radius: 10px;
}
.box {
  width: 400px;
  height: 380px;
  position: relative;;
}
</style>