<template>
    <section class="bio container">
        <div class="biography">
            <h2 class="title-section title-section--biography">биография</h2>
            <Paragraph
                :texts="dataTexts"
                :default-number-paragraph="defaultParagraphСounter"
                :classes="elementСlasses"
                :is-opened="blockIsOpened"
            />
            <div
                class="ya-share2"
                data-bare
                data-services="vkontakte,twitter,facebook"
            ></div>
            <Button @clickitem="getData" :is-opened="blockIsOpened" />
        </div>
    </section>
</template>

<script>
import Paragraph from "@/components/biography/text-block";
import Button from "@/components/biography/button";

export default {
    components: {
        Paragraph,
        Button
    },
    data() {
        return {
            dataTexts: [
                {
                    text: `
                    Борис Кустодиев родился 7 марта 1878 года в Астрахани.
                    Отца, преподавателя духовной семинарии, не стало, когда
                    мальчику было чуть больше года. Мать осталась вдовой в
                    25 лет и содержала четверых детей.
                    `,
                    date: ""
                },
                {
                    text: `
                    Борис сначала учился в церковно-приходской школе,
                    потом
                    в гимназии. Когда ему было девять лет, в город привезли
                    выставку художников-передвижников. Мальчика настолько
                    впечатлила живопись, что он твердо решил научиться
                    рисовать так же искусно. Мать нашла деньги, чтобы Борис
                    смог брать уроки у известного в Астрахани художника
                    Павла Власова.
                    `,
                    date: 1887
                },
                {
                    text: `
                    Окончив семинарию, в 1896 году Кустодиев отправился
                    учиться в Москву, но в художественную школу его не
                    приняли: Борису уже исполнилось 18 и он был слишком
                    взрослым. Тогда Кустодиев поехал в Петербург, где подал
                    документы в Высшее художественное училище при Академии
                    художеств.
                    `,
                    date: 1896
                }
            ],
            defaultParagraphСounter: 2,
            elementСlasses: {
                isActive: false,
                wrapper: "biography__block-text",
                paragraph: "biography__text"
            },
            isRequest: true,
            blockIsOpened: false
        };
    },
    methods: {
        getData() {
            if (this.isRequest == true) {
                fetch("/ajax/biography.json")
                    .then(response => response.json())
                    .then(json => {
                        json.forEach(element => {
                            this.dataTexts.push(element);
                        });
                    })
                    .catch(error => alert("Ошибка загразки данных"));
                this.isRequest = false;
                this.blockIsOpened = true;
            } else {
                this.hiddenBlock();
            }
        },
        hiddenBlock() {
            this.blockIsOpened == true
                ? (this.blockIsOpened = false)
                : (this.blockIsOpened = true);
        }
    }
};
</script>

<style lang="sass"></style>
