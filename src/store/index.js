import Vue from 'vue'
import Vuex from 'vuex'
import Peer from "peerjs";

Vue.use(Vuex)



export const store = new Vuex.Store({
    state: {
        id: "",
        remoteId: "",
        peer: new Peer(),

        myLocalVideoStream: null,
        remoteStreams: [],
        receiveCalls: [],
        receiveConnections: [],
        myConnections: [],
        myCalls: [],

    },
    getters: {},
    actions: {},
    modules: {}
})