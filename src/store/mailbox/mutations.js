const mutations = {
    setMailboxs(state, payload) {
        if (payload != "This action returns all mailbox"){
            state.mailboxs = payload
        }
    },
    toggleLoading(state, payload) {
        state.loading = payload
    },
    toggleOverlay(state, payload) {
        state.overlay = payload
    },
    destroyOneMailbox(state, payload) {
        let index = state.mailboxs.map(function(e) { return e.id; }).indexOf(payload);
        state.mailboxs.splice(index,1)
    },
    setOneMailbox(state, payload) {
        state.mailbox = payload
    },
}
export default mutations;
