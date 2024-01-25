const actions = {
    async listUsers({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/user`).then(res => {
            commit('toggleLoading',false);
            commit('setUsers', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveUser({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/user`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneUser',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyUser({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/user/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneUser',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneUser({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/user/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneUser',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editUser({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/user/${payload.id}`,payload).then((res) => {
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
