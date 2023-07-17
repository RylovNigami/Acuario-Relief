<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated style="height: 60px; align-content: center;">
      <q-toolbar class="glossy">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-avatar style="font-size: 55px;">
          <img src="https://pbs.twimg.com/profile_images/1440665344322928653/iuwaZnp6_400x400.jpg">
        </q-avatar>
        <q-toolbar-title class="text-weight-bolder">
          Acuario Relief
        </q-toolbar-title>




        <q-btn flat round dense @click="userInformation">
          <q-avatar icon="person" style="background-color: lightcoral;" />
        </q-btn>

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
