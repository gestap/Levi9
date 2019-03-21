<template>
  <v-layout align-start justify-center row wrap>
    <v-flex xs6 md3 align-end>
      <v-select
        :items="items"
        v-model="select"
        item-text="name"
        class="radius"
        item-value="method"
        label="Order by: "
        solo
        @change="sort"
      ></v-select>
    </v-flex>
    <v-flex xs6 md7>
      <v-text-field class="mx-3 radius" label="Search keyword..." v-model="searchItem" solo></v-text-field>
    </v-flex>
    <v-flex xs4 md2>
      <v-btn large block pt-0 depressed class="deep-orange darken-2 radius" @click="search">Search</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["addSearchData", "addSortData"],
  data() {
    return {
      searchItem: "",
      select: { name: "Relevance", method: "relevance" },
      items: [
        { name: "Relevance", method: "relevance" },
        { name: "Type of work", method: "objecttype" },
        { name: "Chronological old => new", method: "chronologic" },
        { name: "Chronological new => old", method: "achronologic" },
        { name: "Artist a => z", method: "artist" },
        { name: "Artist z => a", method: "artistdesc" }
      ]
    };
  },
  methods: {
    search() {
      this.addSearchData({ item: this.searchItem });
    },
    sort() {
      this.addSortData({ method: this.select });
    }
  },
  computed: {}
};
</script>

<style>
.v-input.radius.v-text-field > .v-input__control > .v-input__slot,
.radius {
  border-radius: 50px;
}
</style>
