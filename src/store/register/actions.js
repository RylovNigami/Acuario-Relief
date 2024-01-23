const actions = {
    async listRegisters({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/register`).then(res => {
            commit('toggleLoading',false);
            commit('setRegisters', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveRegister({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/register`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneRegister',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyRegister({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/register/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneRegister',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneRegister({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/register/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneRegister',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editRegister({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/register/${payload.id}`,payload).then((res) => {
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
