const mutations = {
    setPersons(state, payload) {
        if (payload != "This action returns all person"){
            state.persons = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOnePerson(state, payload) {
        let index = state.persons.map(function(e) { return e.id; }).indexOf(payload);
        state.persons.splice(index,1)
    },
    setOnePerson(state, payload) {
        state.person = payload
    },
}
export default mutations;
