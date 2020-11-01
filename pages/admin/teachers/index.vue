<template>
    <div class="lg:container mx-auto px-4 mt-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">All Teachers</span>
            <button @click="getTeachers()">Add Teacher</button>
        </h2>

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
import {db} from '@/firebase'
import TeacherCard from "@/components/admin/teachers/TeacherCard";

export default {
    components: {
        TeacherCard
    },
    async asyncData () {
        return db.collection('teachers').get().then(res => {
            let teachers = res.docs.map(doc => {
                return Object.assign({}, doc.data(), {
                    id: doc.id
                })
            })

            return {
                teachers
            }
        })
    }
};
</script>

<style lang="scss" scoped></style>
