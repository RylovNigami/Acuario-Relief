const actions = {
    async listProjects({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/project`).then(res => {
            commit('toggleLoading',false);
            commit('setProjects', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveProject({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/project`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneProject',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyProject({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/project/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneProject',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneProject({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/project/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneProject',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editProject({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/project/${payload.id}`,payload).then((res) => {
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
