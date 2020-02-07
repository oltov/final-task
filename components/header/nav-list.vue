<template>
    <ul
        class="nav-list"
        :class="{
            'nav-list--footer': isFooter,
            'nav-list--header-mobile': !isFooter
        }"
    >
        <li
            class="nav-list__item"
            :class="{ 'nav-list__item--footer': isFooter }"
            v-for="(item, index) in links"
            v-bind:key="index"
        >
            <a href="#" class="nav-list__link" tabindex="1">{{ item }}</a>
        </li>
    </ul>
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

<style lang="scss">
.nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    @include mq(1023) {
        display: block;
    }

    &--header-mobile {
        @include mq(1023) {
            display: none;
        }
    }

    &--footer {
        width: max-content;
        margin: 0 auto;
        padding: 0 0 40px 0;

        @include mq(1023) {
            text-align: center;
            padding-top: 40px;
            padding-bottom: 20px;

        }
    }

    &__item {
        margin-right: 20px;

        &--footer {

            @include mq(1023) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }

    &__link {
        text-decoration: none;
        font-size: 14px;
        line-height: 16px;
        color: #f5f5f5;
    }
}
</style>
