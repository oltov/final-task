<template>
  <div
        class="header-title__content"
        v-bind:class="{ 'header-title__content--catalog': data.isActive, container: data.isActive }"
    >
        <p class="header-title__date" if='data.date'>
            <span>{{ data.date }}</span>
        </p>
        <h1
            class="header-title__name"
            v-bind:class="{ 'header-title__name--catalog': data.isActive }"
        >
            {{ data.title }}
        </h1>
        <p
            class="header-title__text"
            v-bind:class="{ 'header-title__text--catalog': data.isActive }"
        >
            {{ data.text }}
        </p>
        </div>
</template>

<script>
export default {
  props: ['data'],

}
</script>

<style lang="sass">

</style>
