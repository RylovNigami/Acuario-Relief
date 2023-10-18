<template>
  <q-page>
    <div class="row q-mx-lg q-py-xs items-center">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12">
        <h2 style="color: rgb(77, 75, 75); font-style: italic; font-weight: 400;">{{ proyectName }}</h2>
        <h5 style="color: rgb(77, 75, 75); font-style: italic; font-weight: 400;">{{ proyectDescription }}</h5>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12">
        <h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Organizaciones Aliadas:
          <h5 class="row inline" v-for="item in proyectNGOAllies" :key="item.id">{{ item.ngo }},
          </h5>
        </h5>
        <h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Nº Proyectos en curso: {{
          N_Proyects }}
        </h5>
        <h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Personal: {{ proyectWorkTeam }}
          Voluntarios
        </h5>
      </div>
      <div class="row inline items-center justify-center">

        <div class="q-ma-md" id="proyectos">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%;">
              <h5 class="no-margin q-mb-xs column items-center text-bold">Organizaciones
              </h5>
              <div class="flex row">
                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Nacionales</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ NgoNationalAllies }}%</h3>
                      <div class="column items-center wrap justify-center text-center">Organizaciones que prestan ayuda
                        nacional o estatalmente.</div>
                    </div>
                  </div>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Internacionales</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ NgoIntenationalAllies }}%</h3>
                      <div class="column items-center justify-center text-center">Organizaciones que financian y apoyan a
                        Acuario.</div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-ma-md" id="personal">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-my-md q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%;">
              <h5 class="no-margin q-mb-xs column items-center text-bold">Equipo de trabajo
              </h5>
              <div class="flex row">
                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Profesionales</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ workTeamPreparated }}%</h3>
                      <div class="column items-center wrap justify-center text-center">Personal preparado profesional y
                        academicamente.</div>
                    </div>
                  </div>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Capacitados</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ workteamCapitated }}%</h3>
                      <div class="column items-center justify-center text-center">Personal capacitado en distintas areas
                        para el trabajo.</div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-ma-md" id="areas atendidas">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-my-md q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%;">
              <h5 class="no-margin q-mb-xs column items-center text-bold">Proyectos
              </h5>
              <div class="flex row">
                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Registrados</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ rProyects }}%</h3>
                      <div class="column items-center wrap justify-center text-center">Proyectos abscritos y
                        realizados bajo
                        financiamiento de
                        organizaciones mayores.</div>
                    </div>
                  </div>
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="container flex" style="width: 150px; height: 210px">
                  <div class="flex column">
                    <div class="column items-center">
                      <div class="q-my-sm text-bold">Independientes</div>
                      <h3 class="q-my-sm" style="color:cadetblue">{{ iProyects }}%</h3>
                      <div class="column items-center justify-center text-center">Proyectos realizados
                        independientemente por Acuario.</div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-ma-md">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-my-md q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%; height:300px;">
              <Bar :data="data1" :options="options" />
            </q-card-section>
          </q-card>
        </div>
        <div class="q-ma-md">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-my-md q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%; height:300px;">
              <Radar :data="data2" :options="options" />
            </q-card-section>
          </q-card>
        </div>
        <div class="q-ma-md">
          <q-card class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-my-md q-pa-md">
            <q-card-section style="margin: 0%; padding: 0%; height:300px;">
              <PolarArea :data="data3" :options="options" />
            </q-card-section>
          </q-card>
        </div>

        <!--botones para analizar xlsx-->

        <div class="q-ma-md row inline items-center justify-center">
          <q-form @submit="onSubmit" class="q-gutter-md q-pa-md col-md-12">
            <q-file bg-color="green" color="white" standout name="5w_file" v-model="file" filled
              label="Subir Informe (.xlsx)">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>

            <q-file bg-color="green" color="white" name="5w_files" v-model="files" filled multiple use-chips
              label="Subir multiples Informes (.xlsx)">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>

            <div class="">
              <q-btn label="Submit" type="submit" color="primary" />
            </div>
          </q-form>

          <q-card v-if="submitted" flat bordered class="q-mt-md" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'">
            <template v-if="submitEmpty">
              <q-card-section>
                Submitted form contains empty formData.
              </q-card-section>
            </template>
            <template v-else>
              <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
              <q-separator />
              <q-card-section class="row q-gutter-sm items-center">
                <div v-for="(item, index) in submitResult" :key="index"
                  class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap">{{ item.name
                  }} = {{ item.value }}</div>
              </q-card-section>
            </template>
          </q-card>
        </div>
      </div>
    </div>

    <div class="flex-row sticky-bottom">
      <section class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <q-separator class="q-mx-lg" />
        <div class="custom-caption text-overline"
          style="text-align:center; color: grey; line-height:1rem; margin-bottom: 5px;">
          Luis Méndez, Anyelit Figuera, Cesar González <br>
          Cumaná, Sucre, Venezuela <br>
          2023
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
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
  Filler
} from 'chart.js'
import { Bar, Radar, PolarArea } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'
//import { excelToJson } from 'convert-excel-to-json'

ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

