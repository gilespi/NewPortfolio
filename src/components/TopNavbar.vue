<template>
<nav>
  <v-app-bar elevation="4" elevate-on-scroll color="white" app light class="px-5">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="headline">
      <v-img width="80%" src="./../assets/logo1.png" />
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-list class="d-flex align-center">
    <v-list-item class="hidden-md-and-down" link v-for="link in links" :key="link" route :to="link.route" active-class="light-blue--text">
      <v-list-item-title>{{ link.text }}</v-list-item-title>
    </v-list-item>
      <v-switch @click="toggle_dark_mode" v-model="switch1" label="off/on" color="secondary" value="secondary" hide-details></v-switch>
    </v-list>
  </v-app-bar>

  <v-navigation-drawer absolute temporary v-model="drawer" class="light-grey">
    <v-list nav dense>
      <v-list-item-group active-class="light-blue--text">
        <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
        <v-list-item-icon>
          <v-icon class="blue--text" active-class="light-blue--text">{{link.icon}}</v-icon>
        </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
	export default {
		name:"TopNavbar",
    methods: {
      toggle_dark_mode: function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      }
    },
    mounted() {
      const theme = localStorage.getItem("dark_theme");
      if (theme) {
        if (theme === "true") {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      } else if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem(
            "dark_theme",
            this.$vuetify.theme.dark.toString()
        );
      }
    },
    data() {
      return {
        drawer: false,
        links: [
          {icon: 'fa-solid fa-house', text: 'Home', route: '/'},
          {icon: 'fa-solid fa-circle-info', text: 'About', route: '/about'},
          {icon: 'fa-solid fa-briefcase', text: 'Portfolio', route: '/portfolio'},
          {icon: 'fa-solid fa-envelope', text: 'Contact', route: '/contact'},
        ],
        switch1: false,
      }
    },

  }
</script>