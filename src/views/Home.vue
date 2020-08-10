<template>
    <div class="text-center">
        <b-card-group>
            <yourpeer />
            <connectpeer  />
            <gotoroom />
        </b-card-group>
        <div v-for="x in $store.state.MyCalls" :key="x">Call {{ x.peer}}</div>

        <div v-for="x in $store.state.myConnections" :key="x">Connection {{ x.peer}}</div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    beforeCreated: function() {}
};
</script>
