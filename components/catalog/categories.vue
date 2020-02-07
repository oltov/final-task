<template>
<div class="main__categories">
    <section class="categories">
        <h2 class="visually-hidden">категории</h2>
        <div class="categories__inner">
            <button
                class="categories__button "
                :class="{ 'categories__button--is-active': item.isActive }"
                tabindex="1"
                v-for="(item, index) in contentInButton"
                :key="index"
                @click="emitHandler(index)"
            >
                <span>{{ item.name }}</span>
            </button>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            contentInButton: {
                rarities: {
                    name: "Раритет",
                    isActive: true
                },
                newPictures: {
                    name: "Новые",
                    isActive: false
                },
                antiques: {
                    name: "Антиквариат",
                    isActive: false
                },
                philately: {
                    name: "Филателия",
                    isActive: false
                }
            },
            activeButton: "rarities"
        };
    },
    methods: {
        emitHandler(i) {
            this.$emit("tabEvent", i);
            this.controlActiveButton(i);
        },
        controlActiveButton(index) {
            this.contentInButton[this.activeButton].isActive = !this
                .contentInButton[this.activeButton].isActive;
            this.contentInButton[index].isActive = !this.contentInButton[index]
                .isActive;
            this.activeButton = index;
        }
    }
};
</script>

<style lang="scss">
.categories {
    width: 920px;
    margin: 0 auto;
    position: relative;
    padding: 60px 0 0 0;
    border-bottom: 1px solid $color-bg-light;

    @include mq(1023) {
        width: 280px;
        
        margin-bottom: -20px;
    }

    &__inner {
        @include mq(1023) {
            display: inline-block;
            white-space: nowrap;
        }
    }

    &__button {
        border: none;
        background-color: transparent;
        padding: 0;
        padding-bottom: 10px;
        margin-right: 40px;
        font-family: "YesevaOne", sans-serif;
        color: #c4c4c4;
        font-size: $font-size-xl;
        line-height: 23px;
        cursor: pointer;

        @include mq(1023) {
            font-size: $font-size-s;
            margin-right: 20px;
            margin-bottom: 20px;
        }

        &--is-active {
            color: $color-bg-dark;
            border-bottom: 3px solid #202020;
        }
    }
}
</style>
