<template>
    <div>
        <h1>{{ getTeachersCount }} teachers</h1>
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