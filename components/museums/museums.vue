<template>
    <section class="museum">
        <h2 class="title-section title-section--museum">музеи</h2>
        <div class="museum__map">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A6d0232b01a1be3d792f16a9257612b9abf9d6261c3b47d98e1a2751da2b65e4f&amp;source=constructor"
                width="1200"
                height="514"
            ></iframe>
        </div>
        <Contacts />
    </section>
</template>

<script>
import Contacts from "@/components/museums/contacts";

export default {
    components: {
        Contacts
    }
};
</script>

<style lang="scss">
.museum {
    margin-bottom: 100px;
    padding-bottom: 40px;

    @include mq(1023) {
        width: 320px;
        margin: 0 auto 20px auto;
        padding-top: 60px;
        }

    &__map {
        max-width: 1200px;
        height: 514px;
        margin: 0 auto;
        margin-bottom: 40px;
        border: none;
        background: url('/static/img/map-desktop.jpg') no-repeat center;

        @include mq(1023) {
            width: 320px;
        }

        > iframe {
            border: none;
            max-width: 1200px;
            width: calc(100vw - 20px);
            margin: 0 auto;
            display: block;

            @include mq(1023) {
                width: 320px;
        }
        }
    }

    &__wrapper-address {
        margin: 0 auto;
        display: flex;

        @include mq(1023) {
            display: block;
        }
    }

    &__address {
        width: 279px;
        border-right: 1px solid $color-bg-light;
        margin: 0;
        margin-left: 40px;

        @include mq(1023) {
            margin-left: 0;
            border: none;
            border-bottom: 1px solid $color-bg-light;
            padding-top: 40px;
            padding-bottom: 40px;
        }

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            border: none;
        }
    }

    &__position {
        display: inline-block;
        margin: 0;
        margin-bottom: 20px;
        padding-left: 15px;
        font-weight: 700;
        color: #202020;
        text-decoration: none;

        &::before {
            content: '';
            display: inline-block;
            transform: translate3d(-15px, 3px, 0);
            width: 14px;
            height: 18px;
            background: url('/img/marker.svg') no-repeat;
        }
    }

    &__contact {
        margin: 0;
        padding-right: 96px;
        font-size: $font-size-s;
        color: #bfbfbf;
        line-height: 24px;
    }
}

</style>
