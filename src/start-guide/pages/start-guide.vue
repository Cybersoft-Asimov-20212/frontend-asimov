<template>
  <div class="start-guide">
    <v-card class="mx-auto" elevation="0" max-width="900" color="#F3F5F6">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            
        <v-timeline-item icon="mdi-numeric-1" fill-dot  color="indigo accent-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-account-circle</v-icon> Sign in</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Sign in and start</v-card-title>
                  <v-card-text class="pb-0">
                    Get to know the different characteristics of the platform in our main interface after registering as a user of your educational institution.
                  </v-card-text>
                  <v-card-actions class="pl-3 pb-3">
                    <v-btn color="green accent-4" outlined link to="/dashboard">Lets Go!</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-2" fill-dot  color="indigo accent-4">
          <span slot="opposite" class="font-weight-bold">Announcement<v-icon class="ml-3">mdi-bullhorn</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Create an announcement</v-card-title>
                  <v-card-text class="pb-0">
                    Create a statement that all the teachers of your institution will receive when they enter the platform to alert them to different changes during the school year.
                  </v-card-text>
                  <v-card-actions class="pl-3 pb-3">
                    <v-btn color="green accent-4" outlined link to="/announcements">Lets Go!</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-3" fill-dot  color="indigo accent-4">
          <span slot="opposite" class="font-weight-bold"><v-icon class="mr-3">mdi-human-male-board</v-icon>Teachers</span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Meet your teachers</v-card-title>
                  <v-card-text class="pb-0">
                    View a list of teachers registered in the educational institution to manage this school year
                  </v-card-text>
                  <v-card-actions class="pl-3 pb-3">
                    <v-btn color="green accent-4" outlined link to="/teachers">Lets Go!</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>
        <v-timeline-item icon="mdi-numeric-4" fill-dot  color="indigo accent-4">
          <span slot="opposite" class="font-weight-bold">Competences<v-icon class="ml-3">mdi-book-open-variant</v-icon></span>
          <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="transition-swing" :class="`elevation-${hover ? 24 : 3}`">
                  <v-card-title class="text-h5">Know the competences</v-card-title>
                  <v-card-text class="pb-0">
                    Visualize a dictionary with the different concepts of the competences that the Ministry of Education proposed to fulfill for this school year in the different courses
                  </v-card-text>
                  <v-card-actions class="pl-3 pb-3">
                    <v-btn color="green accent-4" outlined link to="/competences">Lets Go!</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
          </v-hover>   
        </v-timeline-item>             
      </v-timeline>  
    </v-card>
  </div>
</template>

<script>
export default {
    name: "start-guide",
    data: () => ({

    })
}
</script>

<style>

</style>