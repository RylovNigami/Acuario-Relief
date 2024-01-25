const actions = {
    async listSanitations({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/sanitation`).then(res => {
            commit('toggleLoading',false);
            commit('setSanitations', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveSanitation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/sanitation`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneSanitation',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroySanitation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/sanitation/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneSanitation',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneSanitation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/sanitation/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneSanitation',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editSanitation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/sanitation/${payload.id}`,payload).then((res) => {
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
