<template>
    <div class="site-banner h-screen w-screen bg-no-repeat bg-cover relative">
        <div
            class="flex overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-indigo-600 bg-opacity-50"
        >
            <h1 class="text-white text-6xl text-center bold flex justify-center items-center m-auto text-center italic">Septimus Academy</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteBanner"
};
</script>

<style lang="scss" scoped>
.site-banner {
    background-image: url("~assets/img/site-banner.jpg");
}
</style>
