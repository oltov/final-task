<template>
    <div>
        <ul class="nav-list" :class="{ 'nav-list--footer': isFooter }">
            <li
                class="nav-list__item"
                v-for="(item, index) in links"
                v-bind:key="index"
            >
                <a href="#" class="nav-list__link" tabindex="1">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["isFooter"],
    data() {
        return {
            links: {
                biography: "биография",
                creation: "творчество",
                paintings: "картины",
                museums: "музеи"
            }
        };
    }
};
</script>

<style lang="sass"></style>
