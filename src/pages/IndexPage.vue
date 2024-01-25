<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="Pagina Principal" label="Pagina Principal" />
      <q-tab
        v-for="reference in clusterList"
        :key="reference.cluster"
        :name="reference.cluster.value"
        :label="reference.cluster.value"
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Pagina Principal">
        <div class="flex row q-mx-xl q-py-xs flex-center">
          <div class="q-container">
            <div class="row inline">
              <div
                class="col-xs-12 col-sm-12 col-md-7 col-lg-7 text-center q-my-md"
              >
                <h2
                  style="
                    color: rgb(77, 75, 75);
                    font-style: italic;
                    font-weight: 400;
                  "
                >
                  {{ proyectName }}
                </h2>
                <h5
                  style="
                    color: rgb(77, 75, 75);
                    font-style: italic;
                    font-weight: 400;
                  "
                >
                  {{ proyectDescription }}.
                </h5>
              </div>
              <div
                class="col-xs-12 col-sm-12 col-md-5 col-lg-5 q-my-md column items-center"
              >
                <img
                  src="/Logo-acuario-11-09-2023.png"
                  style="max-height: 264px"
                />
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
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-md column items-center"
              >
                <h5
                  class="no-margin q-mb-xs text-bold"
                  style="text-align: center"
                >
                  Indicadores
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class="flex row q-mx-lg q-py-xs flex-center" id="indicadores">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <q-card class="q-pa-lg">
              <q-card-section style="margin: 0%; padding: 0%">
                <div class="">
                  <q-select
                    borderless
                    style="width: 20%"
                    v-model="model"
                    :options="options1"
                    label="Margen de tiempo"
                  />
                </div>
                <div class="flex row">
                  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <q-card class="q-pa-lg q-ma-xs">
                      <div
                        class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        v-for="indicators in mailboxIndicators"
                        :key="indicators.id"
                      >
                        <div class="q-my-sm text-bold">
                          {{ indicators.title }}
                        </div>
                        <div class="progress" style="">
                          <div
                            class="progress-bar column items-center justify-center"
                            role="progressbar"
                            :style="{ width: indicators.counters.value + '%' }"
                            :class="indicators.colours.value"
                            style="border-radius: 20px"
                          >
                            <div
                              class="inline-flex flex-center q-my-xs text-white"
                              style="text-shadow: 1px 1px black"
                            >
                              <q-badge
                                style="font-size: 15px; font-weight: bold"
                                color="transparent"
                                :label="indicators.counters.value + '%'"
                              >
                                -
                                <div
                                  class="flex"
                                  v-if="indicators.counters.value <= 30"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Bien"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                                <div
                                  class="flex"
                                  v-else-if="indicators.counters.value < 70"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Regular"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                                <div
                                  class="flex"
                                  v-else-if="indicators.counters.value >= 70"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Mal"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                              </q-badge>
                            </div>
                          </div>
                        </div>
                        <hr class="q-my-md" />
                      </div>
                    </q-card>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <q-card class="q-pa-lg q-ma-xs">
                      <div
                        class="flex row"
                        style="text-shadow: 1px 1px rgb(0, 0, 0)"
                      >
                        <div
                          class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          v-for="indicators in projectsValue"
                          :key="indicators.id"
                        >
                          <q-card class="q-ma-xs">
                            <q-card-section
                              class="text-white"
                              :class="indicators.colours.value"
                            >
                              <div class="text-subtitle1 text-bold">
                                {{ indicators.title }}
                              </div>
                              <div class="text-h5" style="text-align: end">
                                {{
                                  indicators.counters.value + "/" + totalValue
                                }}
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </q-card>
                  </div>
                </div>
                <br />
                <div class="row justify-center items-center">
                  <div class="">
                    <q-btn @click="randomize">Prueba</q-btn>
                  </div>
                  <div class="">
                    <q-btn @click="display">ver resolucion</q-btn>
                  </div>
                  <!--<div>
                  <button class="btn btn-primary" @click="contador++">+</button>
                </div>
                <div>
                  <button class="btn btn-danger" @click="contador--">-</button>
                </div>-->
                </div>
                <div class="">{{ screendisplay }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel
        v-for="reference in clusterList"
        :key="reference.cluster.value"
        :name="reference.cluster.value"
      >
        <div class="flex row q-mx-xl q-py-xs flex-center">
          <div class="q-container">
            <div class="row inline">
              <div
                class="col-xs-12 col-sm-12 col-md-7 col-lg-7 text-center q-my-md"
              >
                <h2
                  style="
                    color: rgb(77, 75, 75);
                    font-style: italic;
                    font-weight: 400;
                  "
                >
                  {{ reference.title }}
                </h2>
                <h5
                  style="
                    color: rgb(77, 75, 75);
                    font-style: italic;
                    font-weight: 400;
                  "
                >
                  {{ reference.caption }}.
                </h5>
              </div>
              <div
                class="col-xs-12 col-sm-12 col-md-5 col-lg-5 q-my-md column items-center"
              >
                <img
                  v-if="reference.cluster.value === 'Seguridad Alimentaria'"
                  src="/7757761.png"
                  style="max-height: 264px"
                />
                <img
                  v-if="reference.cluster.value === 'Educación'"
                  src="/image_processing20220416-11036-toi50p.png"
                  style="max-height: 264px"
                />
                <img
                  v-if="reference.cluster.value === 'Salud'"
                  src="/2689945.png"
                  style="max-height: 264px"
                />
                <img
                  v-if="reference.cluster.value === 'Saneamiento'"
                  src="/wash-hands-icon-png_6023dcc6ad445.png"
                  style="max-height: 264px"
                />

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
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-md column items-center"
              >
                <h5
                  class="no-margin q-mb-xs text-bold"
                  style="text-align: center"
                >
                  Indicadores
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class="flex row q-mx-lg q-py-xs flex-center" id="indicadores">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <q-card class="q-pa-lg">
              <q-card-section style="margin: 0%; padding: 0%">
                <div class="">
                  <q-select
                    borderless
                    style="width: 20%"
                    v-model="model"
                    :options="options1"
                    label="Margen de tiempo"
                  />
                </div>
                <div class="flex row">
                  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <q-card class="q-pa-lg q-ma-xs">
                      <div
                        class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        v-for="indicators in mailboxIndicators"
                        :key="indicators.id"
                      >
                        <div class="q-my-sm text-bold">
                          {{ indicators.title }}
                        </div>
                        <div class="progress" style="">
                          <div
                            class="progress-bar column items-center justify-center"
                            role="progressbar"
                            :style="{ width: indicators.counters.value + '%' }"
                            :class="indicators.colours.value"
                            style="border-radius: 20px"
                          >
                            <div
                              class="inline-flex flex-center q-my-xs text-white"
                              style="text-shadow: 1px 1px black"
                            >
                              <q-badge
                                style="font-size: 15px; font-weight: bold"
                                color="transparent"
                                :label="indicators.counters.value + '%'"
                              >
                                -
                                <div
                                  class="flex"
                                  v-if="indicators.counters.value <= 30"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Bien"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                                <div
                                  class="flex"
                                  v-else-if="indicators.counters.value < 70"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Regular"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                                <div
                                  class="flex"
                                  v-else-if="indicators.counters.value >= 70"
                                >
                                  <q-badge
                                    color="transparent"
                                    label="Mal"
                                    style="font-size: 15px; font-weight: bold"
                                  />
                                </div>
                              </q-badge>
                            </div>
                          </div>
                        </div>
                        <hr class="q-my-md" />
                      </div>
                    </q-card>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <q-card class="q-pa-lg q-ma-xs">
                      <div
                        class="flex row"
                        style="text-shadow: 1px 1px rgb(0, 0, 0)"
                      >
                        <div
                          class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          v-for="indicators in projectsValue"
                          :key="indicators.id"
                        >
                          <q-card class="q-ma-xs">
                            <q-card-section
                              class="text-white"
                              :class="indicators.colours.value"
                            >
                              <div class="text-subtitle1 text-bold">
                                {{ indicators.title }}
                              </div>
                              <div class="text-h5" style="text-align: end">
                                {{
                                  indicators.counters.value + "/" + totalValue
                                }}
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </q-card>
                  </div>
                </div>
                <br />
                <div class="row justify-center items-center">
                  <div class="">
                    <q-btn @click="randomize">Prueba</q-btn>
                  </div>
                  <div class="">
                    <q-btn @click="display">ver resolucion</q-btn>
                  </div>
                  <!--<div>
                  <button class="btn btn-primary" @click="contador++">+</button>
                </div>
                <div>
                  <button class="btn btn-danger" @click="contador--">-</button>
                </div>-->
                </div>
                <div class="">{{ screendisplay }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <div class="flex row q-mx-xl q-py-xs flex-center">
      <div class="q-container">
        <div class="row inline">
          <div
            class="col-xs-12 col-sm-12 col-md-7 col-lg-7 text-center q-my-md"
          >
            <h2
              style="
                color: rgb(77, 75, 75);
                font-style: italic;
                font-weight: 400;
              "
            >
              {{ proyectName }}
            </h2>
            <h5
              style="
                color: rgb(77, 75, 75);
                font-style: italic;
                font-weight: 400;
              "
            >
              {{ proyectDescription }}.
            </h5>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-5 col-lg-5 q-my-md column items-center"
          >
            <img src="/Logo-acuario-11-09-2023.png" style="max-height: 264px" />
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
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-md column items-center"
          >
            <h5 class="no-margin q-mb-xs text-bold" style="text-align: center">
              Indicadores
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div class="flex row q-mx-lg q-py-xs flex-center" id="indicadores">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <q-card class="q-pa-lg">
          <q-card-section style="margin: 0%; padding: 0%">
            <div class="">
              <q-select
                borderless
                style="width: 20%"
                v-model="model"
                :options="options1"
                label="Margen de tiempo"
              />
            </div>
            <div class="flex row">
              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <q-card class="q-pa-lg q-ma-xs">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    v-for="indicators in mailboxIndicators"
                    :key="indicators.id"
                  >
                    <div class="q-my-sm text-bold">
                      {{ indicators.title }}
                    </div>
                    <div class="progress" style="">
                      <div
                        class="progress-bar column items-center justify-center"
                        role="progressbar"
                        :style="{ width: indicators.counters.value + '%' }"
                        :class="indicators.colours.value"
                        style="border-radius: 20px"
                      >
                        <div
                          class="inline-flex flex-center q-my-xs text-white"
                          style="text-shadow: 1px 1px black"
                        >
                          <q-badge
                            style="font-size: 15px; font-weight: bold"
                            color="transparent"
                            :label="indicators.counters.value + '%'"
                          >
                            -
                            <div
                              class="flex"
                              v-if="indicators.counters.value <= 30"
                            >
                              <q-badge
                                color="transparent"
                                label="Bien"
                                style="font-size: 15px; font-weight: bold"
                              />
                            </div>
                            <div
                              class="flex"
                              v-else-if="indicators.counters.value < 70"
                            >
                              <q-badge
                                color="transparent"
                                label="Regular"
                                style="font-size: 15px; font-weight: bold"
                              />
                            </div>
                            <div
                              class="flex"
                              v-else-if="indicators.counters.value >= 70"
                            >
                              <q-badge
                                color="transparent"
                                label="Mal"
                                style="font-size: 15px; font-weight: bold"
                              />
                            </div>
                          </q-badge>
                        </div>
                      </div>
                    </div>
                    <hr class="q-my-md" />
                  </div>
                </q-card>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <q-card class="q-pa-lg q-ma-xs">
                  <div
                    class="flex row"
                    style="text-shadow: 1px 1px rgb(0, 0, 0)"
                  >
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].servedPeople.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (general)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].servedPeople.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].servedPeopleWomen.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (Mujeres)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].servedPeopleWomen.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].servedPeopleMen.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (Hombres)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].servedPeopleMen.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].servedPeopleDisabled.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (Discapacitados)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].servedPeopleDisabled.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].servedPeopleNative.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (Indigena)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].servedPeopleNative.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div
                      class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                      v-if="clusterList[0].boys6to11.value !== 0"
                    >
                      <q-card class="q-ma-xs">
                        <q-card-section
                          :class="
                            clusterList[0].boys6to11.value <= 30
                              ? 'bg-green text-white'
                              : 'bg-red text-white'
                          "
                        >
                          <!--aqui hay que probar-->
                          <div class="text-subtitle1 text-bold">
                            Personas Atendidas (niños 6 a 11)
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{
                              clusterList[0].boys6to11.value +
                              "/" +
                              clusterList[0].servedPeople.value
                            }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>
                    <!--div
                      class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                      v-for="indicators in projectsValue"
                      :key="indicators.id"
                    >
                      <q-card class="q-ma-xs">
                        <q-card-section
                          class="text-white"
                          :class="indicators.colours.value"
                        >

                          <div class="text-subtitle1 text-bold">
                            {{ indicators.title }}
                          </div>
                          <div class="text-h5" style="text-align: end">
                            {{ indicators.counters.value + "/" + totalValue }}
                          </div>
                        </q-card-section>
                      </q-card>
                    </div-->
                  </div>
                </q-card>
              </div>
            </div>
            <br />
            <div class="row justify-center items-center">
              <div class="">
                <q-btn @click="randomize">Prueba</q-btn>
              </div>
              <div class="">
                <q-btn @click="display">ver resolucion</q-btn>
              </div>
              <!--<div>
                  <button class="btn btn-primary" @click="contador++">+</button>
                </div>
                <div>
                  <button class="btn btn-danger" @click="contador--">-</button>
                </div>-->
            </div>
            <div class="">{{ screendisplay }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="flex row q-mx-lg q-py-xs items-center justify-between">
      <div class="q-container q-my-md" id="proyectos">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm">
          <q-card-section style="margin: 0%; padding: 0%">
            <h5 class="no-margin q-mb-xs column items-center text-bold">
              Organizaciones
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Nacionales</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ NgoNationalAllies }}%
                    </h3>
                    <div
                      class="column items-center wrap justify-center text-center"
                    >
                      Organizaciones que prestan ayuda nacional o estatalmente.
                    </div>
                  </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Internacionales</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ NgoIntenationalAllies }}%
                    </h3>
                    <div class="column items-center justify-center text-center">
                      Organizaciones que financian y apoyan a Acuario.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-container q-my-md" id="personal">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm">
          <q-card-section style="margin: 0%; padding: 0%">
            <h5 class="no-margin q-mb-xs column items-center text-bold">
              Equipo de trabajo
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Profesionales</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ workTeamPreparated }}%
                    </h3>
                    <div
                      class="column items-center wrap justify-center text-center"
                    >
                      Personal preparado profesional y academicamente.
                    </div>
                  </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Capacitados</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ workteamCapitated }}%
                    </h3>
                    <div class="column items-center justify-center text-center">
                      Personal capacitado en distintas areas para el trabajo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-container q-my-md" id="areas atendidas">
        <q-card class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-sm">
          <q-card-section style="margin: 0%; padding: 0%">
            <h5 class="no-margin q-mb-xs column items-center text-bold">
              Proyectos
            </h5>
            <div class="flex row no-wrap">
              <div class="container flex" style="width: 168px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Registrados</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ rProyects }}%
                    </h3>
                    <div
                      class="column items-center wrap justify-center text-center"
                    >
                      Proyectos abscritos y realizados bajo financiamiento de
                      organizaciones mayores.
                    </div>
                  </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-sm" />

              <div class="container flex" style="width: 155px; height: 210px">
                <div class="flex column">
                  <div class="column items-center">
                    <div class="q-my-sm text-bold">Independientes</div>
                    <h3 class="q-my-sm" style="color: cadetblue">
                      {{ iProyects }}%
                    </h3>
                    <div class="column items-center justify-center text-center">
                      Proyectos realizados independientemente por Acuario.
                    </div>
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
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
            <Bar :data="data1" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
            <Radar :data="data2" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
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
            <q-form
              @submit="onSubmit"
              class="flex column items-center justify-center q-pa-md q-gutter-md col-xs-12 col-sm-12 col-md-12 col-lg-12"
            >
              <q-file
                bg-color="green"
                type="file"
                id="input"
                color="white"
                standout
                name="5w_file"
                v-model="file"
                filled
                label="Subir Informe (.xlsx)"
              >
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

            <q-card
              v-if="submitted"
              flat
              bordered
              class="q-mt-md"
              :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
            >
              <template v-if="submitEmpty">
                <q-card-section>
                  Submitted form contains empty formData.
                </q-card-section>
              </template>
              <template v-else>
                <q-card-section
                  >Submitted form contains the following formData (key =
                  value):</q-card-section
                >
                <q-separator />
                <q-card-section class="row q-gutter-sm items-center">
                  <q-table title="datos" :submitResult="submitResult" />
                  <div
                    v-for="(item, index) in submitResult"
                    :key="index"
                    class="q-px-sm q-py-xs bg-grey-8 text-white borders text-center text-no-wrap"
                  >
                    {{ index.name }} = {{ index.value }}
                  </div>
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
        <div
          class="custom-caption text-overline"
          style="
            text-align: center;
            color: grey;
            line-height: 1rem;
            margin-bottom: 5px;
          "
        >
          Luis Méndez, Anyelit Figuera, Cesar González <br />
          Cumaná, Sucre, Venezuela <br />
          2023
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { reactive, computed } from "vue";
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
import { Bar, Radar, PolarArea } from "vue-chartjs";
import * as chartConfig from "./chartConfig.ts";
import readXlsxFile from "read-excel-file";
import { date } from "quasar";
import axios from "axios";
//import { excelToJson } from 'convert-excel-to-json'

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

