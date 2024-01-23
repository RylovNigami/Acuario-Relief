const actions = {
    async listAssociation_ones({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/association_one`).then(res => {
            commit('toggleLoading',false);
            commit('setAssociation_ones', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveAssociation_one({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/association_one`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneAssociation_one',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyAssociation_one({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/association_one/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneAssociation_one',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneAssociation_one({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/association_one/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneAssociation_one',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editAssociation_one({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/association_one/${payload.id}`,payload).then((res) => {
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
