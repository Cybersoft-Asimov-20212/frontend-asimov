<template>
  <div class="sign-up">
    <v-container class="mt-5 px-4">
      <v-row>
        <v-col cols="12" align="center">
          <v-card ref="form" max-width="650">
            <v-card-title class="justify-center font-weight-bold">Sign Up</v-card-title>
            <v-card-text>
              <v-text-field outlined
                            ref="email"
                            v-model="email"
                            :rules="[() => !!email || 'This field is required']"
                            :error-messages="errorMessages"
                            label="First name"
                            placeholder="Luis Smith"
                            required
              >
                <template v-slot:prepend>
                  <v-tooltip
                      bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-icon v-on="on">
                      mdi-account-circle-outline
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-text-field outlined
                            ref="email"
                            v-model="email"
                            :rules="[() => !!email || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Last name"
                            placeholder="Luis Smith"
                            required
              >
                <template v-slot:prepend>
                  <v-tooltip
                      bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-icon v-on="on">
                      mdi-account-circle-outline
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-text-field outlined
                            ref="email"
                            v-model="email"
                            :rules="[() => !!email || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Email"
                            placeholder="example@gmail.com"
                            required
              >
                <template v-slot:prepend>
                  <v-tooltip
                      bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-icon v-on="on">
                      mdi-email-outline
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-text-field outlined
                            ref="email"
                            v-model="email"
                            :rules="[() => !!email || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Phone number"
                            placeholder="999999999"
                            required
              >
                <template v-slot:prepend>
                  <v-tooltip
                      bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-icon v-on="on">
                      mdi-phone-outline
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-text-field outlined
                            type="password"
                            ref="password"
                            v-model="password"
                            :rules="[() => !!password || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Password"
                            placeholder="*********"
                            required
              >
                <template v-slot:prepend>
                  <v-tooltip
                      bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on">
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-icon v-on="on">
                      mdi-key-outline
                    </v-icon>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-radio-group  v-model="row" row class="ml-8 my-0">
                <v-radio label="Director" value="director"></v-radio>
                <v-radio label="Teacher" value="teacher"></v-radio>
              </v-radio-group>
              <v-combobox v-if="this.row=='teacher'" v-model="select"  :items="items"  label="Name of your school principal" outlined clearable class="ml-8"></v-combobox>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text
                     class="font-weight-bold">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip
                    v-if="formHasErrors"
                    left
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        @click="resetForm"
                        v-on="on"
                    >
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn
                  class="font-weight-bold"
                  color="indigo accent-4"
                  text
                  @click="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "sign-up",
  data () {
    return {
      row: null,
    }
  },
}
</script>

<style scoped>

</style>