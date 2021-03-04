import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'

Vue.use(Vuex)

interface StateInterface {
    formData: Map<string, string>
}

export default new Vuex.Store({
    state: {
        formData: new Map<string, string>()
    },
    mutations: {
        setFormData: function(state: StateInterface, payload: { field: string; value: string }): void {
            state.formData.set(payload.field, payload.value)
        }
    },
    actions: {
        setFormData(store: ActionContext<StateInterface, StateInterface>, payload: { field: string; value: string }): void {
            store.commit('setFormData', payload)
        }
    }
})
