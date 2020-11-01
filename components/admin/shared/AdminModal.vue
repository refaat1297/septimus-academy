<template>
    <div class="mt-8 mb-8">
        
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
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>

        <div
            v-if="toggleModal"
            class="transition-all duration-1000 ease-in-out fixed h-screen z-40 inset-0 opacity-50 bg-black"
        ></div>
    </div>
</template>

<script>
export default {
    name: "AdminModal",
    props: {
        toggleModal: {
            type: Boolean,
            required: true
        }
    }
};
</script>
