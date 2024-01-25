const mutations = {
    setProjects(state, payload) {
        if (payload != "This action returns all project"){
            state.projects = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneProject(state, payload) {
        let index = state.projects.map(function(e) { return e.id; }).indexOf(payload);
        state.projects.splice(index,1)
    },
    setOneProject(state, payload) {
        state.project = payload
    },
}
export default mutations;
