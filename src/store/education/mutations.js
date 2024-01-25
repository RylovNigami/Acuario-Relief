const mutations = {
    setEducations(state, payload) {
        if (payload != "This action returns all education"){
            state.educations = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneEducation(state, payload) {
        let index = state.educations.map(function(e) { return e.id; }).indexOf(payload);
        state.educations.splice(index,1)
    },
    setOneEducation(state, payload) {
        state.education = payload
    },
}
export default mutations;
