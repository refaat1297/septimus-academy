import {TEACHERS} from "@/firebase/consts/firestore"

import {addToCollection, getCollection} from "@/firebase/methods/firestore"

export default {
    getTeachers ({ commit }) {
        return getCollection(TEACHERS).then(res => {
            let teachers = res.docs.map(doc => {
                return Object.assign({}, doc.data(), {
                    id: doc.id
                });
            });

            console.log('teachers')

            commit('updateTeachers', teachers)
        });
    }
}