const clusterList = [
  {
    title: ref("Conocimiento de el área nutricional en sucre"),
    caption: ref(
      "talleres acerca del valor nutricional en alimentos para niños en desarrollo"
    ),
    //icon: ref("food-fork-drink"),
    cluster: ref("Seguridad Alimentaria"),

    //generales
    servedPeople: ref(20),
    servedPeopleDisabled: ref(0),
    servedPeopleNative: ref(0),
    servedPeopleWomen: ref(15),
    servedPeopleMen: ref(5),

    //seguridad alimentaria pero pueede ser general
    servedHomes: ref(0),
    servedCenters: ref(1),

    //saneamiento y seguridad alimentaria
    washReport: ref(""),
    foodReport: ref("12/1/2024"),

    boys0to17: ref(2),
    girls0to17: ref(3),
    men18to59: ref(3),
    women18to59: ref(10),
    //educacion tambien
    men60orOlder: ref(0),
    women60orOlder: ref(2),

    //salud
    healthReport: ref(""),
    boys0to5: ref(0),
    girls0to5: ref(0),
    boys6to19: ref(0),
    girls6to19: ref(0),
    men20to64: ref(0),
    women20to64: ref(0),
    men65orOlder: ref(0),
    women65orOlder: ref(0),

    //educacion
    educationReport: ref(""),
    boys0to2: ref(0),
    girls0to2: ref(0),
    boys3to5: ref(0),
    girls3to5: ref(0),
    boys6to11: ref(0),
    girls6to11: ref(0),
    boys12to17: ref(0),
    girls12to17: ref(0),
    boys18to19: ref(0),
    girls18to19: ref(0),
    men20to59: ref(0),
    women20to59: ref(0),
  },
  {
    title: ref("Preparación para la vida en el área laboral"),
    caption: ref(
      "talleres acerca de las adversidades que manejan las personas en la vida diaria"
    ),
    //icon: ref("school"),
    cluster: ref("Educación"),

    //generales
    servedPeople: ref(100),
    servedPeopleDisabled: ref(3),
    servedPeopleNative: ref(2),
    servedPeopleWomen: ref(47),
    servedPeopleMen: ref(53),

    //seguridad alimentaria pero pueede ser general
    servedHomes: ref(0),
    servedCenters: ref(1),

    //saneamiento y seguridad alimentaria
    washReport: ref(""),
    foodReport: ref(""),

    boys0to17: ref(2),
    girls0to17: ref(3),
    men18to59: ref(3),
    women18to59: ref(10),
    //educacion tambien
    men60orOlder: ref(15),
    women60orOlder: ref(5),

    //salud
    healthReport: ref(""),
    boys0to5: ref(0),
    girls0to5: ref(0),
    boys6to19: ref(0),
    girls6to19: ref(0),
    men20to64: ref(0),
    women20to64: ref(0),
    men65orOlder: ref(0),
    women65orOlder: ref(0),

    //educacion
    educationReport: ref("12/1/2024"),
    boys0to2: ref(0),
    girls0to2: ref(0),
    boys3to5: ref(0),
    girls3to5: ref(0),
    boys6to11: ref(0),
    girls6to11: ref(0),
    boys12to17: ref(10),
    girls12to17: ref(2),
    boys18to19: ref(10),
    girls18to19: ref(8),
    men20to59: ref(28),
    women20to59: ref(22),
  },
  {
    title: ref("Jornada de esterilización femenina y masculina"),
    caption: ref(
      "jornada donde se aplicarán procesos quirúrgicos de estrilización para hombres y mujeres"
    ),
    //icon: ref("hospital-building"),
    cluster: ref("Salud"),

    //generales
    servedPeople: ref(50),
    servedPeopleDisabled: ref(0),
    servedPeopleNative: ref(0),
    servedPeopleWomen: ref(35),
    servedPeopleMen: ref(15),

    //seguridad alimentaria pero pueede ser general
    servedHomes: ref(0),
    servedCenters: ref(1),

    //saneamiento y seguridad alimentaria
    washReport: ref(""),
    foodReport: ref(""),

    boys0to17: ref(0),
    girls0to17: ref(0),
    men18to59: ref(0),
    women18to59: ref(0),
    //educacion tambien
    men60orOlder: ref(0),
    women60orOlder: ref(0),

    //salud
    healthReport: ref("12/1/2024"),
    boys0to5: ref(0),
    girls0to5: ref(0),
    boys6to19: ref(0),
    girls6to19: ref(0),
    men20to64: ref(15),
    women20to64: ref(35),
    men65orOlder: ref(0),
    women65orOlder: ref(0),

    //educacion
    educationReport: ref("12/1/2024"),
    boys0to2: ref(0),
    girls0to2: ref(0),
    boys3to5: ref(0),
    girls3to5: ref(0),
    boys6to11: ref(0),
    girls6to11: ref(0),
    boys12to17: ref(10),
    girls12to17: ref(2),
    boys18to19: ref(10),
    girls18to19: ref(8),
    men20to59: ref(28),
    women20to59: ref(22),
  },
  {
    title: ref(
      "Jornada de limpieza en instituciones públicas del área de Cariaco"
    ),
    caption: ref(
      "jornadas donde se harán servicios de limpieza, estrilización de ambientes, reorganización"
    ),
    //icon: ref("hand-wash"),
    cluster: ref("Saneamiento"),

    //generales
    servedPeople: ref(300),
    servedPeopleDisabled: ref(20),
    servedPeopleNative: ref(15),
    servedPeopleWomen: ref(186),
    servedPeopleMen: ref(114),

    //seguridad alimentaria pero pueede ser general
    servedHomes: ref(0),
    servedCenters: ref(4),

    //saneamiento y seguridad alimentaria
    washReport: ref("12/1/2024"),
    foodReport: ref(""),

    boys0to17: ref(87),
    girls0to17: ref(121),
    men18to59: ref(24),
    women18to59: ref(43),
    //educacion tambien
    men60orOlder: ref(3),
    women60orOlder: ref(22),

    //salud
    healthReport: ref("12/1/2024"),
    boys0to5: ref(0),
    girls0to5: ref(0),
    boys6to19: ref(0),
    girls6to19: ref(0),
    men20to64: ref(15),
    women20to64: ref(35),
    men65orOlder: ref(0),
    women65orOlder: ref(0),

    //educacion
    educationReport: ref("12/1/2024"),
    boys0to2: ref(0),
    girls0to2: ref(0),
    boys3to5: ref(0),
    girls3to5: ref(0),
    boys6to11: ref(0),
    girls6to11: ref(0),
    boys12to17: ref(10),
    girls12to17: ref(2),
    boys18to19: ref(10),
    girls18to19: ref(8),
    men20to59: ref(28),
    women20to59: ref(22),
  },
];

