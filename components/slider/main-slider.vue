<template>
    <div class="main-slider__inner container">
        <div class="main-slider__container js-slider-wrapper" ref="container">
            <ul
                class="main-slider__list js-slider"
                :style="{
                    transform: 'translate3d(' + currentPosition + 'px, 0, 0)'
                }"
            >
                <li
                    class="main-slider__item js-slide"
                    v-for="(item, index) in items"
                    :key="index"
                    ref="slide"
                >
                    <p
                        class="main-slider__slide"
                        :style="{ 'background-image': 'url(' + item.img + ')' }"
                    ></p>
                    <p class="main-slider__slide-name">
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
            class="main-slider__button js-button-left"
            aria-label="влево"
            title="влево"
            tabindex="1"
            @click="goPreviousSlide"
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
            class="main-slider__button main-slider__button--right js-button-right"
            aria-label="влево"
            title="вправо"
            tabindex="1"
            @click="goNextSlide"
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
            isMounted: false
        };
    },
    watch: {
        minElementIndex() {
            this.$refs.slide[this.currentIndex].style.opacity = 0;

            this.currentIndex = this.minElementIndex;

            this.$refs.slide[this.currentIndex].style.opacity = 1;
        }
    },

    computed: {
        currentPosition() {
            if (!this.isMounted) {
                return 0;
            } else {
                return -(this.$refs.container.offsetWidth * this.currentIndex);
            }
        },
        numberOfSlides() {
            return this.items.length;
        }
    },
    methods: {
        passValue() {
            this.$emit("remove", this.currentIndex);
        },

        goPreviousSlide() {
            this.$refs.slide[this.currentIndex].style.opacity = 0;

            this.currentIndex -= 1;
            this.passValue();

            if (this.currentIndex < 0) {
                this.currentIndex = 0;
            }

            this.$refs.slide[this.currentIndex].style.opacity = 1;
        },

        goNextSlide() {
            this.$refs.slide[this.currentIndex].style.opacity = 0;

            this.currentIndex += 1;
            this.passValue();

            if (this.currentIndex > this.$refs.slide.length - 1) {
                this.currentIndex = this.$refs.slide.length - 1;
            }

            this.$refs.slide[this.currentIndex].style.opacity = 1;
        }
    },
    mounted() {
        this.isMounted = true;
    }
};
</script>
