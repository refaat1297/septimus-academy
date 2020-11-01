<template>
    <div class="admin-banner w-full bg-no-repeat bg-cover relative">
        <div
            class="flex overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-indigo-600 bg-opacity-50"
        >
            <h1 class="text-white text-6xl text-center bold flex justify-center items-center m-auto text-center italic">Control Your Site</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminBanner"
};
</script>

<style lang="scss" scoped>
.admin-banner {
    height: 45vh;
    background-image: url("~assets/img/admin-banner.jpg");
}
</style>
