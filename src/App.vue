<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      connection: null,
      connected: true,
      messages: [],
    };
  },
  beforeCreate: function () {
    this.$store.state.peer.on("open", (id) => {
      this.$store.state.id = id;
    });

    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    this.$store.state.peer.on("call", (call) => {
      console.log("calling");
      getUserMedia(
        { video: true, audio: true },
        (stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          call.on("stream", (remoteStream) => {
            console.log("get call");
            this.$store.state.coonections.push(call);
            this.$store.state.remoteStreams.push(remoteStream);
          });
        },
        function (err) {
          console.log("Failed to get local stream", err);
        }
      );
    });
  },
  created: function () {},
};
</script>
<style>
</style>
