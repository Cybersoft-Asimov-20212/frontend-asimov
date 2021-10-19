<template>
    <v-app>
      <v-app-bar absolute app>
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Asimov</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn depressed rounded>Hello!</v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list-item align="center">
          <v-list-item-content>
            <v-list-item-title>Side-Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense rounded>
          <v-list-item link to="/teachers">
            <v-list-item-icon>
              <v-icon>mdi-monitor-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Hello World</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/announcements">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Announcements</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/teachers">
            <v-list-item-icon>
              <v-icon>mdi-human-queue</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Teachers</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-content>
        </v-content>
        <router-view/>
      </v-main>

      <v-footer color="grey darken-1" padless align="center">

        <v-card-text class="pa-3">
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">Hi we are Cybersoft!</v-card-text>

        <v-card-text class="white--text pt-0">
          2021 — <strong>Vuetify</strong>
        </v-card-text>
      </v-footer>

    </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
