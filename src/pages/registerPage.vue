<template>
  <q-page>
    <div class="flex row q-mx-lg q-py-xs flex-center">
      <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-ma-lg">
        <q-card-section class="flex row q-px-sm">
          <h5
            class="text-bold q-mx-lg"
            style="margin-top: 1%; margin-bottom: 0%"
            @click="prueba()"
          >
            Registrarse
          </h5>
          <hr />
        </q-card-section>
        <q-card-section
          style="margin: 0%; padding: 0%"
          class="flex row q-px-sm"
        >
          <div class="flex row q-mx-lg q-py-xs flex-center">
            <div class="q-px-xs col-xs-12 col-sm-4 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Cédula
              </div>
              <div class="flex flex-center row">
                <div class="col-3">
                  <q-select
                    v-model="preferred"
                    :options="options"
                    dense
                    outlined
                    :rules="[(val) => noEmpty(val)]"
                  />
                </div>
                <div class="col-9">
                  <q-input
                    dense
                    outlined
                    v-model.trim="idNumber"
                    @keypress="isNumber($event)"
                    label="Inserte su cédula"
                    :mask="automatedMask"
                    class="q-ml-xs"
                    :rules="[(val) => noEmpty(val)]"
                    :disable="preferred === null || preferred === ''"
                  />
                </div>
              </div>
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Nombre
              </div>
              <q-input
                dense
                outlined
                v-model.trim="firstName"
                @keypress="isLetter($event)"
                label="Inserte su nombre"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Apellido
              </div>
              <q-input
                dense
                outlined
                v-model.trim="lastName"
                @keypress="isLetter($event)"
                label="Inserte su apellido"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-2 col-lg-2 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Teléfono
              </div>
              <q-input
                dense
                outlined
                v-model.trim="pNumber"
                mask="(####) ### - ####"
                @keypress="isNumber($event)"
                label="Inserte su telefono o numero para contacto"
                :rules="[(val) => noEmpty(val)]"
                class="q-ml-xs"
              />
            </div>
            <div
              class="q-px-xs col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-sm"
            >
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Dirección
              </div>
              <q-input
                dense
                outlined
                v-model="direction"
                label="Inserte su dirección"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Correo electrónico
              </div>

              <q-input
                dense
                outlined
                v-model.trim="email"
                label="Inserte su correo"
                :rules="[(val) => validateEmail(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model.trim="password"
                label="Inserte su contraseña"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Confirme su Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model.trim="passwordConfirm"
                label="Re-inserte su contraseña"
                :rules="[(val) => confirmationPassword(val)]"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="flex row items-center justify-center">
            <div class="container flex">
              <div class="flex column">
                <q-btn
                  color="green"
                  label="Crear Usuario"
                  style="margin-top: 1%; margin-bottom: 1%"
                  @click="entry() && $router.push('/')"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import Swal from "sweetalert2";
//import { Field, ErrorMessage } from "vee-validate";
//import { Form as ValidationForm } from "vee-validate";
//import { useField } from "vee-validate";
import { useQuasar } from "quasar";
import axios from "axios";
//import { useRouter } from "vue-router";
const mask = ref(null);
const preferred = ref("");
const idNumber = ref(null);

const automatedMask = computed(() => {
  if (preferred.value === "") {
    mask.value = "";
    idNumber.value = null;
  }
  if (preferred.value === "V") {
    mask.value = "########";
    idNumber.value = null;
  }
  if (preferred.value === "E") {
    mask.value = "##########";
    idNumber.value = null;
  }
  if (preferred.value === "J") {
    mask.value = "#########";
    idNumber.value = null;
  }
  return mask.value;
});

export default defineComponent({
  components: {
    //Field,
    //ValidationForm,
    //ErrorMessage,
  },
  name: "registerPage , App",
  setup() {
    const $q = useQuasar();
    const pNumber = ref(null);
    const firstName = ref(null);
    const lastName = ref(null);
    const direction = ref(null);
    const email = ref(null);
    const password = ref(null);
    const passwordConfirm = ref(null);

    const personID = ref(0);

    /*const { email, errorMessage } = useField("name", (email) => {
      return email ? true : "field is required";
    });*/

    return {
      //errorMessage,
      isLetter(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[A-Za-z\u00C0-\u017F\s]+$/i.test(char))
          return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },
      isNumber(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[0-9]+$/i.test(char)) return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },

      isValidEmail(email) {
        const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
        return regex.test(email);
      },

      idNumber,
      firstName,
      pNumber,
      lastName,
      direction,
      email,
      password,
      passwordConfirm,
      personID,
      automatedMask,
      preferred,
      options: ["", "V", "E", "J"],

      /*onSubmit(values) {
        console.log(JSON.stringify(values, null, 2));
      },*/
      noEmpty(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // All is good
        return true;
      },

      prueba() {
        console.log(preferred.value.concat("-", idNumber.value));
      },

      validateEmail(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return "E-mail Invalido.";
        }

        // All is good
        return true;
      },

      confirmationPassword(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is not a valid password
        if (value !== password.value) {
          return "Su contraseña no coincide, intentelo de nuevo.";
        }

        // All is good
        return true;
      },
      async entry() {
        await axios
          .post("http://localhost:5000/persons", {
            cedula: preferred.value.concat("-", idNumber.value),
            first_name: firstName.value,
            last_name: lastName.value,
            phone: pNumber.value,
            address: direction.value,
          })
          .then(function (response) {
            console.log(response, "esto es persona");
          })
          .catch(function (error) {
            console.log(error, "error en persona");
          });

        await axios
          .get("http://localhost:5000/persons")
          .then(function (response) {
            personID.value = response.data.length;
          });
        await axios
          .post("http://localhost:5000/auth/register", {
            email: email.value,
            password: password.value,
            persons: personID.value,
          })
          .then(function (response) {
            console.log(response, "esto es usuario");

            Swal.fire({
              icon: "success",
              title: `Usuario registrado con exito`,
              showConfirmButton: false,
              timer: 5000,
              position: "bottom-end",
              timerProgressBar: true,
              toast: true,
              showCloseButton: true,
            });
            location.reload();
          })
          .catch(function (error) {
            console.log(error, "error en usuario");
            Swal.fire({
              icon: "error",
              title: "Ha ocurrido un error al registrar el Usuario",
              showConfirmButton: false,
              timer: 5000,
              position: "bottom-end",
              timerProgressBar: true,
              toast: true,
              showCloseButton: true,
            });
          });
      },
    };
  },
});
</script>
