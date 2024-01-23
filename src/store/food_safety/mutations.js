const mutations = {
    setFood_safetys(state, payload) {
        if (payload != "This action returns all food_safety"){
            state.food_safetys = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneFood_safety(state, payload) {
        let index = state.food_safetys.map(function(e) { return e.id; }).indexOf(payload);
        state.food_safetys.splice(index,1)
    },
    setOneFood_safety(state, payload) {
        state.food_safety = payload
    },
}
export default mutations;
