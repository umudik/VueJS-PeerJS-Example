<template>
    <div>
        <navbar />
        <router-view />
    </div>
</template>
<script>
export default {
    data: function() {
        return {};
    },
    beforeCreate: function() {
        this.$store.state.peer.on("open", id => {
            this.$store.state.id = id;
        });

        this.$store.state.peer.on("call", call => {
            call.on("stream", remoteStream => {
                console.log("call started");
                this.$store.state.remoteStreams.push(remoteStream);
            });

            call.active = false;
            this.$store.state.receiveCalls.push(call);
        });

        this.$store.state.peer.on("connection", connection => {
            connection.on("open", () => {
                console.log("connection openned");
            });
            connection.on("data", (data) => {
              if(data=='PAIR_CLOSED'){
              this.$store.commit('close',connection.peer)
              }
            });
            connection.on("close", () => {
                console.log("connection closed");
            });
            this.$store.state.receiveConnections.push(connection);
        });
    },
    mounted: async function() {
        let getUserMedia =
            navigator.mediaDevices.getUserMedia ||
            navigator.mediaDevices.webkitGetUserMedia ||
            navigator.mediaDevices.mozGetUserMedia;

        this.$store.state.myLocalVideoStream = await getUserMedia({
            video: true,
            audio: false
        });
    }
};
</script>
<style>
</style>
