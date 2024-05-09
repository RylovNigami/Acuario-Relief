<template>
  <q-page>
    <div class="flex row q-mx-lg q-py-xs flex-center">
      <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-ma-lg">
        <q-card-section class="flex row q-px-sm">
          <h5
            class="text-bold q-mx-lg"
            style="margin-top: 1%; margin-bottom: 0%"
          >
            Perfil del usuario
          </h5>
          <hr />
        </q-card-section>
        <q-card-section
          style="margin: 0%; padding: 0%"
          class="flex row q-px-sm flex-center"
        >
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 q-ma-lg">
            <div class="flex row q-px-sm">
              <div class="column items-start q-mt-md">
                <h6
                  style="margin-bottom: 0px; margin-top: 10px"
                  class="text-weight-medium"
                >
                  Nombre y apellido
                </h6>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{
                    user[0].persons.first_name + " " + user[0].persons.last_name
                  }}
                </div>
                <h6
                  style="margin-bottom: 0px; margin-top: 10px"
                  class="text-weight-medium"
                >
                  Cédula
                </h6>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ user[0].persons.cedula }}
                </div>
                <h6
                  style="margin-bottom: 0px; margin-top: 10px"
                  class="text-weight-medium"
                >
                  E-mail
                </h6>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ user[0].email }}
                </div>
                <h6
                  style="margin-bottom: 0px; margin-top: 10px"
                  class="text-weight-medium"
                >
                  Teléfono
                </h6>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ user[0].persons.phone }}
                </div>
                <h6
                  style="margin-bottom: 0px; margin-top: 10px"
                  class="text-weight-medium"
                >
                  Dirección
                </h6>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ user[0].persons.address }}
                </div>
              </div>
            </div>
          </div>

          <q-separator vertical inset class="q-mx-lg q-mb-lg" />

          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 q-ma-lg">
            <div class="flex row flex-center q-px-sm">
              <div class="column items-center q-mt-md">
                <q-avatar
                  icon="person"
                  style="background-color: lightcoral; font-size: 300px"
                />

                <q-card
                  v-if="user[0].role === 'superuser'"
                  class="text-h4 q-mt-sm q-mb-md q-pa-xs"
                  style="color: red; text-shadow: 1px 1px grey"
                >
                  Super Usuario
                </q-card>

                <q-card
                  v-if="user[0].role === 'admin'"
                  class="text-h4 q-mt-sm q-mb-md q-pa-xs"
                  style="color: violet; text-shadow: 1px 1px grey"
                >
                  Admin
                </q-card>

                <q-card
                  v-if="user[0].role === 'user'"
                  class="text-h4 q-mt-sm q-mb-md q-pa-xs"
                  style="color: blue; text-shadow: 1px 1px grey"
                >
                  Usuario
                </q-card>
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

const idNumber = ref(null);
const pNumber = ref(null);
const firstName = ref(null);
const lastName = ref(null);
const direction = ref(null);
const email = ref(null);
const user = [];

function verification() {
  console.log(localStorage, "localstorage");
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));

  //console.log(user, "user");

  if (datoslocalstorageUser !== null) {
    user.push(datoslocalstorageUser);
    idNumber.value = user[0].persons.cedula;

    firstName.value = user[0].persons.first_name;
    lastName.value = user[0].persons.last_name;

    pNumber.value = user[0].persons.phone;
    direction.value = user[0].persons.address;

    email.value = user[0].email;
  } else {
    window.location.href = "http://localhost:8080/";
  }
}

export default defineComponent({
  name: "userPage",
  created() {
    verification();

    //userData();
  },
  setup() {
    return {
      idNumber,
      firstName,
      pNumber,
      lastName,
      direction,
      email,
      user,
    };
  },
});
</script>
