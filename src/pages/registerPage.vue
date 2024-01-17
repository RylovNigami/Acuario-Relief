<template>
  <q-page>
    <div class="flex row q-mx-lg q-py-xs flex-center" id="indicadores">
      <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-ma-lg">
        <q-card-section class="flex row q-px-sm">
          <h5
            class="text-bold q-mx-lg"
            style="margin-top: 1%; margin-bottom: 0%"
          >
            Registrarse
          </h5>
          <hr />
        </q-card-section>
        <q-card-section
          style="margin: 0%; padding: 0%"
          class="flex row q-px-sm"
        >
          <div class="flex row q-mx-lg q-py-xs items-center">
            <div class="q-px-xs col-xs-12 col-sm-4 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Cédula
              </div>
              <q-input
                dense
                outlined
                v-model="idNumber"
                label="Inserte su cédula"
              />
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Nombre
              </div>
              <q-input
                dense
                outlined
                v-model="firstName"
                label="Inserte su nombre"
              />
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Apellido
              </div>
              <q-input
                dense
                outlined
                v-model="lastName"
                label="Inserte su apellido"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-3 col-lg-3 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Teléfono
              </div>
              <q-input
                dense
                outlined
                v-model="pNumber"
                label="Inserte su telefono"
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
                v-model="email"
                label="Inserte su correo"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model="password"
                label="Inserte su contraseña"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Confirme su Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model="password"
                label="Re-inserte su contraseña"
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
                  @click="showNotif, $router.push('/')"
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
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    /*$router.push('/')*/
    const $q = useQuasar();

    return {
      idNumber: ref(""),
      firstName: ref(""),
      pNumber: ref(""),
      lastName: ref(""),
      direction: ref(""),
      email: ref(""),
      password: ref(""),

      showNotif() {
        $q.notify({
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quisquam non ad sit assumenda consequuntur esse inventore officia. Corrupti reiciendis impedit vel, fugit odit quisquam quae porro exercitationem eveniet quasi.",
          color: "primary",
          position: "bottom-right",
          multiLine: true,
          avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          actions: [
            {
              label: "Reply",
              color: "yellow",
              handler: () => {
                /* ... */
              },
            },
          ],
        });
      },
    };
  },
};
</script>
