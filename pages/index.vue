<template>
    <div>
        <Header :page="pageIs" />
        <main>
            <Biography />
            <Slider />
            <Creation />
            <Museums />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/header/header";
import Biography from "@/components/biography/biography";
import Slider from "@/components/slider/slider";
import Museums from "@/components/museums/museums";
import Creation from "@/components/creation/creation";
import Footer from "@/components/footer/footer";

export default {
    components: {
        Header,
        Footer,
        Biography,
        Slider,
        Creation,
        Museums
    },
    data() {
        return {
            pageIs: {
                index: true,
                catalog: false
            }
        };
    }
};
</script>

<style lang="scss">
// body {
//     margin: 0;
//     font-family: 'Helvetica', sans-serif;
//     font-size: $font-size-m;
//     color: $color-text-dark;
// }

// .container {
//     width: 920px;
//     margin: 0 auto;
//     position: relative;
// }

// .visually-hidden {
//     position: absolute;
//     width: 1px;
//     height: 1px;
//     margin: -1px;
//     border: 0;
//     padding: 0;
//     white-space: nowrap;
//     clip-path: inset(100%);
//     clip: rect(0 0 0 0);
//     overflow: hidden;
// }

// .main {
//     &__wrapper-filters {
//         display: flex;
//         padding-top: 40px;
//     }
// }

// .categories {
//     padding: 60px 0 0 0;
//     border-bottom: 1px solid $color-bg-light;

//     &__button {
//         border: none;
//         background-color: transparent;
//         padding: 0;
//         padding-bottom: 10px;
//         margin-right: 40px;
//         font-family: 'YesevaOne', sans-serif;
//         color: #c4c4c4;
//         font-size: $font-size-xl;
//         line-height: 23px;

//         &--is-active {
//             color: $color-bg-dark;
//             border-bottom: 3px solid #202020;
//         }
//     }
// }
</style>
