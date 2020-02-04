<template>
  <div>
    <categories />
    <div class="main__wrapper-filters container">
      <Filters />
      <Pictures :dataToList="pictures" />
    </div>
  </div>
</template>

<script>
import Categories from "@/components/catalog/categories";
import Filters from "@/components/catalog/filters";
import Pictures from "@/components/catalog/pictures";

export default {
    components: {
        Categories,
        Filters,
        Pictures
    },
    data() {
        return {
            isMounted: false,
            pictures: [],
            newPictures: [],
            antiques: [],
            philately: [],
            urls: {
                rarity: "../ajax/rarities.json",
                new: "../ajax/new-paintings.json",
                antiques: "../ajax/antiques.json",
                philately: "../ajax/philately.json",
            }
        }
    },
    // methods: {
    //     getData(url, arr) {
    //             fetch(url)
    //             .then(response => response.json())
    //             .then(json => this.arr = json)
    //             .then(i => console.log(this.pictures))
    //             .catch(error => alert("Ошибка загразки данных"));
    //         }
    // },
    // watch: {

        // isMounted() {
        //     this.$nextTick(function() {
        //         fetch("../ajax/antiques.json")
        //         .then(response => response.json())
        //         .then(json => this.pictures = json)
        //         .then(i => console.log(this.pictures))
        //         .catch(error => alert("Ошибка загразки данных"));

        //     });

        // }
    //  },
    mounted() {
        fetch("../ajax/antiques.json")
            .then(response => response.json())
            .then(json => (this.pictures = json))
            .catch(error => alert("Ошибка загразки данных"));
    }
}
</script>
