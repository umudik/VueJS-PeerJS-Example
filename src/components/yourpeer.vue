<template>
        <b-card bg-variant="primary" text-variant="white" header="Your Peer ID">
            <b-card-text>
                <h2>-{{this.$store.state.id}}-</h2>
                <b-button block variant="danger" v-clipboard:copy="this.$store.state.id">COPY</b-button>
            </b-card-text>
        </b-card>
</template>

<script>
export default {
    props: ["call"],
    data: function() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
</style>