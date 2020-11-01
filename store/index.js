
import {TEACHERS} from '@/firebase/consts/firestore'
import {getCollection} from '@/firebase/methods/firestore'

export default {
    state: () => ({
        teachers: []
    }),
    mutations: {
        updateTeachers (state, teachers) {
            state.teachers = teachers
        }
    },
    actions: {
        getTeachers ({ commit }) {
            return getCollection(TEACHERS).then(querySnapShot => {
                let teachers = querySnapShot.docs.map(doc => {
                    Object.assign({}, doc.data(), {
                        id: doc.id
                    })
                })

                commit('updateTeachers', teachers)
            })
        }
    }
}