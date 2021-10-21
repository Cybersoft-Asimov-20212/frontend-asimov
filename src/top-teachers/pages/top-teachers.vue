<template>
  <v-container>
    <p class="font-weight-bold">TOP de profesores</p>
    <v-card class="mx-auto">
      <v-card-title class="text-h4 mb-1 pa-7 teacher-profile-name font-weight-bold white--text">
        Profesor TOP: Anna Garcia
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-img
                src="https://images.pexels.com/photos/5905483/pexels-photo-5905483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                height="130px"
                width="130px"
                class="teacher-img"
            ></v-img>
          </v-col>

          <v-col cols="10">
            <div>Progreso actual</div>

            <div>
              <v-row>
                <v-col cols="1">
                  <p class="font-weight-bold text-h5">45%</p>
                </v-col>
                <v-col cols="11">
                  <v-progress-linear value="45" height="15" rounded></v-progress-linear>
                </v-col>
              </v-row>
            </div>

            <div>Puntaje actual</div>
            <div class="font-weight-bold text-h5">
              2150 puntos
            </div>
          </v-col>
        </v-row>
      </v-container>

    </v-card>

    <v-container class="mt-5"></v-container>

    <p class="font-weight-bold">Puntos obtenidos por progreso</p>
    <v-card v-for="topTeacher in topTeachers" :key="topTeacher.id" class="mx-auto mt-5 mb-5">
      <v-list-item>
        <figure class="mr-4">
          <v-icon>mdi-clipboard-outline</v-icon>
        </figure>

        <v-list-item-content>
          <p id="nomTeacher" class="text--primary font-weight-bold">Profesor: {{topTeacher.name}}</p>
          <p>Puntaje obtenido:</p>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <p class="text-h5 font-weight-bold">1080 Pts.</p>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import TopTeachersService from '../../top-teachers/services/top-teachers.service';

export default {
  name: "top-teachers",
  data: () => ({
    topTeachers: []
  }),
  created() {
    TopTeachersService.getAll()
        .then((response) => {
          this.topTeachers = response.data.map(this.getDisplayTopTeachers);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  methods: {
    getDisplayTopTeachers(topteacher){
      return {
        id: topteacher.id,
        name: topteacher.name,
        lastname: topteacher.lastname,
        age: topteacher.age
      };
    },
  }
}
</script>

<style scoped>

.teacher-profile-name {
  background-color: #2C53C9;
}
.teacher-img {
  border-radius: 50%;
}

</style>