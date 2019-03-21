<template>
  <v-hover>
    <v-flex xs12 md5 lg3 slot-scope="{ hover }" @click.stop="showDialog = true">
      <v-img :src="src" aspect-ratio="2" @click="requestDetailsObj(img.objectNumber)">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-slow-in-slow-out grey darken-1 v-card--reveal caption black--text"
            style="height: 50%;"
          >{{img.longTitle}}</div>
        </v-expand-transition>
      </v-img>
      <popup
        :showDialog="showDialog"
        :openDialog="openDialog"
        :objectDetails="objectDetails"
        :img="img"
      ></popup>
    </v-flex>
  </v-hover>
</template>

<script>
import Popup from "./Popup";

export default {
  props: ["src", "img", "requestDetailsObj", "objectDetails"],
  data() {
    return {
      showDialog: ""
    };
  },
  methods: {
    openDialog(data) {
      this.showDialog = data.state;
    }
  },
  components: {
    popup: Popup
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  text-align: center;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  padding: 0 10px;
}
</style>