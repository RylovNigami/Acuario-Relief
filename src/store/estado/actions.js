const actions = {
    async listEstados({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/estado`).then(res => {
            commit('toggleLoading',false);
            commit('setEstados', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveEstado({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/estado`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneEstado',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyEstado({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/estado/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneEstado',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneEstado({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/estado/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneEstado',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editEstado({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/estado/${payload.id}`,payload).then((res) => {
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
