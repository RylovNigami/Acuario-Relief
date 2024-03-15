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
                  {{ projectsGeneral }}
                </h2>
                <h5
                  style="
                    color: rgb(77, 75, 75);
                    font-style: italic;
                    font-weight: 400;
                  "
                >
                  {{ projectDescriptionGeneral }}
                </h5>
              </div>
              <div
                class="col-xs-12 col-sm-12 col-md-5 col-lg-5 q-my-md column items-center"
              >
                <img
                  @click="userInformation"
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
                <div class="flex row">
                  <!--div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 row">
                    <q-select
                      borderless
                      style="width: 40%"
                      v-model="model"
                      :options="optionsTimeSelect"
                      label="Margen de tiempo"
                    />
                  </div-->
                  <div
                    class="col-xs-11 col-sm-11 col-md-12 col-lg-12 column flex-center"
                    style="align-items: end"
                  >
                    <q-btn
                      flat
                      round
                      color="grey"
                      icon="autorenew"
                      @click="refreshDashboard"
                    />
                  </div>
                </div>
                <div class="flex row">
                  <div
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12 column flex-center"
                  >
                    <q-card class="q-pa-lg q-ma-xs">
                      <h5 class="no-margin q-mb-xs" style="text-align: center">
                        Proyectos registrados por clúster en la ONG Acuario año
                        2023
                      </h5>
                      <q-separator inset class="q-my-sm" />
                      <div class="flex row">
                        <div
                          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 column flex-center"
                        >
                          <div class="row inline">
                            <div
                              class="row inline flex-center"
                              label="transversal"
                            >
                              <div class="">Eje Transversal</div>
                              <q-avatar class="q-mx-sm">
                                <img src="/2459387.png" />
                              </q-avatar>
                              <div class="text-h5">{{ transverseTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="alojamiento, energia y enseres"
                            >
                              <div class="">Alojamiento, Energia y Enseres</div>
                              <q-avatar class="q-mx-sm">
                                <img src="/1458564.png" />
                              </q-avatar>
                              <div class="text-h5">{{ hostingTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="saneamiento"
                            >
                              <div class="">Agua, Saneamiento e Higiene</div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/wash-hands-icon-png_6023dcc6ad445.png"
                                />
                              </q-avatar>
                              <div class="text-h5">{{ sanitationTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="educacion"
                            >
                              <div class="">Educación</div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/image_processing20220416-11036-toi50p.png"
                                />
                              </q-avatar>
                              <div class="text-h5">{{ educationTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="nutricion"
                            >
                              <div class="">Nutrición</div>
                              <q-avatar class="q-mx-sm">
                                <img src="/7757761.png" />
                              </q-avatar>
                              <div class="text-h5">{{ nutritionTotal }}</div>
                            </div>
                          </div>

                          <div class="row inline">
                            <div
                              class="row inline flex-center"
                              label="proteccion"
                            >
                              <div class="">Protección General</div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/iconfinder-securityprotectlockshield39-4021447_113141.png"
                                />
                              </q-avatar>
                              <div class="text-h5">{{ protectionTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="proteccion infantil"
                            >
                              <div class="">
                                Proteccion Niños, Niñas, Adolescentes
                              </div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/children-s-rights-color-icon-child-protection-day-hand-holding-kids-childcare-isolated-illustration-vector.jpg"
                                />
                              </q-avatar>
                              <div class="text-h5">
                                {{ childProtectionTotal }}
                              </div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="proteccion VBG"
                            >
                              <div class="">
                                Proteccion Violencia Basada en Género
                              </div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/equal-treatment-concept-icon-employee-rights-protection-idea-thin-line-illustration-sexual-equality-gender-policy-women-empowerment-isolated-outline-drawing-editable-stroke-vector.jpg"
                                />
                              </q-avatar>
                              <div class="text-h5">
                                {{ vbgProtectionTotal }}
                              </div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div class="row inline flex-center" label="salud">
                              <div class="">Salud</div>
                              <q-avatar class="q-mx-sm">
                                <img src="/2689945.png" />
                              </q-avatar>
                              <div class="text-h5">{{ healthTotal }}</div>
                            </div>

                            <q-separator vertical inset class="q-mx-md" />

                            <div
                              class="row inline flex-center"
                              label="seguridad alimentaria"
                            >
                              <div class="">Seguridad Alimentaria</div>
                              <q-avatar class="q-mx-sm">
                                <img
                                  src="/pngtree-food-safety-png-image_8624033.png"
                                />
                              </q-avatar>
                              <div class="text-h5">{{ foodSafetyTotal }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-card>
                  </div>
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
                      <h5 class="no-margin q-mb-xs" style="text-align: center">
                        Indice de cumplimiento de Acuario año 2023
                      </h5>
                      <div
                        class="flex row"
                        style="text-shadow: 1px 1px rgb(0, 0, 0)"
                      >
                        <!--chartComponent
                          class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          v-for="indicator in personsAttendedValue"
                          v-bind="indicator"
                          :indicator="indicator"
                          :key="indicator.id"
                          :colorGrande="colorGrande"
                          :peopleToAssistYearly="peopleToAssistYearly"
                          :monthsDataValuesGeneral="monthsDataValuesGeneral"
                          :monthsDataValuesWomen="monthsDataValuesWomen"
                          :monthsDataValuesMen="monthsDataValuesMen"
                          :monthsDataValuesDisabled="monthsDataValuesDisabled"
                          :monthsDataValuesNative="monthsDataValuesNative"
                        /-->
                        <div
                          class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                          @click="dialogFinishedProjects = true"
                          style="cursor: pointer"
                          v-for="projects in projectsValue"
                          :key="projects.id"
                        >
                          <q-card class="q-ma-xs">
                            <q-card-section
                              class="text-white"
                              :class="
                                projects.title === 'Proyectos Finalizados'
                                  ? projects.colours.value
                                  : 'bg-primary'
                              "
                            >
                              <div
                                class="text-subtitle1 text-bold"
                                style="text-align: center"
                              >
                                {{ projects.title }}
                              </div>
                              <div
                                class="row flex-center"
                                style="text-align: center"
                              >
                                <div
                                  class="column"
                                  v-if="
                                    projects.title === 'Proyectos Finalizados'
                                  "
                                >
                                  <div class="text-subtitle2">Atendidos</div>
                                  <div class="text-h6">
                                    {{ projects.counters }}
                                  </div>
                                </div>
                                <div
                                  class="flex column"
                                  v-if="
                                    projects.title !== 'Proyectos Finalizados'
                                  "
                                >
                                  <div class="text-bold text-h3">
                                    {{ projects.counters }}
                                  </div>
                                </div>
                                <q-separator
                                  vertical
                                  inset
                                  class="q-mx-sm"
                                  v-if="
                                    projects.title === 'Proyectos Finalizados'
                                  "
                                />
                                <div
                                  class="column"
                                  v-if="
                                    projects.title === 'Proyectos Finalizados'
                                  "
                                >
                                  <div class="text-subtitle2">Cumplido</div>
                                  <div class="text-h6">
                                    {{
                                      projects.cumplishmentFormula.value.toFixed(
                                        2
                                      ) + "%"
                                    }}
                                  </div>
                                </div>
                                <q-separator
                                  vertical
                                  inset
                                  class="q-mx-sm"
                                  v-if="
                                    projects.title === 'Proyectos Finalizados'
                                  "
                                />
                                <div
                                  class="column"
                                  v-if="
                                    projects.title === 'Proyectos Finalizados'
                                  "
                                >
                                  <div class="text-subtitle2">
                                    Finalizados/a Cumplir
                                  </div>
                                  <div class="text-h6">
                                    {{
                                      projects.counters.value +
                                      "/" +
                                      projectsToCulminateYearly
                                    }}
                                  </div>
                                </div>
                              </div>

                              <q-tooltip class="bg-white" :offset="[10, 10]">
                                <q-card class="" style="width: 400px">
                                  <q-card-section>
                                    <div
                                      style="margin: 0%; height: 300px"
                                      v-if="
                                        projects.title ===
                                        'Proyectos Finalizados'
                                      "
                                    >
                                      <Bar
                                        :data="dataTooltipProjectsFinished"
                                        :options="options"
                                      />
                                    </div>
                                    <div
                                      style="margin: 0%; height: 300px"
                                      v-if="
                                        projects.title ===
                                        'Proyectos Registrados'
                                      "
                                    >
                                      <Bar
                                        :data="dataTooltipProjectsRegistered"
                                        :options="options"
                                      />
                                    </div>
                                    <div
                                      style="margin: 0%; height: 300px"
                                      v-if="
                                        projects.title ===
                                        'Proyectos Planificados'
                                      "
                                    >
                                      <Bar
                                        :data="dataTooltipProjectsPlanned"
                                        :options="options"
                                      />
                                    </div>
                                    <div
                                      style="margin: 0%; height: 300px"
                                      v-if="
                                        projects.title ===
                                        'Proyectos en Ejecución'
                                      "
                                    >
                                      <Bar
                                        :data="dataTooltipProjectsInAction"
                                        :options="options"
                                      />
                                    </div>
                                  </q-card-section>
                                </q-card>
                              </q-tooltip>
                            </q-card-section>
                          </q-card>

                          <q-dialog v-model="dialogFinishedProjects" full-width>
                            <q-card class="flex row">
                              <div class="row inline">
                                <div
                                  class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                >
                                  <h4 class="column items-center text-bold">
                                    Detalles del indicador
                                  </h4>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        style="margin: 0%; padding: 3%"
                                      >
                                        <Bar
                                          :data="dataProjectsGeneral"
                                          :options="options"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        class="flex row flex-center"
                                      >
                                        <h5
                                          class="no-margin q-mb-xs column items-center text-bold"
                                        >
                                          Estado del indicador
                                        </h5>
                                        <div class="flex row no-wrap">
                                          <div
                                            class="container flex"
                                            style="width: 100%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div
                                                  class="row inline flex-center"
                                                >
                                                  <div
                                                    style="
                                                      border-radius: 50%;
                                                      display: inline-block;
                                                      height: 70px;
                                                      width: 70px;
                                                    "
                                                    :class="
                                                      projectsValue[0].colours
                                                        .value
                                                    "
                                                    class="q-mx-lg"
                                                  >
                                                    <span></span>
                                                  </div>
                                                  <h2
                                                    v-if="
                                                      projectsValue[0].colours
                                                        .value === 'bg-green'
                                                    "
                                                    style="
                                                      color: #00a126;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Bien
                                                  </h2>
                                                  <h2
                                                    v-if="
                                                      projectsValue[0].colours
                                                        .value === 'bg-warning'
                                                    "
                                                    style="
                                                      color: #ffb700;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Regular
                                                  </h2>
                                                  <h2
                                                    v-if="
                                                      projectsValue[0].colours
                                                        .value === 'bg-red'
                                                    "
                                                    style="
                                                      color: #c10000;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Por mejorar
                                                  </h2>
                                                </div>
                                                <div
                                                  class="column items-center justify-center text-center"
                                                >
                                                  Fueron finalizados por la
                                                  organizacion Acuario hasta la
                                                  fecha
                                                  {{
                                                    projectsValue[0].counters
                                                      .value
                                                  }}
                                                  projectos, lo que equivale al

                                                  {{
                                                    projectsValue[0].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% con respecto a la meta por
                                                  cumplir anual.
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
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section class="q-pa-lg q-ma-xs">
                                        <h5
                                          class="no-margin q-mb-xs"
                                          style="text-align: center"
                                        >
                                          Proyectos registrados por clúster en
                                          la ONG Acuario año 2023
                                        </h5>
                                        <q-separator inset class="q-my-sm" />
                                        <div class="flex row">
                                          <div
                                            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 column flex-center"
                                          >
                                            <div class="column">
                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="transversal"
                                              >
                                                <div class="">
                                                  Eje Transversal
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img src="/2459387.png" />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ transverseTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="alojamiento, Energia y Enseres"
                                              >
                                                <div class="">
                                                  Alojamiento, Energia y Enseres
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img src="/1458564.png" />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ hostingTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="saneamiento"
                                              >
                                                <div class="">
                                                  Agua, Saneamiento e Higiene
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/wash-hands-icon-png_6023dcc6ad445.png"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ sanitationTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="educacion"
                                              >
                                                <div class="">Educación</div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/image_processing20220416-11036-toi50p.png"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ educationTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="nutricion"
                                              >
                                                <div class="">Nutrición</div>
                                                <q-avatar class="q-mx-sm">
                                                  <img src="/7757761.png" />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ nutritionTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="proteccion"
                                              >
                                                <div class="">
                                                  Protección General
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/iconfinder-securityprotectlockshield39-4021447_113141.png"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ protectionTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="proteccion infantil"
                                              >
                                                <div class="">
                                                  Proteccion Niños, Niñas,
                                                  Adolescentes
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/children-s-rights-color-icon-child-protection-day-hand-holding-kids-childcare-isolated-illustration-vector.jpg"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ childProtectionTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="proteccion VBG"
                                              >
                                                <div class="">
                                                  Proteccion Violencia Basada en
                                                  Género
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/equal-treatment-concept-icon-employee-rights-protection-idea-thin-line-illustration-sexual-equality-gender-policy-women-empowerment-isolated-outline-drawing-editable-stroke-vector.jpg"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ vbgProtectionTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="salud"
                                              >
                                                <div class="">Salud</div>
                                                <q-avatar class="q-mx-sm">
                                                  <img src="/2689945.png" />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ healthTotal }}
                                                </div>
                                              </div>

                                              <div
                                                class="row inline flex-center q-my-md"
                                                label="seguridad alimentaria"
                                              >
                                                <div class="">
                                                  Seguridad Alimentaria
                                                </div>
                                                <q-avatar class="q-mx-sm">
                                                  <img
                                                    src="/pngtree-food-safety-png-image_8624033.png"
                                                  />
                                                </q-avatar>
                                                <div class="text-h5">
                                                  {{ foodSafetyTotal }}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md q-mb-lg q-mt-xs">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        style="
                                          margin: 0%;
                                          padding: 3%;
                                          height: 550px;
                                        "
                                      >
                                        <Doughnut
                                          :data="dataProjectsDoughnut"
                                          :options="options"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                              </div>
                            </q-card>
                          </q-dialog>
                        </div>
                        <div
                          class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                          @click="dialogAttendedPersons = true"
                          style="cursor: pointer"
                        >
                          <q-card class="q-ma-xs">
                            <q-card-section
                              class="text-white"
                              :class="personsAttendedValue[0].colours.value"
                            >
                              <div
                                class="text-subtitle1 text-bold"
                                style="text-align: center"
                              >
                                {{ personsAttendedValue[0].title }}
                              </div>
                              <div
                                class="row flex-center"
                                style="text-align: center"
                              >
                                <div class="column">
                                  <div class="text-caption">Atendidos</div>
                                  <div class="text-subtitle1">
                                    {{ personsAttendedValue[0].counters.value }}
                                  </div>
                                </div>
                                <q-separator vertical inset class="q-mx-sm" />
                                <div class="column">
                                  <div class="text-caption">Cumplido</div>
                                  <div class="text-subtitle1">
                                    {{
                                      personsAttendedValue[0].cumplishmentFormula.value.toFixed(
                                        2
                                      ) + "%"
                                    }}
                                  </div>
                                </div>
                                <q-separator vertical inset class="q-mx-sm" />
                                <div class="column">
                                  <div class="text-caption">
                                    Alcanzado/a Cumplir
                                  </div>
                                  <div class="text-subtitle1">
                                    {{
                                      personsAttendedValue[0].counters.value +
                                      "/" +
                                      peopleToAssistYearly
                                    }}
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
                                      <Bar
                                        :data="dataTooltipPersonsGeneral"
                                        :options="options"
                                      />
                                    </div>
                                    <!--div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Mujeres)'
                                      "
                                    >
                                      <Bar :data="data2" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Hombres)'
                                      "
                                    >
                                      <Bar :data="data3" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Discapacitadas)'
                                      "
                                    >
                                      <Bar :data="data4" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Poblacion indigena)'
                                      "
                                    >
                                      <Bar :data="data5" :options="options" />
                                    </div-->
                                  </q-card-section>
                                </q-card>
                              </q-tooltip>
                            </q-card-section>
                          </q-card>
                          <!--
                        Seccion del dialog
                      -->

                          <q-dialog v-model="dialogAttendedPersons" full-width>
                            <q-card class="flex row">
                              <div class="row inline">
                                <div
                                  class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                >
                                  <h4 class="column items-center text-bold">
                                    Detalles del indicador
                                  </h4>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        style="margin: 0%; padding: 3%"
                                      >
                                        <Bar
                                          :data="dataAttendedPersons"
                                          :options="options"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        class="flex row flex-center"
                                      >
                                        <h5
                                          class="no-margin q-mb-xs column items-center text-bold"
                                        >
                                          Estado del indicador
                                        </h5>
                                        <div class="flex row no-wrap">
                                          <div
                                            class="container flex"
                                            style="width: 100%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div
                                                  class="row inline flex-center"
                                                >
                                                  <div
                                                    style="
                                                      border-radius: 50%;
                                                      display: inline-block;
                                                      height: 70px;
                                                      width: 70px;
                                                    "
                                                    :class="
                                                      personsAttendedValue[0]
                                                        .colours.value
                                                    "
                                                    class="q-mx-lg"
                                                  >
                                                    <span></span>
                                                  </div>
                                                  <h2
                                                    v-if="
                                                      personsAttendedValue[0]
                                                        .colours.value ===
                                                      'bg-green'
                                                    "
                                                    style="
                                                      color: #00a126;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Bien
                                                  </h2>
                                                  <h2
                                                    v-if="
                                                      personsAttendedValue[0]
                                                        .colours.value ===
                                                      'bg-warning'
                                                    "
                                                    style="
                                                      color: #ffb700;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Regular
                                                  </h2>
                                                  <h2
                                                    v-if="
                                                      personsAttendedValue[0]
                                                        .colours.value ===
                                                      'bg-red'
                                                    "
                                                    style="
                                                      color: #c10000;
                                                      text-shadow: 1px 1px grey;
                                                    "
                                                  >
                                                    Por mejorar
                                                  </h2>
                                                </div>
                                                <div
                                                  class="column items-center justify-center text-center"
                                                >
                                                  Fueron atendidos por la
                                                  organizacion Acuario hasta la
                                                  fecha
                                                  {{
                                                    personsAttendedValue[0]
                                                      .counters.value
                                                  }}
                                                  personas, lo que equivale al

                                                  {{
                                                    personsAttendedValue[0].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% de todas las personas
                                                  atendidas.
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
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        class="flex row flex-center"
                                      >
                                        <h5
                                          class="no-margin q-mb-xs column items-center text-bold"
                                        >
                                          Segregación
                                        </h5>
                                        <div class="flex row no-wrap">
                                          <div
                                            class="container flex"
                                            style="width: 25%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div class="q-my-sm text-bold">
                                                  Hombres
                                                </div>
                                                <h4
                                                  class="q-my-sm"
                                                  style="color: #5361f5"
                                                >
                                                  {{
                                                    personsAttendedValue[2]
                                                      .counters.value
                                                  }}
                                                </h4>
                                                <div
                                                  class="column items-center wrap justify-center text-center"
                                                >
                                                  Fueron atendidos por la
                                                  organizacion Acuario hasta la
                                                  fecha, lo que equivale al
                                                  {{
                                                    personsAttendedValue[2].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% de todas las personas
                                                  atendidas.
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <q-separator
                                            vertical
                                            inset
                                            class="q-mx-sm"
                                          />

                                          <div
                                            class="container flex"
                                            style="width: 25%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div class="q-my-sm text-bold">
                                                  Mujeres
                                                </div>
                                                <h4
                                                  class="q-my-sm"
                                                  style="color: #ff4ec1"
                                                >
                                                  {{
                                                    personsAttendedValue[1]
                                                      .counters.value
                                                  }}
                                                </h4>
                                                <div
                                                  class="column items-center justify-center text-center"
                                                >
                                                  Fueron atendidos por la
                                                  organizacion Acuario hasta la
                                                  fecha, lo que equivale al
                                                  {{
                                                    personsAttendedValue[1].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% de todas las personas
                                                  atendidas.
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <q-separator
                                            vertical
                                            inset
                                            class="q-mx-sm"
                                          />

                                          <div
                                            class="container flex"
                                            style="width: 25%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div class="q-my-sm text-bold">
                                                  Discapacitados
                                                </div>
                                                <h4
                                                  class="q-my-sm"
                                                  style="color: #5f9ea0"
                                                >
                                                  {{
                                                    personsAttendedValue[3]
                                                      .counters.value
                                                  }}
                                                </h4>
                                                <div
                                                  class="column items-center justify-center text-center"
                                                >
                                                  Fueron atendidos por la
                                                  organizacion Acuario hasta la
                                                  fecha, lo que equivale al
                                                  {{
                                                    personsAttendedValue[3].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% de todas las personas
                                                  atendidas.
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <q-separator
                                            vertical
                                            inset
                                            class="q-mx-sm"
                                          />

                                          <div
                                            class="container flex"
                                            style="width: 25%"
                                          >
                                            <div class="flex column">
                                              <div class="column items-center">
                                                <div class="q-my-sm text-bold">
                                                  P. Indigena
                                                </div>
                                                <h4
                                                  class="q-my-sm"
                                                  style="color: #3eb137"
                                                >
                                                  {{
                                                    personsAttendedValue[4]
                                                      .counters.value
                                                  }}
                                                </h4>
                                                <div
                                                  class="column items-center justify-center text-center"
                                                >
                                                  Fueron atendidos por la
                                                  organizacion Acuario hasta la
                                                  fecha, lo que equivale al
                                                  {{
                                                    personsAttendedValue[4].cumplishmentFormula.value.toFixed(
                                                      2
                                                    )
                                                  }}% de todas las personas
                                                  atendidas.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                                <div
                                  class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                                >
                                  <div class="q-pa-xs q-mx-md q-mb-lg">
                                    <q-card
                                      class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
                                    >
                                      <q-card-section
                                        style="margin: 0%; padding: 3%"
                                      >
                                        <Doughnut
                                          :data="data6"
                                          :options="options"
                                        />
                                      </q-card-section>
                                    </q-card>
                                  </div>
                                </div>
                              </div>
                            </q-card>
                          </q-dialog>
                        </div>
                      </div>

                      <!--h5 class="no-margin q-mb-xs" style="text-align: center">
                        Indice de variacion de Acuario año 2023
                      </h5>
                      <div
                        class="flex row"
                        style="text-shadow: 1px 1px rgb(0, 0, 0)"
                      >
                        <div
                          class="col-xs-12 col-sm-12 col-md-4 col-lg-4"
                          v-for="indicators in personsAttendedValue"
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
                                  indicators.counters.value +
                                  "/" +
                                  peopleToAssistYearly
                                }}
                              </div>
                              <q-tooltip class="bg-white" :offset="[10, 10]">
                                <q-card class="" style="width: 355px">
                                  <q-card-section
                                    style="
                                      margin: 0%;
                                      padding: 3%;
                                      height: 300px;
                                    "
                                  >
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (General)'
                                      "
                                    >
                                      <Bar
                                        :data="dataTooltipPersonsGeneral"
                                        :options="options"
                                      />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Mujeres)'
                                      "
                                    >
                                      <Bar :data="data2" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Hombres)'
                                      "
                                    >
                                      <Bar :data="data3" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Discapacitadas)'
                                      "
                                    >
                                      <Bar :data="data4" :options="options" />
                                    </div>
                                    <div
                                      style="
                                        margin: 0%;

                                        height: 300px;
                                      "
                                      v-if="
                                        personsIndicators.title ===
                                        'Personas Atendidas (Poblacion indigena)'
                                      "
                                    >
                                      <Bar :data="data5" :options="options" />
                                    </div>
                                  </q-card-section>
                                </q-card>
                              </q-tooltip>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div-->
                    </q-card>
                  </div>
                </div>
                <br />
                <!--div class="row justify-center items-center">
                  <div class="">
                    <q-btn @click="randomize">Prueba</q-btn>
                  </div>
                  <div class="">
                    <q-btn @click="display">ver resolucion</q-btn>
                  </div>

                </div-->
                <!--div class="">{{ screendisplay }}</div-->
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
                    :options="optionsTimeSelect"
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
                          v-for="indicators in personsAttendedValue"
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
                                  indicators.counters.value +
                                  "/" +
                                  totalValue.value
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
                <!--div class="row justify-center items-center">
                  <div class="">
                    <q-btn @click="randomize">Prueba</q-btn>
                  </div>
                  <div class="">
                    <q-btn @click="display">ver resolucion</q-btn>
                  </div>
                </div-->
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>

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

    <!--div class="flex row q-mx-lg q-py-xs items-center justify-between">
      <div class="">
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
            <Bar :data="dataPrueba" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
            <Radar :data="dataPersonal" :options="options" />
          </q-card-section>
        </q-card>
      </div>
      <div class="">
        <q-card
          class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-md q-pa-sm"
          style="width: 355px"
        >
          <q-card-section style="margin: 3%; padding: 0%; height: 300px">
            <Bar :data="dataMonths" :options="options" />
          </q-card-section>
        </q-card>
      </div>
    </div-->

    <div
      class="flex row q-mx-xl q-py-xs flex-center"
      v-if="authenticated === true"
    >
      <div class="q-container">
        <div class="flex row">
          <div class="q-my-md">
            <readExcelComponent />
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
import { defineComponent, ref, onMounted } from "vue";
import readExcelComponent from "components/excelReadComponent.vue";
import chartComponent from "components/chartComponent.vue";
import { mapState, mapMutations, mapActions } from "vuex";
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
import { Bar, Radar, Doughnut } from "vue-chartjs";
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
  /*{
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
  },*/
];

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
    title: "Proyectos Finalizados",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    title: "Proyectos Registrados",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    title: "Proyectos en Ejecución",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    title: "Proyectos Planificados",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
];

const personsAttendedValue = [
  {
    title: "Personas Atendidas (General)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    title: "Personas Atendidas (Mujeres)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    title: "Personas Atendidas (Hombres)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  /*{
    title: "Personas Atendidas (niños de 0 a 12)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Jovenes de 13 a 20)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Adultos de 21 a 50)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Adultos mayores de 50)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },*/
  {
    title: "Personas Atendidas (Discapacitadas)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  {
    //title: "Personas Atendidas (Poblacion indigena)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
  },
  /*{
    title: "Personas Atendidas (Niños de 0 a 12 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Niñas de 0 a 12 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Jovenes M de 13 a 20 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Jovenes F de 13 a 20 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Mujeres de 21 a 50 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Hombres de 21 a 60 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Mujeres mayores a 50)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    title: "Personas Atendidas (Hombres mayores a 60 años)",
    counters: ref(0),
    colours: ref(""),
    cumplishmentFormula: ref(0),
    variationFormula: ref(0),
    valuesArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },*/
];

const users = [];
const user = [];
const authenticated = ref(false);
const rProyects = ref(0);
const iProyects = ref(0);

//valores referenciales de meta para comparativa a cumplir

const projectsToCulminateYearly = ref(150); //aproximate
const projectstoCulminateMonthly = ref(13); //aproximate

const peopleToAssistYearly = ref(3000); //aproximate
const peopleToAssistMonthly = ref(250); // aproximate

const attendedCoursesMonthly = ref(0);
const attendedCoursesYearly = ref(0);

const colorGrande = ref("");

const totalAssisted = ref(0);
const totalWomen = ref(0);
const totalMen = ref(0);
const totalGirls = ref(0);
const totalBoys = ref(0);
const totalDisabled = ref(0);
const totalNative = ref(0);

const educationTotal = ref(0);
const healthTotal = ref(0);
const childProtectionTotal = ref(0);
const nutritionTotal = ref(0);
const sanitationTotal = ref(0);
const protectionTotal = ref(0);
const vbgProtectionTotal = ref(0);
const transverseTotal = ref(0);
const foodSafetyTotal = ref(0);
const hostingTotal = ref(0);

const generalArray = [];
const healthArray = [];
const transverseArray = [];
const protectionArray = [];
const childProtectionArray = [];
const hostingArray = [];
const foodSafetyArray = [];
const educationArray = [];
const sanitationArray = [];
const nutritionArray = [];
const vbgProtectionArray = [];

const monthsData = [];
const monthsDataValuesEducation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesTransverse = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesHealth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesProtection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesNutrition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesfoodsafety = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesHosting = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesSanitation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesChildProtection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesvbgProtection = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const monthsDataValuesProjects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesFinishedProjects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesPlannedProjects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesInActionProjects = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesGeneral = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesWomen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesMen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesDisabled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const monthsDataValuesNative = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/*function colorsDisplay() {
  personsAttendedValue.forEach((element) => {
    console.log(element.cumplishmentFormula.value, "element.cumplishmentFormula.value");
    if (element.cumplishmentFormula.value >= 95.0) {
      element.colours.value = "bg-green";
    } else {
      if (element.cumplishmentFormula.value >= 60.0 && element.cumplishmentFormula.value < 94.0) {
        element.colours.value = "bg-warning";
      } else {
        element.colours.value = "bg-red";
      }
    }
  });

  if ((projectsValue[0].counters.value / projectsValue[0].counters.value) * 100 > 61) {
    colorGrande.value = "bg-green";
  } else {
    if (
      (projectsValue[0].counters.value / projectsValue[0].counters.value) * 100 >= 50 &&
      (projectsValue[0].counters.value / projectsValue[0].counters.value) * 100 < 61
    ) {
      colorGrande.value = "bg-warning";
    } else {
      colorGrande.value = "bg-red";
    }
  }
}*/

function randomizeAll(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  mailboxIndicators.forEach((element) => {
    element.counters.value = Math.floor(Math.random() * (max - min) + min);
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
}

function distributeValues() {
  transverseArray.splice(0);
  personsAttendedValue[1].counters.value = 0;
  personsAttendedValue[2].counters.value = 0;

  axios.get("http://localhost:5000/transverse").then(function (response) {
    response.data.forEach((element) => {
      transverseArray.push(element);
    });

    console.log(transverseArray, "este es transverse");
    transverseTotal.value = transverseArray.length;

    personsAttendedValue[1].counters.value = 0;
    personsAttendedValue[2].counters.value = 0;

    transverseArray.forEach((element, index) => {
      /*personsAttendedValue[0].counters.value =
          element.assistedPeople + personsAttendedValue[0].counters.value;
        console.log(element);
        console.log(
          personsAttendedValue[0].counters.value,
          "sort data (counter de personsAttendedvalue)"
        );

        totalAssisted.value =
          element.assistedPeople + totalAssisted.value;
        console.log(totalAssisted.value, "total assisted");
        personsAttendedValue[3].counters.value =
          element.project.disabledPopulation + personsAttendedValue[3].counters.value;

        totalDisabled.value =
          element.project.disabledPopulation + totalDisabled.value;

        personsAttendedValue[4].counters.value =
          element.project.nativePopulation + personsAttendedValue[4].counters.value;

        totalNative.value =
          element.project.nativePopulation + totalNative.value;*/

      personsAttendedValue[1].counters.value =
        element.women18to59T +
        element.womenOlderThan60T +
        element.girls0to17T +
        personsAttendedValue[1].counters.value;

      totalWomen.value =
        element.women18to59T +
        element.womenOlderThan60T +
        element.girls0to17T +
        totalWomen.value;

      personsAttendedValue[2].counters.value =
        element.men18to59T +
        element.menOlderThan60T +
        element.boys0to17T +
        personsAttendedValue[2].counters.value;

      totalMen.value =
        element.men18to59T +
        element.menOlderThan60T +
        element.boys0to17T +
        totalMen.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.men18to59T + element.menOlderThan60T + element.boys0to17T;

      womens.value =
        element.women18to59T + element.womenOlderThan60T + element.girls0to17T;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Transverse", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesTransverse[0] =
          monthsDataValuesTransverse[0] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[0] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //  monthsDataValuesProjects[1]++;
        monthsDataValuesTransverse[1] =
          monthsDataValuesTransverse[1] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[1] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //  monthsDataValuesProjects[2]++;
        monthsDataValuesTransverse[2] =
          monthsDataValuesTransverse[2] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[2] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //  monthsDataValuesProjects[3]++;
        monthsDataValuesTransverse[3] =
          monthsDataValuesTransverse[3] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[3] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[3];

        console.log(
          element.men18to59T,
          element.menOlderThan60T,
          element.boys0to17T,
          "men data on April, Transverse"
        );

        monthsDataValuesMen[3] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //  monthsDataValuesProjects[4]++;
        monthsDataValuesTransverse[4] =
          monthsDataValuesTransverse[4] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[4] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[4];

        console.log(
          element.men18to59T,
          element.menOlderThan60T,
          element.boys0to17T,
          "men data on May, Transverse"
        );

        monthsDataValuesMen[4] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //  monthsDataValuesProjects[5]++;
        monthsDataValuesTransverse[5] =
          monthsDataValuesTransverse[5] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[5] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //  monthsDataValuesProjects[6]++;
        monthsDataValuesTransverse[6] =
          monthsDataValuesTransverse[6] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[6] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[6];

        console.log(
          element.men18to59T,
          element.menOlderThan60T,
          element.boys0to17T,
          "men data on july, Transverse"
        );

        monthsDataValuesMen[6] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //  monthsDataValuesProjects[7]++;
        monthsDataValuesTransverse[7] =
          monthsDataValuesTransverse[7] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[7] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //  monthsDataValuesProjects[8]++;
        monthsDataValuesTransverse[8] =
          monthsDataValuesTransverse[8] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[8] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //  monthsDataValuesProjects[9]++;
        monthsDataValuesTransverse[9] =
          monthsDataValuesTransverse[9] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[9] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //  monthsDataValuesProjects[10]++;
        monthsDataValuesTransverse[10] =
          monthsDataValuesTransverse[10] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[10] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //  monthsDataValuesProjects[11]++;
        monthsDataValuesTransverse[11] =
          monthsDataValuesTransverse[11] + element.project.assistedPeople;

        //element.channelUsed
        //element.topicsAddressed

        monthsDataValuesWomen[11] =
          element.women18to59T +
          element.womenOlderThan60T +
          element.girls0to17T +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.men18to59T +
          element.menOlderThan60T +
          element.boys0to17T +
          monthsDataValuesMen[11];
      }
    });
    console.log(monthsDataValuesTransverse, "months data values transverse");
  });

  educationArray.splice(0);

  axios.get("http://localhost:5000/Education").then(function (response) {
    response.data.forEach((element) => {
      educationArray.push(element);
    });

    console.log(educationArray, "este es education");
    educationTotal.value = educationArray.length;

    educationArray.forEach((element, index) => {
      /*personsAttendedValue[0].counters.value =
          element.project.assistedPeople + personsAttendedValue[0].counters.value;

        totalAssisted.value =
          element.project.assistedPeople + totalAssisted.value;

        personsAttendedValue[3].counters.value =
          element.project.disabledPopulation + personsAttendedValue[3].counters.value;

        totalDisabled.value =
          element.project.disabledPopulation + totalDisabled.value;

        personsAttendedValue[4].counters.value =
          element.project.nativePopulation + personsAttendedValue[4].counters.value;

        totalNative.value =
          element.project.nativePopulation + totalNative.value;*/

      personsAttendedValue[1].counters.value =
        element.girls0to2E +
        element.girls3to5E +
        element.girls6to11E +
        element.girls12to17E +
        element.girls18to19E +
        element.women20to64E +
        element.womenOlderThan60E +
        personsAttendedValue[1].counters.value;

      totalWomen.value =
        totalWomen.value +
        element.girls0to2E +
        element.girls3to5E +
        element.girls6to11E +
        element.girls12to17E +
        element.girls18to19E +
        element.women20to64E +
        element.womenOlderThan60E;

      personsAttendedValue[2].counters.value =
        personsAttendedValue[2].counters.value +
        element.boys0to2E +
        element.boys3to5E +
        element.boys6to11E +
        element.boys12to17E +
        element.boys18to19E +
        element.men20to64E +
        element.menOlderThan60E;

      totalMen.value =
        totalMen.value +
        element.boys0to2E +
        element.boys3to5E +
        element.boys6to11E +
        element.boys12to17E +
        element.boys18to19E +
        element.men20to64E +
        element.menOlderThan60E;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to2E +
        element.boys3to5E +
        element.boys6to11E +
        element.boys12to17E +
        element.boys18to19E +
        element.men20to64E +
        element.menOlderThan60E;

      womens.value =
        element.girls0to2E +
        element.girls3to5E +
        element.girls6to11E +
        element.girls12to17E +
        element.girls18to19E +
        element.women20to64E +
        element.womenOlderThan60E;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Education", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesEducation[0] =
          monthsDataValuesEducation[0] + element.project.assistedPeople;

        monthsDataValuesWomen[0] =
          monthsDataValuesWomen[0] +
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E;

        monthsDataValuesMen[0] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //  monthsDataValuesProjects[1]++;
        monthsDataValuesEducation[1] =
          monthsDataValuesEducation[1] + element.project.assistedPeople;

        monthsDataValuesWomen[1] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //  monthsDataValuesProjects[2]++;
        monthsDataValuesEducation[2] =
          monthsDataValuesEducation[2] + element.project.assistedPeople;

        monthsDataValuesWomen[2] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //  monthsDataValuesProjects[3]++;
        monthsDataValuesEducation[3] =
          monthsDataValuesEducation[3] + element.project.assistedPeople;

        monthsDataValuesWomen[3] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to2E,
          element.boys3to5E,
          element.boys6to11E,
          element.boys12to17E,
          element.boys18to19E,
          element.men20to64E,
          element.menOlderThan60E,
          "men data on April, Education"
        );

        monthsDataValuesMen[3] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //  monthsDataValuesProjects[4]++;
        monthsDataValuesEducation[4] =
          monthsDataValuesEducation[4] + element.project.assistedPeople;

        monthsDataValuesWomen[4] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to2E,
          element.boys3to5E,
          element.boys6to11E,
          element.boys12to17E,
          element.boys18to19E,
          element.men20to64E,
          element.menOlderThan60E,
          "men data on May, Education"
        );

        monthsDataValuesMen[4] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //  monthsDataValuesProjects[5]++;
        monthsDataValuesEducation[5] =
          monthsDataValuesEducation[5] + element.project.assistedPeople;

        monthsDataValuesWomen[5] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //  monthsDataValuesProjects[6]++;
        monthsDataValuesEducation[6] =
          monthsDataValuesEducation[6] + element.project.assistedPeople;

        monthsDataValuesWomen[6] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to2E,
          element.boys3to5E,
          element.boys6to11E,
          element.boys12to17E,
          element.boys18to19E,
          element.men20to64E,
          element.menOlderThan60E,
          "men data on july, Education"
        );

        monthsDataValuesMen[6] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //  monthsDataValuesProjects[7]++;
        monthsDataValuesEducation[7] =
          monthsDataValuesEducation[7] + element.project.assistedPeople;

        monthsDataValuesWomen[7] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //  monthsDataValuesProjects[8]++;
        monthsDataValuesEducation[8] =
          monthsDataValuesEducation[8] + element.project.assistedPeople;

        monthsDataValuesWomen[8] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //  monthsDataValuesProjects[9]++;
        monthsDataValuesEducation[9] =
          monthsDataValuesEducation[9] + element.project.assistedPeople;

        monthsDataValuesWomen[9] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //  monthsDataValuesProjects[10]++;
        monthsDataValuesEducation[10] =
          monthsDataValuesEducation[10] + element.project.assistedPeople;

        monthsDataValuesWomen[10] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //  monthsDataValuesProjects[11]++;
        monthsDataValuesEducation[11] =
          monthsDataValuesEducation[11] + element.project.assistedPeople;

        monthsDataValuesWomen[11] =
          element.girls0to2E +
          element.girls3to5E +
          element.girls6to11E +
          element.girls12to17E +
          element.girls18to19E +
          element.women20to64E +
          element.womenOlderThan60E +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to2E +
          element.boys3to5E +
          element.boys6to11E +
          element.boys12to17E +
          element.boys18to19E +
          element.men20to64E +
          element.menOlderThan60E +
          monthsDataValuesMen[11];
      }
    });

    console.log(monthsDataValuesEducation, "months data values education");

    /*personsAttendedValue[0].cumplishmentFormula.value =
        (personsAttendedValue[0].counters.value / totalAssisted.value) * 100;

      personsAttendedValue[2].cumplishmentFormula.value =
        (personsAttendedValue[2].counters.value / totalAssisted.value) * 100;

      personsAttendedValue[1].cumplishmentFormula.value =
        (personsAttendedValue[1].counters.value / totalAssisted.value) * 100;

      personsAttendedValue[3].cumplishmentFormula.value =
        (personsAttendedValue[3].counters.value / totalAssisted.value) * 100;

      personsAttendedValue[4].cumplishmentFormula.value =
        (personsAttendedValue[4].counters.value / totalAssisted.value) * 100;*/
  });

  healthArray.splice(0);

  axios.get("http://localhost:5000/health").then(function (response) {
    response.data.forEach((element) => {
      healthArray.push(element);
    });

    healthArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to5 +
        element.girls6to19 +
        element.women20to64 +
        element.womenOlderThan65 +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to5 +
        element.boys6to19 +
        element.men20to64 +
        element.menOlderThan65 +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to5 +
        element.boys6to19 +
        element.men20to64 +
        element.menOlderThan65;

      womens.value =
        element.girls0to5 +
        element.girls6to19 +
        element.women20to64 +
        element.womenOlderThan65;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Health", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[0] =
          monthsDataValuesHealth[0] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[0] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[1] =
          monthsDataValuesHealth[1] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[1] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[2] =
          monthsDataValuesHealth[2] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[2] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[3] =
          monthsDataValuesHealth[3] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[3] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to5,
          element.boys6to19,
          element.men20to64,
          element.menOlderThan65,
          "men data on april, Health"
        );

        monthsDataValuesMen[3] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[4] =
          monthsDataValuesHealth[4] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[4] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to5,
          element.boys6to19,
          element.men20to64,
          element.menOlderThan65,
          "men data on May, Health"
        );

        monthsDataValuesMen[4] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[5] =
          monthsDataValuesHealth[5] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[5] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[6] =
          monthsDataValuesHealth[6] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[6] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to5,
          element.boys6to19,
          element.men20to64,
          element.menOlderThan65,
          "men data on july, Health"
        );

        monthsDataValuesMen[6] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[7] =
          monthsDataValuesHealth[7] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[7] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[8] =
          monthsDataValuesHealth[8] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[8] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[9] =
          monthsDataValuesHealth[9] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[9] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[10] =
          monthsDataValuesHealth[10] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[10] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHealth[11] =
          monthsDataValuesHealth[11] + element.project.assistedPeople;

        //element.subaticity
        //element.criticalServices

        monthsDataValuesWomen[11] =
          element.girls0to5 +
          element.girls6to19 +
          element.women20to64 +
          element.womenOlderThan65 +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to5 +
          element.boys6to19 +
          element.men20to64 +
          element.menOlderThan65 +
          monthsDataValuesMen[11];
      }
    });
    console.log(monthsDataValuesHealth, "month data value health");
    console.log(healthArray, "este es health");
    healthTotal.value = healthArray.length;
  });

  protectionArray.splice(0);

  axios.get("http://localhost:5000/protection").then(function (response) {
    response.data.forEach((element) => {
      protectionArray.push(element);
    });

    protectionArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to17P +
        element.women18to59P +
        element.womenOlderThan60P +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        personsAttendedValue[2].counters.value +
        element.boys0to17P +
        element.men18to59P +
        element.menOlderThan60P;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to17P + element.men18to59P + element.menOlderThan60P;

      womens.value =
        element.girls0to17P + element.women18to59P + element.womenOlderThan60P;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Protection", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[0] =
          monthsDataValuesProtection[0] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[0] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[1] =
          monthsDataValuesProtection[1] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[1] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[2] =
          monthsDataValuesProtection[2] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[2] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[3] =
          monthsDataValuesProtection[3] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[3] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to17P,
          element.men18to59P,
          element.menOlderThan60P,
          "men data on April, Protection"
        );

        monthsDataValuesMen[3] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[4] =
          monthsDataValuesProtection[4] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[4] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to17P,
          element.men18to59P,
          element.menOlderThan60P,
          "men data on May, Protection"
        );

        monthsDataValuesMen[4] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[5] =
          monthsDataValuesProtection[5] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[5] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[6] =
          monthsDataValuesProtection[6] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[6] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to17P,
          element.men18to59P,
          element.menOlderThan60P,
          "men data on july, Protection"
        );

        monthsDataValuesMen[6] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[7] =
          monthsDataValuesProtection[7] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[7] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[8] =
          monthsDataValuesProtection[8] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[8] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[9] =
          monthsDataValuesProtection[9] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[9] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[10] =
          monthsDataValuesProtection[10] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[10] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesProtection[11] =
          monthsDataValuesProtection[11] + element.project.assistedPeople;

        //lgtbPeople
        //pregnantWomen
        //legalProtection
        //physicalProtection

        monthsDataValuesWomen[11] =
          element.girls0to17P +
          element.women18to59P +
          element.womenOlderThan60P +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to17P +
          element.men18to59P +
          element.menOlderThan60P +
          monthsDataValuesMen[11];
      }
    });
    console.log(protectionArray, "este es protection");
    protectionTotal.value = protectionArray.length;
  });

  nutritionArray.splice(0);

  axios.get("http://localhost:5000/nutrition").then(function (response) {
    response.data.forEach((element) => {
      nutritionArray.push(element);
    });

    nutritionArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to5M +
        element.girls6to59m +
        element.girls5to15 +
        element.women18to59N +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to5M +
        element.boys6to59M +
        element.boys5to15 +
        element.men18to59N +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to5M +
        element.boys6to59M +
        element.boys5to15 +
        element.men18to59N;

      womens.value =
        element.girls0to5M +
        element.girls6to59m +
        element.girls5to15 +
        element.women18to59N;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en nutrition", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[0] =
          monthsDataValuesNutrition[0] + element.project.assistedPeople;

        monthsDataValuesWomen[0] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[0];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[0] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[1] =
          monthsDataValuesNutrition[1] + element.project.assistedPeople;

        monthsDataValuesWomen[1] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[1];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[1] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[2] =
          monthsDataValuesNutrition[2] + element.project.assistedPeople;

        monthsDataValuesWomen[2] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[2];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[2] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[3] =
          monthsDataValuesNutrition[3] + element.project.assistedPeople;

        monthsDataValuesWomen[3] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[3];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        console.log(
          element.boys0to5M,
          element.boys6to59M,
          element.boys5to15,
          element.men18to59N,
          "men data on april, Nutrition"
        );

        monthsDataValuesMen[3] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[4] =
          monthsDataValuesNutrition[4] + element.project.assistedPeople;

        monthsDataValuesWomen[4] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[4];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        console.log(
          element.boys0to5M,
          element.boys6to59M,
          element.boys5to15,
          element.men18to59N,
          "men data on may, Nutrition"
        );

        monthsDataValuesMen[4] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[5] =
          monthsDataValuesNutrition[5] + element.project.assistedPeople;

        monthsDataValuesWomen[5] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[5];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[5] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[6] =
          monthsDataValuesNutrition[6] + element.project.assistedPeople;

        monthsDataValuesWomen[6] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[6];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        console.log(
          element.boys0to5M,
          element.boys6to59M,
          element.boys5to15,
          element.men18to59N,
          "men data on july, Nutrition"
        );

        monthsDataValuesMen[6] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[7] =
          monthsDataValuesNutrition[7] + element.project.assistedPeople;

        monthsDataValuesWomen[7] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[7];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[7] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[8] =
          monthsDataValuesNutrition[8] + element.project.assistedPeople;

        monthsDataValuesWomen[8] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[8];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[8] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[9] =
          monthsDataValuesNutrition[9] + element.project.assistedPeople;

        monthsDataValuesWomen[9] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[9];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[9] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[10] =
          monthsDataValuesNutrition[10] + element.project.assistedPeople;

        monthsDataValuesWomen[10] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[10];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[10] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesNutrition[11] =
          monthsDataValuesNutrition[11] + element.project.assistedPeople;

        monthsDataValuesWomen[11] =
          element.girls0to5M +
          element.girls6to59m +
          element.girls5to15 +
          element.women18to59N +
          monthsDataValuesWomen[11];

        //element.pregnantGirls;
        //element.pregnantWomen;
        //element.lactatingGirls;
        //element.lactatingWomen;

        monthsDataValuesMen[11] =
          element.boys0to5M +
          element.boys6to59M +
          element.boys5to15 +
          element.men18to59N +
          monthsDataValuesMen[11];
      }
    });

    console.log(monthsDataValuesNutrition, "month data value Nutrition");
    console.log(nutritionArray, "este es nutrition");
    nutritionTotal.value = nutritionArray.length;
  });

  foodSafetyArray.splice(0);

  axios.get("http://localhost:5000/food-safety").then(function (response) {
    response.data.forEach((element) => {
      foodSafetyArray.push(element);
    });

    foodSafetyArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to17F +
        element.women18to59F +
        element.womenOlderThan60F +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to17F +
        element.men18to59F +
        element.menOlderThan60F +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to17F + element.men18to59F + element.menOlderThan60F;

      womens.value =
        element.girls0to17F + element.women18to59F + element.womenOlderThan60F;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Food Safety", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[0] =
          monthsDataValuesfoodsafety[0] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[0] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[1] =
          monthsDataValuesfoodsafety[1] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[1] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[2] =
          monthsDataValuesfoodsafety[2] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[2] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[3] =
          monthsDataValuesfoodsafety[3] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[3] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to17F,
          element.men18to59F,
          element.menOlderThan60F,
          "men data on april, food safety"
        );

        monthsDataValuesMen[3] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[4] =
          monthsDataValuesfoodsafety[4] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[4] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to17F,
          element.men18to59F,
          element.menOlderThan60F,
          "men data on May, food safety"
        );

        monthsDataValuesMen[4] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[5] =
          monthsDataValuesfoodsafety[5] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[5] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[6] =
          monthsDataValuesfoodsafety[6] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[6] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to17F,
          element.men18to59F,
          element.menOlderThan60F,
          "men data on july, food safety"
        );

        monthsDataValuesMen[6] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[7] =
          monthsDataValuesfoodsafety[7] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[7] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[8] =
          monthsDataValuesfoodsafety[8] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[8] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[9] =
          monthsDataValuesfoodsafety[9] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[9] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[10] =
          monthsDataValuesfoodsafety[10] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[10] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesfoodsafety[11] =
          monthsDataValuesfoodsafety[11] + element.project.assistedPeople;

        //element. centersServed
        //element.assistedLiving

        monthsDataValuesWomen[11] =
          element.girls0to17F +
          element.women18to59F +
          element.womenOlderThan60F +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to17F +
          element.men18to59F +
          element.menOlderThan60F +
          monthsDataValuesMen[11];
      }
    });
    console.log(foodSafetyArray, "este es food safety");
    foodSafetyTotal.value = foodSafetyArray.length;
  });

  hostingArray.splice(0);

  axios.get("http://localhost:5000/hosting").then(function (response) {
    response.data.forEach((element) => {
      hostingArray.push(element);
    });

    hostingArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to17 +
        element.women18to59 +
        element.womenOlderThan60 +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        personsAttendedValue[2].counters.value +
        element.boys0to17 +
        element.men18to59 +
        element.menOlderThan60;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to17 + element.men18to59 + element.menOlderThan60;

      womens.value =
        element.girls0to17 + element.women18to59 + element.womenOlderThan60;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Hosting", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[0] =
          monthsDataValuesHosting[0] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[0] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[1] =
          monthsDataValuesHosting[1] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[1] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[2] =
          monthsDataValuesHosting[2] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[2] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[3] =
          monthsDataValuesHosting[3] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        console.log(
          element.boys0to17,
          element.men18to59,
          element.menOlderThan60,
          "men data on April, Hosting"
        );

        monthsDataValuesWomen[3] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[3];

        monthsDataValuesMen[3] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[4] =
          monthsDataValuesHosting[4] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[4] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to17,
          element.men18to59,
          element.menOlderThan60,
          "men data on May, Hosting"
        );

        monthsDataValuesMen[4] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[5] =
          monthsDataValuesHosting[5] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[5] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[6] =
          monthsDataValuesHosting[6] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[6] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to17,
          element.men18to59,
          element.menOlderThan60,
          "men data on july, Hosting"
        );

        monthsDataValuesMen[6] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[7] =
          monthsDataValuesHosting[7] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[7] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[8] =
          monthsDataValuesHosting[8] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[8] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[9] =
          monthsDataValuesHosting[9] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[9] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[10] =
          monthsDataValuesHosting[10] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[10] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesHosting[11] =
          monthsDataValuesHosting[11] + element.project.assistedPeople;

        //element. kitType
        //element.reportItem
        //element.emergencyHousingUnit
        //element.mediumPowerGeneration

        monthsDataValuesWomen[11] =
          element.girls0to17 +
          element.women18to59 +
          element.womenOlderThan60 +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to17 +
          element.men18to59 +
          element.menOlderThan60 +
          monthsDataValuesMen[11];
      }
    });
    console.log(hostingArray, "este es hosting");
    hostingTotal.value = hostingArray.length;
  });

  sanitationArray.splice(0);

  axios.get("http://localhost:5000/sanitation").then(function (response) {
    response.data.forEach((element) => {
      sanitationArray.push(element);
    });

    sanitationArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to17S +
        element.women18to59S +
        element.womenOlderThan60S +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to17S +
        element.men18to59S +
        element.menOlderThan60S +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to17S + element.men18to59S + element.menOlderThan60S;

      womens.value =
        element.girls0to17S + element.women18to59S + element.womenOlderThan60S;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en Saneamiento", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[0] =
          monthsDataValuesSanitation[0] + element.project.assistedPeople;

        monthsDataValuesWomen[0] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[1] =
          monthsDataValuesSanitation[1] + element.project.assistedPeople;

        monthsDataValuesWomen[1] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[2] =
          monthsDataValuesSanitation[2] + element.project.assistedPeople;

        monthsDataValuesWomen[2] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[3] =
          monthsDataValuesSanitation[3] + element.project.assistedPeople;

        monthsDataValuesWomen[3] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to17S,
          element.men18to59S,
          element.menOlderThan60S,
          "men data in April, sanitation"
        );

        monthsDataValuesMen[3] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[4] =
          monthsDataValuesSanitation[4] + element.project.assistedPeople;

        monthsDataValuesWomen[4] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to17S,
          element.men18to59S,
          element.menOlderThan60S,
          "men data in may, sanitation"
        );

        monthsDataValuesMen[4] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[5] =
          monthsDataValuesSanitation[5] + element.project.assistedPeople;

        monthsDataValuesWomen[5] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[6] =
          monthsDataValuesSanitation[6] + element.project.assistedPeople;

        monthsDataValuesWomen[6] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to17S,
          element.men18to59S,
          element.menOlderThan60S,
          "men data in july, sanitation"
        );

        monthsDataValuesMen[6] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[7] =
          monthsDataValuesSanitation[7] + element.project.assistedPeople;

        monthsDataValuesWomen[7] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[8] =
          monthsDataValuesSanitation[8] + element.project.assistedPeople;

        monthsDataValuesWomen[8] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[9] =
          monthsDataValuesSanitation[9] + element.project.assistedPeople;

        monthsDataValuesWomen[9] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[10] =
          monthsDataValuesSanitation[10] + element.project.assistedPeople;

        monthsDataValuesWomen[10] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesSanitation[11] =
          monthsDataValuesSanitation[11] + element.project.assistedPeople;

        monthsDataValuesWomen[11] =
          element.girls0to17S +
          element.women18to59S +
          element.womenOlderThan60S +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to17S +
          element.men18to59S +
          element.menOlderThan60S +
          monthsDataValuesMen[11];
      }
    });
    console.log(sanitationArray, "este es sanitation");
    sanitationTotal.value = sanitationArray.length;
  });

  childProtectionArray.splice(0);

  axios.get("http://localhost:5000/child-protection").then(function (response) {
    response.data.forEach((element) => {
      childProtectionArray.push(element);
    });

    childProtectionArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to5C +
        element.girls6to9C +
        element.girls10to11C +
        element.girls12to14C +
        element.girls15to17C +
        element.women18to59C +
        element.womenOlderThan60C +
        element.girls0to11C +
        element.girls12to13C +
        element.girls14to17C +
        element.girls0to3C +
        element.girls4to8C +
        element.girls9to17C +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to5C +
        element.boys6to9C +
        element.boys10to11C +
        element.boys12to14C +
        element.boys15to17C +
        element.men18to59C +
        element.menOlderThan60C +
        element.boys0to11C +
        element.boys12to13C +
        element.boys14to17C +
        element.boys0to3C +
        element.boys4to8C +
        element.boys9to17C +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to5C +
        element.boys6to9C +
        element.boys10to11C +
        element.boys12to14C +
        element.boys15to17C +
        element.men18to59C +
        element.menOlderThan60C +
        element.boys0to11C +
        element.boys12to13C +
        element.boys14to17C +
        element.boys0to3C +
        element.boys4to8C +
        element.boys9to17C;

      womens.value =
        element.girls0to5C +
        element.girls6to9C +
        element.girls10to11C +
        element.girls12to14C +
        element.girls15to17C +
        element.women18to59C +
        element.womenOlderThan60C +
        element.girls0to11C +
        element.girls12to13C +
        element.girls14to17C +
        element.girls0to3C +
        element.girls4to8C +
        element.girls9to17C;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log(
            "el valor no coincide en Child Protection",
            index,
            element
          )
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[0] =
          monthsDataValuesChildProtection[0] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[0] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[1] =
          monthsDataValuesChildProtection[1] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[1] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[2] =
          monthsDataValuesChildProtection[2] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[2] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[3] =
          monthsDataValuesChildProtection[3] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[3] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to5C,
          element.boys6to9C,
          element.boys10to11C,
          element.boys12to14C,
          element.boys15to17C,
          element.men18to59C,
          element.menOlderThan60C,
          element.boys0to11C,
          element.boys12to13C,
          element.boys14to17C,
          element.boys0to3C,
          element.boys4to8C,
          element.boys9to17C,
          "men data on April, child protection"
        );

        monthsDataValuesMen[3] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[4] =
          monthsDataValuesChildProtection[4] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[4] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to5C,
          element.boys6to9C,
          element.boys10to11C,
          element.boys12to14C,
          element.boys15to17C,
          element.men18to59C,
          element.menOlderThan60C,
          element.boys0to11C,
          element.boys12to13C,
          element.boys14to17C,
          element.boys0to3C,
          element.boys4to8C,
          element.boys9to17C,
          "men data on May, child protection"
        );

        monthsDataValuesMen[4] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[5] =
          monthsDataValuesChildProtection[5] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[5] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[6] =
          monthsDataValuesChildProtection[6] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[6] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to5C,
          element.boys6to9C,
          element.boys10to11C,
          element.boys12to14C,
          element.boys15to17C,
          element.men18to59C,
          element.menOlderThan60C,
          element.boys0to11C,
          element.boys12to13C,
          element.boys14to17C,
          element.boys0to3C,
          element.boys4to8C,
          element.boys9to17C,
          "men data on july, child protection"
        );

        monthsDataValuesMen[6] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[7] =
          monthsDataValuesChildProtection[7] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[7] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[8] =
          monthsDataValuesChildProtection[8] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[8] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[9] =
          monthsDataValuesChildProtection[9] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[9] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[10] =
          monthsDataValuesChildProtection[10] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[10] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesChildProtection[11] =
          monthsDataValuesChildProtection[11] + element.project.assistedPeople;

        //element. lgtbPeopleC
        //element.pregnantWomenC
        //element.abandonmentPerson
        //element.legalProtectionP

        monthsDataValuesWomen[11] =
          element.girls0to5C +
          element.girls6to9C +
          element.girls10to11C +
          element.girls12to14C +
          element.girls15to17C +
          element.women18to59C +
          element.womenOlderThan60C +
          element.girls0to11C +
          element.girls12to13C +
          element.girls14to17C +
          element.girls0to3C +
          element.girls4to8C +
          element.girls9to17C +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to5C +
          element.boys6to9C +
          element.boys10to11C +
          element.boys12to14C +
          element.boys15to17C +
          element.men18to59C +
          element.menOlderThan60C +
          element.boys0to11C +
          element.boys12to13C +
          element.boys14to17C +
          element.boys0to3C +
          element.boys4to8C +
          element.boys9to17C +
          monthsDataValuesMen[11];
      }
    });
    console.log(childProtectionArray, "este es child protection");
    childProtectionTotal.value = childProtectionArray.length;
  });

  vbgProtectionArray.splice(0);

  axios.get("http://localhost:5000/vbg-protection").then(function (response) {
    response.data.forEach((element) => {
      vbgProtectionArray.push(element);
    });

    vbgProtectionArray.forEach((element, index) => {
      personsAttendedValue[1].counters.value =
        element.girls0to9V +
        element.girls10to14V +
        element.girls15to19V +
        element.women20to59V +
        element.womenOlderThan60V +
        personsAttendedValue[1].counters.value;

      personsAttendedValue[2].counters.value =
        element.boys0to9V +
        element.boys10to14V +
        element.boys15to19V +
        element.men20to59V +
        element.menOlderThan60V +
        personsAttendedValue[2].counters.value;

      let mens = ref(0);
      let womens = ref(0);
      let sum = ref(0);

      mens.value =
        element.boys0to9V +
        element.boys10to14V +
        element.boys15to19V +
        element.men20to59V +
        element.menOlderThan60V;

      womens.value =
        element.girls0to9V +
        element.girls10to14V +
        element.girls15to19V +
        element.women20to59V +
        element.womenOlderThan60V;

      sum.value = womens.value + mens.value;

      element.project.assistedPeople !== sum.value
        ? console.log("el valor no coincide en VBG Protection", index, element)
        : console.log("bien");

      if (element.project.reportDate.slice(5, 7) === "01") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[0] =
          monthsDataValuesvbgProtection[0] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[0] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[0];

        monthsDataValuesMen[0] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[0];
      }
      if (element.project.reportDate.slice(5, 7) === "02") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[1] =
          monthsDataValuesvbgProtection[1] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[1] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[1];

        monthsDataValuesMen[1] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[1];
      }
      if (element.project.reportDate.slice(5, 7) === "03") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[2] =
          monthsDataValuesvbgProtection[2] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[2] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[2];

        monthsDataValuesMen[2] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[2];
      }
      if (element.project.reportDate.slice(5, 7) === "04") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[3] =
          monthsDataValuesvbgProtection[3] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[3] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[3];

        console.log(
          element.boys0to9V,
          element.boys10to14V,
          element.boys15to19V,
          element.men20to59V,
          element.menOlderThan60V,
          "men data on april, vbg protection"
        );

        monthsDataValuesMen[3] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[3];
      }
      if (element.project.reportDate.slice(5, 7) === "05") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[4] =
          monthsDataValuesvbgProtection[4] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[4] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[4];

        console.log(
          element.boys0to9V,
          element.boys10to14V,
          element.boys15to19V,
          element.men20to59V,
          element.menOlderThan60V,
          "men data on may, vbg protection"
        );

        monthsDataValuesMen[4] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[4];
      }
      if (element.project.reportDate.slice(5, 7) === "06") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[5] =
          monthsDataValuesvbgProtection[5] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[5] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[5];

        monthsDataValuesMen[5] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[5];
      }
      if (element.project.reportDate.slice(5, 7) === "07") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[6] =
          monthsDataValuesvbgProtection[6] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[6] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[6];

        console.log(
          element.boys0to9V,
          element.boys10to14V,
          element.boys15to19V,
          element.men20to59V,
          element.menOlderThan60V,
          "men data on july,vbg protection"
        );

        monthsDataValuesMen[6] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[6];
      }
      if (element.project.reportDate.slice(5, 7) === "08") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[7] =
          monthsDataValuesvbgProtection[7] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[7] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[7];

        monthsDataValuesMen[7] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[7];
      }
      if (element.project.reportDate.slice(5, 7) === "09") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[8] =
          monthsDataValuesvbgProtection[8] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[8] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[8];

        monthsDataValuesMen[8] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[8];
      }
      if (element.project.reportDate.slice(5, 7) === "10") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[9] =
          monthsDataValuesvbgProtection[9] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[9] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[9];

        monthsDataValuesMen[9] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[9];
      }
      if (element.project.reportDate.slice(5, 7) === "11") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[10] =
          monthsDataValuesvbgProtection[10] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[10] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[10];

        monthsDataValuesMen[10] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[10];
      }
      if (element.project.reportDate.slice(5, 7) === "12") {
        //monthsDataValuesProjects[0]++;
        monthsDataValuesvbgProtection[11] =
          monthsDataValuesvbgProtection[11] + element.project.assistedPeople;

        //element.lgtbPeopleV
        //element.pregnantWomenV
        //element.physicalProtectionV
        //element.legalProtectionV

        monthsDataValuesWomen[11] =
          element.girls0to9V +
          element.girls10to14V +
          element.girls15to19V +
          element.women20to59V +
          element.womenOlderThan60V +
          monthsDataValuesWomen[11];

        monthsDataValuesMen[11] =
          element.boys0to9V +
          element.boys10to14V +
          element.boys15to19V +
          element.men20to59V +
          element.menOlderThan60V +
          monthsDataValuesMen[11];
      }
    });
    console.log(vbgProtectionArray, "este es vbg protection");
    vbgProtectionTotal.value = vbgProtectionArray.length;
  });

  generalArray.splice(0);
  axios.get("http://localhost:5000/project").then(function (response) {
    response.data.forEach((element) => {
      generalArray.push(element);
    });

    console.log(monthsDataValuesMen, "months data values men");
    console.log(monthsDataValuesWomen, "months data values women");
    const plusMen = ref(0);
    monthsDataValuesMen.forEach((element) => {
      console.log(element, "element de Values Men");

      plusMen.value = element + plusMen.value;
    });
    console.log(plusMen.value, "plus Men");
    const plusWomen = ref(0);
    monthsDataValuesWomen.forEach((element) => {
      console.log(element, "element de Values Women");

      plusWomen.value = element + plusWomen.value;
    });
    console.log(plusWomen.value, "Plus Women");

    console.log(generalArray, "este es general");
    monthsDataValuesProjects[0] = 0;
    monthsDataValuesProjects[1] = 0;
    monthsDataValuesProjects[2] = 0;
    monthsDataValuesProjects[3] = 0;
    monthsDataValuesProjects[4] = 0;
    monthsDataValuesProjects[5] = 0;
    monthsDataValuesProjects[6] = 0;
    monthsDataValuesProjects[7] = 0;
    monthsDataValuesProjects[8] = 0;
    monthsDataValuesProjects[9] = 0;
    monthsDataValuesProjects[10] = 0;
    monthsDataValuesProjects[11] = 0;

    monthsDataValuesFinishedProjects[0] = 0;
    monthsDataValuesFinishedProjects[1] = 0;
    monthsDataValuesFinishedProjects[2] = 0;
    monthsDataValuesFinishedProjects[3] = 0;
    monthsDataValuesFinishedProjects[4] = 0;
    monthsDataValuesFinishedProjects[5] = 0;
    monthsDataValuesFinishedProjects[6] = 0;
    monthsDataValuesFinishedProjects[7] = 0;
    monthsDataValuesFinishedProjects[8] = 0;
    monthsDataValuesFinishedProjects[9] = 0;
    monthsDataValuesFinishedProjects[10] = 0;
    monthsDataValuesFinishedProjects[11] = 0;

    monthsDataValuesInActionProjects[0] = 0;
    monthsDataValuesInActionProjects[1] = 0;
    monthsDataValuesInActionProjects[2] = 0;
    monthsDataValuesInActionProjects[3] = 0;
    monthsDataValuesInActionProjects[4] = 0;
    monthsDataValuesInActionProjects[5] = 0;
    monthsDataValuesInActionProjects[6] = 0;
    monthsDataValuesInActionProjects[7] = 0;
    monthsDataValuesInActionProjects[8] = 0;
    monthsDataValuesInActionProjects[9] = 0;
    monthsDataValuesInActionProjects[10] = 0;
    monthsDataValuesInActionProjects[11] = 0;

    monthsDataValuesPlannedProjects[0] = 0;
    monthsDataValuesPlannedProjects[1] = 0;
    monthsDataValuesPlannedProjects[2] = 0;
    monthsDataValuesPlannedProjects[3] = 0;
    monthsDataValuesPlannedProjects[4] = 0;
    monthsDataValuesPlannedProjects[5] = 0;
    monthsDataValuesPlannedProjects[6] = 0;
    monthsDataValuesPlannedProjects[7] = 0;
    monthsDataValuesPlannedProjects[8] = 0;
    monthsDataValuesPlannedProjects[9] = 0;
    monthsDataValuesPlannedProjects[10] = 0;
    monthsDataValuesPlannedProjects[11] = 0;

    personsAttendedValue[0].counters.value = 0;
    personsAttendedValue[3].counters.value = 0;
    personsAttendedValue[4].counters.value = 0;

    generalArray.forEach((element) => {
      personsAttendedValue[0].counters.value =
        element.assistedPeople + personsAttendedValue[0].counters.value;
      console.log(element);
      console.log(
        personsAttendedValue[0].counters.value,
        "sort data (counter de personsAttendedvalue)"
      );

      iProyects.value = 0;
      if (element.monetaryFound !== null || element.monetaryFound === "") {
        iProyects.value++;
      } else {
        rProyects.value++;
      }

      totalAssisted.value = element.assistedPeople + totalAssisted.value;

      personsAttendedValue[3].counters.value =
        element.disabledPopulation + personsAttendedValue[3].counters.value;

      totalDisabled.value = element.disabledPopulation + totalDisabled.value;

      personsAttendedValue[4].counters.value =
        element.nativePopulation + personsAttendedValue[4].counters.value;

      totalNative.value = element.nativePopulation + totalNative.value;

      if (element.reportDate.slice(5, 7) === "01") {
        monthsDataValuesProjects[0]++;
        monthsDataValuesGeneral[0] =
          monthsDataValuesGeneral[0] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "02") {
        monthsDataValuesProjects[1]++;
        monthsDataValuesGeneral[1] =
          monthsDataValuesGeneral[1] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "03") {
        monthsDataValuesProjects[2]++;
        monthsDataValuesGeneral[2] =
          monthsDataValuesGeneral[2] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "04") {
        monthsDataValuesProjects[3]++;
        monthsDataValuesGeneral[3] =
          monthsDataValuesGeneral[3] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "05") {
        monthsDataValuesProjects[4]++;
        monthsDataValuesGeneral[4] =
          monthsDataValuesGeneral[4] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "06") {
        monthsDataValuesProjects[5]++;
        monthsDataValuesGeneral[5] =
          monthsDataValuesGeneral[5] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "07") {
        monthsDataValuesProjects[6]++;
        monthsDataValuesGeneral[6] =
          monthsDataValuesGeneral[6] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "08") {
        monthsDataValuesProjects[7]++;
        monthsDataValuesGeneral[7] =
          monthsDataValuesGeneral[7] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "09") {
        monthsDataValuesProjects[8]++;
        monthsDataValuesGeneral[8] =
          monthsDataValuesGeneral[8] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "10") {
        monthsDataValuesProjects[9]++;
        monthsDataValuesGeneral[9] =
          monthsDataValuesGeneral[9] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "11") {
        monthsDataValuesProjects[10]++;
        monthsDataValuesGeneral[10] =
          monthsDataValuesGeneral[10] + element.assistedPeople;
      }

      if (element.reportDate.slice(5, 7) === "12") {
        monthsDataValuesProjects[11]++;
        monthsDataValuesGeneral[11] =
          monthsDataValuesGeneral[11] + element.assistedPeople;
      }

      if (
        element.reportDate.slice(5, 7) === "01" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[0]++;
      }

      if (
        element.reportDate.slice(5, 7) === "02" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[1]++;
      }

      if (
        element.reportDate.slice(5, 7) === "03" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[2]++;
      }

      if (
        element.reportDate.slice(5, 7) === "04" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[3]++;
      }

      if (
        element.reportDate.slice(5, 7) === "05" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[4]++;
      }

      if (
        element.reportDate.slice(5, 7) === "06" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[5]++;
      }

      if (
        element.reportDate.slice(5, 7) === "07" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[6]++;
      }

      if (
        element.reportDate.slice(5, 7) === "08" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[7]++;
      }

      if (
        element.reportDate.slice(5, 7) === "09" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[8]++;
      }

      if (
        element.reportDate.slice(5, 7) === "10" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[9]++;
      }

      if (
        element.reportDate.slice(5, 7) === "11" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[10]++;
      }

      if (
        element.reportDate.slice(5, 7) === "12" &&
        element.projectStatus === "Finalizada"
      ) {
        monthsDataValuesFinishedProjects[11]++;
      }

      if (
        element.reportDate.slice(5, 7) === "01" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[0]++;
      }

      if (
        element.reportDate.slice(5, 7) === "02" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[1]++;
      }

      if (
        element.reportDate.slice(5, 7) === "03" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[2]++;
      }

      if (
        element.reportDate.slice(5, 7) === "04" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[3]++;
      }

      if (
        element.reportDate.slice(5, 7) === "05" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[4]++;
      }

      if (
        element.reportDate.slice(5, 7) === "06" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[5]++;
      }

      if (
        element.reportDate.slice(5, 7) === "07" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[6]++;
      }

      if (
        element.reportDate.slice(5, 7) === "08" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[7]++;
      }

      if (
        element.reportDate.slice(5, 7) === "09" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[8]++;
      }

      if (
        element.reportDate.slice(5, 7) === "10" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[9]++;
      }

      if (
        element.reportDate.slice(5, 7) === "11" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[10]++;
      }

      if (
        element.reportDate.slice(5, 7) === "12" &&
        element.projectStatus === "En ejecución"
      ) {
        monthsDataValuesInActionProjects[11]++;
      }

      if (
        element.reportDate.slice(5, 7) === "01" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[0]++;
      }

      if (
        element.reportDate.slice(5, 7) === "02" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[1]++;
      }

      if (
        element.reportDate.slice(5, 7) === "03" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[2]++;
      }

      if (
        element.reportDate.slice(5, 7) === "04" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[3]++;
      }

      if (
        element.reportDate.slice(5, 7) === "05" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[4]++;
      }

      if (
        element.reportDate.slice(5, 7) === "06" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[5]++;
      }

      if (
        element.reportDate.slice(5, 7) === "07" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[6]++;
      }

      if (
        element.reportDate.slice(5, 7) === "08" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[7]++;
      }

      if (
        element.reportDate.slice(5, 7) === "09" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[8]++;
      }

      if (
        element.reportDate.slice(5, 7) === "10" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[9]++;
      }

      if (
        element.reportDate.slice(5, 7) === "11" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[10]++;
      }

      if (
        element.reportDate.slice(5, 7) === "12" &&
        element.projectStatus === "Planeada"
      ) {
        monthsDataValuesPlannedProjects[11]++;
      }

      if (
        element.reportDate.slice(5, 7) === "01" &&
        monthsData[monthsData.length - 1] !== "Enero"
      ) {
        monthsData.push("Enero");
      }
      if (
        element.reportDate.slice(5, 7) === "02" &&
        monthsData[monthsData.length - 1] !== "Febrero"
      ) {
        monthsData.push("Febrero");
      }
      if (
        element.reportDate.slice(5, 7) === "03" &&
        monthsData[monthsData.length - 1] !== "Marzo"
      ) {
        monthsData.push("Marzo");
      }
      if (
        element.reportDate.slice(5, 7) === "04" &&
        monthsData[monthsData.length - 1] !== "Abril"
      ) {
        monthsData.push("Abril");
      }
      if (
        element.reportDate.slice(5, 7) === "05" &&
        monthsData[monthsData.length - 1] !== "Mayo"
      ) {
        monthsData.push("Mayo");
      }
      if (
        element.reportDate.slice(5, 7) === "06" &&
        monthsData[monthsData.length - 1] !== "Junio"
      ) {
        monthsData.push("Junio");
      }
      if (
        element.reportDate.slice(5, 7) === "07" &&
        monthsData[monthsData.length - 1] !== "Julio"
      ) {
        monthsData.push("Julio");
      }
      if (
        element.reportDate.slice(5, 7) === "08" &&
        monthsData[monthsData.length - 1] !== "Agosto"
      ) {
        monthsData.push("Agosto");
      }
      if (
        element.reportDate.slice(5, 7) === "09" &&
        monthsData[monthsData.length - 1] !== "Septiembre"
      ) {
        monthsData.push("Septiembre");
      }
      if (
        element.reportDate.slice(5, 7) === "10" &&
        monthsData[monthsData.length - 1] !== "Octubre"
      ) {
        monthsData.push("Octubre");
      }
      if (
        element.reportDate.slice(5, 7) === "11" &&
        monthsData[monthsData.length - 1] !== "Noviembre"
      ) {
        monthsData.push("Noviembre");
      }
      if (
        element.reportDate.slice(5, 7) === "12" &&
        monthsData[monthsData.length - 1] !== "Diciembre"
      ) {
        monthsData.push("Diciembre");
      }
    });
    console.log(totalAssisted.value, "total assisted");
    console.log(monthsDataValuesMen, "months data values men");
    console.log(monthsDataValuesWomen, "months data values women");
    console.log(monthsDataValuesGeneral, "months data values general");
    console.log(monthsDataValuesProjects, "month data projects value");

    projectsValue[1].counters.value = 0;
    monthsDataValuesProjects.forEach((element) => {
      projectsValue[1].counters.value =
        element + projectsValue[1].counters.value;
    });

    projectsValue[0].counters.value = 0;

    monthsDataValuesFinishedProjects.forEach((element) => {
      projectsValue[0].counters.value =
        element + projectsValue[0].counters.value;
    });

    projectsValue[2].counters.value = 0;
    monthsDataValuesInActionProjects.forEach((element) => {
      projectsValue[2].counters.value =
        element + projectsValue[2].counters.value;
    });

    projectsValue[3].counters.value = 0;
    monthsDataValuesPlannedProjects.forEach((element) => {
      projectsValue[3].counters.value =
        element + projectsValue[3].counters.value;
    });

    console.log("PROJECTOS TERMINADOS", projectsValue[0].counters.value);
    console.log("PROJECTOS PLANEADOS", projectsValue[3].counters.value);
    console.log("PROJECTOS EN EJECUCION", projectsValue[2].counters.value);

    /*let resultValueArray = monthsDataValuesProjects.filter((item) => {
        return item !== 0;
      });

      console.log(resultValueArray, "original resultValueArray");
      monthsDataValuesProjects.splice(0);

      resultValueArray.forEach((element) => {
        monthsDataValuesProjects.push(element);
      });

      console.log(monthsDataValuesProjects, "monthsDataValuesProjects actualizado");*/

    personsAttendedValue[0].cumplishmentFormula.value =
      (personsAttendedValue[0].counters.value / peopleToAssistYearly.value) *
      100;

    personsAttendedValue[2].cumplishmentFormula.value =
      (personsAttendedValue[2].counters.value / totalAssisted.value) * 100;

    personsAttendedValue[1].cumplishmentFormula.value =
      (personsAttendedValue[1].counters.value / totalAssisted.value) * 100;

    personsAttendedValue[3].cumplishmentFormula.value =
      (personsAttendedValue[3].counters.value / totalAssisted.value) * 100;

    personsAttendedValue[4].cumplishmentFormula.value =
      (personsAttendedValue[4].counters.value / totalAssisted.value) * 100;

    ////////////////////////////////////////////////////////////////////

    projectsValue[0].cumplishmentFormula.value =
      (projectsValue[0].counters.value / projectsToCulminateYearly.value) * 100;

    projectsValue[1].cumplishmentFormula.value =
      (projectsValue[1].counters.value / projectsToCulminateYearly.value) * 100;

    projectsValue[2].cumplishmentFormula.value =
      (projectsValue[2].counters.value / projectsToCulminateYearly.value) * 100;

    projectsValue[3].cumplishmentFormula.value =
      (projectsValue[3].counters.value / projectsToCulminateYearly.value) * 100;

    console.log(monthsData, "original");

    let result = monthsData.filter((item, index) => {
      return monthsData.indexOf(item) === index;
    });
    console.log(result, "original result");
    monthsData.splice(0);

    result.forEach((element) => {
      monthsData.push(element);
    });

    console.log(monthsData, "MonthsData actualizado");

    personsAttendedValue.forEach((element) => {
      console.log(
        element.cumplishmentFormula.value,
        "element.cumplishmentFormula.value"
      );
      if (element.cumplishmentFormula.value >= 95.0) {
        element.colours.value = "bg-green";
      } else {
        if (
          element.cumplishmentFormula.value >= 50.0 &&
          element.cumplishmentFormula.value < 94.0
        ) {
          element.colours.value = "bg-warning";
        } else {
          element.colours.value = "bg-red";
        }
      }
    });

    projectsValue.forEach((element) => {
      console.log(
        element.cumplishmentFormula.value,
        "element.cumplishmentFormula.value"
      );
      if (element.cumplishmentFormula.value >= 95.0) {
        element.colours.value = "bg-green";
      } else {
        if (
          element.cumplishmentFormula.value >= 50.0 &&
          element.cumplishmentFormula.value < 94.0
        ) {
          element.colours.value = "bg-warning";
        } else {
          element.colours.value = "bg-red";
        }
      }
    });
  });
}

