<template>
  <q-card class="q-ma-xs" @click="dialog = true">
    <q-card-section class="text-white" :class="colorGrande">
      <div class="text-subtitle2 text-bold">
        {{ indicator.title }}
      </div>

      <div class="row flex-center" style="text-align: center">
        <div class="column">
          <div class="text-caption">Atendidos</div>
          <div class="text-subtitle1">
            {{ indicator.counters.value }}
          </div>
        </div>
        <q-separator vertical inset class="q-mx-sm" />
        <div class="column">
          <div class="text-caption">Cumplido</div>
          <div class="text-subtitle1">
            {{ indicator.cumplishmentFormula.value.toFixed(2) + "%" }}
          </div>
        </div>
        <q-separator vertical inset class="q-mx-sm" />
        <div class="column">
          <div class="text-caption">Alcanzado/a Cumplir</div>
          <div class="text-subtitle1">
            {{ indicator.counters.value + "/" + peopleToAssistYearly }}
          </div>
        </div>
      </div>

      <q-tooltip class="bg-white" :offset="[10, 10]">
        <q-card class="" style="width: 400px">
          <q-card-section>
            <div
              style="
                margin: 0%;

                height: 300px;
              "
            >
              <Bar :data="dataTooltip" :options="options" />
            </div>
          </q-card-section>
        </q-card>
      </q-tooltip>

      <q-dialog v-model="dialog" full-width>
        <q-card class="flex row">
          <div class="row inline">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4 class="column items-center text-bold">
                Detalles del indicador
              </h4>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="q-pa-xs q-mx-md">
                <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <q-card-section style="margin: 0%; padding: 3%">
                    <Bar :data="data1" :options="options" />
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="q-pa-xs q-mx-md">
                <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <q-card-section class="flex row flex-center">
                    <h5 class="no-margin q-mb-xs column items-center text-bold">
                      Estado del indicador
                    </h5>
                    <div class="flex row no-wrap">
                      <div class="container flex" style="width: 100%">
                        <div class="flex column">
                          <div class="column items-center">
                            <div class="row inline flex-center">
                              <div
                                style="
                                  border-radius: 50%;
                                  display: inline-block;
                                  height: 70px;
                                  width: 70px;
                                "
                                :class="indicator.colours.value"
                                class="q-mx-lg"
                              >
                                <span></span>
                              </div>
                              <h2
                                v-if="indicator.colours.value === 'bg-green'"
                                style="
                                  color: #00a126;
                                  text-shadow: 1px 1px grey;
                                "
                              >
                                Bien
                              </h2>
                              <h2
                                v-if="indicator.colours.value === 'bg-warning'"
                                style="
                                  color: #ffb700;
                                  text-shadow: 1px 1px grey;
                                "
                              >
                                Regular
                              </h2>
                              <h2
                                v-if="indicator.colours.value === 'bg-red'"
                                style="
                                  color: #c10000;
                                  text-shadow: 1px 1px grey;
                                "
                              >
                                Mal
                              </h2>
                            </div>
                            <div
                              class="column items-center justify-center text-center"
                            >
                              Fueron atendidos por la organizacion Acuario hasta
                              la fecha
                              {{ indicator.counters.value }}
                              personas, lo que equivale al

                              {{
                                indicator.cumplishmentFormula.value.toFixed(2)
                              }}% de todas las personas atendidas.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="row inline">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="q-pa-xs q-mx-md">
                <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <q-card-section class="flex row flex-center">
                    <h5 class="no-margin q-mb-xs column items-center text-bold">
                      Segregación
                    </h5>
                    <div class="flex row no-wrap">
                      <div class="container flex" style="width: 25%">
                        <div class="flex column">
                          <div class="column items-center">
                            <div class="q-my-sm text-bold">Hombres</div>
                            <h4 class="q-my-sm" style="color: #5361f5">
                              {{ personsAttendedValue[2].counters }}
                            </h4>
                            <div
                              class="column items-center wrap justify-center text-center"
                            >
                              Fueron atendidos por la organizacion Acuario hasta
                              la fecha, lo que equivale al
                              {{
                                personsAttendedValue[2].cumplishmentFormula.value.toFixed(
                                  2
                                )
                              }}% de todas las personas atendidas.
                            </div>
                          </div>
                        </div>
                      </div>

                      <q-separator vertical inset class="q-mx-sm" />

                      <div class="container flex" style="width: 25%">
                        <div class="flex column">
                          <div class="column items-center">
                            <div class="q-my-sm text-bold">Mujeres</div>
                            <h4 class="q-my-sm" style="color: #ff4ec1">
                              {{ personsAttendedValue[1].counters }}
                            </h4>
                            <div
                              class="column items-center justify-center text-center"
                            >
                              Fueron atendidos por la organizacion Acuario hasta
                              la fecha, lo que equivale al
                              {{
                                personsAttendedValue[1].cumplishmentFormula.value.toFixed(
                                  2
                                )
                              }}% de todas las personas atendidas.
                            </div>
                          </div>
                        </div>
                      </div>

                      <q-separator vertical inset class="q-mx-sm" />

                      <div class="container flex" style="width: 25%">
                        <div class="flex column">
                          <div class="column items-center">
                            <div class="q-my-sm text-bold">Discapacitados</div>
                            <h4 class="q-my-sm" style="color: #5f9ea0">
                              {{ personsAttendedValue[3].counters }}
                            </h4>
                            <div
                              class="column items-center justify-center text-center"
                            >
                              Fueron atendidos por la organizacion Acuario hasta
                              la fecha, lo que equivale al
                              {{
                                personsAttendedValue[3].cumplishmentFormula.value.toFixed(
                                  2
                                )
                              }}% de todas las personas atendidas.
                            </div>
                          </div>
                        </div>
                      </div>

                      <q-separator vertical inset class="q-mx-sm" />

                      <div class="container flex" style="width: 25%">
                        <div class="flex column">
                          <div class="column items-center">
                            <div class="q-my-sm text-bold">P. Indigena</div>
                            <h4 class="q-my-sm" style="color: #3eb137">
                              {{ personsAttendedValue[4].counters }}
                            </h4>
                            <div
                              class="column items-center justify-center text-center"
                            >
                              Fueron atendidos por la organizacion Acuario hasta
                              la fecha, lo que equivale al
                              {{
                                personsAttendedValue[4].cumplishmentFormula.value.toFixed(
                                  2
                                )
                              }}% de todas las personas atendidas.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="q-pa-xs q-mx-md q-mb-lg">
                <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <q-card-section style="margin: 0%; padding: 3%">
                    <Doughnut
                      :data="data6"
                      :options="options"
                      aria-label="Sales figures for the years 2022 to 2024."
                    />
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import {
  Chart as ChartJS,
  //chartJS Elements
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Radar, Doughnut } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

