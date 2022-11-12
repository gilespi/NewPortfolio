<template>
  <v-container class="container align-center pt-5">
    <v-layout row justify-center align-center wrap class="my-10 md10 pt-2" d-block>
      <h2 class="head-text">About</h2>
      <p>Something about me</p>
    </v-layout>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
        <h2 class="mb-4 pl-4 pt-2">Education</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item color="blue" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Jan 2020 -</div>
                  <div class="caption font-weight-bold blue--text">Feb 2021</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>IT Academy</strong>
                  <div class="caption mb-2">IT Academy, Belgrade, Serbia</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="blue" small>
              <v-layout pt-2>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Sep 2018 -</div>
                  <div class="caption font-weight-bold blue--text">May 2019</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>Bachelor of fine arts & Graphic Design</strong>
                  <div class="caption mb-2">IT Academy, Belgrade, Serbia</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="blue" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Sep 2017 -</div>
                  <div class="caption font-weight-bold blue--text">May 2018</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>Electrical Technician for Computers</strong>
                  <div class="caption mb-2">IT Academy, Belgrade, Serbia</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-flex>
      <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
        <h2 class="mb-4 pl-4">Experience</h2>
        <v-card-text class="py-0">
          <v-timeline align-top dense>
            <v-timeline-item color="blue" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Jan 2020 -</div>
                  <div class="caption font-weight-bold blue--text">Present</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>Freelance Frontend Developer</strong>
                  <div class="caption mb-2">Remote</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="blue" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Feb 2018 -</div>
                  <div class="caption font-weight-bold blue--text">July 2018</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>Computer technician</strong>
                  <div class="caption mb-2">Experion, Belgrade, Serbia</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="blue" small>
              <v-layout pt-3>
                <v-flex xs4>
                  <div class="caption font-weight-bold blue--text">Aug 2017 -</div>
                  <div class="caption font-weight-bold blue--text">Apr 2018</div>
                </v-flex>
                <v-flex class="pl-2">
                  <strong>IT Technician</strong>
                  <div class="caption mb-2">Experion, Belgrade, Serbia</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-flex>

      <v-layout row justify-center align-center wrap class="mt-4 pt-2">
        <v-flex xs12 sm12 md4 lg5 xl4 class="mx-5 pt-4 flex-column">

          <h2><span>Design</span><span class="blue--text">Skills</span></h2>
          <br>
          <strong><v-img max-height="45px" max-width="40px" src="https://img.icons8.com/color-glass/48/null/adobe-photoshop.png" alt=""/></strong>
          <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
          <strong><v-img max-height="39px" max-width="40px" src="https://img.icons8.com/color/48/null/adobe-illustrator--v1.png" alt=""/></strong>
          <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
          <strong><v-img max-height="39px" max-width="40px" src="https://img.icons8.com/color/48/null/adobe-xd--v1.png" alt=""/></strong>
          <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
        </v-flex>
        <v-flex xs12 sm12 md4 lg5 xl4 class="mx-5 pt-4 flex-column text-left">
          <h2><span>Coding</span><span class="blue--text">Skills</span></h2>
          <br>
          <strong><v-icon x-large color="red" >mdi-language-html5</v-icon><v-icon  large color="blue" >mdi-language-css3</v-icon></strong>
          <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
          <strong><v-icon large color="yellow" >mdi-language-javascript</v-icon><v-icon color="blue" >mdi-jquery</v-icon></strong>
          <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
          <strong class="d-flex"><v-img max-width="40px" max-height="39px" src="https://img.icons8.com/color/512/vue-js.png" alt=""/></strong>
          <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="blue lighten-2" height="16"></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-layout row justify-center align-center wrap class="mt-10 pt-2">
        <div class="mt-4 pt-2">
          <v-btn href="https://drive.google.com/file/d/1O8VmtOpujN8xvA_-hr0V6YFVtYWcPF8w/view?usp=sharing" target="_blank" color="blue lighten-2" dark large>
            Download Resume
            <v-icon right dark>mdi-download</v-icon>
          </v-btn>
        </div>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'AboutComponent',

  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 85;
        this.buffer2 = 85;
        this.buffer3 = 85;
        this.buffer4 = 95;
        this.buffer5 = 75;
        this.buffer6 = 70;
      }, 800);
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

</style>