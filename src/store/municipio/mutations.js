const mutations = {
    setMunicipios(state, payload) {
        if (payload != "This action returns all municipio"){
            state.municipios = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneMunicipio(state, payload) {
        let index = state.municipios.map(function(e) { return e.id; }).indexOf(payload);
        state.municipios.splice(index,1)
    },
    setOneMunicipio(state, payload) {
        state.municipio = payload
    },
}
export default mutations;
