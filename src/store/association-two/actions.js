const actions = {
    async listAssociation_two({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/association-two`).then(res => {
            commit('toggleLoading',false);
            commit('setAssociation_two', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveAssociation_two({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/association-two`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneAssociation_two',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyAssociation_two({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/association-two/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneAssociation_two',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneAssociation_two({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/association-two/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneAssociation_two',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editAssociation_two({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/association-two/${payload.id}`,payload).then((res) => {
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
