<template>
    <div class="lg:container mx-auto px-4 mt-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">All Teachers</span>
            <button @click="getTeachers()">Add Teacher</button>
        </h2>

        <div
            class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
        >
            <p v-if="$fetchState.pending">Fetching mountains...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <TeacherCard
                v-else
                v-for="teacher in teachers"
                :key="teacher.email"
                :teacher="teacher"
            />
        </div>
    </div>
</template>

<script>
import { db } from "@/firebase";

import TeacherCard from "@/components/admin/teachers/TeacherCard";

export default {
    components: {
        TeacherCard
    },
    data() {
        return {
            teachers: null
        };
    },
    fetch() {
        return db
            .ref("teachers")
            .once("value")
            .then(data => {
                console.log(data);
                this.teachers = data.val();
            });
    },
    methods: {
        getTeachers() {
            return db
                .ref("teachers")
                .once("value")
                .then(data => {
                    console.log(data);
                    this.teacherss = data.val();
                });
        }
    }
};
</script>

<style lang="scss" scoped></style>
