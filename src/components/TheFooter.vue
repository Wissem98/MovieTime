<template>
  <v-card height="70" class="mt-0">
    <v-footer dark absolute class="font-weight-normal">
      <v-col class="text-center" cols="12">
 <v-btn 
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
  <v-spacer></v-spacer>
   <span class="ml-1 app_name" color="pink"> <strong>MovieTime</strong></span>
       <v-btn class="ml-1" text icon color="pink">
          <v-icon>mdi-movie</v-icon>
        </v-btn>
     
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default { data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  })};
</script>

<style scoped>
a:-webkit-any-link {
  text-decoration: none;
}
.app_name {
   color: pink;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
