<template>
	<v-container class="my-5">
      <v-layout row>
        <v-flex xs12 md6 class="pt-lg-10">
          <v-col>
            <h2 class="intro-text">Hello,<br>I'm Alex<br> from Belgrade</h2>
              <vue-typer
                  :text='[" Web Designer "," Web Developer "," Freelancer "]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='80'
                  :type-delay='80'
                  :pre-erase-delay='2000'
                  :erase-delay='250'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='smooth'
              ></vue-typer>

              <p class="description">Enthusiastic and self-motivated web designer/developer with 3+ years of experience.<br>  Good front-end skills, loves to design perfect solutions with agile methods, clean code and the newest technologies.</p>

            <v-btn small elevation="4" color="blue lighten-2" class="white--text mt-5 px-5 py-5" href="https://drive.google.com/file/d/1O8VmtOpujN8xvA_-hr0V6YFVtYWcPF8w/view?usp=sharing" target="_blank">Hire Me</v-btn>
            <v-btn small route to="/contact" elevation="4" color="indigo lighten-1" class="white--text mt-5 ml-5 px-5 py-5">CONTACT</v-btn>

            <v-col class="mt-10">

              <v-btn href="https://www.linkedin.com/in/
aleksandar-gigic-a544091a4/" target="_blank" depressed class="mx-2"><v-icon left size="30" color="blue">mdi mdi-linkedin</v-icon></v-btn>
              <v-btn href="https://github.com/gilespi" target="_blank" depressed class="mx-2"><v-icon left size="30">mdi-github</v-icon></v-btn>
              <v-btn href="https://twitter.com/ggg_sale" target="_blank" depressed class="mx-2"><v-icon left size="30" color="light-blue">mdi-twitter</v-icon></v-btn>
              <v-btn href="https://www.instagram.com/" target="_blank" depressed class="mx-2"><v-icon left size="30" color="red accent-2">mdi-instagram</v-icon></v-btn>

            </v-col>
          </v-col>
        </v-flex>
        <v-flex xs12 md6>
          <v-col>
            <v-img width="100%" src="./../assets/images/s4.png" alt="" />
          </v-col>
        </v-flex>
      </v-layout>
	</v-container>
</template>

<script>
import { VueTyper } from "vue-typer";
	export default {
		name: "HeroComponent",
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-twitter',
      ]
    }),
    components: {
      "vue-typer": VueTyper,
    },
	}

</script>

<style scoped>

	h2.intro-text {
		font-size: 60px;
		font-weight: 700;
		font-family: 'Muli', sans-serif;
		color: #444;
	}

	p.description {
		font-size: 17px;
		font-family: 'Muli', sans-serif;
		margin-top: 2rem;
		color: #444444ba;
	}

  .vue-typer {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

</style>

