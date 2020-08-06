<template>
  <div>
    <b-card
      bg-variant="primary"
      text-variant="white"
      header="Your Peer ID"
      class="text-center mt-5 offset-3 col-6"
    >
      <b-card-text>
        <h2>{{this.$store.state.id}}</h2>
        <b-button block variant="danger" v-clipboard:copy="this.$store.state.id">COPY</b-button>
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="warning"
      text-variant="white"
      header="Join Chat"
      class="text-center mt-5 offset-3 col-6"
    >
      <b-card-text>
        <b-form-input v-model="connectId" placeholder="Other Peer ID"></b-form-input>
        <b-button block variant="dark" class="mt-3" @click="callRemote()">JOIN</b-button>
      </b-card-text>
    </b-card>
    <gotoroom />
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      
    };
  },
  computed: {
    connectId: {
      get() {
        return this.$store.state.remoteId;
      },
      set(val) {
        this.$store.state.remoteId = val;
      },
    },
  },
  methods: {
    callRemote: function () {
      let call = this.$store.state.peer.call(
        this.connectId,
        this.$store.state.myLocalVideoStream
      );
      let dataConnection = this.$store.state.peer.connect(this.connectId);

      this.$store.state.myConnections.push(dataConnection);
      this.$store.state.myCalls.push(call);
    },
  },
  beforeCreated: function () {
  },
};
</script>
