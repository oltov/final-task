<template>
    <section class="picture" :class="{'picture--min': gridIsMin}">
        <div class="picture__button-inner">
            <div class="picture__checked">
                <button
                    class="picture__button-checked"
                    type="button"
                    >
                    <span>Живопись</span>
                </button>
            </div>
            <div>
                <button
                    class="picture__view picture__view--col-2"
                    type="button"
                    @click="gridIsMin = false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                    >
                        <path
                            class="js-picture__view--is-active"
                            fill="#bfbfbf"
                            d="M0 0h6v6H0zM9 0h6v6H9zM0 9h6v6H0zM9 9h6v6H9z"
                        />
                    </svg>
                </button>
                <button
                    class="picture__view picture__view--col-3"
                    type="button"
                    @click="gridIsMin = true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                    >
                        <path
                            fill="#bfbfbf"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 0h2.647v2.647H0V0zm0 6.176h2.647v2.648H0V6.176zm0 6.177h2.647V15H0v-2.647zM6.176 0h2.648v2.647H6.176V0zm0 6.176h2.648v2.648H6.176V6.176zm0 6.177h2.648V15H6.176v-2.647zM12.353 0H15v2.647h-2.647V0zm0 6.176H15v2.648h-2.647V6.176zm0 6.177H15V15h-2.647v-2.647z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <List :dataPictures="dataToList" :gridMin="gridIsMin" />
    </section>
</template>

<script>
import List from "@/components/catalog/list-of-paintings";

export default {
    props: ["dataToList"],
    components: {
        List
    },
    data() {
        return {
            gridIsMin: false,
        };
    },
}

</script>