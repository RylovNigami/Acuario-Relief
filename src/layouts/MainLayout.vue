<template>
  <q-layout view="hhh lpr fff">
    <q-header elevated style="height: 50px; align-content: center">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="authenticated === true"
        />

        <q-avatar style="font-size: 40px">
          <img src="/Logo-acuario-11-09-2023.png" />
        </q-avatar>
        <q-toolbar-title
          class="text-weight-bolder"
          style="text-shadow: 1px 1px black; cursor: pointer"
          clickable
          @click="$router.push('/')"
        >
          Acuario Relief
        </q-toolbar-title>

        <q-toolbar-text class="q-mx-sm" v-if="authenticated === true">
          {{ user[0].email }}
        </q-toolbar-text>
        <q-btn
          flat
          round
          v-if="authenticated === true"
          dense
          @click="userInformation"
          class="q-mr-sm"
        >
          <q-avatar icon="person" style="background-color: lightcoral">
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
              style="width: 30%"
              class="flex row q-py-sm flex-center"
            >
              <div class="column flex-center">
                <div class="text-h6 q-mb-xs">Configuracion</div>
                <q-list style="">
                  <!--q-item clickable v-close-popup>
                    <q-item-section>Ver Perfil</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Cambiar contraseña</q-item-section>
                  </q-item>
                  <q-separator /-->
                  <q-item clickable v-close-popup push @click="logOut()">
                    <q-item-section>Cerrar sesión</q-item-section>
                  </q-item>
                </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center q-mt-md">
                <q-card
                  v-if="user[0].role === 'superuser'"
                  class="text-subtitle1 q-mt-sm q-mb-md q-pa-xs"
                  style="color: red; text-shadow: 1px 1px grey"
                >
                  Super Usuario
                </q-card>

                <q-card
                  v-if="user[0].role === 'admin'"
                  class="text-subtitle1 q-mt-sm q-mb-md q-pa-xs"
                  style="color: violet; text-shadow: 1px 1px grey"
                >
                  Admin
                </q-card>

                <q-avatar icon="person" style="background-color: lightcoral" />

                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ person[0].first_name + " " + person[0].last_name }}
                </div>
                <div class="text-subtitle1 q-mt-sm q-mb-xs">
                  {{ user[0].email }}
                </div>
                <!--q-btn color="primary" label="Cerrar Sesión" push size="sm" v-close-popup /-->
              </div>
            </q-menu>
          </q-avatar>
        </q-btn>

        <div v-if="authenticated === false">
          <q-toolbar-text class="q-mx-sm">
            Sí desea denunciar algo ¡Registrese aqui!
          </q-toolbar-text>
          <q-btn
            outline
            color="white"
            label="Registrarse"
            class="q-ma-xs"
            @click="$router.push('/RegisterPage')"
          />
          <q-btn outline color="white" label="Iniciar Sesion" class="q-ma-xs">
            <q-menu
              transition-show="jump-down"
              class=""
              transition-hide="jump-up"
            >
              <div class="row q-pa-md">
                <div class="column justify-center text-center">
                  <div class="text-h6 q-mb-xs">Iniciar Sesión</div>
                  <q-list>
                    <div class="flex row container">
                      <div class="col">
                        <div
                          style="
                            margin-bottom: 0px;
                            padding-left: 4px;
                            text-align: left;
                          "
                          class="text-weight-medium"
                        >
                          Correo
                        </div>
                        <q-input
                          dense
                          outlined
                          v-model="email"
                          class="q-mx-xs"
                          label="Ingrese su correo"
                        />
                      </div>
                    </div>
                    <div class="flex row container q-mt-xs">
                      <div class="col">
                        <div
                          style="
                            margin-bottom: 0px;
                            padding-left: 4px;
                            text-align: left;
                          "
                          class="text-weight-medium"
                        >
                          Contraseña
                        </div>
                        <q-input
                          dense
                          outlined
                          :type="isPwd ? 'password' : 'text'"
                          v-model="password"
                          class="q-mx-xs"
                          label="Ingrese su Contraseña"
                        >
                          <template v-slot:append>
                            <q-icon
                              :name="isPwd ? 'visibility_off' : 'visibility'"
                              class="cursor-pointer"
                              @click="isPwd = !isPwd"
                            />
                          </template>
                        </q-input>
                      </div>
                    </div>
                    <q-btn
                      color="primary"
                      label="Ingresar"
                      class="q-mx-xs q-mt-md"
                      @click="LogIn()"
                    />
                  </q-list>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>

        <!--aqui se creara una modal para ingresar como usuario, haciendo click en el icono de usuario
            tambien se podra ingresar al perfil de usuario una vez ingresado
        -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <!--show-if-above (esto funciona para activar la muestra de algun elemento de forma predeterminada)-->
      <q-list>
        <q-item-label header> Menú de secciones </q-item-label>

        <!--q-item
            clickable
            tag="a"
            :is="appModule[0].link.startsWith('http') ? 'a' : 'router-link'"
            :key="appModule[0].link"
            :to="appModule[0].link"
            :href="appModule[0].link"
            v-bind="appModule[0]"
            target="_blank"
          >
            <q-item-section v-if="appModule[0].icon" avatar>
              <q-icon :name="appModule[0].icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ appModule[0].title }}</q-item-label>
              <q-item-label caption>{{ appModule[0].caption }}</q-item-label>
            </q-item-section>
          </q-item-->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import Swal from "sweetalert2";
