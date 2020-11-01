<template>
    <div class="lg:container mx-auto px-4 mt-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">All Teachers</span>
            <button
                class="transition-all duration-300 ease-in-out text-white rounded bg-pink-500 px-8 py-3 font-sans font-semibold shadow-lg outline-none focus:outline-none hover:bg-pink-800"
                @click="toggleModal = true"
            >
                Add button
            </button>
        </h2>

        <AdminModal
            :toggleModal="toggleModal"
        >
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
            <!-- <template v-slot:submit-text>Add </template> -->
        </AdminModal>

        <div
            class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
        >
            <TeacherCard
                v-for="teacher in teachers"
                :key="teacher.id"
                :teacher="teacher"
            />
        </div>
    </div>
</template>

<script>
import { db } from "@/firebase";
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
        },
        submit() {
            const form = {
                ...this.teacher,
                image: 'teacher-1.jpg'
            }

            console.log(form)

            return db
                .collection("teachers")
                .add(form)
                .then(res => {
                    const newTeacher = {
                        ...form,
                        id: res.id
                    }

                    this.teachers.unshift(newTeacher)

                    this.close()                    
                });
        }
    },
    async asyncData() {
        return db
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
