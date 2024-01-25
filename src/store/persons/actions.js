const actions = {
    async listPersons({ commit }){

        commit('toggleLoading',true);
        await this.$axios.get(`/persons`).then(res => {
            commit('toggleLoading',false);
            commit('setPersons', res.data);
            return res;
        }).catch(error => {
            return error;
        })
    },
    savePerson({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.post(`/persons`,payload).then((res) => {
                commit('toggleOverlay',false);
                console.log(res.data)
                commit('setOnePerson',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    destroyPerson({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/persons/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('destroyOnePerson',payload);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    getOnePerson({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.get(`/persons/${payload}`).then((res) => {
                commit('toggleOverlay',false);
                commit('setOnePerson',res.data);
                resolve(res)
            }).catch(error => {
                commit('toggleOverlay',false);
                reject(error.response.data)
            })
        })
    },

    editPerson({ commit },payload){

        commit('toggleOverlay',true);
        return new Promise((resolve, reject) => {
            this.$axios.put(`/persons/${payload.id}`,payload).then((res) => {
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
