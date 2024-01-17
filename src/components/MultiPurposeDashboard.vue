<template>
  <q-item clickable tag="a" @click="$router.push(link)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { date } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClustersData",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    cluster: {
      type: String,
      default: "",
    },

    //ESTADISTICAS GENERALES

    servedPeople: {
      type: Number,
      default: 0,
    },
    servedPeopleDisabled: {
      type: Number,
      default: 0,
    },
    servedPeopleNative: {
      type: Number,
      default: 0,
    },
    servedPeopleWomen: {
      type: Number,
      default: 0,
    },
    servedPeopleMen: {
      type: Number,
      default: 0,
    },

    //de seguridad alimentaria (pero puede funcionar para todos)

    servedHomes: {
      type: Number,
      default: 0,
    },
    servedCenters: {
      type: Number,
      default: 0,
    },

    //(saneamiento) y (seguridad alimentaria)
    washReport: {
      type: date,
      default: new date().toLocaleString(),
    },

    foodReport: {
      type: date,
      default: new date().toLocaleString(),
    },

    boys0to17: {
      type: Number,
      default: 0,
    },
    girls0to17: {
      type: Number,
      default: 0,
    },
    men18to59: {
      type: Number,
      default: 0,
    },
    women18to59: {
      type: Number,
      default: 0,
    },
    //cumple en educacion
    men60orOlder: {
      type: Number,
      default: 0,
    },
    women60orOlder: {
      type: Number,
      default: 0,
    },

    //salud

    healthReport: {
      type: date,
      default: new date().toLocaleString(),
    },

    boys0to5: {
      type: Number,
      default: 0,
    },
    girls0to5: {
      type: Number,
      default: 0,
    },
    boys6to19: {
      type: Number,
      default: 0,
    },
    girls6to19: {
      type: Number,
      default: 0,
    },
    men20to64: {
      type: Number,
      default: 0,
    },
    women20to64: {
      type: Number,
      default: 0,
    },
    men65orOlder: {
      type: Number,
      default: 0,
    },
    women65orOlder: {
      type: Number,
      default: 0,
    },

    //Educacion

    educationReport: {
      type: date,
      default: new date().toLocaleString(),
    },

    boys0to2: {
      type: Number,
      default: 0,
    },
    girls0to2: {
      type: Number,
      default: 0,
    },
    boys3to5: {
      type: Number,
      default: 0,
    },
    girls3to5: {
      type: Number,
      default: 0,
    },
    boys6to11: {
      type: Number,
      default: 0,
    },
    girls6to11: {
      type: Number,
      default: 0,
    },
    boys12to17: {
      type: Number,
      default: 0,
    },
    girls12to17: {
      type: Number,
      default: 0,
    },
    boys18to19: {
      type: Number,
      default: 0,
    },
    girls18to19: {
      type: Number,
      default: 0,
    },
    men20to59: {
      type: Number,
      default: 0,
    },
    women20to59: {
      type: Number,
      default: 0,
    },
  },
});
</script>
