
import AdminStore from "./Admin"

export default {
    namespaced: true,
    state: () => ({}),
    mutations: {},
    actions: {},
    nuxtServerInit({dispatch}) {
        dispatch('AdminStore/getTeachers')
    },
    modules: {
        AdminStore
    }
}