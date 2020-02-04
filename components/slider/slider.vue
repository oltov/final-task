<template>
    <section class="main-slider">
        <h2 class="visually-hidden">слайдер</h2>
        <div class="secondary-slider container js-root">
            <PreviewSlider
                :slides="arr"
                :curindex="ind"
                @click-item="setIndexItem"
            />
            <nuxt-link to="/catalog" class="main-slider__link" tabindex="1"
                >все картины</nuxt-link
            >
        </div>
        <MainSlider
            :items="arr"
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
            arr: [],
            ind: 0,
            mainSlide: 0
        };
    },
    methods: {
        setCurrentIndex(current) {
            this.ind = current;
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
            .then(json => (this.arr = json))
            .catch(error => alert("Ошибка загразки данных"));
    }
};
</script>
