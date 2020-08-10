<template>
    <b-card bg-variant="warning" text-variant="white" header="Join Chat">
        <b-card-text>
            <b-form-input v-model="connectId" placeholder="Other Peer ID"></b-form-input>
            <b-button block variant="dark" class="mt-3" @click="callRemote()">JOIN</b-button>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    props: ["call"],
    data: function() {
        return {};
    },
    computed: {
        connectId: {
            get() {
                return this.$store.state.remoteId;
            },
            set(val) {
                this.$store.state.remoteId = val;
            }
        }
    },
    methods: {
        callRemote: function() {
            let call = this.$store.state.peer.call(
                this.connectId,
                this.$store.state.myLocalVideoStream
            );

            let dataConnection = this.$store.state.peer.connect(this.connectId);

            this.$store.state.myConnections.push(dataConnection);
            this.$store.state.myCalls.push(call);
        }
    }
};
</script>

<style scoped>
</style>