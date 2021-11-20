<template>
  <div class="log-in">
    <v-container class="mt-5 px-4">
      <v-row>
        <v-col cols="12" align="center">
          <v-card max-width="400" >
            <v-card-title class="justify-center font-weight-bold mb-5">Log In</v-card-title>

            <v-card-text class="pb-0">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    placeholder="example@mail.com"
                    required outlined
                >
                  <template v-slot:append>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on">mdi-email-outline</v-icon>
                      </template>
                      Write here the email you registered
                    </v-tooltip>
                  </template>
                </v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    placeholder="*******"
                    type="password"
                    required outlined
                >
                  <template v-slot:append>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-icon v-on="on">mdi-key-outline</v-icon>
                      </template>
                      Your password is not displayed
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="error"
                     text class="font-weight-bold"
                     @click="reset">
                Reset Form
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid"
                     class="font-weight-bold"
                     color="indigo accent-4"
                     text @click="submit">
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
  name: "log-in",
    data: () => ({
      errorMessages: '',
      password: null,
      formHasErrors: false,
      valid: true,
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      submit () {
        this.$refs.form.validate();

        const usuario = {
          correo: this.email,
          password: this.password,
        };

        console.log("el usuario es: ", usuario);
      },
      reset () {
        this.$refs.form.reset()
      }
    },
  }
</script>

<style scoped>

</style>