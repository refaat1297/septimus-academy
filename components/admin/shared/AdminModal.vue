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
            class="z-50 transition-all duration-1000 ease-in-out fixed flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0"
        >
            <div class="relative mx-auto w-auto max-w-2xl ml-3 mr-3">
                <div
                    class="bg-white w-full rounded p-5 shadow-2xl flex flex-col"
                >
                    <div class="modal-header">
                        <h3 class="text-2xl font-bold">Hello from modal</h3>
                    </div>
                    <div class="modal-body">
                        <span
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates atque dolores error quo? Ab tempore
                            omnis, rem a incidunt recusandae magni, pariatur
                            harum expedita, officia amet quisquam facere
                            asperiores autem!</span
                        >
                    </div>
                    <div class="modal-footer flex justify-end items-center">
                        <button
                            class="rounded bg-red-500 text-white px-6 mt-1 py-2 mr-3"
                            @click="toggleModal = false"
                        >
                            Close
                        </button>
                        <button
                            class="rounded bg-green-500 text-white px-6 mt-1 py-2 "
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="toggleModal"
            @click="toggleModal = false"
            class="transition-all duration-1000 ease-in-out fixed h-screen z-40 inset-0 opacity-50 bg-black"
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
