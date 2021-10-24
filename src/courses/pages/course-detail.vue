<template>
  <div class="course-detail">
    <v-container>
      <v-row class="pt-4">
        <v-col cols="8">
          <h1 class="font-weight-bold pb-3">Course information</h1>
          <v-card class="mx-auto" max-height="170" min-height="150">
            <v-card-title class="mb-1 indigo accent-4 font-weight-bold white--text">
              {{course.name}}
            </v-card-title>
            <v-card-text class="text--primary mt-3">
              Description:
              <p class="text-justify mb-0">{{course.description}}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="4" class="pl-15">
          <h1 class="font-weight-bold pb-3">Course progress</h1>
          <v-card class="mx-auto pa-5" min-height="150">
            <p class="display-3 font-weight-bold">25%</p>
              <v-progress-linear
                  class="rounded-pill"
                  color="indigo accent-4"
                  height="25"
                  value="25"
                  striped
              ></v-progress-linear>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="pt-4">
        <v-col cols="8">
          <h1 class="font-weight-bold pb-3">Course Items</h1>

          <v-dialog v-model="dialog"  width="720">
            <v-card>
              <v-card-title class="grey lighten-2">
                Privacy Policy
              </v-card-title>
              <v-divider></v-divider>
              <div class="d-flex justify-center align-center py-3">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LwCRRUa8yTU"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="indigo accent-4" class="font-weight-bold" @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-card v-for="competence in competences" :key="competence" class="mx-auto mb-3">
            <v-container>
              <v-row>
                <v-col>
                  <div>Item</div>
                  <p class="text--primary font-weight-bold mb-1">{{ competence }}</p>
                  <div class="text--secondary">Well meaning and kindly."a benevolent smile"</div>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-btn outlined rounded color="indigo accent-4" class="font-weight-bold" @click.stop="dialog=true">
                    Learn More
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="4" class="pl-15">
          <h1 class="font-weight-bold pb-3">Competences includes</h1>
          <v-card class="d-flex mx-auto px-5 align-center" min-height="150">
            <div>
              <v-chip-group class="py-3" column>
                <v-chip outlined v-for="competence in competences" :key="competence">
                  {{ competence }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CoursesService from '../services/courses.service'

export default {
  name: "course-detail",
  data: () => ({
    dialog: false,
    //TODO: cambiar lista de tags: items de courses
    competences: [
      'Mathematical Reasoning',
      'Assertiveness',
      'Critical thinking',
      'Grammar',
      'Mathematical design',
      'Creativity',
      'Logic',
    ],
    course: {
      id: '',
      name: '',
      description: ''
    }
  }),
  created() {
    CoursesService.getById(this.$route.params.id)
        .then((response) => {
          this.course = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
}
</script>

<style scoped>

</style>