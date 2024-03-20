<template>
  <q-page class="flex justify-center row">
    <div class="col-12">
      <q-stepper
        v-model="step"
        ref="stepper"
        contracted
        color="primary"
        animated
        style="height: 100%"
      >
        <q-step
          class="col-12"
          :name="1"
          title="Create an ad group"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 1"
        >
          <div class="flex flex-center column">
            <q-select
              class="q-my-xl"
              label="Tipo de mensaje"
              transition-show="jump-up"
              transition-hide="jump-up"
              filled
              v-model="inputType"
              :options="options1"
              style="width: 300px"
            />
            <q-stepper-navigation>
              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                label="Siguiente"
                :disable="inputType === null"
              />
            </q-stepper-navigation>
          </div>
        </q-step>

        <q-step
          class="col-12"
          :name="2"
          title="Select campaign settings"
          icon="settings"
          :done="step > 2"
        >
          <div class="flex flex-center column">
            <q-select
              class="q-my-xl"
              filled
              v-model="denunce"
              label="Seleccione o Filtre un proyecto"
              :options="options"
              emit-value
              map-options
              style="width: 300px"
            >
            </q-select>
            <q-stepper-navigation class="flex flex-center">
              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                label="Siguiente"
                :disable="denunce === null"
              />
              <q-btn
                v-if="step > 1"
                flat
                color="primary"
                @click="$refs.stepper.previous()"
                label="Atras"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </div>
        </q-step>

        <q-step
          class="col-12"
          :name="3"
          title="Create an ad"
          icon="add_comment"
        >
          <div class="flex flex-center column">
            <div style="width: 100%">
              <q-input
                class="q-my-xs"
                v-model="commentA"
                label="Deje su mensaje..."
                type="textarea"
                outlined
              />
            </div>
            <q-stepper-navigation class="flex flex-center">
              <q-btn
                @click="insert()"
                color="primary"
                label="Enviar"
                :disable="commentA === ''"
              />
              <q-btn
                v-if="step > 2"
                flat
                color="primary"
                @click="$refs.stepper.previous()"
                label="Atras"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </div>
        </q-step>

        <template v-slot:message>
          <q-banner
            v-if="step === 1"
            class="bg-green-8 text-white text-subtitle1 q-px-lg"
            style="text-shadow: 1px 1px black"
          >
            Seleccione el tipo mensaje a comunicar:
          </q-banner>
          <q-banner
            v-else-if="step === 2"
            class="bg-green-8 text-white text-subtitle1 q-px-lg"
            style="text-shadow: 1px 1px black"
          >
            Seleccione el tema a abordar en el mensaje:
          </q-banner>
          <q-banner
            v-else-if="step === 3"
            class="bg-green-8 text-white text-subtitle1 q-px-lg"
            style="text-shadow: 1px 1px black"
          >
            Redacte el mensaje a comunicar:
          </q-banner>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { reactive, computed } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuasar } from "quasar";

const mask = ref(null);
const preferred = ref("");
const idNumber = ref(null);
const userID = ref(null);
const personID = ref(null);
const inputType = ref(null);
const mailboxID = ref(null);

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

function verification() {
  console.log(localStorage, "localstorage");
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));
  let datoslocalstoragePerson = JSON.parse(localStorage.getItem("tokenPerson"));
  console.log(user, "user");
  console.log(person, "person");
  if (datoslocalstorageUser !== null) {
    user.push(datoslocalstorageUser);
    person.push(datoslocalstoragePerson);
  } else {
    window.location.href = "http://localhost:8080/";
  }
}

const person = [];
const user = [];
//const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default defineComponent({
  name: "FormPage",
  created() {
    verification();

    //localStorage.removeItem("tokenUser");
    //localStorage.removeItem("tokenPerson");
  },

  setup() {
    //const options = ref(projectArray);
    const commentA = ref("");
    //const projectID = ref(null);

    //const options = ref(projectArray)

    return {
      //module: projectArray,
      userID,
      personID,
      denunce: ref(null),
      mailboxID,
      step: ref(1),
      inputType,
      //model2: ref(null),
      commentA,
      isNumber(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[0-9]+$/i.test(char)) return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },
      idNumber,
      automatedMask,
      preferred,
      optionsID: ["", "V", "E", "J"],

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

      /*validateID(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        const result = personsArray.filter(
          (element) => value === element.cedula.slice(2)
        );

        if (value === result) {
          return "coincide";
        } else {
          return "no coincide";
        }

        /*personsArray.forEach((element) => {
          console.log(element.cedula.slice(2));
          if (value !== element.cedula.slice(2)) {
            return "Esta cedula no esta registrada en el sistema";
          }
        });

        // All is good
        return true;
      },*/

      prueba() {
        console.log(preferred.value.concat("-", idNumber.value));
      },

      options: [
        "Desviación de la asistencia",
        "Fraude",
        "Extorsión",
        "Explotación o Abuso Sexual",
        "Trato deficiente en la distribucion",
        "Distibuciones no cumples las condiciones adecuadas",
        "Otro",
      ],

      //stringOptions,

      options1: [
        "Comentario",
        "Sugerencia",
        "Queja",
        "Reclamo",
        "Denuncia",
        "inquietudes",
      ],

      /*filterFn(val, update) {
        if (val === "") {
          update(() => {
            projectArray.forEach((element) => {
              options.value.projectName = element.projectName;
            });
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value.projectName = stringOptions.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },*/
      async insert() {
        /*personsArray.forEach((element) => {
          if (preferred.value.concat("-", idNumber.value) === element.cedula) {
            personID.value = element.id;
            console.log(personID.value);
          } else {
            console.log("NO TE ENCUENTRO LLAVE");
          }
        });

        usersArray.forEach((element) => {
          if (personID.value === element.id) {
            userID.value = element.id;
            console.log(userID.value);
          } else {
            console.log("NO TE ENCUENTRO LLAVE");
          }
        });*/

        await axios
          .post("http://localhost:5000/mailbox", {
            inputType: inputType.value,
            inputStatus: "Recibido",
          })
          .then(function (response) {
            console.log(response, "Esto es mailbox");
          })
          .catch(function (error) {
            console.log(error, "error en mailbox");
            /*$q.notify({
              type: "negative",
              message: "Error al registrar Usuario.",
              caption: "Por favor, revise los datos a ingresar.",
            });*/
          });
        await axios
          .get("http://localhost:5000/mailbox")
          .then(function (response) {
            console.log(response.data);
            mailboxID.value = response.data.length;
            console.log(mailboxID.value);
            //console.log(projectArray[0].projectName);
          });

        await axios
          .post("http://localhost:5000/association-one", {
            commentA: commentA.value,
            //project: projectID.value,
            users: user[0].id,
            persons: person[0].id,
            mailbox: mailboxID.value,
          })
          .then(function (response) {
            console.log(response, "Esto es association-one");
            Swal.fire({
              icon: "success",
              title: `¡Enviado!`,
              text: "Su mensaje ha sido enviado con exito.",
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonText: "Enviar otro mensaje",
              cancelButtonText: "ir a Página Principal",
              reverseButtons: true,
            }).then((result) => {
              if (result.isConfirmed) {
                location.reload();
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.href = "http://localhost:8080/";
              }
            });
          })
          .catch(function (error) {
            console.log(error, "error en mailbox");
            Swal.fire({
              icon: "error",
              title: `Ha ocurrido un error al enviar el mensaje`,
              showConfirmButton: false,
              toast: true,
              showCloseButton: true,
            });
          });
      },
    };
  },
});
</script>
