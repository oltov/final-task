<template>
    <div class="secondary-slider">
        <div
            class="secondary-slider__container"
            ref="container"
        >
            <ul
                class="secondary-slider__list"
                :style="{
                    transform: 'translate3d(' + currentPosition + 'px, 0, 0)'
                }"
            >
                <li
                    class="secondary-slider__item"
                    v-for="(item, index) in slides"
                    :key="index"
                    :style="{ 'background-image': 'url(' + item.img + ')' }"
                    ref="slide"
                    @click="passIndexItem(index)"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["slides", "curindex"],
    data() {
        return {
            currentIndex: 0,
            isMounted: false,
            // id слайда по по корому кликнули
            clickedSlide: 0
        };
    },
    watch: {
        curindex() {
            this.$refs.slide[this.curindex].style.opacity = 1;
            this.$refs.slide[this.currentIndex].style.opacity = 0.45;
            this.currentIndex = this.curindex;
        },
        clickedSlide() {
            this.$refs.slide[this.clickedSlide].style.opacity = 1;
            this.$refs.slide[this.currentIndex].style.opacity = 0.45;
            this.currentIndex = this.clickedSlide;
        }
    },
    computed: {
        currentPosition() {
            if (!this.isMounted || this.curindex <= 4) {
                return 0;
            } else {
                return -(
                    (this.$refs.slide[0].offsetWidth + 40) *
                    (this.curindex - 4)
                );
            }
        }
    },
    methods: {
        passIndexItem(i) {
            this.clickedSlide = i;
            this.$emit("click-item", i);
        }
    },
    mounted() {
        this.isMounted = true;
    }
};
</script>

<style lang="scss">

.secondary-slider {
    width: 920px;
    margin: 0 auto;
    position: relative;

    @include mq(1023) {
        display: none;
    }

    &__container {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 40px;

        width: 800px;
        height: 90px;
        overflow: hidden;
    }

    &__list {
        display: inline-block;
        list-style: none;
        font-size: 0;
        padding: 0;
        white-space: nowrap;
        transition: transform 1s ease-in-out;
    }

    &__item {
        width: 120px;
        height: 90px;
        display: inline-block;
        margin-right: 40px;
        background-color: rgb(83, 54, 27);
        background: none no-repeat;
        background-size: cover;
        cursor: pointer;
        opacity: 0.45;
        transition: opacity 1s ease;

        &:first-child {
            opacity: 1;
        }
    }
}
</style>
