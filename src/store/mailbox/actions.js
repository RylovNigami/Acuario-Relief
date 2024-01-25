const actions = {
    async listMailboxs({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/mailbox`).then(res => {
            commit('toggleLoading',false);
            commit('setMailboxs', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveMailbox({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/mailbox`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneMailbox',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyMailbox({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/mailbox/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneMailbox',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneMailbox({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/mailbox/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneMailbox',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editMailbox({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/mailbox/${payload.id}`,payload).then((res) => {
                commit('toggleOverlay',false);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },
}

export default actions;
