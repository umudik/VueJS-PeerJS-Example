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
    getters: {

    },
    mutations: {
        close: function(state, connectId) {
            let callIndex = state.receiveCalls.findIndex(item => item.peer == connectId)
            let connectionIndex = state.receiveConnections.findIndex(item => item.peer == connectId)
            let remoteStreamIndex = state.remoteStreams.findIndex(item => item.peer == connectId)

            let myConnectionIndex = state.myConnections.findIndex(item => item.peer == connectId)
            let myCallIndex = state.myCalls.findIndex(item => item.peer == connectId)

            state.myConnections[myConnectionIndex].send('PAIR_CLOSED')

            if (callIndex != -1) state.receiveCalls[callIndex].close()
            if (connectionIndex != -1) state.receiveConnections[connectionIndex].close()

            state.remoteStreams.splice(remoteStreamIndex, 1)
            state.receiveConnections.splice(callIndex, 1)
            state.receiveCalls.splice(connectionIndex, 1)

            state.myCalls.splice(myCallIndex, 1)
            state.myConnections.splice(myConnectionIndex, 1)
        },
        call: function(state, connectId) {
            if (state.myConnections.findIndex(item => item.peer == connectId) != -1) return false;
            if (state.myCalls.findIndex(item => item.peer == connectId) != -1) return false;

            let call = state.peer.call(
                connectId,
                state.myLocalVideoStream
            );

            let dataConnection = state.peer.connect(connectId);

            state.myConnections.push(dataConnection);
            state.myCalls.push(call);
        },
        answer: function(state, payload) {
            let remoteStreamIndex = state.receiveCalls.findIndex(item => item.peer == payload)
            state.receiveCalls[remoteStreamIndex].answer(state.myLocalVideoStream)
            state.receiveCalls[remoteStreamIndex].active = true
        }
    },
    actions: {},
    modules: {}
})