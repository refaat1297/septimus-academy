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

        <AdminModal :toggleModal="toggleModal" :title="modalTitle">
            <template v-slot>
                <form @submit.prevent="submit()">
                    <div class="mb-4">
                        <p class="mb-2 font-bold italic capitalize text-lg">Name</p>
                        <input
                            type="text"
                            placeholder="name"
                            class="w-full black px-2 py-1 border border-indigo-500 rounded outline-none"
                            v-model="teacher.name"
                        />
                    </div>
                    <div class="mb-4">
                        <p class="mb-2 font-bold italic capitalize text-lg">email</p>
                        <input
                            type="text"
                            placeholder="email"
                            class="w-full black px-2 py-1 border border-indigo-500 rounded outline-none"
                            v-model="teacher.email"
                        />
                    </div>
                    <div class="mb-4">
                        <p class="mb-2 font-bold italic capitalize text-lg">phone</p>
                        <input
                            type="text"
                            placeholder="phone"
                            class="w-full black px-2 py-1 border border-indigo-500 rounded outline-none"
                            v-model="teacher.phone"
                        />
                    </div>
                    <div class="mb-4">
                        <p class="mb-2 font-bold italic capitalize text-lg">specialty</p>
                        <input
                            type="text"
                            placeholder="specialty"
                            class="w-full black px-2 py-1 border border-indigo-500 rounded outline-none"
                            v-model="teacher.specialty"
                        />
                    </div>

                    <div class="modal-footer flex justify-end items-center">
                        <button
                            class="rounded bg-red-500 text-white px-2 text-sm font-semibold mt-1 py-2 mr-3"
                            @click="close()"
                        >
                            Close
                        </button>
                        <button
                            class="rounded bg-green-500 text-white text-sm font-semibold px-2 mt-1 py-2 "
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
            <template v-if="$store.getters.getTeachers">
                <TeacherCard
                v-for="teacher in $store.getters.getTeachers"
                :key="teacher.id"
                :teacher="teacher"
                @edit="edit(teacher)"
                @delete="deleteTeacher(teacher.id)"
            />
            </template>
            <AdminLoader v-else />
        </div>
    </div>
</template>

<script>
import TeacherCard from "@/components/admin/teachers/TeacherCard";
import AdminModal from "@/components/admin/shared/AdminModal";
import AdminLoader from "@/components/admin/shared/AdminLoader";

export default {
    components: {
        TeacherCard,
        AdminModal,
        AdminLoader
    },
    computed: {
        modalTitle () {
            return this.isEdit ? "Edit Teacher" : "Add New Teacher"
        }
    },
    data() {
        return {
            toggleModal: false,
            isEdit: false,
            teachers: [],
            deleteLoading: false,
            selectedTeacher: {},
            teacher: {
                name: "",
                email: "",
                phone: "",
                specialty: ""
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
            this.teacher = { ...selectedTeacher };
        },
        deleteTeacher(id) {
            this.deleteLoading = true;
            this.$store.dispatch("deleteTeacher", id);
        },
        update() {
            let payload = { ...this.teacher };
            let teacherInfo = {
                [payload.id]: {
                    ...payload
                }
            };
            delete teacherInfo[payload.id].id;

            // console.table(teacherInfo)

            this.$store.dispatch("editTeacher", teacherInfo).then(() => {
                this.close();
            });
        },
        add() {
            const form = {
                ...this.teacher,
                image: "teacher-1.jpg"
            };
            this.$store.dispatch("addTeacher", form).then(() => this.close());
        },
        submit() {
            this.isEdit ? this.update() : this.add();
        }
    },
    mounted () {
        return this.$axios
            .$get("/teachers.json")
            .then(res => {
                console.log(res);
                let teachers = res ? Object.entries(res) : [];
                teachers = teachers.map(teacher => {
                    return Object.assign({}, { id: teacher[0], ...teacher[1] });
                });

                this.$store.commit("updateTeachers", teachers);
            });
    },
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
