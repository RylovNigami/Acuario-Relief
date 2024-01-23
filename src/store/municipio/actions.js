const actions = {
    async listMunicipios({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/municipio`).then(res => {
            commit('toggleLoading',false);
            commit('setMunicipios', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveMunicipio({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/municipio`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneMunicipio',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyMunicipio({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/municipio/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneMunicipio',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneMunicipio({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/municipio/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneMunicipio',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editMunicipio({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/municipio/${payload.id}`,payload).then((res) => {
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
