<template>
    <div class="lg:container mx-auto px-4 mt-8">
        <h2 class="mb-5 flex items-center justify-between">
            <span class="text-3xl font-extrabold italic">All Teachers</span>
            <button>Add Teacher</button>
        </h2>
        <div
            class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
        >
            <nuxt-link v-for="(num, i) in [1, 2, 3, 4, 5, 6, 7]" :key="i" to="/teacher" class="md:flex bg-white rounded-lg p-6 bg-gray-300">
                <img
                    class="h-16 w-16 md:h-24 md:w-24 rounded-full object-cover mx-auto md:mx-0 md:mr-6"
                    src="~/assets/img/teachers/teacher-1.jpg"
                />
                <div class="text-center md:text-left flex flex-col sm:items-center md:items-start sm:justify-center">
                    <h2 class="text-lg font-bold italic text-xl">Erin Lindford</h2>
                    <div class="text-purple-500 font-semibold">Product Engineer</div>
                    <div class="text-gray-800">erinlindford@example.com</div>
                </div>
            </nuxt-link>
            
            
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
