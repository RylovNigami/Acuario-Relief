const actions = {
    async listEducations({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/education`).then(res => {
            commit('toggleLoading',false);
            commit('setEducations', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveEducation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/education`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneEducation',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyEducation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/education/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneEducation',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneEducation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/education/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneEducation',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editEducation({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/education/${payload.id}`,payload).then((res) => {
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
