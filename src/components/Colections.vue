<template>
  <v-layout row wrap justify-center>
    <art-img
      v-for="img in images"
      :key="img.id"
      :src="img.headerImage.url"
      :img="img"
      :requestDetailsObj="requestDetailsObj"
      :objectDetails="objectDetails"
    ></art-img>
  </v-layout>
</template>

<script>
import Popup from "./Popup";
import ArtImg from "./ArtImg";
export default {
  props: ["images", "requestDetailsObj", "objectDetails"],
  data() {
    return {};
  },
  components: {
    popup: Popup,
    "art-img": ArtImg
  }
};
</script>