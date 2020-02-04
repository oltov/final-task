<template>
    <header class="header" :class="{'header--catalog': page.catalog}">
        <nav class="header__nav">
            <button class="header__nav-button"></button>
            <navList />
        </nav>
        <div class="header-title" :class="{container: page.index}">
            <search />
            <div class="header__bg-img" v-if="page.index"></div>
            <headerTitle :data="headerContent" />
            <div class="header-picture" v-if="page.catalog">
                <ul class="header-picture__list">
                    <li class="header-picture__item"></li>
                    <li class="header-picture__item"></li>
                    <li class="header-picture__item"></li>
                    <li class="header-picture__item"></li>
                </ul>
            </div>
        </div>
        <logotype />
    </header>
</template>

<script>
import navList from "@/components/header/nav-list";
import search from "@/components/header/search";
import headerTitle from "@/components/header/header-content";

import logotype from "@/components/header/logo";

export default {
    components: {
        navList,
        search,
        headerTitle,
        logotype
    },
    props: ["page"],
    data() {
        return {
            headerContent: "",
            contentOnIndex: {
                isActive: false,
                date: `1878-1927`,
                title: "борис кустодиев",
                text: `
                Художник, запечатлевший на своих ярких и жизнерадостных
                полотнах сцены русских будней и праздников. Обладал
                редким безграничным талантом, которому, в первую
                очередь, было присуще особое чувство и восприятие родной
                природы.`
            },
            contentOnCatalog: {
                isActive: true,
                date: null,
                title: "картины",
                text: `бориса кустодиева`
            }
        };
    },
    mounted() {
        if (this.page.index === true) {
            this.headerContent = this.contentOnIndex;
        } else {
            this.headerContent = this.contentOnCatalog;
        }
    }
};
</script>

<style lang="scss">
</style>
