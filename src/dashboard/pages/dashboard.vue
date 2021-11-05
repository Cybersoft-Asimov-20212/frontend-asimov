<template>
  <div class="dashboard">
    <v-container>
      <h1 class="mb-2 pl-3 pt-4">Dashboard</h1>
      <v-row>
        <v-col cols="12" sm="6">
        <v-container>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Points</h3>
                <v-card class="py-2">
                  <v-container>
                    <v-row>
                      <div class="d-flex justify-start align-center ml-5 mr-3">
                        <v-icon>mdi-check-bold</v-icon>
                      </div>
                      <v-col>
                        <div>You</div>
                        <p class="text--primary font-weight-bold mb-1">Points earned</p>
                      </v-col>
                      <v-col class="d-flex justify-center align-center">
                        <v-chip outlined rounded color="green darken-1" class="font-weight-bold">
                          1250 Points
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Last four announcements</h3>
                <v-card class="mb-3">
                  <v-card-title>Example title card</v-card-title>
                  <v-card-text>Example text</v-card-text>
                </v-card>

              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="6">
        <v-container>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">School year progress</h3>
                <v-card class="mx-auto pa-5" max-height="150">
                  <v-container class="d-flex justify-space-between align-end pt-0">
                    <p class="display-3 font-weight-bold mb-0">{{this.valueProgress}}%</p>
                    <p class="mb-0">Days to end school year:  {{this.dateOut}}</p>
                  </v-container>
                  <v-progress-linear
                      class="rounded-pill"
                      color="indigo accent-4"
                      height="25"
                      v-bind:value="this.valueProgress"
                      striped
                  ></v-progress-linear>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h3 class="mb-2 pl-1">Profile</h3>
                <v-card class="py-2">
                  <v-list-item>
                    <v-list-item-content>
                      <div>OVERLINE</div>
                      <v-list-item-title>Headline 5</v-list-item-title>
                      <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar rounded size="120" color="grey"></v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AnnouncementsService from "@/announcements/services/announcements.service";

export default {
  name: "dashboard",
  data: () => ({
    valueProgress: '',
    dateOut: '',
    announcements: [],
    lastFourAnnouncements: [],
    id: '',
    title: '',
    description: ''
  }),
  created() {
    this.setProgressDate(),
    this.refreshList()
  },
  methods: {
    setProgressDate(){
      let dateStart = new Date(2021,2,20);
      let dateEnd = new Date(2021,11,10);
      let dateNow = new Date();
      let totalDays = dateEnd - dateStart;
      let daysProgress = dateNow - dateStart;
      this.dateOut = (totalDays) - daysProgress;
      this.dateOut = Math.trunc(this.dateOut/(8.64*10000000));
      this.valueProgress = Math.trunc((daysProgress*100)/totalDays);
    },
    getDisplayAnnouncement(announcement){
      return {
        id: announcement.id,
        title: announcement.title,
        description: announcement.description
      };
    },
    refreshList (){
      AnnouncementsService.getAll()
          .then((response) => {
            this.announcements = response.data.map(this.getDisplayAnnouncement);
            console.log(response.data);
          })
    },
  }
}
</script>

<style scoped>

</style>