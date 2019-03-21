
<template>
  <v-layout row>
    <router-link :to="'/'">
      <v-btn fab small depressed absolute>
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </router-link>

    <v-flex xs12 sm8 offset-sm2 mt-3>
      <v-card>
        <v-img :src="this.colectionDetails.webImage.url" height="500px" contain></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{this.colectionDetails.title}}</div>
            <span class="grey--text">{{this.colectionDetails.principalMakers[0].name}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            <span class="subheading dark--text font-weight-medium">Description:</span>
            {{this.colectionDetails.label.description || this.colectionDetails.description }}
            <p mt-2>
              <span class="subheading dark--text font-weight-medium">Category:</span>
              <router-link :to="'/'">
                <span @click="type()">{{this.objectType}}</span>
              </router-link>
            </p>
            <p>
              <span class="subheading dark--text font-weight-medium">Tags:</span>
              {{this.colectionDetails.tags}}
            </p>

            <p>
              <span class="subheading dark--text font-weight-medium">Author:</span>
              {{this.colectionDetails.principalMakers[0].name}}
            </p>
            <p>
              <span class="subheading dark--text font-weight-medium">Date:</span>
              {{this.colectionDetails.dating.presentingDate}}
            </p>
            <p>
              <span class="subheading dark--text font-weight-medium">Places:</span>
              {{this.colectionDetails.classification.places[0]}}
            </p>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  props: ["onLog"],
  data() {
    return {
      objectNumber: this.$route.params.id,
      colectionDetails: "",
      objectType: "",
      show: true
    };
  },
  created() {
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection/${
          this.objectNumber
        }?key=03tVfxGo&format=json`
      )
      .then(response => {
        this.colectionDetails = response.data.artObject;
        this.objectType = this.colectionDetails.objectTypes[0];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    type() {
      this.onLog({
        obj: this.objectType
      });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
