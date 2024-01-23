const actions = {
    async listRoles({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/roles`).then(res => {
            commit('toggleLoading',false);
            commit('setRoless', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveRoles({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/roles`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneRoles',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyRoles({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/roles/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneRoles',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneRoles({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/roles/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneRoles',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editRoles({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/roles/${payload.id}`,payload).then((res) => {
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
