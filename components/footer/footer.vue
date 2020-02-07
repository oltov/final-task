<template>
    <footer class="footer">
            <navList :isFooter="onFooter" />
            <div
                class="ya-share2"
                data-bare
                data-services="vkontakte,twitter,facebook"
            ></div>
        </footer>
</template>

<script>
import navList from "@/components/header/nav-list";

export default {
    components: {
        navList
    },
    data() {
        return {
            onFooter: true
        }
    }
}
</script>

<style lang="scss">
.footer {
    background-color: $color-bg-dark;
    padding: 60px 0 40px 0;

    @include mq(1023) {
         width: 280px;
         padding: 0 20px;
         margin: 0 auto;
    }
}
</style>