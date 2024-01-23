const actions = {
    async listParroquias({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/parroquia`).then(res => {
            commit('toggleLoading',false);
            commit('setParroquias', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveParroquia({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/parroquia`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneParroquia',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyParroquia({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/parroquia/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneParroquia',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneParroquia({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/parroquia/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneParroquia',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editParroquia({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/parroquia/${payload.id}`,payload).then((res) => {
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
