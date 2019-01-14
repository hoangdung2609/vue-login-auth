import Vue from 'vue'

const state = {
    takeLeave: "",
    status: ''
}

const getters = {
    getTakeLeave: state => {
        return state.takeLeave
    }
}

const actions = {
    takeLeaveRequest: ({commit, dispatch}, payload) => {
        let id = payload.id
        commit('takeLeaveRequest')

        axios.get('http://timekeeping.gdc/api/take-leaves', {
            params: {
                id: id
            }
        })
        .then((resp) => {
            commit("takeLeaveSuccess", resp.data)            
        })
        .catch((err) => {
            commit("takeLeaveError")
        })
    }
}

const mutations = {
    takeLeaveRequest: (state) => {
        state.status = "loading"
    },
    takeLeaveSuccess: (state, resp) => {                
        state.status = "success"        
        Vue.set(state, 'takeLeave', resp)               
    },
    takeLeaveError: (state) => {
        state.status = 'error'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}