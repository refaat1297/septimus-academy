<template>
    <div class="lg:container mx-auto px-4 mt-8 mb-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">All Teachers</span>
            <button
                class="transition-all duration-300 ease-in-out text-white text-sm rounded bg-pink-500 px-5 py-2 font-sans font-semibold shadow-lg outline-none focus:outline-none hover:bg-pink-800"
                @click="toggleModal = true"
            >
                New Teacher
            </button>
        </h2>

        <AdminModal :toggleModal="toggleModal">
            <template v-slot>
                <form @submit.prevent="submit()">
                    <div>
                        <p>name</p>
                        <input
                            type="text"
                            placeholder="name"
                            v-model="teacher.name"
                        />
                    </div>
                    <div>
                        <p>email</p>
                        <input
                            type="text"
                            placeholder="email"
                            v-model="teacher.email"
                        />
                    </div>
                    <div>
                        <p>phone</p>
                        <input
                            type="text"
                            placeholder="phone"
                            v-model="teacher.phone"
                        />
                    </div>
                    <div>
                        <p>specialty</p>
                        <input
                            type="text"
                            placeholder="specialty"
                            v-model="teacher.specialty"
                        />
                    </div>

                    <div class="modal-footer flex justify-end items-center">
                        <button
                            class="rounded bg-red-500 text-white px-6 mt-1 py-2 mr-3"
                            @click="close()"
                        >
                            Close
                        </button>
                        <button
                            class="rounded bg-green-500 text-white px-6 mt-1 py-2 "
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </template>
        </AdminModal>

        <div
            class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
        >
            <TeacherCard
                v-for="teacher in teachers"
                :key="teacher.id"
                :teacher="teacher"
                @edit="edit(teacher)"
                @delete="deleteTeacher(teacher.id)"
            />
        </div>
    </div>
</template>

<script>
// import { db } from "@/firebase";
// import {
//     addToCollection,
//     getCollection,
//     updateDocumnet,
//     deleteFromCollection
// } from "@/firebase/methods/firestore";
import TeacherCard from "@/components/admin/teachers/TeacherCard";

import AdminModal from "@/components/admin/shared/AdminModal";

export default {
    components: {
        TeacherCard,
        AdminModal
    },
    data() {
        return {
            toggleModal: false,
            isEdit: false,
            teacher: {
                name: null,
                email: null,
                phone: null,
                specialty: null
            }
        };
    },
    methods: {
        close() {
            this.toggleModal = false;
            this.isEdit = false;
            this.teacher = {
                name: null,
                email: null,
                phone: null,
                specialty: null
            };
        },
        edit(selectedTeacher) {
            this.isEdit = true;
            this.toggleModal = true;
            this.teacher = selectedTeacher;
        },
        deleteTeacher(id) {
            return this.$fireModule
                .firestore()
                .collection("teachers")
                .doc(id)
                .delete()
                .then(() => {
                    this.teachers = this.teachers.filter(
                        teacher => teacher.id != id
                    );
                });
        },
        update() {
            let teacherInfo = { ...this.teacher };
            delete teacherInfo.id;

            return this.$fireModule
                .firestore()
                .collection("teachers")
                .doc(this.teacher.id)
                .update(teacherInfo)
                .then(res => {
                    this.close();
                });
        },
        add() {
            const form = {
                ...this.teacher,
                image: "teacher-1.jpg"
            };

            console.log(form);

            return this.$fireModule
                .firestore()
                .collection("teachers")
                .add(form)
                .then(res => {
                    const newTeacher = {
                        ...form,
                        id: res.id
                    };

                    this.teachers.unshift(newTeacher);

                    this.close();
                });
        },
        submit() {
            this.isEdit ? this.update() : this.add();
        }
    },
    async asyncData({ app }) {
        return app.$fireModule
            .firestore()
            .collection("teachers")
            .get()
            .then(res => {
                let teachers = res.docs.map(doc => {
                    return Object.assign({}, doc.data(), {
                        id: doc.id
                    });
                });

                return {
                    teachers
                };
            });
    }
};
</script>

<style lang="scss" scoped>
.sweet-modal {
    .sweet-box-actions {
        .sweet-action-close {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: auto !important;
        }
    }
}
</style>
