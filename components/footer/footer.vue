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