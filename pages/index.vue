<template>
    <div class="lg:container">
        <!-- <h1>test</h1> -->
        <SiteBanner />
    </div>
</template>

<script>
import SiteBanner from "@/components/site/home/SiteBanner"

export default {
    components: {
        SiteBanner
    },
    transition: 'slide-left'
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
