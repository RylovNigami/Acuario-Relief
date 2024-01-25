const mutations = {
    setHealths(state, payload) {
        if (payload != "This action returns all health"){
            state.healths = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneHealth(state, payload) {
        let index = state.healths.map(function(e) { return e.id; }).indexOf(payload);
        state.healths.splice(index,1)
    },
    setOneHealth(state, payload) {
        state.health = payload
    },
}
export default mutations;
