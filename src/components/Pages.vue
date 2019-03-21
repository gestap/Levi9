<template>
  <v-layout align-end justify-center row wrap xs12>
    <v-flex d-flex grow>
      <div class="text-xs-center">
        <v-pagination
          class="mt-5"
          v-model="pag.page"
          @input="next"
          :length="Math.ceil(pag.totalItem / pag.itemPerPage)"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-flex>
    <v-flex shrink>
      <v-btn flat small depressed fab @click="changed(10)">10</v-btn>
      <v-btn flat small fab @click="changed(50)">50</v-btn>
      <v-btn flat small fab @click="changed(100)">100</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["pag", "next", "changed"],
  data() {
    return {};
  }
};
</script>