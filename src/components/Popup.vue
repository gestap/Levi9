<template>
  <v-layout row justify-center d-flex>
    <v-dialog v-model="showDialog" persistent max-width="600">
      <v-card>
        <v-layout row justify-center d-flex>
          <v-flex xs6 ma-2>
            <v-img :src="img.webImage.url || img.headerImage.url"></v-img>
          </v-flex>
          <v-flex xs6>
            <v-card-text
              solo
            >{{this.objectDetails.label.description ||this.objectDetails.description}}</v-card-text>
          </v-flex>
        </v-layout>

        <v-card-actions>
          <router-link
            :to="'/detailspage/' + this.objectDetails.objectNumber"
            :objectDetails="objectDetails"
          >
            <v-btn class="radius" color="green darken-1" flat large>View more details</v-btn>
          </router-link>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" large flat="flat" class="radius" @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["showDialog", "openDialog", "img", "objectDetails"],
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.openDialog({ state: false });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
