export default {
    state: () => ({
        teachers: [],
        selectedTeacher: {}
    }),
    mutations: {
        updateTeachers(state, teachers) {
            state.teachers = teachers;
        },
        updateSelectedTeacher(state, teacher) {
            state.selectedTeacher = teacher;
        }
    },
    actions: {
        addTeacher({ state, commit }, payload) {
            return this.$axios
                .$post("/teachers.json", payload)
                .then(({ name }) => {
                    let newTeacher = { id: name, ...payload };
                    commit("updateTeachers", [...state.teachers, newTeacher]);
                });
        },
        editTeacher({ state, commit }, payload) {
            
            return this.$axios.$put(`/teachers.json`, payload).then(() => {
                
                let id = Object.keys(payload)[0]
                const updatedTeacher = {
                    id,
                    ...Object.values(payload)[0]
                }

                commit('updateTeachers', state.teachers.map(teacher => {
                    return teacher.id == updatedTeacher.id ? updatedTeacher : teacher
                }))
            })
        },
        deleteTeacher({ state, commit }, teacherID) {
            return this.$axios
                .$delete(`/teachers/${teacherID}.json`)
                .then(() => {
                    commit(
                        "updateTeachers",
                        state.teachers.filter(teacher => {
                            return teacher.id != teacherID;
                        })
                    );
                });
        }
    },
    getters: {
        getTeachers (state) {
            return state.teachers
        }
    }
};
