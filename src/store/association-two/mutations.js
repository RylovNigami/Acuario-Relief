const mutations = {
    setAssociation_twos(state, payload) {
        if (payload != "This action returns all association_two"){
            state.association_twos = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneAssociation_two(state, payload) {
        let index = state.association_twos.map(function(e) { return e.id; }).indexOf(payload);
        state.association_twos.splice(index,1)
    },
    setOneAssociation_two(state, payload) {
        state.association_two = payload
    },
}
export default mutations;
