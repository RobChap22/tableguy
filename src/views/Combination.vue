<template>
  <div>
    <v-card class="mx-auto mt-4" flat width="600px">
      <v-subheader>
        Calories
      </v-subheader>
      <v-slider
        v-model="calories"
        thumb-label
        max='600'
        min='100'
        track-color='green'
        track-fill-color='red'
        thumb-color='green'
      ></v-slider>
    </v-card>

    <v-card class="mx-auto" flat width="600px">
      <v-subheader>
        Carbs
      </v-subheader>
      <v-slider
        v-model="carbs"
        thumb-label
        max='100'
        min='20'
        track-color='green'
        track-fill-color='red'
        thumb-color='green'
      ></v-slider>
    </v-card>

    <v-card class="mx-auto" flat width="600px">
      <v-checkbox
        v-model="checkbox"
        color='red'
        :label="`Include Dairy: ${checkbox.toString()}`"
      ></v-checkbox>
    </v-card>

    <div>
      <v-data-table
        :headers="headers"
        :items="filteredDesserts"
        item-key="name"
        class="elevation-1"
        group-by="category"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script lang='ts'>
  import Vue from 'vue';

  export default Vue.extend({
    data () {
      return {
        calories: 600,
        carbs: 100,
        checkbox: true,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            category: 'Ice cream',
            dairy: true,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            category: 'Ice cream',
            dairy: true,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            category: 'Cookie',
            dairy: true,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            category: 'Pastry',
            dairy: true,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
            category: 'Cookie',
            dairy: false,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
            category: 'Candy',
            dairy: false,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
            category: 'Candy',
            dairy: false,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
            category: 'Toffee',
            dairy: false,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
            category: 'Pastry',
            dairy: true,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
            category: 'Candy',
            dairy: true,
          },
        ],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',

          },
          {
            text: 'Calories',
            value: 'calories',
            filter: value => {
              if (!this.calories) return true

              return value < parseInt(this.calories)
            },
          },
          { text: 'Fat (g)', value: 'fat' },
          {
            text: 'Carbs (g)',
            value: 'carbs',
            filter: value => {
              if (!this.carbs) return true

              return value < parseInt(this.carbs)
            },
          },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ]
      },
      filteredDesserts () {
        if (!this.checkbox) {
          return this.desserts.filter((d) => {
            return d.dairy == false;
          })
        }
        return this.desserts;
      }
    },
  })
</script>
