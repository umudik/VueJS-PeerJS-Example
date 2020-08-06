<template>
  <div>
    <div>{{call.peer}}</div>
    <b-button variant="success" @click="call.answer($store.state.myLocalVideoStream);">Accept Call</b-button>
    <b-button variant="danger" @click="closeCall()">Decline or Close Call</b-button>
  </div>
</template>

<script>
export default {
  props: ["call"],
  data: function () {
    return {};
  },
  methods: {
    closeCall:function(){
      this.call.close()
    }
  },
};
</script>

<style scoped>
</style>