const mutations = {
    setParroquias(state, payload) {
        if (payload != "This action returns all parroquia"){
            state.parroquias = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneParroquia(state, payload) {
        let index = state.parroquias.map(function(e) { return e.id; }).indexOf(payload);
        state.parroquias.splice(index,1)
    },
    setOneParroquia(state, payload) {
        state.parroquia = payload
    },
}
export default mutations;
