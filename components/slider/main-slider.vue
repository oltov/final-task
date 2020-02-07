<template>
    <div class="main-slider">
        <nuxt-link to="/catalog" class="main-slider__link" tabindex="1"
            >все картины</nuxt-link
        >
        <div class="main-slider__container" ref="container">
            <ul
                class="main-slider__list"
                :style="{
                    transform: 'translate3d(' + currentPosition + 'px, 0, 0)'
                }"
            >
                <li
                    class="main-slider__item"
                    v-for="(item, index) in items"
                    :key="index"
                    ref="slide"
                    @touchstart="getFirstTouch($event)"
                    @touchmove="touchHandler($event)"
                >
                    <p
                        class="main-slider__slide"
                        :style="{ 'background-image': 'url(' + item.img + ')' }"
                    ></p>
                    <p class="main-slider__slide-name" ref="name">
                        {{ item.name }}
                    </p>
                    <p class="main-slider__slide-index">
                        {{ index + 1 }}
                        <span class="main-slider__all-numbers"
                            >/ {{ numberOfSlides }}</span
                        >
                    </p>
                </li>
            </ul>
        </div>
        <button
            class="main-slider__button"
            :class="{ 'main-slider__button--deactive': deactiveButton }"
            aria-label="влево"
            title="влево"
            tabindex="1"
            @click="moveSliderLeft"
            v-show="!mobileOn"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40"
                height="12"
                viewBox="0 0 40.8 11"
                xml:space="preserve"
            >
                <path
                    d="M0.2,5c-0.3,0.3-0.3,0.8,0,1.1L5,10.8c0.3,0.3,0.8,0.3,1.1,
                0c0.3-0.3,0.3-0.8,0-1.1L1.8,5.5l4.2-4.2c0.3-0.3,0.3-0.8,
                0-1.1C5.8-0.1,5.3-0.1,5,0.2L0.2,5z M40.8,4.8h-40v1.5h40V4.8z"
                    fill="#ffffff"
                />
            </svg>
        </button>
        <button
            class="main-slider__button main-slider__button--right"
            :class="{ 'main-slider__button--deactive': deactiveButton }"
            aria-label="влево"
            title="вправо"
            tabindex="1"
            @click="moveSliderRight"
            v-show="!mobileOn"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="40"
                height="12"
                viewBox="0 0 40.8 11"
                xml:space="preserve"
            >
                <path
                    d="M35.8,0.2c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l4.2,
                4.2l-4.2,4.2c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.1,
                0l4.8-4.8c0.3-0.3,0.3-0.8,0-1.1L35.8,0.2z M0,6.3h40V4.8H0L0,6.3z"
                    fill="#ffffff"
                />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: ["items", "min-element-index"],
    data() {
        return {
            currentIndex: 0,
            isMounted: false,
            slideMarginRight: 0,
            mobileOn: false,

            // !!! переделать на абстрактную величину(ширина main слайда)
            width: 920,
            firstTouchX: 0
        };
    },
    watch: {
        minElementIndex() {
            this.$refs.slide[this.currentIndex].style.opacity = 0.5;

            this.currentIndex = this.minElementIndex;

            this.$refs.slide[this.currentIndex].style.opacity = 1;
        }
    },

    computed: {
        currentPosition() {
            if (!this.isMounted) {
                return 0;
            } else {
                if (this.mobileOn) {
                    this.slideMarginRight = 20;

                    // 200 - hard значение, ширина слайдера на mobile,
                    // !!! переделать на абстрактное значение
                    this.width = 200;
                }
                return -(
                    this.width * this.currentIndex +
                    this.slideMarginRight * this.currentIndex
                );
            }
        },
        numberOfSlides() {
            return this.items.length;
        },
        deactiveButton() {
            return this.currentIndex === 0 ? true : false;
        }
    },
    methods: {
        getFirstTouch() {
            this.firstTouchX = (event.touches ||
                event.originalEvent.touches)[0].clientX;
            console.log(this.firstTouchX);
        },

        touchHandler() {
            if (!this.firstTouchX) return;

            const touchX = (event.touches || event.originalEvent.touches)[0]
                .clientX;
            const deltaX = this.firstTouchX - touchX;

            if (deltaX > 40) {
                this.moveSliderRight();
                this.firstTouchX = null;
            }

            if (deltaX < -40) {
                this.moveSliderLeft();
                this.firstTouchX = null;
            }
        },

        passValue() {
            this.$emit("remove", this.currentIndex);
        },

        moveSliderLeft() {
            if (this.currentIndex - 1 < 0) return;

            this.$refs.slide[this.currentIndex].style.opacity = 0.5;
            this.$refs.name[this.currentIndex].style.opacity = 0;

            this.currentIndex -= 1;
            this.passValue();

            this.$refs.slide[this.currentIndex].style.opacity = 1;
            this.$refs.name[this.currentIndex].style.opacity = 1;
        },

        moveSliderRight() {
            if (this.currentIndex + 1 > this.$refs.slide.length - 1) return;

            this.$refs.slide[this.currentIndex].style.opacity = 0.5;
            this.$refs.name[this.currentIndex].style.opacity = 0;

            this.currentIndex += 1;
            this.passValue();

            this.$refs.slide[this.currentIndex].style.opacity = 1;
            this.$refs.name[this.currentIndex].style.opacity = 1;
        },

        getWindowWidth() {
            this.mobileOn = window.innerWidth < 1023;
        }
    },

    mounted() {
        this.isMounted = true;
        this.getWindowWidth();
    }
};
</script>

<style lang="scss">
.main-slider {
    width: 920px;
    margin: 0 auto;
    position: relative;

    @include mq(1023) {
        width: 320px;
    }

    &__container {
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
        display: inline-block;
        opacity: 0.5;
        transition: opacity 0.5s ease-in-out;

        &:first-child {
            opacity: 1;
        }

        @include mq(1023) {
            display: inline-flex;
            flex-direction: column;
            width: 200px;
            margin-right: 20px;

            &:first-child {
                margin-left: 60px;
            }
        }
    }

    &__slide {
        width: 920px;
        height: 530px;
        background-color: green;

        @include mq(1023) {
            width: 200px;
            height: 156px;
            order: 1;
            margin-top: 20px;
        }
    }

    &__slide-name {
        font-size: $font-size-s;
        line-height: 1.25;
        font-weight: 300;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 0;
        opacity: 0;
        transition: opacity 1s ease-in-out;

        @include mq(1023) {
            white-space: normal;
            min-height: 35px;
        }
    }

    &__slide-index {
        font-size: $font-size-s;
        line-height: 0.8;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 0;

        @include mq(1023) {
            order: 1;
            margin-top: 20px;
        }
    }

    &__all-numbers {
        opacity: 0.5;
    }

    &__button {
        position: absolute;
        bottom: 10px;
        border: none;
        background-color: transparent;
        width: 40px;
        padding: 0;
        cursor: pointer;

        &--deactive {
            opacity: 0.5;
        }

        &--right {
            right: 0;
        }

        @include mq(1023) {
            display: block;
        }
    }

    &__link {
        color: #bfbfbf;
        text-decoration: none;
        font-size: $font-size-s;
        margin-left: 18px;
        position: absolute;
        top: -90px;
        right: 0;

        @include mq(1023) {
            top: auto;
            bottom: -75px;
            left: 100px;
        }
    }
}
</style>
