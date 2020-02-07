<template>
<div>
    <button class="main__button-filters" @click="mobileOn = !mobileOn">
        <span>Фильтры</span>
    </button>
    <section class="filters" v-show="!mobileOn">
        <div class="filters__section">
            <button
                class="filters__button"
                :class="{ 'filters__button--is-close': !workDisplayOn }"
                @click="workDisplayOn = !workDisplayOn"
                type="button"
            >
                работы
            </button>
            <ul class="filters__list" v-show="workDisplayOn">
                <li
                    class="filters__item"
                    v-for="(item, index) in works"
                    :key="index"
                    @mouseover="showButton(index)"
                    @mouseout="showButton(index)"
                >
                    <span
                        class="filters__item-close-btn"
                        :class="{
                            'filters__item-close-btn--is-hover': item.isHover,
                            'filters__item-close-btn--is-active': item.isActive
                        }"
                        @click="transformXButtone(index, item)"
                    ></span>
                    <span @click="openButton(index, item)">{{ item.name }}</span>
                    <span class="filters__number">{{ item.sum }}</span>
                </li>
            </ul>
        </div>
        <div class="filters__section">
            <button
                class="filters__button"
                :class="{ 'filters__button--is-close': !plotDisplayOn }"
                @click="plotDisplayOn = !plotDisplayOn"
                type="button"
            >
                сюжет
            </button>
            <div class="filters__search" v-show="plotDisplayOn">
                <input
                    class="filters__search-input"
                    type="text"
                    placeholder="Быстрый поиск"
                />
            </div>
            <ul class="filters__list" v-show="plotDisplayOn">
                <li
                    class="filters__item"
                    v-for="(item, index) in plot"
                    :key="index"
                >
                    <input :id="index" class="filters__check" type="checkbox" v-model="item.isActive"/>
                    <label
                        class="filters__lable"
                        :for="index"
                        @click="saveIndexFilter(index, item)"
                    >
                        <span>{{ item.name }}</span>
                    </label>
                </li>
            </ul>
        </div>
        <div class="filters__section">
            <button
                class="filters__button"
                :class="{ 'filters__button--is-close': !stylesDisplayOn }"
                @click="stylesDisplayOn = !stylesDisplayOn"
                type="button"
            >
                стили
            </button>
            <ul class="filters__list" v-show="stylesDisplayOn">
                <li
                    class="filters__item"
                    v-for="(item, index) in styles"
                    :key="index"
                    v-show="item.number <= listNumber"
                >
                    <input :id="index" class="filters__check" type="checkbox" v-model="item.isActive"/>
                    <label
                        class="filters__lable"
                        :for="index"
                        @click="saveIndexFilter(index, item)"
                    >
                        <span>{{ item.name }}</span>
                    </label>
                </li>
                <li class="filters__item">
                    <div class="filters__styles-all">
                        <button
                            class="filters__button filters__button--styles filters__button--is-close"
                            type="button"
                            @click="checkingListNumber"
                        >
                            Все стили
                        </button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="filters__section">
            <button
                class="filters__button"
                :class="{ 'filters__button--is-close': !techniquesDisplayOn }"
                @click="techniquesDisplayOn = !techniquesDisplayOn"
                type="button"
            >
                техника
            </button>
            <div class="filters__search" v-show="techniquesDisplayOn">
                <input
                    class="filters__search-input"
                    type="text"
                    placeholder="Быстрый поиск"
                />
            </div>
            <ul class="filters__list" v-show="techniquesDisplayOn">
                <li
                    class="filters__item"
                    v-for="(item, index) in techniques"
                    :key="index"
                >
                    <input :id="index" class="filters__check" type="checkbox" v-model="item.isActive"/>
                    <label
                        class="filters__lable"
                        :for="index"
                        @click="saveIndexFilter(index, item)"
                    >
                        <span>{{ item.name }}</span>
                    </label>
                </li>
            </ul>
        </div>
        <div class="filters__section">
            <button
                class="filters__button"
                :class="{ 'filters__button--is-close': !periodsDisplayOn }"
                type="button"
                @click="periodsDisplayOn = !periodsDisplayOn"
            >
                период
            </button>
            <div class="filters__search" v-show="periodsDisplayOn">
                <input
                    class="filters__search-input filters__search-input--date filters__search--min"
                    type="text"
                    placeholder="с"
                />
                <input
                    class="filters__search-input filters__search-input--date filters__search--max"
                    type="text"
                    placeholder="по"
                />
            </div>
            <ul class="filters__list" v-show="periodsDisplayOn">
                <li
                    class="filters__item"
                    v-for="(item, index) in periods"
                    :key="index"
                >
                    <input :id="index" class="filters__check" type="checkbox" v-model="item.isActive"/>
                    <label
                        class="filters__lable"
                        :for="index"
                        @click="saveIndexFilter(index, item)"
                    >
                        <span>{{ item.name }}</span>
                    </label>
                </li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
