<template>
  <div>
    <peervideo v-for="stream in $store.state.remoteStreams" :key="stream.id" :videoStream="stream"></peervideo>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },

  
};
</script>
<style scoped>
</style>