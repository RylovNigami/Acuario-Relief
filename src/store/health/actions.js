const actions = {
    async listHealths({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/health`).then(res => {
            commit('toggleLoading',false);
            commit('sethealths', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveHealth({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/health`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOnehealth',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyHealth({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/health/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOnehealth',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneHealth({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/health/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOnehealth',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editHealth({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/health/${payload.id}`,payload).then((res) => {
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
