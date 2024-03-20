<template>
  <q-page class="flex flex-center column bg-primary">
    <h4
      class="text-bold q-mx-lg text-white"
      style="text-align: center; text-shadow: 1px 1px black"
    >
      Módulo de captura de mensajes para ONG Acuario
    </h4>
    <img
      alt="Quasar logo"
      src="/Logo-acuario-11-09-2023.png"
      style="width: 300px; height: 300px"
      class="q-my-lg"
    />
    <div
      class="text-h6 q-mx-lg q-my-xl text-white"
      style="text-align: center; text-shadow: 1px 1px black"
    >
      Esta aplicación esta destinada a la captura de comentarios, sugerencias,
      quejas, denuncias, inquietudes, y reclamos, de los proyectos de la
      organización, para el mejoramiento de los procesos de la misma dando
      atencion a los mensajes recibidos por sus beneficiarios.
    </div>
    <q-btn
      color="green"
      class="q-mb-xl"
      label="Comenzar"
      @click="$router.push('/ClaimsForm')"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { computed } from "vue";

function verification() {
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));
  if (datoslocalstorageUser === null) {
    window.location.href = "http://localhost:8080/";
  }
}

export default defineComponent({
  name: "ClaimsIndex",
  created() {
    verification();
  },
});
</script>
