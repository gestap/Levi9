<template>
  <v-app>
    <router-view :onLog="onLog" :objType="objType"></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      objType: ""
    };
  },
  methods: {
    onLog(data) {
      this.objType = data.obj;
      console.log(this.objType);
    }
  }
};
</script>
