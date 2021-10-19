<template>
  <div class="teachers">
    <v-row>
      <v-col cols="12">
        <h1>Teachers</h1>
      </v-col>
      <v-col cols="12">
        <v-container fluid>
          <div v-for="teacher in teachers" :key="teacher.id">
            <v-card class="mx-auto" width="345" max-height="350">
              <v-card-text>
                <div>Teacher</div>
                <p id="nomTeacher" class="text-h4 text--primary">{{teacher.name}}</p>
                <div>{{ teacher.lastname }}</div>
                <p>Age: {{teacher.age}}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import TeachersService from '@/teachers/services/teachers.service';

export default {
  name: "teachers",
  data: () => ({
    teachers: [],
    teacherSelected: {
      id: '',
      name: '',
      lastname: '',
      age: ''
    }
  }),
  created() {
    TeachersService.getAll()
        .then((response) => {
          this.teachers = response.data.map(this.getDisplayTeacher);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayTeacher(teacher) {
      return {
        id: teacher.id,
        name: teacher.name,
        lastname: teacher.lastname,
        age: teacher.age
      };
    },
    getTeacher(id){
      TeachersService.getById(id)
          .then((response) => {
            this.teacherSelected = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped>

</style>