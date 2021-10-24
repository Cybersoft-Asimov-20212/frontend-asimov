<template>
  <div class="course-detail">
    <v-container>
      <v-row>
        <v-col cols="8">
          <h1 class="font-weight-bold pb-3">Course information</h1>
          <v-card class="mx-auto" max-height="170" min-height="150">
            <v-card-title class="text-h5 mb-1 indigo accent-4 font-weight-bold white--text">
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
          <v-card v-for="tag in tags" :key="tag" class="mx-auto mb-3">
            <v-container>
              <v-row>
                <v-col>
                  <div>Item</div>
                  <p class="text--primary font-weight-bold mb-1">{{ tag }}</p>
                  <div class="text--secondary">Well meaning and kindly."a benevolent smile"</div>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <v-dialog v-model="dialog" width="500" :retain-focus="false">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined rounded color="indigo accent-4" class="font-weight-bold" v-bind="attrs" v-on="on">
                        Learn More
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Privacy Policy
                      </v-card-title>

                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </v-card-text>

                      <iframe width="560" height="315" src="https://www.youtube.com/embed/CDV2AwOeeis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                          I accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

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
                <v-chip outlined v-for="tag in tags" :key="tag">
                  {{ tag }}
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
    tags: [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
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
v-container {
  background-color: #ECEBE9;
}

/* Teacher's profile */
.teacher-profile-name {
  background-color: #2C53C9;
}


/* Unity bars*/
.unit-bar-title {
  font-weight: bold;
}
.unit-bar-text {
  font-size: 14px;
}
.unit-bar-value {
  font-weight: bold;
}

/* Competences Card */
.title-competences {
  background-color: #2C53C9;
}
</style>