<template>
  <q-layout view="hhh lpr fff">
    <q-header elevated style="height: 50px; align-content: center;">
      <q-toolbar class="glossy">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-avatar style="font-size: 40px;">
          <img src="/Logo-acuario-11-09-2023.png">
        </q-avatar>
        <q-toolbar-title class="text-weight-bolder">
          Acuario Relief
        </q-toolbar-title>

        <q-btn flat round dense @click="userInformation">
          <q-avatar icon="person" style="background-color: lightcoral;">
            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <div class="row q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-xs">Configuracion</div>
                  <q-list style="min-width: 90px">
                    <q-item clickable v-close-popup>
                      <q-item-section>Ver Perfil</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section>Cambiar contraseña</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup push>
                      <q-item-section>Cerrar sesión</q-item-section>
                    </q-item>
                  </q-list>
                </div>

                <q-separator vertical inset class="q-mx-md" />

                <div class="column items-center">
                  <q-avatar class="q-mt-xl">
                    <q-avatar icon="person" style="background-color: lightcoral;" />
                  </q-avatar>
                  <div class="text-subtitle1 q-mt-md q-mb-xs">Usuario 1</div>
                  <!--q-btn color="primary" label="Cerrar Sesión" push size="sm" v-close-popup /-->
                </div>
              </div>
            </q-menu>
          </q-avatar>
        </q-btn>

        <!--aqui se creara una modal para ingresar como usuario, haciendo click en el icono de usuario
            tambien se podra ingresar al perfil de usuario una vez ingresado
        -->

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-scroll-area class="fit">
        <!--show-if-above (esto funciona para activar la muestra de algun elemento de forma predeterminada)-->
        <q-list>
          <q-item-label header>
            Essential Links
          </q-item-label>

          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
