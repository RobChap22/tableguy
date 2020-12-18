<template>
  <v-app>
    <v-app-bar
      app
      color="yellow"
      dark
    >
      <v-toolbar-title class="grey--text text--darken-2">'Commie' Jonny Phambino's Underhive Emporium</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        rounded
        to='/tradingpost'
				class="grey--text text--darken-2"
      >
        Category
      </v-btn>
      <v-btn
        text
        rounded
        to='/blackmarket'
				class="grey--text text--darken-2"
      >
        Slider
      </v-btn>
      <v-btn
        text
        rounded
        to='/combination'
				class="grey--text text--darken-2"
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
    background: #FFE600;
		color: #333333;
  }
</style>
