<template>
    <div class="museum__wrapper-address container">
            <div
                class="museum__address"
                v-for="(item, index) in museums"
                :key='index'
            >
                <a class="museum__position" href="#">{{ item.name }}</a>
                <p class="museum__contact">{{ item.contact }}</p>
            </div>
        </div>
</template>

<script>
export default {
        data() {
        return {
            museums: [
                {
                    name: 'Русский музей',
                    contact: `191186, Санкт-Петербург, Инженерная ул., 4,\n
                    +7 (812) 595-42-40`
                },
                {
                    name: 'Третьяковская галерея',
                    contact: `119017, Москва, Лаврушинский переулок,10 +7 (495)
                    957-07-27`
                },
                {
                    name: 'Мультимедиа Арт Музей',
                    contact: `105064, Москва, Гороховский переулок, 7 +7 (495)
                    632–16–81`
                }
            ]
        }
    }

}
</script>