<template>
    <div class="secondary-slider__container js-slider-wrapper" ref="container">
        <ul
            class="secondary-slider__list js-slider"
            :style="{
                transform: 'translate3d(' + currentPosition + 'px, 0, 0)'
            }"
        >
            <li
                class="secondary-slider__item js-slide"
                v-for="(item, index) in slides"
                :key="index"
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                ref="slide"
                @click="passIndexItem(index)"
            ></li>
        </ul>
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
