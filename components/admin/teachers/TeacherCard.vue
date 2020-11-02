<template>
    <div class="md:flex bg-white rounded-lg p-6 bg-gray-300">
        <img
            class="h-16 w-16 md:h-24 md:w-24 rounded-full object-cover mx-auto md:mx-0 md:mr-6"
            src="~/assets/img/teachers/teacher-1.jpg"
        />
        <div
            class="text-center md:text-left flex flex-col sm:items-center md:items-start sm:justify-center"
        >
            <h2 class="text-lg font-bold italic text-xl">{{ teacher.name }}</h2>
            <div class="text-purple-500 font-semibold">{{ teacher.specialty }}</div>
            <div class="text-gray-800">{{ teacher.email }}</div>
            <div class="text-gray-800">{{ teacher.phone }}</div>
            <div class="control flex">
                <button @click="$emit('edit')" class="transition-all mt-2 mr-2 duration-300 ease-in-out text-white rounded bg-pink-500 text-sm px-3 py-1 font-sans font-semibold shadow-lg outline-none focus:outline-none hover:bg-pink-800">Edit</button>
                <button @click="$emit('delete')" class="transition-all mt-2 duration-300 ease-in-out text-white rounded bg-red-500 text-sm px-3 py-1 font-sans font-semibold shadow-lg outline-none focus:outline-none hover:bg-red-800">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherCard",
    props: {
        teacher: {
            type: Object,
            required: true
        }
    }
};
</script>
