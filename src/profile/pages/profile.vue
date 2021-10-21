<template>
  <div class="profile ma-10">
    <h1>Profile</h1>
    <v-card class="ma-5">
      <div class="indigo accent-4">
        <v-card-title class="white--text">Hello! {{director.name}}</v-card-title>
      </div>
      <v-row>
        <v-col cols="2">
          <v-col><v-avatar size="150" color="grey"></v-avatar></v-col>
          <v-col><v-btn color="primary">change photo</v-btn></v-col>
        </v-col>
        <v-col cols="10">
          <v-card-text>
            <p class="text-h4 text--primary">Personal Information:</p>
            <div class="text--primary">
              Name: {{director.name}}<br>
              Last Name: {{director.lastname}}<br>
              Age: {{director.age}}<br>
              Phone: {{director.phone}}<br>
              Email: {{director.email}}<br>
            </div>
            <br>
            <v-btn color="primary">Edit</v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import ProfileService from '../services/profile.service'

export default {
  name: "profile",
  data:()=>({
    director:{
      id: '',
      name: '',
      lastname: '',
      age: '',
      phone: '',
      email: ''
    }
  }),
  created() {
    ProfileService.getById(this.$route.params.id)
        .then((response) => {
          this.director = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }
}
</script>

<style scoped>

</style>