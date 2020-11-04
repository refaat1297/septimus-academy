<template>
    <div
        class="lds-ring flex justify-center items-center m-auto"
        style="width: 80px; height: 80px"
    >
        <div
            v-for="(item, i) in 4"
            :key="i"
            style="width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #4c51bf;
    border-color: #4c51bf transparent transparent transparent;"
        ></div>
    </div>
</template>

<script>
export default {
    name: "AdminLoader",
    props: {
        size: {
            type: String,
            default: "xl"
        }
    },
    computed: {
        
    }
};
</script>

<style scoped>
.lds-ring {
    display: inline-block;
    position: relative;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #4c51bf;
    border-color: #4c51bf transparent transparent transparent;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
