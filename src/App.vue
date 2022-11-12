<template>
  <v-app>
   <TopNavbar />
    <transition name="router-animation" mode="out-in"
     enter-active-class="animate__animated animate__fadeIn"
     leave-active-class="animate__animated animate__fadeOut">
    <router-view />
    </transition>
    <FooterComponent />
  </v-app>
</template>

<script>
import TopNavbar from "@/components/TopNavbar";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, TopNavbar}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #444444;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
