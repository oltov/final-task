<template>
    <div>
        <ul class="picture__list">
            <li
                class="picture__item"
                :class="{ 'picture__item--min': gridMin }"
                v-for="(item, index) in dataPictures"
                :key="index"
                v-show="index >= topOfList && index <= endOfList"
                :counterLength="index"
            >
                <img class="picture__img" :src="item.img" :alt="item.name" />
                <p class="picture__name">
                    {{ item.name }}
                </p>
                <span class="picture__date">{{ item.year }}</span>
            </li>
        </ul>
        <div class="picture__pagination">
            <button
                type="button"
                class="picture__pagination-button"
                :class="{ 'picture__pagination-button--is-active': item.isActive }"
                v-for="(item, index) in paginationButtons"
                :key="index"
                @click.prevent="controlActiveButton(index)"
            >
                {{ item.number }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["dataPictures", "gridMin"],
    data() {
        return {
            maxLengthList: 10,
            topOfList: 0,
            endOfList: 9,
            startElement: 0,
            stopElement: 9,
            paginationButtons: [],
            activeButtonIndex: 0
        };
    },
    methods: {
        // создание массива кнопок пагинации
        getArrayForPagination() {
            // определение целочисленного значения исходя из колличества фотографий
            // и максимального колличества фото на странице
            const proportion = Math.ceil(
                this.dataPictures.length / this.maxLengthList
            );

            // перезапись массива при перестроении сетки с маленькой на большую
            // из-за разного колличества кнопок пагинации
            this.paginationButtons = [];

            for (let i = 1; i <= proportion; i++) {
                // для первого элемента устанавливается true для активности класса(подсветка)
                if (i === 1) {
                    this.paginationButtons.push({ number: i, isActive: true });
                } else {
                    this.paginationButtons.push({ number: i, isActive: false });
                }
            }
        },

        // контроль нажатия на пагинацию
        controlActiveButton(index) {
            // у кнопки которая была активной перед кликом, меняется состояние на противоположное (true => false)
            this.paginationButtons[this.activeButtonIndex].isActive = !this
                .paginationButtons[this.activeButtonIndex].isActive;

            // у нажатой кнопки меняется активность на противоположное значение (false => true)
            // и ее индекс заносится в переменную состояния
            this.paginationButtons[index].isActive = !this.paginationButtons[index].isActive;
            this.activeButtonIndex = index;

            // определение диапазона для отображения
            // изначально показывается фото с 0 по 9
            // затем в зависимости от нажатой кнопки пагинации
            // пример 0 + (3 * 10) покужет слайды начиная с 30
            this.topOfList = this.startElement + index * this.maxLengthList;
            this.endOfList = this.stopElement + index * this.maxLengthList;
        }
    },
    watch: {
        maxLengthList() {
            this.getArrayForPagination();
        },

        dataPictures() {
            this.getArrayForPagination();

        },

        // отслеживание значения для сетки фотографии
        // если сетка маленькая, то меняются значения для отрисовки
        gridMin() {
            if (this.gridMin === true) {
                // количество фотография на странице
                this.maxLengthList = 12;

                // изначальный индекс последнего элемента на странице
                // нужен для вычисления диапазона картинок, при переходах
                // по пагинации, значение зависит только от сетки
                this.stopElement = 11;

                // изначальный индекс последнего элемента на странице
                // меняет значение при вычислении диапазона отображаемых картинок
                this.endOfList = 11;

                // эмитация нажатия по кнопке 1, для корректного отображения сетки
                // и стилей у кнопок
                this.controlActiveButton(0);
            } else {
                this.maxLengthList = 10;
                this.stopElement = 9;
                this.endOfList = 9;
                this.controlActiveButton(0);
            }
        }
    },
    mounted() {
        // начальная генерация массива для пагинации
        this.getArrayForPagination();
    }
};
</script>

<style lang="scss"></style>
