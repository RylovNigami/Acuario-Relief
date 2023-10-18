<template>
  <q-layout view="hhh lpr fff">
    <q-header elevated style="height: 50px; align-content: center;">
      <q-toolbar class="glossy">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-avatar style="font-size: 40px;">
          <img
            src="data:image/jpeg;base64,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">
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