export default {
    props: ["dataToFilter", "tabPress"],
    data() {
        return {
            filteredArr: [],
            namesСheckedFields: [],
            checkedElement: {},
            listNumber: 7,
            workDisplayOn: true,
            plotDisplayOn: true,
            stylesDisplayOn: true,
            techniquesDisplayOn: true,
            periodsDisplayOn: true,
            mobileOn: false,
            works: {
                pictorial: {
                    name: "Живопись",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                illustrations: {
                    name: "Рисунки и иллюстрации",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                theatrical: {
                    name: "Театрально-декорационное",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                graphics: {
                    name: "Графика",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                engraving: {
                    name: "Гравюра",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                poster: {
                    name: "Плакат",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                sculpture: {
                    name: "Скульптура",
                    isHover: false,
                    isActive: false,
                    sum: 0
                },
                decorative: {
                    name: "Декоративно-прикладное",
                    isHover: false,
                    isActive: false,
                    sum: 0
                }
            },
            plot: {
                painting: {
                    name: "Портрет",
                    number: 1,
                    isCheck: false,
                    isActive: false,
                },
                genrescene: {
                    name: "Жанровая сцена",
                    number: 2,
                    isCheck: false,
                    isActive: false,
                },
                scenery: {
                    name: "Пейзаж",
                    number: 3,
                    isCheck: false,
                    isActive: false,
                },
                literaryscene: {
                    name: "Литературная сцена",
                    number: 4,
                    isCheck: false,
                    isActive: false,
                },
                citylandscape: {
                    name: "Городской пейзаж",
                    number: 5,
                    isCheck: false,
                    isActive: false,
                },
                nude: {
                    name: "Ню",
                    number: 6,
                    isCheck: false,
                    isActive: false,
                },
                interior: {
                    name: "Интерьер",
                    number: 7,
                    isCheck: false,
                    isActive: false,
                },
                stilllife: {
                    name: "Натюрморт",
                    number: 8,
                    isCheck: false,
                    isActive: false,
                },
                allegoricalscene: {
                    name: "Аллегорическая сцена",
                    number: 9,
                    isCheck: false,
                    isActive: false,
                },
                historicalscene: {
                    name: "Историческая сцена",
                    number: 10,
                    isCheck: false,
                    isActive: false,
                },
                architecture: {
                    name: "Архитектура",
                    number: 11,
                    isCheck: false,
                    isActive: false,
                },
                animalism: {
                    name: "Анимализм",
                    number: 12,
                    isCheck: false,
                    isActive: false,
                },
                religiousscene: {
                    name: "Религиозная сцена",
                    number: 13,
                    isCheck: false,
                    isActive: false,
                }
            },
            styles: {
                realism: {
                    name: "Реализм",
                    number: 1,
                    isCheck: false,
                    isActive: false,
                },
                modern: {
                    name: "Модерн",
                    number: 2,
                    isCheck: false,
                    isActive: false,
                },
                impressionism: {
                    name: "Импрессионизм",
                    number: 3,
                    isCheck: false,
                    isActive: false,
                },
                socialistrealism: {
                    name: "Соцреализм",
                    number: 4,
                    isCheck: false,
                    isActive: false,
                },
                primitivism: {
                    name: "Примитивизм",
                    number: 5,
                    isCheck: false,
                    isActive: false,
                },
                artnouveau: {
                    name: "Ар Нуво",
                    number: 6,
                    isCheck: false,
                    isActive: false,
                },
                surrealism: {
                    name: "Сюрреализм",
                    number: 7,
                    isCheck: false,
                    isActive: false,
                },
                impressionism1: {
                    name: "Импрессионизм 1, для теста",
                    number: 8,
                    isCheck: false,
                    isActive: false,
                },
                socialistrealism1: {
                    name: "Соцреализм 1, для теста",
                    number: 9,
                    isCheck: false,
                    isActive: false,
                },
                primitivism1: {
                    name: "Примитивизм 1, для теста",
                    number: 10,
                    isCheck: false,
                    isActive: false,
                },
                artNouveau1: {
                    name: "Ар Нуво для 1, теста",
                    number: 11,
                    isCheck: false,
                    isActive: false,
                },
                surrealism1: {
                    name: "Сюрреализм 1, для теста",
                    number: 12,
                    isCheck: false,
                    isActive: false,
                }
            },
            techniques: {
                oil: {
                    name: "Масло",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                watercolor: {
                    name: "Акварель",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                leadpencil: {
                    name: "Графитный карандаш",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                gouache: {
                    name: "Гуашь",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                pastel: {
                    name: "Пастель",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                ink: {
                    name: "Тушь",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                graphite: {
                    name: "Графит",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                allegoricalscene: {
                    name: "Цветной карандаш",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                coal: {
                    name: "Уголь",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                chalk: {
                    name: "Мел",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                engraving: {
                    name: "Гравюра",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                pen: {
                    name: "Перо",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                }
            },
            periods: {
                1899: {
                    name: "до 1900",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                1900: {
                    name: "1901-1916",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                },
                1917: {
                    name: "1917 и позже",
                    isHover: false,
                    isCheck: false,
                    isActive: false,
                }
            }
        };
    },
    computed: {},
    methods: {
        showButton(i) {
            this.works[i].isHover = !this.works[i].isHover;
        },
        transformXButtone(i, obj) {
            if(this.works[i]) {
                this.works[i].isActive = !this.works[i].isActive;
            }
            if(this.plot[i]) {
                this.plot[i].isActive = !this.plot[i].isActive;
            }
            if(this.styles[i]) {
                this.styles[i].isActive = !this.styles[i].isActive;
            }
            if(this.techniques[i]) {
                this.techniques[i].isActive = !this.techniques[i].isActive;
            }
            if(this.periods[i]) {
                this.periods[i].isActive = !this.periods[i].isActive;
            }

            this.saveIndexFilter(i, obj);
        },
        openButton(i, obj) {

            if (!this.works[i].isActive) {
                this.works[i].isActive = !this.works[i].isActive;
                this.saveIndexFilter(i, obj);
            }
        },

        // запись имени события в массив
        saveIndexFilter(index, obj) {

            const element = this.namesСheckedFields.indexOf(index);

            if (element < 0) {
                this.namesСheckedFields.push(index);
                this.$set(this.checkedElement, index, obj)


            } else {
                this.namesСheckedFields.splice(element, 1);
                delete this.checkedElement[index];
            }
            if (this.namesСheckedFields.length === 0) {
                this.filteredArr = this.dataToFilter;
                return;
            }
            this.filterArr();
        },

        filterArr() {
            this.filteredArr = [];
            this.namesСheckedFields.forEach(element => {
                this.dataToFilter.forEach(item => {
                    for (var key in item) {
                        if (item[key] == element) {
                            this.filteredArr.push(item);
                        }
                    }
                });
            });
            // this.setArrToRender()
        },

        // генерация события передачи массива
        setArrToRender() {
            this.$emit("done", this.filteredArr);
        },

        checkingListNumber() {
            if (this.listNumber === 7) {
                this.listNumber = 13;
            } else {
                this.listNumber = 7;
            }
        },

        setDataToTabs() {
            this.$emit("ready", this.checkedElement);
        },
        getWindowWidth() {
            this.mobileOn = window.innerWidth < 1023;
        }
    },
    watch: {
        dataToFilter() {
            this.filteredArr = this.dataToFilter;
            this.works.pictorial.sum = 0;
            this.works.illustrations.sum = 0;
            this.works.theatrical.sum = 0;
            this.works.graphics.sum = 0;
            this.works.engraving.sum = 0;
            this.works.poster.sum = 0;
            this.works.sculpture.sum = 0;
            this.works.decorative.sum = 0;

            this.dataToFilter.forEach(item => {
                if (item.work == "pictorial") {
                    this.works.pictorial.sum += 1;
                }
                if (item.work == "illustrations") {
                    this.works.illustrations.sum += 1;
                }
                if (item.work == "theatrical") {
                    this.works.theatrical.sum += 1;
                }
                if (item.work == "graphics") {
                    this.works.graphics.sum += 1;
                }
                if (item.work == "engraving") {
                    this.works.engraving.sum += 1;
                }
                if (item.work == "poster") {
                    this.works.poster.sum += 1;
                }
                if (item.work == "sculpture") {
                    this.works.sculpture.sum += 1;
                }
                if (item.work == "decorative") {
                    this.works.decorative.sum += 1;
                }
            });
        },

        filteredArr() {
            this.setArrToRender();
        },

        checkedElement() {
            this.setDataToTabs();
        },
        tabPress(index, item) {
            this.transformXButtone(index, item);
        }
    },
    mounted() {
        this.getWindowWidth();
    }
};
</script>

<style lang="scss">
.filters {
    min-width: 200px;

    @include mq(1023) {
        padding: 0 20px;
    }

    &__section {
        position: relative;
        margin-bottom: 20px;
        height: min-content;
        transition: height 0.5s ease;
    }

    &__styles-all {
        position: relative;
    }

    &__button {
        border: none;
        width: 100%;
        text-align: left;
        background-color: transparent;
        font-size: $font-size-xs;
        text-transform: uppercase;
        font-weight: 700;
        padding: 0;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 10px;
            right: 0;
            width: 10px;
            height: 2px;
            background-color: black;
            cursor: pointer;
            transition: transform 0.3s ease;

            @include mq(1023) {
                right: 195px;
            }
        }

        &--is-close::after {
            transform: rotate(90deg);
        }

        &--styles {
            padding-left: 20px;
            text-transform: none;

            &::before,
            &::after {
                top: 7px;
                left: 0;
            }
        }
    }

    &__search {
        padding-top: 16px;
    }

    &__search-input {
        width: 100%;
        line-height: 29px;
        border: 1px solid $color-bg-light;
        box-sizing: border-box;
        font-size: $font-size-xs;
        padding: 0;

        &::placeholder {
            padding-left: 10px;
            color: $color-bg-light;
        }

        &--date {
            width: 80px;
            margin-right: 10px;
        }
    }

    &__list {
        list-style: none;
        border-bottom: 1px solid $color-text-light;
        margin: 20px 0;
        padding: 0;
        padding-bottom: 20px;
    }

    &__item {
        position: relative;
        width: 200px;
        display: flex;
        justify-content: space-between;
        font-size: $font-size-xs;
        cursor: pointer;
        margin-bottom: 20px;

        @include mq(1023) {
            width: 280px;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__item-close-btn {
        opacity: 0;
        position: absolute;
        width: 7px;
        height: 7px;
        left: -12px;
        top: 4px;
        background: url("/img/group.png") no-repeat center;
        transition: all 0.2s ease-in;

        &--is-hover {
            opacity: 1;
        }

        &--is-active {
            opacity: 1;
            transform: rotate(45deg);
        }
    }

    &__lable {
        padding-left: 20px;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            top: -1px;
            left: 0;
            display: inline-block;
            box-sizing: border-box;
            width: 16px;
            height: 16px;
            border: 1px solid #dbdbdb;
            border-radius: 4px;
        }

        > span {
            margin-left: 10px;
        }
    }

    &__check {
        display: none;
    }

    &__check:checked + label::before {
        background: url("/img/check.png") no-repeat center;
    }

    &__number {
        color: #bfbfbf;
    }
}
</style>
