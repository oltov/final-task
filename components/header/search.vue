<template>
    <div class="search" :class="{'search--catalog': isCatalog.catalog}" title="поиск">
        <form>
            <input class="search__input" type="text" ref="input" />
            <button
                class="search__btn"
                type="submit"
                @click.prevent="moveInput"
                ref="loupe"
                tabindex="1"
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.8751 12.825C10.6503 12.825 12.9001 10.5752 12.9001 7.79996C12.9001 5.02473 10.6503 2.77496 7.8751 2.77496C5.09987 2.77496 2.8501 5.02473 2.8501 7.79996C2.8501 10.5752 5.09987 12.825 7.8751 12.825Z"
                        stroke="#F5F5F5"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                    />
                    <path
                        d="M11.4751 11.475L16.2001 16.2"
                        fill="black"
                        stroke="#F5F5F5"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["isCatalog"],
    methods: {
        moveInput() {
            this.$refs.input.style.transform = `translate3d(0px, 0, 0)`;
            this.$refs.loupe.style.transform = `translate3d(-30px, 5px, 0)`;
        }
    }
};
</script>

<style lang="scss">
.search {
    position: absolute;
    z-index: 2;
    top: 40px;
    left: 31%;
    overflow: hidden;

    @include mq(1023) {
        left: 10px;
        top: 30px;
    }

    &--catalog {
        left: 7%;
    }

    &__btn {
        border: none;
        background-color: transparent;
        font-size: 0;
        padding: 0;
        cursor: pointer;
        transform: translate3d(-200px, 5px, 0);
        transition: transform 0.4s ease-in-out;
    }

    &__input {
        background-color: transparent;
        width: 200px;
        color: #f5f5f5;
        font-size: 16px;
        border: none;
        padding-top: 4px;
        border-bottom: 2px solid #f5f5f5;
        transform: translate3d(-202px, 0, 0);
        transition: transform 0.4s ease-in-out;
    }
}

</style>