//const colorGrande = ref("");

export default defineComponent({
  name: "chartComponent",
  components: {
    Bar,
    Doughnut,
  },
  props: {
    indicator: {
      type: Object,
      required: true,
      default: () => {},
    },
    colorGrande: String,
    peopleToAssistYearly: Number,
    monthsDataValuesGeneral: Array,
    monthsDataValuesWomen: Array,
    monthsDataValuesMen: Array,
    monthsDataValuesDisabled: Array,
    monthsDataValuesNative: Array,
  },
  beforeMount() {},
  setup() {
    function activate() {
      console.log("me active")
    }

    return {
      //colorGrande,
      dialog: ref(false),
      dataTooltip: {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ],
        datasets: [
          {
            label: "Personas Atendidas en el Periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesGeneral,
          },
        ],
      },

      data1: {
        labels: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ] /*monthsData*/,
        datasets: [
          {
            label: "Personas Atendidas en el Periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesGeneral /*.splice(0, personsAttendedValue[0].monthsDataValuesProjects.length)*/,
            //color: "#486CA1",
          },
          {
            label: "Mujeres Atendidas en el periodo 2023",
            backgroundColor: "#ff4ec1",

            data: monthsDataValuesWomen,
          },
          {
            label: "Hombres Atendidos en el periodo 2023",
            backgroundColor: "#5361f5",
            data: monthsDataValuesMen,
          },
          {
            label: "Discapacitados Atendidos en el periodo 2023",
            backgroundColor: "#5f9ea0",

            data: monthsDataValuesDisabled,
          },
          {
            label: "Indigenas Atendidos en el periodo 2023",
            backgroundColor: "#3eb137",
            data: monthsDataValuesNative,
          },
        ],
      },
      data6: {
        labels: [
          "Mujeres",
          "Hombres",
          "Discapacitados",
          "Poblacion Indigena",
        ] /*monthsData*/,
        datasets: [
          {
            backgroundColor: ["#ff4ec1", "#5361f5", "#5f9ea0", "#3eb137"],
            data: [
              personsAttendedValue[1].counters,
              personsAttendedValue[2].counters,
              personsAttendedValue[3].counters,
              personsAttendedValue[4].counters,
            ] /*.splice(0, monthsDataValuesProjects.length)*/,
            //color: "#486CA1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
});
</script>
