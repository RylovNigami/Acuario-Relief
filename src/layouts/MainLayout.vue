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
              class="flex row q-pa-sm flex-center"
            >
              <div class="column items-center">
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

              <q-separator vertical inset class="q-mx-md" />

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
      <q-scroll-area class="fit">
        <!--show-if-above (esto funciona para activar la muestra de algun elemento de forma predeterminada)-->
        <q-list>
          <q-item-label header> Essential Links </q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import axios from "axios";

const linksList = [
  {
    title: "Módulo de captura de mensajes",
    caption: "App de envio de denuncias",
    icon: "pencil-plus",
    link: "https://localhost:9080/",
  },
];

const users = [];
const user = [];
const authenticated = ref(false);

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  created() {
    //localStorage.removeItem("token");
    axios.get("http://localhost:5000/users").then(function (response) {
      response.data.forEach((element) => {
        users.push(element);
        console.log(element, "Elemento de axios.response.data a users");
      });
      users.forEach((element) => {
        console.log(element.email);
      });
    });

    console.log(localStorage, "localstorage");
    console.log(users);
    let datoslocalstorage = JSON.parse(localStorage.getItem("token"));
    console.log(user, "user");
    if (datoslocalstorage !== null) {
      user.push(datoslocalstorage);
    }
    if (user.length === 0) {
      authenticated.value = false;
    } else {
      authenticated.value = true;
    }
  },

  beforeMount() {},

  setup() {
    const leftDrawerOpen = ref(false);
    const email = ref(null);
    const password = ref(null);

    return {
      user,
      users,
      essentialLinks: linksList,
      email,
      password,
      authenticated,
      leftDrawerOpen,
      isPwd: ref(true),

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      userInformation() {
        console.log(user, "user");
        console.log(users, "users");
        console.log(JSON.parse(localStorage.getItem("token")));
        console.log(authenticated.value);
      },

      LogIn() {
        users.forEach((element) => {
          if (element.email === email.value) {
            user.push(element);
            console.log("conseguido", user[0]);
          }
        });

        axios
          .post("http://localhost:5000/auth/login", {
            email: email.value,
            password: password.value,
          })
          .then(function (response) {
            localStorage.setItem("token", JSON.stringify(user[0]));
            console.log(response, "auth login success");
            location.reload();
          })
          .catch(function (error) {
            console.log(error, "auth login failure");
          });
      },
      async logOut() {
        localStorage.removeItem("token");
        location.reload();
      },
    };
  },
});
</script>