import axios from "axios";

const linksList = [
  {
    title: "Pagina Principal",
    caption: "Home",
    icon: "mdi-home",
    link: "/",
  },
  {
    title: "Módulo de captura de mensajes",
    caption: "Módulo de envio de denuncias",
    icon: "mdi-pencil-plus-outline",
    link: "/ClaimsIndex",
  },
];

const users = [];
const persons = [];
const person = [];
const user = [];
const userID = ref(null);
//const notification = "Bienvenido" + user[0].email + ".";
const authenticated = ref(false);

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  created() {
    //localStorage.removeItem("tokenUser");
    //localStorage.removeItem("tokenPerson");
    axios.get("http://localhost:5000/persons").then(function (response) {
      response.data.forEach((element) => {
        persons.push(element);
        console.log(element, "Elemento de axios.response.data a persons");
      });
    });

    axios.get("http://localhost:5000/users").then(function (response) {
      response.data.forEach((element) => {
        users.push(element);
        console.log(element, "Elemento de axios.response.data a users");
      });

      console.log(localStorage, "localstorage");
      console.log(users);
      let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));
      let datoslocalstoragePerson = JSON.parse(
        localStorage.getItem("tokenPerson")
      );
      console.log(user, "user");
      console.log(person, "person");
      if (datoslocalstorageUser !== null) {
        user.push(datoslocalstorageUser);
        person.push(datoslocalstoragePerson);
      }
      if (user.length === 0) {
        authenticated.value = false;
      } else {
        /*persons.forEach((element) => {
          if (element.id === user[0].id) {
            person.push(element);
            console.log(element, "person0");
          }
        });*/
        authenticated.value = true;
        Swal.fire({
          icon: "success",
          title: `Bienvenido ${person[0].first_name} ${person[0].last_name}!`,
          showConfirmButton: false,
          timer: 5000,
          position: "bottom-end",
          timerProgressBar: true,
          toast: true,
          showCloseButton: true,
        });
      }
    });
  },

  beforeMount() {},

  setup() {
    const leftDrawerOpen = ref(false);
    const email = ref(null);
    const password = ref(null);
    const appModule = [
      {
        title: "Módulo de captura de mensajes",
        caption: "App de envio de denuncias",
        icon: "mdi-pencil-plus-outline",
        link: "http://localhost:9080/",
      },
    ];

    return {
      user,
      users,
      persons,
      person,
      essentialLinks: linksList,
      email,
      password,
      authenticated,
      leftDrawerOpen,
      appModule,
      isPwd: ref(true),

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      userInformation() {
        console.log(user, "user");
        console.log(users, "users");
        console.log(JSON.parse(localStorage.getItem("tokenUser")));
        console.log(JSON.parse(localStorage.getItem("tokenPerson")));
        console.log(authenticated.value);
      },

      LogIn() {
        users.forEach((element) => {
          if (element.email === email.value) {
            user.push(element);
            userID.value = element.id;
            console.log("conseguido", user[0]);
          }
        });

        persons.forEach((element) => {
          if (element.id === userID.value) {
            person.push(element);

            console.log("conseguido", person[0]);
          }
        });

        axios
          .post("http://localhost:5000/auth/login", {
            email: email.value,
            password: password.value,
          })
          .then(function (response) {
            localStorage.setItem("tokenUser", JSON.stringify(user[0]));
            localStorage.setItem("tokenPerson", JSON.stringify(person[0]));
            console.log(response, "auth login success");
            location.reload();
          })
          .catch(function (error) {
            console.log(error, "auth login failure");
            Swal.fire({
              icon: "error",
              title: "Ha ocurrido un error al iniciar sesión.",
              showConfirmButton: false,
              timer: 5000,
              position: "bottom-end",
              timerProgressBar: true,
              toast: true,
              showCloseButton: true,
            });
          });
      },
      async logOut() {
        localStorage.removeItem("tokenUser");
        localStorage.removeItem("tokenPerson");
        location.reload();
      },
    };
  },
});
</script>
