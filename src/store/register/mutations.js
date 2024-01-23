const mutations = {
    setRegisters(state, payload) {
        if (payload != "This action returns all register"){
            state.registers = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneRegister(state, payload) {
        let index = state.registers.map(function(e) { return e.id; }).indexOf(payload);
        state.registers.splice(index,1)
    },
    setOneRegister(state, payload) {
        state.register = payload
    },
}
export default mutations;
