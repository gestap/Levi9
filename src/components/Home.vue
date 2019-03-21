<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <searchBar :addSearchData="addSearchData" :addSortData="addSortData"></searchBar>
    </v-layout>
    <colections
      v-if="images.length != 0"
      :images="images"
      :requestDetailsObj="requestDetailsObj"
      :objectDetails="objectDetails"
    ></colections>
    <h1 v-else>No art object could be found by your query.</h1>
    <pages :pag="pagination" :next="requestObj" :changed="changeItemPerPageRequest"></pages>
  </v-container>
</template>

<script>
import Search_bar from "./Search_bar";
import Colections from "./Colections";
import Pages from "./Pages";
import axios from "axios";

export default {
  props: ["objType"],
  components: {
    searchBar: Search_bar,
    colections: Colections,
    pages: Pages
  },
  data() {
    return {
      pagination: {
        itemPerPage: 10,
        totalItem: 100,
        page: 1
      },
      images: [],
      searchData: "",
      sortData: "",
      objectDetails: [],
      test: false
    };
  },
  created() {
    this.searchData = this.objType;
    this.requestObj();
  },
  methods: {
    requestObj() {
      axios
        .get(
          `https://www.rijksmuseum.nl/api/en/collection?key=03tVfxGo&format=json&s=${
            this.sortData
          }&ps=${this.pagination.itemPerPage}&p=${
            this.pagination.page
          }&imgonly=true&q=${this.searchData || this.objType}`
        )
        .then(response => {
          this.pagination.totalItem = response.data.countFacets.ondisplay;
          return response.data.artObjects;
        })
        .then(data => {
          this.images.splice(0);
          data.forEach(element => {
            this.images.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeItemPerPageRequest(number) {
      this.pagination.itemPerPage = number;
      axios
        .get(
          `https://www.rijksmuseum.nl/api/en/collection?key=03tVfxGo&format=json&s=${
            this.sortData
          }&ps=${this.pagination.itemPerPage}&p=${
            this.pagination.page
          }&imgonly=true&q=${this.searchData}`
        )
        .then(response => {
          this.pagination.totalItem = response.data.countFacets.ondisplay;
          return response.data.artObjects;
        })
        .then(data => {
          this.images.splice(0);
          data.forEach(element => {
            this.images.push(element);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    addSearchData(data) {
      this.searchData = data.item;
      this.requestObj();
    },
    addSortData(data) {
      this.sortData = data.method;
      this.requestObj();
    },
    requestDetailsObj(number) {
      axios
        .get(
          `https://www.rijksmuseum.nl/api/en/collection/${number}?key=03tVfxGo&format=json`
        )
        .then(response => {
          this.objectDetails = response.data.artObject;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

