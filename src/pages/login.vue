<template>
  <div class="flex flex-center row">
    <v-col class="col-sm-7 col-md-5 col-lg-4 col-xl-3">
      <q-card class="d-flex justify-center rounded-lg" elevation="8">
        <ValidationObserver v-slot="{ invalid }">
          <div class="flex justify-center row q-py-8 q-px-4">
            <div class="column">
              <div class="flex flex-center" style="width: 100%">
                <img
                  src="@/static/logobomberos.png"
                  alt="logo-admin"
                  style="height: 70px"
                  class="q-mr-7"
                />
                <img
                  src="@/static/alcaldia.jpg"
                  alt="logo-admin"
                  style="height: 70px"
                  class="q-ml-7"
                />
              </div>
              <q-card-section class="text-h6 font-weight-bold text-center pt-2"
                >Sistema de registro y control de la division de prevencion de
                incendios y otros siniestros</q-card-section
              >
            </div>

            <div class="q-py-0">
              <ValidationProvider
                name="Correo electronico"
                rules="required"
                v-slot="{ errors }"
              >
                <h4>Correo electronico</h4>
                <q-input
                  outlined
                  persistent-placeholder
                  type="text"
                  dense
                  placeholder="Correo electronico"
                  v-model.trim="data.email"
                  :error-messages="errors[0]"
                  class="mt-0 pt-0"
                  maxlength="50"
                >
                </q-input>
              </ValidationProvider>
            </div>

            <v-col cols="12" class="py-0">
              <ValidationProvider
                name="Contraseña"
                rules="required"
                v-slot="{ errors }"
              >
                <h4>Contraseña</h4>
                <q-input
                  outlined
                  dense
                  persistent-placeholder
                  placeholder="Coloque su contraseña"
                  type="password"
                  class="mt-0 pt-0 pb-2"
                  :error-messages="errors[0]"
                  maxlength="15"
                  v-model.trim="data.password"
                >
                </q-input>
              </ValidationProvider>
            </v-col>

            <v-btn
              color="primary"
              class="px-8"
              :disabled="invalid"
              @click="login"
            >
              Ingresar
            </v-btn>
          </div>
        </ValidationObserver>
      </q-card>
    </v-col>
    <v-alert
      dense
      type="error"
      class="alert-register ml-16 text-left"
      v-if="alert"
      absolute
    >
      Datos incorrectos del usuario
    </v-alert>
    <loading-overlay :overlay="overlay" />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
export default defineComponent({
  name: "LoginPage",
  components: {},
  setup() {
    return {
      username: ref(""),
      password: ref(""),
      handleSubmit() {
        // Handle form submission here
        console.log("Username:", username.value);
        console.log("Password:", password.value);
        // For demonstration, we'll just log the credentials
        // In a real application, you would send these to your backend for authentication
      },

      async login() {
        try {
          await axios
                  .post("http://localhost:5000/transverse", {
                    project: projectID.value,
                    channelUsed: channelUsed.value,
                    topicsAddressed: topicsAddressed.value,
                    girls0to17T: girls0to17.value,
                    boys0to17T: boys0to17.value,
                    women18to59T: women18to59.value,
                    men18to59T: men18to59.value,
                    menOlderThan60T: menOlderThan60E.value,
                    womenOlderThan60T: womenOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es transverse cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en transverse cluster");
                  });

        } catch (error) {
          this.overlay = false;
          Sswal.fire({
            title: "Ha ocurrido un error",
            text: "No se ha podido iniciar sesión",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
        console.log(this.$auth);
        if (this.$auth.loggedIn) this.$router.push("/admin");
      },
    };
  },
});
</script>
