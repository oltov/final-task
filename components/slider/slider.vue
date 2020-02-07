<template>
    <section class="slider">
        <h2 class="visually-hidden">слайдер</h2>
        <PreviewSlider
            :slides="imageData"
            :curindex="indexMainSlide"
            @click-item="setIndexItem"
        />
        <MainSlider
            :items="imageData"
            :min-element-index="mainSlide"
            @remove="setCurrentIndex"
        />
    </section>
</template>

<script>
import MainSlider from "@/components/slider/main-slider";
import PreviewSlider from "@/components/slider/preview-slider";

export default {
    components: {
        MainSlider,
        PreviewSlider
    },
    data() {
        return {
            imageData: [],
            indexMainSlide: 0,
            mainSlide: 0
        };
    },
    methods: {
        setCurrentIndex(current) {
            this.indexMainSlide = current;
        },
        setIndexItem(index) {
            this.mainSlide = index;
            console.log(this.mainSlide);
        }
    },
    mounted() {
        this.isMounted = true;
        fetch("../ajax/antiques.json")
            .then(response => response.json())
            .then(json => (this.imageData = json))
            .catch(error => alert("Ошибка загразки данных"));
    }
};
</script>

<style lang="scss">
.slider {
    background-color: $color-bg-dark;
    margin-bottom: 100px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: #f5f5f5;

    @include mq(1023) {
        width: 320px;
        margin: 0 auto;
        padding-bottom: 100px;
    }
}
</style>
