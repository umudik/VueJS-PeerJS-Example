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
        delete: function(state, payload) {
            if (payload.target == undefined | typeof payload.target != "string" | Object.values(payload).length < 2) return false
            let keys = Object.keys(payload)
            let targetKey = keys.splice(keys.findIndex(item => item == "target"), 1)[0]

            let index = state[payload.target].findIndex(item => item[targetKey] == state[payload.target][targetKey])
            state[payload.target].splice(index, 1)
        },
        add: function(state, payload) {
            if (payload.target == undefined | typeof payload.target != "string" | payload.data == undefined) {
                console.log("[add] invalid object");
                return false
            }
            console.log(payload)
            state[payload.target].push(payload.data)
        },
        hasIt(state, payload) {
            if (state.receiveCalls.length == 0)
                return false
            else
                return state[payload.target].findIndex(it => it.peer === payload.data.peer) == -1
        }
    },
    actions: {},
    modules: {}
})