const dashboardArray = ref([]);

export default defineComponent({
  name: "IndexPage , App",
  components: {
    Bar,
    Radar,
    PolarArea,
  },
  setup() {
    //elementos reactivos de back para retornar del proyecto/organizacion
    const proyectName = ref("Estadísticas de Acuario");
    const proyectDescription = ref(
      "A continuación de mostrarán datos acerca de las actividades realizadas recientemente por Acuario"
    );
    const proyectType = ref("Tipo");
    const proyectPoblation = ref(0);
    const proyectNGOAllies = ref([
      { ngo: "nombre1" },
      { ngo: "nombre2" },
      { ngo: "nombre3" },
    ]);
    const NgoIntenationalAllies = ref(20);
    const NgoNationalAllies = ref(80);
    const proyectFinancing = ref(0);
    const proyectAttendedComunity = ref(0);

    const rProyects = ref(20);
    const iProyects = ref(80);
    const N_Proyects = ref(10);

    const proyectWorkTeam = ref(200);
    const workteamCapitated = ref(50);
    const workTeamPreparated = ref(50);

    const totalValue = ref(0);

    const mailboxIndicators = [
      {
        title: "Reclamos",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Sugerencias",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Comentarios",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Denuncias",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Quejas",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Inquietudes",
        counters: ref(0),
        colours: ref(""),
      },
    ];

    const projectsValue = [
      {
        title: "Personas Atendidas (General)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Mujeres)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Hombres)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (niños de 0 a 12)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Jovenes de 13 a 20)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Adultos de 21 a 50)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Adultos mayores de 50)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Discapacitadas)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Poblacion indigena)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Niños de 0 a 12 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Niñas de 0 a 12 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Jovenes M de 13 a 20 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Jovenes F de 13 a 20 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Mujeres de 21 a 50 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Hombres de 21 a 60 años)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Mujeres mayores a 50)",
        counters: ref(0),
        colours: ref(""),
      },
      {
        title: "Personas Atendidas (Hombres mayores a 60 años)",
        counters: ref(0),
        colours: ref(""),
      },
    ];

    //convert-excel-to-json
    const file = ref(null);
    //const files = ref(null)

    //datos de la funcion para subir elementos de xlsx
    const submitted = ref(false);
    const submitEmpty = ref(false);
    const submitResult = ref([]);

    const screendisplay = ref("");

    // expose the ref to the template
    return {
      //MultiPurposeDashboard: ClusterList,
      dashboardArray,
      clusterList,
      tab: ref("Pagina Principal"),
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
      mailboxIndicators,
      projectsValue,
      totalValue,
      randomize(min, max) {
        min = Math.ceil(0);
        max = Math.floor(100);
        mailboxIndicators.forEach((element) => {
          element.counters.value = Math.floor(
            Math.random() * (max - min) + min
          );
          if (element.counters.value < 30) {
            element.colours.value = "bg-green";
          } else {
            if (element.counters.value >= 30 && element.counters.value < 70) {
              element.colours.value = "bg-warning";
            } else {
              element.colours.value = "bg-red";
            }
          }
        });
        totalValue.value = 0;
        projectsValue.forEach((element) => {
          element.counters.value = Math.floor(
            Math.random() * (max - min) + min
          );
          totalValue.value = element.counters.value + totalValue.value;
          if (element.counters.value < 30) {
            element.colours.value = "bg-green";
          } else {
            if (element.counters.value >= 30 && element.counters.value < 70) {
              element.colours.value = "bg-warning";
            } else {
              element.colours.value = "bg-red";
            }
          }
        });

        const object = [];
        clusterList.forEach((element, index, h) => {
          console.log(element);
          console.log(index);
          console.log(h);
          //dashboardArray.value.push(element.cluster.value);

          if (element.cluster.value === "Seguridad Alimentaria") {
          } else {
            if (element.cluster.value === "Educación") {
            } else {
              if (element.cluster.value === "Salud") {
              } else {
                if (element.cluster.value === "Saneamiento") {
                }
              }
            }
          }
        });
        console.log();
      },
      display() {
        screendisplay.value = screen.width;
        console.log(screen);
        console.log(mailboxIndicators[5].title);
        console.log(totalValue.value);
        console.log(new Date().toJSON());
        console.log(new Date().getDate());
        console.log(new Date().toLocaleDateString());
        console.log(new Date().toLocaleString());
        console.log(new Date().toString());

        axios.get("http://localhost:5000/users").then(function (response) {
          console.log(response.data);
        });
        /*mailboxIndicators.forEach((element) => {
          console.log(element.title);
          console.log(element.counters.value);
          console.log(element.colours);
        });*/
      },

      screendisplay,
      //elementos a retornar de la funcion para subir xlsx

      submitted,
      submitEmpty,
      submitResult,

      //files,
      file,

      onSubmit() {
        const formData = file.value;
        //console.log(formData)
        //console.log(file)
        //console.log(file.value)
        const dataTransversal = [];
        const dataSalud = [];
        const dataSeguridadAlimentaria = [];
        const dataEducacion = [];
        const dataSaneamiento = [];
        readXlsxFile(formData, { sheet: "Transversal" }).then(
          (rowsTransversal) => {
            for (let i = 4; i < rowsTransversal.length; i++) {
              const fila = rowsTransversal[i].length;
              for (let j = 0; j < fila; j++) {
                //const columna = rowsTransversal[i][j];
                console.log("[" + j + "]" + " " + rowsTransversal[i][j]);
              }
            }
            //console.log(rowsTransversal[4], "solo fila de valor");
            //console.log(rowsTransversal[4][0], "solo columna 1 de valor");
            //console.log(rowsTransversal, "este es transversal");
            const iterator = rowsTransversal.entries();
            //console.log(rows.values, "rows.values");
            /*console.log(rows.forEach, "rows.foreach");
          console.log(rows.map, "rows.map");
          console.log(rows.indexOf, "rows.indexof");
          console.log(rows.join, "rows.join");
          console.log(rows.keys, "rows.keys");*/
            for (let values of iterator) {
              //console.log(values);
            }
            dataTransversal.push(rowsTransversal);
          }
        );
        /*readXlsxFile(formData, { sheet: "Salud" }).then((rowsSalud) => {
          console.log(rowsSalud, "este es salud");
          const iterator = rowsSalud.entries();

          for (let values of iterator) {
            console.log(values);
          }
          dataSalud.push(rowsSalud);
        });
        readXlsxFile(formData, { sheet: "Seguridad Alimentaria" }).then(
          (rowsSeguridadAlimentaria) => {
            console.log(
              rowsSeguridadAlimentaria,
              "este es Seguridad Alimentaria"
            );
            const iterator = rowsSeguridadAlimentaria.entries();

            for (let values of iterator) {
              console.log(values);
            }
            dataSeguridadAlimentaria.push(rowsSeguridadAlimentaria);
          }
        );
        readXlsxFile(formData, { sheet: "Educación" }).then((rowsEducacion) => {
          console.log(rowsEducacion, "este es Educacion");
          const iterator = rowsEducacion.entries();

          for (let values of iterator) {
            console.log(values);
          }
          dataEducacion.push(rowsEducacion);
        });
        readXlsxFile(formData, { sheet: "Agua, Saneamiento e Higiene" }).then(
          (rowsSaneamiento) => {
            console.log(rowsSaneamiento, "este es Saneamiento");
            const iterator = rowsSaneamiento.entries();

            for (let values of iterator) {
              console.log(values);
            }
            dataSaneamiento.push(rowsSaneamiento);
          }
        );*/
        //

        /*for (const [name, value] of formData.entries()) {
          if (value.name.length > 0) {
            data.push({
              name,
              value: value.name
            })
          }
        }*/

        submitted.value = true;
        //submitEmpty.value = data.length;

        //console.log(data, "esto es data");
        //console.log(file, "esto es file");
      },
      model: ref(null),
      options1: ["Día", "Semana", "Mes", "Año"],
    };
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
    };
  },
  computed() {},
  watcher() {},
});
</script>
