<template>
  <div>
    <b-row>
      <b-col cols="2">
        <div v-if="$store.state.receiveCalls.length==0">There is no call</div>
        <div v-if="$store.state.receiveCalls.length!=0">Answer Calls</div>
        <acceptcall v-for="c in $store.state.receiveCalls" :key="c" :call="c" />
      </b-col>
      <b-col>
        <peervideo :videoStream="$store.state.myLocalVideoStream" />
        <peervideo v-for="obj in $store.state.remoteStreams" :key="obj" :videoStream="obj" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>3</b-col>
    </b-row>
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