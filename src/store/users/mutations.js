const mutations = {
    setUsers(state, payload) {
        if (payload != "This action returns all user"){
            state.users = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneUser(state, payload) {
        let index = state.users.map(function(e) { return e.id; }).indexOf(payload);
        state.users.splice(index,1)
    },
    setOneUser(state, payload) {
        state.user = payload
    },
}
export default mutations;
