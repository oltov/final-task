<template>
    <div>
        <categories @tabEvent="btnOn"  />
        <div class="main main--wrapper-filters container">
            <Filters :dataToFilter="dataToFiltering" :tabPress="tab" @done="setDataToRender" @ready="setDataToTabs" />
            <Pictures :dataToList="dataToRander"  :elements="dataToTabs" @tabPress="getTabElement"/>
        </div>
    </div>
</template>

<script>
import Categories from "@/components/catalog/categories";
import Filters from "@/components/catalog/filters";
import Pictures from "@/components/catalog/pictures";

export default {
    components: {
        Categories,
        Filters,
        Pictures
    },
    data() {
        return {
            isMounted: false,
            tabIs: "",
            dataToFiltering: [],
            dataToRander: [],
            rarities: [],
            newPictures: [],
            antiques: [],
            philately: [],
            dataToTabs: [],
            tab: "",
            urls: {
                rarities: "../ajax/rarities.json",
                newPictures: "../ajax/new-painting.json",
                antiques: "../ajax/antiques.json",
                philately: "../ajax/philately.json"
            }
        };
    },
    methods: {
        btnOn(index) {
            if (this[index].length > 0) {
                this.dataToFiltering = this[index];
            } else {
                this.getData(this.urls[index], this[index]);
            }
        },
        getTabElement(i) {
            this.tab = i;
        },

        async getData(url, arr) {
            const data = await this.$axios.$get(url);
            data.forEach(el => {
                arr.push(el);
            });
            this.dataToFiltering = data;
        },

        setDataToRender(data){
            this.dataToRander = data;
        },

        setDataToTabs(array) {
            this.dataToTabs = array;
        }


    },
    mounted() {
        this.getData(this.urls.rarities, this.rarities);
    }
};
</script>

<style lang="scss">
.main {

    &--wrapper-filters {
        display: flex;
        padding-top: 40px;

        @include mq(1023) {
            flex-direction: column;
        }
    }

    &__categories {

        @include mq(1023) {
            overflow: hidden;
            width: 280px;
            margin: 0 auto;
            margin-top: 20px;
        }
    }

    &__button-filters {
        display: none;

        @include mq(1023) {
            display: block;
            width: 280px;
            box-sizing: border-box;
            border: 1px solid $color-bg-light;
            background: url('/img/filter-settings.png') no-repeat 250px;
            margin: 0 auto 20px auto;
            text-align: left;
            padding: 5px 10px;
            font-family: "Helvetica", sans-serif;
            font-size: $font-size-xs;
            cursor: pointer;
        }
    }
}
</style>
