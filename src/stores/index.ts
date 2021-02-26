import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formData: {}
    },
    mutations: {
        // payload.name  : 변경하는 폼 데이터의 이름
        // payload.value : 폼 데이터의 새로운 값
        setFormData: (state, payload) => {
            state.formData[payload.name] = payload.value
        }
    }
})
