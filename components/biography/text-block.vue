<template>
    <div :class="{'creation__wrapper-description': classes.isActive}">
            <div
                :class="classes.wrapper"
                v-for="(item, index) of texts"
                :key="index"
                v-show="index <= numberParagraph"
            >
                <p :class="classes.paragraph">
                    <span class="biography__data" v-if="item.date" >{{ item.date }}</span>
                    {{ item.text }}
                 </p>
            </div>
        </div>
</template>

<script>
export default {
        props: ["classes", "texts", "defaultNumberParagraph", "isOpened"],

    data() {
            return {
                numberParagraph: this.defaultNumberParagraph,
                paragraphs: this.texts,
            }
        },
        watch: {
            isOpened() {
                //                    число абзацев по макету
                if(this.texts.length <= this.defaultNumberParagraph) return;
                if(this.numberParagraph === this.defaultNumberParagraph) {
                     this.numberParagraph = this.texts.length;
                 } else {
                     this.numberParagraph = this.defaultNumberParagraph;
                 }
            }
        },
}
</script>