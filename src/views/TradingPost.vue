<template>

  <v-data-table
    :headers="headers"
    :items="desserts"
    item-key="name"
    sort-by="name"
    group-by="category"
    class="elevation-1"
		dark
		hide-actions
  ></v-data-table>

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'TradingPost',
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            value: 'name',
            groupable: false,
          },
          { text: 'Category', value: 'category', align: 'right' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
            dairy: 'Yes',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
            dairy: 'Yes',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
            dairy: 'Yes',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
            dairy: 'Yes',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
            dairy: 'No',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
            dairy: 'No',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
            dairy: 'No',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
            dairy: 'No',
          },
          {
            name: 'Donut',
            category: 'Pastry',
            dairy: 'Yes',
          },
          {
            name: 'KitKat',
            category: 'Candy',
            dairy: 'Yes',
          },
        ],
      }
    },
  });
</script>
