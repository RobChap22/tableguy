<template>
  <v-app>
    <v-app-bar
      app
      id='navbar-fatty'
      dark
    >
      <v-toolbar-title>Fat Bastard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        rounded
        to='/tradingpost'
      >
        Category
      </v-btn>
      <v-btn
        text
        rounded
        to='/blackmarket'
      >
        Slider
      </v-btn>
      <v-btn
        text
        rounded
        to='/combination'
      >
        Combo
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
});
</script>

<style>
  #navbar-fatty {
    background: rgb(244,67,54);
    background: linear-gradient(90deg, rgba(244,67,54,1) 0%, rgba(76,175,80,1) 100%);
  }
</style>
