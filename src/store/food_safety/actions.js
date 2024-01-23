const actions = {
    async listFood_safetys({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/food_safety`).then(res => {
            commit('toggleLoading',false);
            commit('setFood_safetys', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    saveFood_safety({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/food_safety`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOneFood_safety',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyFood_safety({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/food_safety/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOneFood_safety',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOneFood_safety({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/food_safety/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOneFood_safety',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editFood_safety({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/food_safety/${payload.id}`,payload).then((res) => {
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
