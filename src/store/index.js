import Vue from 'vue'
import Vuex from 'vuex'
import Peer from "peerjs";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        id: "",
        remoteId: "",
        peer: new Peer(),
        connections: {},
        remoteStreams: [],
    },
    getters: {
        getRemoteIds: (state) => {
            return state.remoteStreams.map(stream => stream.id)
        }
    },
    actions: {},
    modules: {}
})