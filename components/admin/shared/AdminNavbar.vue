<template>
    <div
        class="site-navbar h-full bg-indigo-700 w-64 fixed top-0 z-10 text-white"
        :class="{ 'left-0': showNav }"
    >
        <div
            class="icon absolute right-0 bg-indigo-700 cursor-pointer"
            @click="showNav = !showNav"
        >
            <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                ></path>
            </svg>
        </div>

        <ul
            class="navbar-body text-center m-auto"
        >
            <li class="text-center block w-full">
                <nuxt-link to="/admin" class="block w-full py-4 text-2xl"
                    >Dashboard</nuxt-link
                >
            </li>
            <li class="text-center block w-full">
                <nuxt-link to="/admin/teachers" class="block w-full py-4 text-2xl"
                    >Teachers</nuxt-link
                >
            </li>
            <li class="text-center block w-full">
                <nuxt-link to="/" class="block w-full py-4 text-2xl"
                    >Home</nuxt-link
                >
            </li>
            <li class="text-center block w-full">
                <nuxt-link to="/" class="block w-full py-4 text-2xl"
                    >Home</nuxt-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AdminNavbar",
    data() {
        return {
            showNav: false
        };
    }
};
</script>

<style lang="scss" scoped>
.site-navbar {
    left: -16rem;
    transition: all 0.4s ease-in-out;

    &.left-0 {
        left: 0 !important;
    }

    .icon {
        right: -52px;
        padding: 10px;
        top: 68px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
    }
}
</style>
