const mutations = {
    setRoles(state, payload) {
        if (payload != "This action returns all roles"){
            state.roles = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneRoles(state, payload) {
        let index = state.roles.map(function(e) { return e.id; }).indexOf(payload);
        state.roles.splice(index,1)
    },
    setOneRoles(state, payload) {
        state.roles = payload
    },
}
export default mutations;
