<template>
    <section class="picture" :class="{'picture--min': gridIsMin}">
        <div class="picture__button-inner">
            <div class="picture__checked">
                <button
                    class="picture__button-checked"
                    type="button"
                    v-for="(item, index) in elements"
                    :key="index"
                    @click="setTabElement(index, item)"
                    >
                    <span>{{ item.name }}</span>
                </button>
            </div>
            <div>
                <button
                    class="picture__view picture__view--col-2"
                    type="button"
                    @click="gridIsMin = false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                    >
                        <path
                            :class="{'picture__view--is-active': !gridIsMin}"
                            fill="#bfbfbf"
                            d="M0 0h6v6H0zM9 0h6v6H9zM0 9h6v6H0zM9 9h6v6H9z"
                        />
                    </svg>
                </button>
                <button
                    class="picture__view picture__view--col-3"
                    type="button"
                    @click="gridIsMin = true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                    >
                        <path
                            :class="{'picture__view--is-active': gridIsMin}"
                            fill="#bfbfbf"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 0h2.647v2.647H0V0zm0 6.176h2.647v2.648H0V6.176zm0 6.177h2.647V15H0v-2.647zM6.176 0h2.648v2.647H6.176V0zm0 6.176h2.648v2.648H6.176V6.176zm0 6.177h2.648V15H6.176v-2.647zM12.353 0H15v2.647h-2.647V0zm0 6.176H15v2.648h-2.647V6.176zm0 6.177H15V15h-2.647v-2.647z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <List :dataPictures="dataToList" :gridMin="gridIsMin" />
    </section>
</template>

<script>
import List from "@/components/catalog/list-of-paintings";

export default {
    props: ["dataToList", "elements"],
    components: {
        List
    },
    data() {
        return {
            gridIsMin: false,
        };
    },

    methods: {
        setTabElement(index,item) {
            this.$emit('tabPress', index, item)
        }
    }
}
</script>

<style lang="scss">
.picture {
    margin-left: 120px;
    padding-bottom: 60px;

    @include mq(1023) {
        margin-left: 0;
        padding: 0 20px;
    }

    &--min {
        margin-left: 40px;
    }

    &__checked {
        max-width: 500px;
        min-height: 30px;
    }

    &__button-inner {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        @include mq(1023) {
            display: none;
        }
    }

    &__button-checked {
        font-family: "Helvetica", sans-serif;
        font-size: $font-size-xs;
        background-color: #f5f5f5;
        color: $color-bg-dark;
        border: 1px solid #f5f5f5;
        border-radius: 15px;
        cursor: pointer;
        margin-right: 10px;
        padding: 5px 29px 6px 20px;
        position: relative;

        &::after {
            content: url("/img/x-button.png");
            position: absolute;
            right: 12px;
            top: 7px;
            width: 10px;
            height: 10px;
        }
    }

    &__view {
        width: 15px;
        height: 15px;
        border: none;
        cursor: pointer;
        background-color: transparent;
        padding: 0;

        &--col-2 {
            margin-right: 20px;
        }

        &--is-active {
            fill: $color-bg-dark;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        margin-bottom: 40px;
        padding: 0;
    }

    &__item {
        font-size: 0;
        width: 280px;
        text-align: center;
        object-fit: cover;

        > .picture__img {
            width: 280px;
            height: 317px;

            @include mq(1023) {
                width: 120px;
                height: 147px;
            }
        }

        @include mq(1023) {
            width: 120px;
            text-align: left;
            margin-bottom: 20px;
        }

        &:nth-child(odd) {
            margin-right: 40px;
        }
    }

    &__item--min {
        margin-right: 40px;
        width: 200px;

        > .picture__img {
            width: 200px;
            height: 226px;
        }

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    &__img {
        display: inline-block;
        background-color: chocolate;
    }

    &__name {
        font-size: $font-size-s;

        @include mq(1023) {
            margin-bottom: 0;
        }
    }

    &__date {
        font-size: $font-size-s;
    }

    &__pagination {
        margin: 0 auto;
        width: max-content;

        @include mq(1023) {
            margin-bottom: 60px;
        }
    }

    &__pagination-button {
        text-decoration: none;
        margin-right: 10px;
        color: #bfbfbf;
        font-size: $font-size-l;
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;

        &--is-active {
            color: #202020;
        }

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>