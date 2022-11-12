<template>
  <v-footer color="blue lighten-2" class="mt-10">
    <v-row justify="center" class="py-10">
        <v-btn v-for="icon in icons" :key="icon" color="white" text rounded class="mx-4">
          <V-icon size="24" >{{ icon }}</V-icon>
        </v-btn>
      </v-row>
    <v-card-text class="white--text pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </v-card-text>

    <v-divider></v-divider>

      <v-col class="blue lighten-2 py-5 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Designed by AG</strong>
      </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    icons: [
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-twitter',
    ]
  }),
}
</script>

<style>

</style>