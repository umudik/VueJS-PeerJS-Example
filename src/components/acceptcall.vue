<template>
    <div class="w-100 p-2 text-center border">
        <div>{{call.peer}}</div>
        <b-button v-if="!call.active" variant="outline-success" @click="answerCall()">Accept Call</b-button>
        <b-button v-else-if="call.active" variant="outline-danger" @click="closeCall()">Close Call</b-button>
    </div>
</template>

<script>
export default {
    props: ["call"],
    data: function() {
        return {};
    },
    methods: {
        closeCall: function() {
            this.$store.commit("close", this.call.peer);
        },
        answerCall: function() {
            this.$store.commit("answer", this.call.peer);
            this.$store.commit("call", this.call.peer);
        }
    }
};
</script>

<style scoped>
</style>