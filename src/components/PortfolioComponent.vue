<template>
  <V-container class="my-5">
    <v-layout row justify-center align-center wrap class="my-10 md10" d-block>
      <h2 class="head-text">Portfolio</h2>
      <p>Some of my works</p>
    </v-layout>
    <v-layout row wrap justify-center class="my-10">
      <v-flex xs12 sm6 md4 lg3>
    <v-btn color="#64b5f6" class="white--text ma-2" @click="filter(null)">All</v-btn>
    <v-btn color="#64b5f6" class="white--text ma-2" v-for="category in categories" :key="category.id" @click="filter(category.id)">{{category.name}}</v-btn>
      </v-flex>
    </v-layout>

    <isotope ref="isotope" :list="list">
      <div v-for="item in list" :key="item.id" class="isoDefault" :data-value="item.value">
        <v-hover v-slot="{ hover }">
        <v-card class="text-xs-center ma-5" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
        <v-responsive class="pt-4">
          <v-img :src="item.src" aspect-ratio="2.75" height="350"/>
        </v-responsive>
        <v-card-text>
          <div class="subheading"><h2>{{item.name}}</h2></div>
          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
          <div class="grey--text">{{item.system}}</div>
          <v-divider class="mx-4"></v-divider>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn :href="item.href" target="_blank" small color="blue lighten-2" class="white--text mb-5 mr-1 px-4 py-2">Visit Website</v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon color="#6610f2" >mdi-bootstrap</v-icon></v-btn><v-btn icon>
          <v-icon color="blue" >mdi-language-css3</v-icon></v-btn>
          <v-btn icon><v-icon color="blue" >mdi-jquery</v-icon></v-btn>
          <v-btn icon><v-icon color="yellow" >mdi-language-javascript</v-icon></v-btn>
        </v-card-actions>
        </v-card>
        </v-hover>
      </div>
    </isotope>

  </v-container>
</template>



<script>
import isotope from "vueisotope";

export default {
  components: {
    isotope
  },
  data () {
    return {
      list: [
        {name: "Indonesia", id: 1, value: 1, system: 'Website', href:'https://gilespi.github.io/Indonesia/ ', src: require("@/assets/images/portfolio-2.jpg")},
        {name: "Real Estate", id: 2, value: 1, system: 'Website', href: 'https://gilespi.github.io/Real-estate/', src: require("@/assets/images/portfolio-4.jpg")},
        {name: "Restaurant", id: 3, value: 4, system: 'Website', href: 'https://dev-example-ag.pantheonsite.io/home1/', src: require("@/assets/images/portfolio-10.jpg")},
        {name: "Rent a car", id: 4, value: 4,system: 'Website', href: 'https://gilespi.github.io/Rent-a-car/', src: require("@/assets/images/portfolio-1.jpg")},
        {name: "Portfolio", id: 5, value: 1, system: 'Website', href: 'https://gilespi.github.io/Portfolio/ ', src: require("@/assets/images/portfolio-6.png")},
        {name: "Hotel Resort", id: 6, value: 1, system: 'Website', src: ("https://media.architecturaldigest.com/photos/57e42de0fe422b3e29b7e78f/1:1/w_960,c_limit/JW_LosCabos_2015_MainExterior.jpg")},
        {name: "Store Locator", id: 7, value: 7, system: 'Card', href: 'https://storelocator.cyclic.app/', src: ("https://bsscommerce.com/shopify/wp-content/uploads/2021/11/Top-10-Best-Store-Locator-Shopify-App-2022-cover-1.png")},
        {name: "Gadget Gallery", id: 8, value: 7, system: 'App', src: require("@/assets/images/portfolio-12.jpg")},
        {name: "Card Gallery", id: 9, value: 4, system: 'App', src: ("https://cnb1901.com/images/card-gallery-footer6.png")}
      ],
      categories: [
        {
          id: 1,
          name: "Web",
          order: 0
        },
        {
          id: 4,
          name: "Card",
          order: 1
        },
        {
          id: 7,
          name: "App",
          order: 2
        },
      ]
    };
  },
  methods: {
    filter: function(key) {
      this.$refs.isotope.arrange({
        filter: function(item) {
          return key ? parseInt(item.dataset.value, 10) === key : true;
        }
      });
    }
  }
}

</script>

<style>
h2.head-text {
  font-family: 'Muli', sans-serif;
  font-size: 2.5rem;
  color: #444;
}

.item {
  padding: 10px;
  width: 100%;
  color: #333;
  margin: 5px 0 10px;
  box-sizing: border-box;
}

@media screen and (min-width: 740px) {
  .item {
    width: calc(100% / 3 - 33px);
  }
}

.isoDefault {
  min-height: 210px;
}

</style>
