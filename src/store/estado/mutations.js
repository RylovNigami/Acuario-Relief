const mutations = {
    setEstados(state, payload) {
        if (payload != "This action returns all estado"){
            state.estados = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneEstado(state, payload) {
        let index = state.estados.map(function(e) { return e.id; }).indexOf(payload);
        state.estados.splice(index,1)
    },
    setOneEstado(state, payload) {
        state.estado = payload
    },
}
export default mutations;
