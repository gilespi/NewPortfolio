<template>
 <v-container xs-12 class="pt-5">
   <v-layout row justify-center align-center wrap class="my-10 md10 py-2" d-block>
     <h2 class="head-text">Contact</h2>
     <p>Here is my contact details</p>
   </v-layout>
   <v-row>
     <v-col cols="12" xs="6" lg="6">
        <h2>Contact me</h2>
        <h4>Aleksandar Gigic</h4>
       <p>Belgrade, Zemun</p>
       <p>Serbia</p>
         <v-icon class="ma-2">mdi-linkedin</v-icon>
         <v-icon class="ma-2">mdi-twitter</v-icon>
         <v-icon class="ma-2">mdi-instagram</v-icon>
         <v-icon class="ma-2">mdi-facebook</v-icon>
     </v-col>

     <v-col cols="12" xs="6" lg="6" class="text-left">
       <v-form ref="form" v-model="valid" lazy-validation>
         <v-text-field filled v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

         <v-text-field filled v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

         <v-textarea filled v-model="message" :rules="messageRules" label="Message" required></v-textarea>

         <v-btn :disabled="!valid" color="blue lighten-2" class="white--text mr-4" @click="validate">Submit</v-btn>

         <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
       </v-form>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>

export default {
  name: "ContactComponent",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length >= 10) || 'Message must be more than 10 characters',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  },
}

</script>

<style>
h2.head-text {
  font-family: 'Muli', sans-serif;
  font-size: 2.5rem;
  color: #444;
}
</style>