export default defineComponent({
  name: 'IndexPage , App',
  components: {
    Bar, Radar, PolarArea,
  },
  setup() {
    //elementos reactivos de back para retornar del proyecto/organizacion
    const proyectName = ref('Estadisticas de Acuario')
    const proyectDescription = ref('A continuacion de mostraran datos acerca de las actividades realizadas recientemente por Acuario')
    const proyectType = ref('Tipo')
    const proyectPoblation = ref(0)
    const proyectNGOAllies = ref([
      { ngo: 'nombre1' }, { ngo: 'nombre2' }, { ngo: 'nombre3' }
    ])
    const NgoIntenationalAllies = ref(20)
    const NgoNationalAllies = ref(80)
    const proyectFinancing = ref(0)
    const proyectAttendedComunity = ref(0)

    const rProyects = ref(20)
    const iProyects = ref(80)
    const N_Proyects = ref(10)

    const proyectWorkTeam = ref(200)
    const workteamCapitated = ref(50)
    const workTeamPreparated = ref(50)

    //convert-excel-to-json
    const file = ref(null)
    const files = ref(null)

    //datos de la funcion para subir elementos de xlsx
    const submitted = ref(false)
    const submitEmpty = ref(false)
    const submitResult = ref([])

    // expose the ref to the template
    return {
      //elementos reactivos a retornar de datos del back
      proyectName,
      proyectDescription,
      proyectType,
      proyectFinancing,
      proyectNGOAllies,
      proyectPoblation,
      proyectAttendedComunity,
      rProyects,
      iProyects,
      N_Proyects,
      proyectWorkTeam,
      workTeamPreparated,
      workteamCapitated,
      NgoIntenationalAllies,
      NgoNationalAllies,

      //elementos a retornar de la funcion para subir xlsx

      submitted,
      submitEmpty,
      submitResult,

      files,
      file,

      onSubmit(evt) {
        const formData = new FormData(evt.target)
        console.log(formData)
        const data = []

        for (const [name, value] of formData.entries()) {
          if (value.name.length > 0) {
            data.push({
              name,
              value: value.name
            })
          }
        }

        submitted.value = true
        submitResult.value = data
        submitEmpty.value = data.length === 0
        console.log(data)
        console.log(file)
      }

    }
  },
  data() {
    return {
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
        ],
        datasets: [
          {
            label: "Proyectos",
            backgroundColor: "#486CA1",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 98],
            color: "#486CA1",
          },
        ],
      },
      data2: {
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
            label: "Proyectos",
            backgroundColor: "#486CA1",
            data: [40, 20, 12, 49, 10, 40, 39, 80, 40, 20, 12, 98],
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
          },
          {
            label: "Personal",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 59, 96, 27, 100, 22, 66, 95, 24, 56],
          },
        ],
      },
      data3: {
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
            label: "Proyectos",
            backgroundColor: "#486CA1",
            data: [40, 20, 12, 49, 10, 40, 39, 80, 40, 20, 12, 98],
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
          },
          {
            label: "Personal",
            backgroundColor: "rgba(255,99,132,0.2)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 59, 96, 27, 100, 22, 66, 95, 24, 56],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  computed() {
  },
  watcher() {
    console.log(setup.file)
  }
}
)
</script>
