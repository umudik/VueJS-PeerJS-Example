<template>
  <div class="w-100 p-2 text-center border">
    <div>{{call.peer}}</div>
    <b-button v-if="!call.active" variant="outline-success" @click="openCall()">Accept Call</b-button>
    <b-button v-else-if="call.active" variant="outline-danger" @click="closeCall()">Close Call</b-button>
  </div>
</template>

<script>
export default {
  props: ["call"],
  data: function () {
    return {};
  },
  methods: {
    closeCall: function () {
      this.call.close();
      this.$store.commit("delete", {
        target: "receiveCalls",
        peer: this.call.peer,
      });
      this.$store.commit("delete", {
        target: "remoteStreams",
        peer: this.call.peer,
      });
      this.$store.commit("delete", {
        target: "receiveConnections",
        peer: this.call.peer,
      });
    },
    openCall: function () {
      this.call.answer(this.$store.state.myLocalVideoStream);
      this.call.active = true;

      let remoteCall = this.$store.state.peer.call(
        this.call.peer,
        this.$store.state.myLocalVideoStream
      );
      let dataConnection = this.$store.state.peer.connect(this.call.peer);

      this.$store.commit("add", { target: "myCalls", data: remoteCall });
      this.$store.commit("add", { target: "myConnections", data: dataConnection,});
    },
  },
};
</script>

<style scoped>
</style>