export default defineComponent({
  name: "IndexPage , App",
  components: {
    Bar,
    //Radar,
    //PolarArea,
    Doughnut,
    readExcelComponent,
    //chartComponent,
  },

  setup() {
    const dataForChart = ref(null); //elementos generales del front
    const projectsGeneral = ref("Estadísticas de Acuario");
    const projectDescriptionGeneral = ref(
      "A continuación se mostrarán datos acerca de las actividades realizadas recientemente por Acuario"
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

    const N_Proyects = ref(10);

    const proyectWorkTeam = ref(200);
    const workteamCapitated = ref(50);
    const workTeamPreparated = ref(50);

    const totalValue = ref(0);

    const screendisplay = ref("");

    /*const prueba = (function () {
      function a() {
        console.log("calling ..a");
      }

      //exposing a and b as a public API
      return a;
    })();*/

    // expose the ref to the template
    // a list for testing
    /*let items = [
      { id: 1, name: "item name 1" },
      { id: 2, name: "item name 2" },
      { id: 3, name: "item name 3" },
    ];

    onMounted(() => {
      let all = dataForChart.value;
      let item1 = all[0];
      let item2 = all[1];
      let item3 = all[2];

      console.log([all, item1, item2, item3]);
    });*/

    return {
      //dataForChart,
      //prueba,
      //MultiPurposeDashboard: ClusterList,

      authenticated,
      projectsToCulminateYearly,
      projectstoCulminateMonthly,
      peopleToAssistYearly,
      peopleToAssistMonthly,
      attendedCoursesMonthly,
      attendedCoursesYearly,
      dialogAttendedPersons: ref(false),
      dialogFinishedProjects: ref(false),
      user,
      users,
      colorGrande,
      monthsData,
      monthsDataValuesProjects,
      monthsDataValuesPlannedProjects,
      monthsDataValuesInActionProjects,
      monthsDataValuesFinishedProjects,
      educationTotal,
      sanitationTotal,
      nutritionTotal,
      healthTotal,
      childProtectionTotal,
      protectionTotal,
      hostingTotal,
      vbgProtectionTotal,
      foodSafetyTotal,
      transverseTotal,
      totalWomen,
      totalBoys,
      totalGirls,
      totalMen,
      totalDisabled,
      totalNative,
      chartComponent,
      readExcelComponent,
      clusterList,
      totalValue,
      totalAssisted,
      tab: ref("Pagina Principal"),
      //elementos reactivos a retornar de datos del back
      projectsGeneral,
      projectDescriptionGeneral,
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
      personsAttendedValue,
      projectsValue,
      userInformation() {
        console.log(user, "user");
        console.log(users, "users");
        console.log(JSON.parse(localStorage.getItem("token")));
        console.log(authenticated.value);
      },
      async refreshDashboard() {
        console.log("aqui arranca el refresh");
        childProtectionArray.splice(0);
        console.log(childProtectionArray, "este child protection");
        healthArray.splice(0);
        console.log(healthArray, "este es health");
        vbgProtectionArray.splice(0);
        console.log(vbgProtectionArray, "este es vbg protection");
        transverseArray.splice(0);
        console.log(transverseArray, "este es transverse");
        generalArray.splice(0);
        console.log(generalArray, "este es general");
        hostingArray.splice(0);
        console.log(hostingArray, "este es hosting");
        educationArray.splice(0);
        console.log(educationArray, "este es education");
        nutritionArray.splice(0);
        console.log(nutritionArray, "este es nutrition");
        foodSafetyArray.splice(0);
        console.log(foodSafetyArray, "este es food safety");
        protectionArray.splice(0);
        console.log(protectionArray, "este es protection");
        sanitationArray.splice(0);
        console.log(sanitationArray, "este es sanitation");
        await axios
          .get("http://localhost:5000/transverse")
          .then(function (response) {
            response.data.forEach((element) => {
              transverseArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/education")
          .then(function (response) {
            response.data.forEach((element) => {
              educationArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/health")
          .then(function (response) {
            response.data.forEach((element) => {
              healthArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/protection")
          .then(function (response) {
            response.data.forEach((element) => {
              protectionArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/nutrition")
          .then(function (response) {
            response.data.forEach((element) => {
              nutritionArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/food-safety")
          .then(function (response) {
            response.data.forEach((element) => {
              foodSafetyArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/hosting")
          .then(function (response) {
            response.data.forEach((element) => {
              hostingArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/sanitation")
          .then(function (response) {
            response.data.forEach((element) => {
              sanitationArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/child-protection")
          .then(function (response) {
            response.data.forEach((element) => {
              childProtectionArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/vbg-protection")
          .then(function (response) {
            response.data.forEach((element) => {
              vbgProtectionArray.push(element);
            });
          });

        await axios
          .get("http://localhost:5000/project")
          .then(function (response) {
            response.data.forEach((element) => {
              generalArray.push(element);
            });
          });

        console.log("refresco hecho");
        console.log(childProtectionArray, "este child protection");

        console.log(healthArray, "este es health");

        console.log(vbgProtectionArray, "este es vbg protection");

        console.log(transverseArray, "este es transverse");

        console.log(generalArray, "este es general");

        console.log(hostingArray, "este es hosting");

        console.log(educationArray, "este es education");

        console.log(nutritionArray, "este es nutrition");

        console.log(foodSafetyArray, "este es food safety");

        console.log(protectionArray, "este es protection");

        console.log(sanitationArray, "este es sanitation");
      },
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
        /*personsAttendedValue.forEach((element) => {
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
        });*/

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
        console.log(totalAssisted.value);
      },
      display() {
        //console.log(dataAttendedPersons);
        /*sanitationArray.forEach((element) => {
          if (
            element.project.reportDate.slice(5, 7) === "01" &&
            monthsData[monthsData.length - 1] !== "Enero"
          ) {
            monthsData.push("Enero");
          }
          if (
            element.project.reportDate.slice(5, 7) === "02" &&
            monthsData[monthsData.length - 1] !== "Febrero"
          ) {
            monthsData.push("Febrero");
          }
          if (
            element.project.reportDate.slice(5, 7) === "03" &&
            monthsData[monthsData.length - 1] !== "Marzo"
          ) {
            monthsData.push("Marzo");
          }
          if (
            element.project.reportDate.slice(5, 7) === "04" &&
            monthsData[monthsData.length - 1] !== "Abril"
          ) {
            monthsData.push("Abril");
          }
          if (
            element.project.reportDate.slice(5, 7) === "05" &&
            monthsData[monthsData.length - 1] !== "Mayo"
          ) {
            monthsData.push("Mayo");
          }
          if (
            element.project.reportDate.slice(5, 7) === "06" &&
            monthsData[monthsData.length - 1] !== "Junio"
          ) {
            monthsData.push("Junio");
          }
        });

        console.log(monthsData, "original");

        let result = monthsData.filter((item, index) => {
          return monthsData.indexOf(item) === index;
        });
        console.log(result, "original result");
        monthsData.splice(0);

        result.forEach((element) => {
          monthsData.push(element);
        });

        console.log(monthsData, "actualizado");*/
      },

      dataTooltipProjectsFinished: {
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
            label: "Projectos Finalizados en el año 2023",
            backgroundColor: "#00b332",
            data: monthsDataValuesFinishedProjects,
          },
        ],
      },
      dataTooltipProjectsPlanned: {
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
            label: "Projectos Planificados en el año 2023",
            backgroundColor: "#00f0ff",
            data: monthsDataValuesPlannedProjects,
          },
        ],
      },
      dataTooltipProjectsInAction: {
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
            label: "Projectos en ejecución en el año 2023",
            backgroundColor: "#7d0080",
            data: monthsDataValuesInActionProjects,
          },
        ],
      },
      dataTooltipProjectsRegistered: {
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
            label: "Projectos registrados en el año 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesProjects,
          },
        ],
      },

      dataTooltipPersonsGeneral: {
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

      dataProjectsGeneral: {
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
            label: "Projectos Registrados en el año 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesProjects /*.splice(0, monthsDataValuesProjects.length)*/,
            //color: "#486CA1",
          },
          {
            label: "Projectos Finalizados en el año 2023",
            backgroundColor: "#00b332",

            data: monthsDataValuesFinishedProjects,
          },
          {
            label: "Projectos Planificados para el año 2023",
            backgroundColor: "#00f0ff",
            data: monthsDataValuesPlannedProjects,
          },
          {
            label: "Projectos en ejecución en el año 2023",
            backgroundColor: "#7d0080",

            data: monthsDataValuesInActionProjects,
          },
        ],
      },

      dataAttendedPersons: {
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
            data: monthsDataValuesGeneral /*.splice(0, monthsDataValuesProjects.length)*/,
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
        ] /*monthsData*/,
        datasets: [
          {
            label: "Mujeres Atendidas en el periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesWomen /*.splice(0, monthsDataValuesProjects.length)*/,
            color: "#486CA1",
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
        ] /*monthsData*/,
        datasets: [
          {
            label: "Hombres Atendidos en el periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesMen /*.splice(0, monthsDataValuesProjects.length)*/,
            color: "#486CA1",
          },
        ],
      },
      data4: {
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
            label: "Personas Discapacitadas atendidas en el periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesDisabled /*.splice(0, monthsDataValuesProjects.length)*/,
            color: "#486CA1",
          },
        ],
      },
      data5: {
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
            label: "Población Indigena atendidas en el periodo 2023",
            backgroundColor: "#486CA1",
            data: monthsDataValuesNative /*.splice(0, monthsDataValuesProjects.length)*/,
            color: "#486CA1",
          },
        ],
      },
      dataProjectsDoughnut: {
        labels: [
          "Eje Transversal",
          "Alojamiento, Energia y Enseres",
          "Agua, Saneamiento e Higiene",
          "Educación",
          "Nutrición",
          "Protección General",
          "Proteccion Niños, Niñas, Adolescentes",
          "Proteccion Violencia Basada en Género",
          "Salud",
          "Seguridad Alimentaria",
        ] /*monthsData*/,
        datasets: [
          {
            backgroundColor: [
              "#000000",
              "#ff2800",
              "#00b39b",
              "#ffd100",
              "#00cc7f",
              "#1a1bff",
              "#b200b3",
              "#ff80ec",
              "#be2532",
              "#038000",
            ],
            data: [
              transverseTotal,
              hostingTotal,
              sanitationTotal,
              educationTotal,
              nutritionTotal,
              protectionTotal,
              childProtectionTotal,
              vbgProtectionTotal,
              healthTotal,
              foodSafetyTotal,
            ] /*.splice(0, monthsDataValuesProjects.length)*/,
            //color: "#486CA1",
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
      dataPersonal: {
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

      dataMonths: {
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
            backgroundColor: "#5f9ea0",
            data: monthsDataValuesGeneral,
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
        ],
      },

      dataPrueba: {
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
            label: "Enero",
            backgroundColor: "#5f9ea0",
            data: [monthsDataValuesGeneral[0]],
          },
          {
            label: "Febrero",
            backgroundColor: "#ff4ec1",

            data: [monthsDataValuesGeneral[1]],
          },
          {
            label: "Marzo",
            backgroundColor: "#5361f5",
            data: [monthsDataValuesGeneral[2]],
          },
          {
            label: "Abril",
            backgroundColor: "#5361f5",
            data: [monthsDataValuesGeneral[3]],
          },
          {
            label: "Mayo",
            backgroundColor: "#5f9ea0",
            data: [monthsDataValuesGeneral[4]],
          },
          {
            label: "Junio",
            backgroundColor: "#ff4ec1",

            data: [monthsDataValuesGeneral[5]],
          },
          {
            label: "Julio",
            backgroundColor: "#5361f5",
            data: [monthsDataValuesGeneral[6]],
          },
          {
            label: "Agosto",
            backgroundColor: "#5f9ea0",
            data: [monthsDataValuesGeneral[7]],
          },
          {
            label: "Septiembre",
            backgroundColor: "#ff4ec1",

            data: [monthsDataValuesGeneral[8]],
          },
          {
            label: "Octubre",
            backgroundColor: "#5361f5",
            data: [monthsDataValuesGeneral[9]],
          },
          {
            label: "Noviembre",
            backgroundColor: "#5f9ea0",
            data: [monthsDataValuesGeneral[10]],
          },
          {
            label: "Diciembre",
            backgroundColor: "#ff4ec1",

            data: [monthsDataValuesGeneral[11]],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },

      screendisplay,
      //elementos a retornar de la funcion para subir xlsx

      model: ref(null),
      optionsTimeSelect: ["Mensual", "Trimestral", "Anual", "Historico"],
    };
  },

  created() {
    let datoslocalstorage = JSON.parse(localStorage.getItem("token"));
    if (datoslocalstorage !== null) {
      user.push(datoslocalstorage);
    }
    if (user.length === 0 || user[0].role === "user") {
      authenticated.value = false;
    } else {
      authenticated.value = true;
    }
  },

  mounted() {
    //colorsDisplay();
    randomizeAll();
  },

  beforeMount() {
    distributeValues();
    axios.get("http://localhost:5000/users").then(function (response) {
      response.data.forEach((element) => {
        users.push(element);
      });
    });
  },
  data() {
    const valor = ref(0);
    return {
      valor,
      elements: () => ({
        items: [],
      }),

      /*dataAttendedPersons: {
        labels: [],
        datasets: [
          {
            label: "Proyectos",
            backgroundColor: "#486CA1",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 98],
            color: "#486CA1",
          },
        ],
      },*/
    };
  },
  computed() {
    //...mapState('users',['users','loading','overlay']),
  },
  methods() {
    //...mapActions('users',['listUsers']),
  },
});
</script>
