const mutations = {
    setSanitations(state, payload) {
        if (payload != "This action returns all sanitation"){
            state.sanitations = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneSanitation(state, payload) {
        let index = state.sanitations.map(function(e) { return e.id; }).indexOf(payload);
        state.sanitations.splice(index,1)
    },
    setOneSanitation(state, payload) {
        state.sanitation = payload
    },
}
export default mutations;
