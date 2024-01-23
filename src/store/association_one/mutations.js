const mutations = {
    setAssociation_ones(state, payload) {
        if (payload != "This action returns all association_one"){
            state.association_ones = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneAssociation_one(state, payload) {
        let index = state.association_ones.map(function(e) { return e.id; }).indexOf(payload);
        state.association_ones.splice(index,1)
    },
    setOneAssociation_one(state, payload) {
        state.association_one = payload
    },
}
export default mutations;
