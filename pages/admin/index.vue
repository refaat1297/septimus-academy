<template>
    <div class="lg:container mx-auto px-4 mt-8 mb-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">Statistics</span>
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <nuxt-link to="/admin/teachers" class="bg-indigo-400 text-center rounded shadow-xl py-5 px-3">
                <h3 class="text-white font-extrabold italic text-5xl"><span class="font-bold">{{ getTeachersCount }}</span> Teachers</h3>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        getTeachersCount () {
            return this.$store.state.teachers ? this.$store.state.teachers.length : 0
        }
    },
    mounted () {
        return this.$axios
            .$get("/teachers.json")
            .then(res => {
                console.log(res);
                let teachers = res ? Object.entries(res) : null;
                teachers = teachers ? teachers.map(teacher => {
                    return Object.assign({}, { id: teacher[0], ...teacher[1] });
                }) : null

                this.$store.commit("updateTeachers", teachers);
            });
    }
}
</script>