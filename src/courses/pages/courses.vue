<template>
  <div class="courses">
    <v-row class="pt-8">
        <h1 class="pl-5">Courses</h1>
        <v-spacer></v-spacer>
        <v-select class="px-10" outlined dense :items="items" label="Grade Filter" v-model="gradeSelect"></v-select>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-center mb-8">
          <div v-for="course in courses" :key="course.id">
            <v-card v-if="course.grade==gradeSelect" class="pb-2 ma-3" width="290" max-height="450">
              <div class="indigo accent-3">
                <v-card-subtitle class="pb-0 white--text">
                  Course
                </v-card-subtitle>
                <v-card-title class="pb-1 pt-0 white--text font-weight-bold">
                  {{course.name}}
                </v-card-title>
              </div>
              <v-card-text class="text-justify pb-1 text--secondary text-truncate">
                <strong>Description:</strong> {{course.description}}
              </v-card-text>
              <v-card-actions>
                <v-btn text color="indigo accent-4" class="font-weight-bold te" :to="`/courses/${course.id}`">see more</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CoursesService from '@/courses/services/courses.service';

export default {
  name: "courses",
  data: () => ({
    courses: [],
    id: '',
    name: '',
    description: '',
    grade: '',
    gradeSelect: '1ro',
    items: ['1ro','2do','3ro'],
  }),
  created() {
    this.refreshList()
  },
  methods: {
    getDisplayCourse(course){
      return {
        id: course.id,
        name: course.name,
        description: course.description,
        grade: course.grade,
      };
    },
    refreshList (){
      CoursesService.getAll()
          .then((response) => {
            this.courses = response.data.map(this.getDisplayCourse);
            console.log(response.data);
          })
    },
  }
}
</script>

<style scoped>

</style>