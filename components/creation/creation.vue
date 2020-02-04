<template>
    <section class="creation container">
        <div class="creation__wrapper">
            <h2 class="title-section title-section--creation">
                творчество
            </h2>
            <p class="creation__paragraph-title">
                {{ content.title }}
            </p>
        </div>
        <div class="creation__wrapper-text-img">
            <p class="creation__description">
                {{ content.description }}
            </p>
            <img
                class="creation__img-min"
                src="img/wild-horse.jpg"
                width="240"
                height="173"
                alt="Осень"
            />
        </div>
        <img
            class="creation__img-max"
            src="img/summer-yard--creation.jpg"
            width="920"
            height="667"
            alt="Осенние гулянье"
        />
        <TextContent
            :texts="transferContent"
            :default-number-paragraph="defaultParagraphСounter"
            :classes="elementСlasses"
        />
        <div class="creation__social-buttons">
            <!-- блок для кнопок поделиться - yandex -->
            <div
                class="ya-share2"
                data-bare
                data-services="vkontakte,twitter,facebook"
            ></div>
            <a class="button-more button-more--creation" href="#" tabindex="1">
                <span class="button-more__text">читать больше</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="16"
                    viewBox="0 0 121 16"
                    fill="none"
                >
                    <path
                        d="M120.707 8.7071C121.098 8.31657 121.098 7.68341 120.707 7.29288L114.343 0.928922C113.953 0.538398 113.319 0.538398 112.929 0.928922C112.538 1.31945 112.538 1.95261 112.929 2.34314L118.586 7.99999L112.929 13.6568C112.538 14.0474 112.538 14.6805 112.929 15.0711C113.319 15.4616 113.953 15.4616 114.343 15.0711L120.707 8.7071ZM8.74228e-08 9L120 8.99999L120 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                        fill="#202020"
                    />
                </svg>
            </a>
        </div>
    </section>
</template>

<script>
import TextContent from "@/components/biography/text-block";

export default {
    components: {
        TextContent
    },
    data() {
        return {
            transferContent: [
                {
                    text: `
                    Особенности творчества художника Бориса Кустодиева:
                        любил жанр портрета-картины, когда характер героя
                        раскрывается через окружающий его пейзаж, интерьер или
                        даже служащую фоном жанровую сцену; не жалел для бытовых
                        сцен декоративности и зрелищности; с большой симпатией
                        писал жизнь провинции.
                    `,
                    date: ""
                },
                {
                    text: `
                    Даже в самые беспросветные времена полотна Кустодиева
                        лучились здоровьем, радостью и любовью к жизни. Сахарные
                        сугробы и плавящиеся под солнцем купола. Полыхающие
                        арбузы и красавицы, не уступающие арбузам ни
                        интенсивностью румянца, ни гладкой округлостью форм.
                    `,
                    date: ""
                }
            ],
            content: {
                title: `Трудно найти другого живописца, настолько горячо влюбленного в
                    провинциальную Россию: самобытную, яркую, удивляющую.`,

                description: `Как и большинство работ автора, пейзажные полотна Кустодиева
                    отличаются особой выразительностью, яркостью и насыщенностью
                    цветовых планов. На картинах Кустодиева природа всегда
                    представляет собой нечто гораздо большее, чем просто пейзажное
                    изображение.`
            },
            defaultParagraphСounter: 1,
            elementСlasses: {
                isActive: true,
                wrapper: "creation__description",
                paragraph: ""
            }
        };
    }
};
</script>
