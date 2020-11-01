<template>
    <div class="mt-8 mb-8">
        <button
            class="transition-all duration-300 ease-in-out text-white rounded bg-pink-500 px-8 py-3 font-sans font-semibold shadow-lg outline-none focus:outline-none hover:bg-pink-800"
            @click="toggleModal = !toggleModal"
        >
            Open Modal
        </button>

        <div
            v-if="toggleModal"
            class="z-50 fixed flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0"
        >
            <div class="relative mx-auto w-auto max-w-2xl">
                <div class="bg-white w-full rounded p-5 shadow-2xl flex flex-col">
                    <div class="text-2xl font-bold">Hello from modal</div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates atque dolores error quo? Ab tempore omnis, rem a incidunt recusandae magni, pariatur harum expedita, officia amet quisquam facere asperiores autem!</span>
                    <button class="rounded bg-green-500 text-white px-6 mt-1 py-2 w-3/12 m-auto" @click="toggleModal = false">Close</button>
                </div>
            </div>
        </div>

        <div
            v-if="toggleModal"
            class="transition-all duration-1000 ease-in-out absolute z-40 inset-0 opacity-25 bg-black"
        ></div>
    </div>
</template>

<script>
export default {
    name: "AdminModal",
    data() {
        return {
            toggleModal: false
        };
    }
};
</script>
