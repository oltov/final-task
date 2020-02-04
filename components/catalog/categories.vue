<template>
    <section class="categories container">
        <h2 class="visually-hidden">категории</h2>
        <div class="categories__inner">
            <button
                class="categories__button categories__button--is-active"
                tabindex="1"
                v-for="(item, index) in contentInButton"
                :key="index"
            >
                <span>{{ item }}</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            contentInButton: {
                rarity: "Раритет",
                new: "Новые",
                antiques: "Антиквариат",
                philately: "Филателия"
            }
        };
    },
    methods: {
        emitHandler() {
            this.$emit('tabEvent', "")
        }
    }
};
</script>
