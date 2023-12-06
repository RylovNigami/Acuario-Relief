<template>
  <q-page>
    <div class="flex row q-mx-xl q-py-xs flex-center">
      <div class="q-container">
        <div class="row inline">
          <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 text-center q-my-md">
            <h2 style="color: rgb(77, 75, 75); font-style: italic; font-weight: 400;">{{ proyectName }}
            </h2>
            <h5 style="color: rgb(77, 75, 75); font-style: italic; font-weight: 400;">{{ proyectDescription }}.</h5>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 q-my-md column items-center">
            <img src="/Logo-acuario-11-09-2023.png" style="max-height:264px" />
            <!--<h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Organizaciones Aliadas:
          <h5 class="row inline" v-for="item in proyectNGOAllies" :key="item.id">{{ item.ngo }},
          </h5>
        </h5>
        <h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Nº Proyectos en curso: {{
          N_Proyects }}
        </h5>
        <h5 style="color: rgb(77, 75, 75); font-weight: 400; text-align: end;"> Personal: {{ proyectWorkTeam }}
          Voluntarios
        </h5>-->
          </div>
        </div>
      </div>
    </div>

    <div class="flex row q-mx-lg q-py-xs flex-center" id="indicadores">
      <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-pa-lg">
        <q-card-section style="margin: 1%; padding: 0%;">
          <h5 class="no-margin q-mb-xs text-bold" style="text-align: center;">Indicadores
          </h5>
          <div class="items-right justify-right"><q-select borderless style="width: 20%;" v-model="model"
              :options="options1" label="Margen de tiempo" /></div>

          <hr>
          <div class="q-my-sm text-bold">Reclamos</div>
          <div class="progress">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador + '%' }" :class="color" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel">
                  -
                  <div class="flex flex-end" v-if="(contador <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="q-my-sm text-bold">Sugerencias</div>
          <div class="progress" style="">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador2 + '%' }" :class="color2" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel2">
                  -
                  <div class="flex flex-end" v-if="(contador2 <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador2 < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador2 >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="q-my-sm text-bold">Comentarios</div>
          <div class="progress" style="">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador3 + '%' }" :class="color3" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel3">
                  -
                  <div class="flex flex-end" v-if="(contador3 <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador3 < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador3 >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="q-my-sm text-bold">Denuncias</div>
          <div class="progress" style="">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador4 + '%' }" :class="color4" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel4">
                  -
                  <div class="flex flex-end" v-if="(contador4 <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador4 < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador4 >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="q-my-sm text-bold">Quejas</div>
          <div class="progress" style="">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador5 + '%' }" :class="color5" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel5">
                  -
                  <div class="flex flex-end" v-if="(contador5 <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador5 < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador5 >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="q-my-sm text-bold">Inquietudes</div>
          <div class="progress" style="">
            <div class="progress-bar column items-center justify-center" role="progressbar"
              :style="{ 'width': contador6 + '%' }" :class="color6" style="border-radius: 20px">
              <div class="inline-flex flex-center q-my-xs">
                <q-badge color="white" text-color="black" :label="progressLabel6">
                  -
                  <div class="flex flex-end" v-if="(contador6 <= 30)">
                    <q-badge color="white" text-color="black" label="Bien" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador6 < 70)">
                    <q-badge color="white" text-color="black" label="Regular" />
                  </div>
                  <div class="flex flex-end" v-else-if="(contador6 >= 70)">
                    <q-badge color="white" text-color="black" label="Mal" />
                  </div>
                </q-badge>
              </div>
            </div>
          </div>
          <br>
          <hr>
          <div class="row justify-center items-center">
            <div class="">
              <q-btn @click="randomize">Prueba</q-btn>
            </div>
            <!--<div>
                  <button class="btn btn-primary" @click="contador++">+</button>
                </div>
                <div>
                  <button class="btn btn-danger" @click="contador--">-</button>
                </div>-->
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="flex row q-mx-lg q-py-xs items-center justify-between">
      <div class="q-container q-my-md" id="proyectos">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm ">
          <q-card-section style="margin: 0%; padding: 0%;">
            <h5 class="no-margin q-mb-xs column items-center text-bold">Organizaciones
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Nacionales</div>
                    <h3 class="q-my-sm" style="color:cadetblue">{{ NgoNationalAllies }}%</h3>
                    <div class="column items-center wrap justify-center text-center">Organizaciones que prestan ayuda
                      nacional o estatalmente.</div>
                  </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Internacionales</div>
                    <h3 class="q-my-sm" style="color:cadetblue">{{ NgoIntenationalAllies }}%</h3>
                    <div class="column items-center justify-center text-center">Organizaciones que financian y apoyan
                      a
                      Acuario.</div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-container q-my-md" id="personal">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm ">
          <q-card-section style="margin: 0%; padding: 0%;">
            <h5 class="no-margin q-mb-xs column items-center text-bold">Equipo de trabajo
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Profesionales</div>
                    <h3 class="q-my-sm" style="color:cadetblue">{{ workTeamPreparated }}%</h3>
                    <div class="column items-center wrap justify-center text-center">Personal preparado profesional y
                      academicamente.</div>
                  </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
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

      <div class="q-container q-my-md" id="areas atendidas">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm">
          <q-card-section style="margin: 0%; padding: 0%;">
            <h5 class="no-margin q-mb-xs column items-center text-bold">Proyectos
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
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

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
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
    </div>

    <div class="flex row q-mx-lg q-py-xs items-center justify-between">
      <div class="">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm" style="width: 355px;">
          <q-card-section style="margin: 3%; padding: 0%; height:300px;">
            <Bar :data="data1" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm" style="width: 355px;">
          <q-card-section style="margin: 3%; padding: 0%; height:300px;">
            <Radar :data="data2" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm" style="width: 355px;">
          <q-card-section style="margin: 3%; padding: 0%; height:300px;">
            <PolarArea :data="data3" :options="options" />
          </q-card-section>
        </q-card>
      </div>
    </div>


    <!--botones para analizar xlsx-->
    <div class="flex row q-mx-xl q-py-xs flex-center">
      <div class="q-container">
        <div class="flex row">
          <div class="q-my-md">
            <q-form @submit="onSubmit"
              class="flex column items-center justify-center q-pa-md q-gutter-md col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <q-file bg-color="green" type="file" id="input" color="white" standout name="5w_file" v-model="file" filled
                label="Subir Informe (.xlsx)">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>

              <!--<q-file bg-color="green" color="white" name="5w_files" v-model="files" filled multiple use-chips
              label="Subir multiples Informes (.xlsx)">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>-->

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
                  <q-table title="datos" :submitResult="submitResult" />
                  <!--<div v-for="(item, index) in submitResult" :key="index"
                  class="q-px-sm q-py-xs bg-grey-8 text-white borders text-center text-no-wrap">{{ item.name
                  }} = {{ item.value }}</div>-->
                </q-card-section>
              </template>
            </q-card>
          </div>
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
import { reactive, computed } from 'vue'
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
import readXlsxFile from 'read-excel-file'
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

    const contador = ref(0)
    const contador2 = ref(0)
    const contador3 = ref(0)
    const contador4 = ref(0)
    const contador5 = ref(0)
    const contador6 = ref(0)
    const color = computed(() => ({
      'bg-green': contador.value < 30,
      'bg-warning': contador.value >= 30 && contador.value < 70,
      'bg-red': contador.value >= 70
    }))
    const color2 = computed(() => ({
      'bg-green': contador2.value < 30,
      'bg-warning': contador2.value >= 30 && contador2.value < 70,
      'bg-red': contador2.value >= 70
    }))
    const color3 = computed(() => ({
      'bg-green': contador3.value < 30,
      'bg-warning': contador3.value >= 30 && contador3.value < 70,
      'bg-red': contador3.value >= 70
    }))
    const color4 = computed(() => ({
      'bg-green': contador4.value < 30,
      'bg-warning': contador4.value >= 30 && contador4.value < 70,
      'bg-red': contador4.value >= 70
    }))
    const color5 = computed(() => ({
      'bg-green': contador5.value < 30,
      'bg-warning': contador5.value >= 30 && contador5.value < 70,
      'bg-red': contador5.value >= 70
    }))
    const color6 = computed(() => ({
      'bg-green': contador6.value < 30,
      'bg-warning': contador6.value >= 30 && contador6.value < 70,
      'bg-red': contador6.value >= 70
    }))


    //convert-excel-to-json
    const file = ref(null)
    //const files = ref(null)

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
      contador,
      contador2,
      contador3,
      contador4,
      contador5,
      contador6,
      randomize(min, max) {
        min = Math.ceil(0);
        max = Math.floor(100);
        contador.value = Math.floor(Math.random() * (max - min) + min);
        contador2.value = Math.floor(Math.random() * (max - min) + min);
        contador3.value = Math.floor(Math.random() * (max - min) + min);
        contador4.value = Math.floor(Math.random() * (max - min) + min);
        contador5.value = Math.floor(Math.random() * (max - min) + min);
        contador6.value = Math.floor(Math.random() * (max - min) + min);
      },
      color,
      color2,
      color3,
      color4,
      color5,
      color6,
      progressLabel: computed(() => contador.value + '%'),
      progressLabel2: computed(() => contador2.value + '%'),
      progressLabel3: computed(() => contador3.value + '%'),
      progressLabel4: computed(() => contador4.value + '%'),
      progressLabel5: computed(() => contador5.value + '%'),
      progressLabel6: computed(() => contador6.value + '%'),

      //elementos a retornar de la funcion para subir xlsx

      submitted,
      submitEmpty,
      submitResult,

      //files,
      file,

      onSubmit() {
        const formData = file.value
        //console.log(formData)
        //console.log(file)
        //console.log(file.value)
        const data = []
        readXlsxFile(formData).then((rows) => {
          console.log(rows, 'es este')
          data.push(rows)
          //submitResult.value = rows;
        });
        //

        /*for (const [name, value] of formData.entries()) {
          if (value.name.length > 0) {
            data.push({
              name,
              value: value.name
            })
          }
        }*/

        submitted.value = true
        submitResult.value = data
        submitEmpty.value = data.length === 0

        console.log(data, 'esto es data')
        console.log(file, 'esto es file')
      },
      model: ref(null),
      options1: [
        'Día', 'Semana', 'Mes', 'Año'
      ]

    }
  },
  data() {
    return {
      elements: () => ({
        items: [],
      }),
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
  }
}
)
</script>
