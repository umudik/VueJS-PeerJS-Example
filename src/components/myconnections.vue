<template>
    <b-card bg-variant="primary" header="My Connections" text-variant="white">
        <b-card-text>
            <div>
                <div variant="light" v-for="call in $store.state.myCalls" :key="call">
                    {{call.peer}}
                     <b-button @click="$store.commit('close',call.peer)">Close</b-button>
                    </div>
               
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    data: function() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>

</style>