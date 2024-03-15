<template>
  <!--botones para analizar xlsx-->

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
      <q-btn
        label="Cargar Informe"
        type="submit"
        color="primary"
        @click="showLoading"
      />
    </div>
  </q-form>
</template>

<script>
import readXlsxFile from "read-excel-file";
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "readExcelComponent",
  props: {},

  setup() {
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });
    //elementos reactivos de back para retornar del proyecto/organizacion
    //Project Data
    const reportDate = ref();
    const reportedMonth = ref("");
    const humanitaryResponsePlan = ref("");
    const startDate = ref();
    const expectedFinishDate = ref();
    const activityStatus = ref("");
    const commentary = ref("");
    const disasterResponse = ref("");
    const sectorialActivity = ref("");
    const sectorialActivityCode = ref("");
    const sectorialActivityIndicator = ref("");
    const directBenef = ref("");
    const sectorialActivityIndicatorReached = ref(0);
    const majorityGroup = ref("");
    const establishmentType = ref("");

    const projectName = ref("");
    const monetaryFound = ref("");
    const establishment_details = ref("");
    const latitude = ref("");
    const longitude = ref("");
    const indirectBenef = ref(0);
    const recurringBenef = ref("");
    const disabledPopulation = ref(0);
    const nativePopulation = ref(0);
    const assistedPeople = ref(0);
    const projectUbication = ref("");

    const parishName = ref("");
    const municipalityName = ref("");
    const dadeName = ref("");
    const parishID = ref(0);
    const municipalityID = ref(0);
    const dadeID = ref(0);
    const projectID = ref(0);

    const independentActivity = ref("");

    //transversal Data
    const channelUsed = ref("");
    const topicsAddressed = ref("");

    //Education Data
    const girls0to2E = ref(0);
    const boys0to2E = ref(0);
    const girls3to5E = ref(0);
    const boys3to5E = ref(0);
    const girls6to11E = ref(0);
    const boys6to11E = ref(0);
    const girls12to17E = ref(0);
    const boys12to17E = ref(0);
    const girls18to19E = ref(0);
    const boys18to19E = ref(0);
    //vbg Protection tambien
    const women20to59E = ref(0);
    const men20to59E = ref(0);
    //child protection, vgb Protection, protection, hosting, transversal, wash y food security tambien
    const menOlderThan60E = ref(0);
    const womenOlderThan60E = ref(0);

    //Health Data
    const subaticity = ref("");
    const criticalServices = ref("");
    //child protection tambien
    const boys0to5 = ref(0);
    const girls0to5 = ref(0);
    //
    const boys6to19 = ref(0);
    const girls6to19 = ref(0);
    const men20to64 = ref(0);
    const women20to64 = ref(0);
    const men65orOlder = ref(0);
    const women65orOlder = ref(0);

    //nutrition Data
    const girls0to5M = ref(0);
    const boys0to5M = ref(0);
    const girls6to59m = ref(0);
    const boys6to59M = ref(0);
    const girls5to15 = ref(0);
    const boys5to15 = ref(0);
    const pregnantGirls = ref(0);
    //protection tambien
    const pregnantWomen = ref(0);
    //
    const lactatingGirls = ref(0);
    const lactatingWomen = ref(0);

    //food safety data
    const centersServed = ref(0);
    const assistedLiving = ref(0);

    //protection, Hosting, Transversal, Wash y food security Data
    const boys0to17 = ref(0);
    const girls0to17 = ref(0);
    //child protection, nutrition tambien
    const men18to59 = ref(0);
    const women18to59 = ref(0);

    //Hosting Data
    const kitType = ref("");
    const reportItem = ref("");
    const emergencyHousingUnit = ref("");
    const mediumPowerGeneration = ref("");

    //protection & vgb protection data
    //child protection tambien
    const lgtbPeople = ref(0);
    const legalProtection = ref(0);
    //
    const physicalProtection = ref(0);

    //child Protection data
    const physicalOrLegalProtection = ref(0);
    const abandonmentPerson = ref(0);
    const girls6to9C = ref(0);
    const boys6to9C = ref(0);
    const girls10to11C = ref(0);
    const boys10to11C = ref(0);
    const girls12to14C = ref(0);
    const boys12to14C = ref(0);
    const girls15to17C = ref(0);
    const boys15to17C = ref(0);
    const girls0to11C = ref(0);
    const boys0to11C = ref(0);
    const girls12to13C = ref(0);
    const boys12to13C = ref(0);
    const girls14to17C = ref(0);
    const boys14to17C = ref(0);
    const girls0to3C = ref(0);
    const boys0to3C = ref(0);
    const girls4to8C = ref(0);
    const boys4to8C = ref(0);
    const girls9to17C = ref(0);
    const boys9to17C = ref(0);

    //vbg Protection data
    const girls0to9V = ref(0);
    const boys0to9V = ref(0);
    const girls10to14V = ref(0);
    const boys10to14V = ref(0);
    const girls15to19V = ref(0);
    const boys15to19V = ref(0);

    //convert-excel-to-json
    const file = ref(null);
    //const files = ref(null)

    //datos de la funcion para subir elementos de xls

    return {
      async showLoading() {
        $q.loading.show({
          message: "Procesando. . . Espere, por favor.",
        });

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide();
          timer = void 0;
        }, 5500);
      },
      //files,
      file,

      async onSubmit() {
        const formData = file.value;

        //Transverse

        await readXlsxFile(formData, { sheet: "Transversal" }).then(
          async (rowsTransversal) => {
            console.log(rowsTransversal.length);
            if (rowsTransversal.length === 4) {
              console.log("Transversal no posee datos");
            } else {
              for (let i = 4; i < rowsTransversal.length; i++) {
                const fila = rowsTransversal[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsTransversal[3][j] === "#date+reported") {
                    reportDate.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#fund+type") {
                    monetaryFound.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#adm1+name") {
                    dadeName.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#adm2+name") {
                    municipalityName.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#adm3+name") {
                    parishName.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#location") {
                    establishment_details.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#location+type") {
                    establishmentType.value = rowsTransversal[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsTransversal[3][j] === "#location") {
                    projectUbication.value = rowsTransversal[i][j];
                  }

                  if (
                    rowsTransversal[3][j] === "#project+code_name" &&
                    rowsTransversal[i][j] !== null
                  ) {
                    projectName.value = rowsTransversal[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (rowsTransversal[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsTransversal[i][j].toString();
                  }
                  if (rowsTransversal[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsTransversal[i][j].toString();
                  }
                  if (
                    rowsTransversal[3][j] === "#activity+natural+disaster" &&
                    rowsTransversal[3][j] !== null
                  ) {
                    disasterResponse.value = rowsTransversal[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsTransversal[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "'#activity+indicator+name") {
                    sectorialActivityIndicator.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsTransversal[i][j];
                  }

                  rowsTransversal[3][j] === "'#activity+indicator+reached"
                    ? (sectorialActivityIndicatorReached.value =
                        rowsTransversal[i][j])
                    : (sectorialActivityIndicatorReached.value = 0);

                  if (rowsTransversal[3][j] === "#date+start") {
                    startDate.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#status") {
                    activityStatus.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached") {
                    assistedPeople.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+type") {
                    majorityGroup.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsTransversal[i][j];
                  }

                  //individual data

                  if (rowsTransversal[3][j] === "'#communication+channel") {
                    channelUsed.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "'#communication+topic") {
                    topicsAddressed.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+f+children+age0_17") {
                    girls0to17.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+m+children+age0_17") {
                    boys0to17.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+f+adult+age18_59") {
                    women18to59.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+m+adult+age18_59") {
                    men18to59.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#reached+f+elderly+age60_") {
                    womenOlderThan60E.value = rowsTransversal[i][j];
                  }
                  if (rowsTransversal[3][j] === "#reached+m+elderly+age60_") {
                    menOlderThan60E.value = rowsTransversal[i][j];
                  }

                  if (rowsTransversal[3][j] === "#activity+comments") {
                    commentary.value = rowsTransversal[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/transverse", {
                    project: projectID.value,
                    channelUsed: channelUsed.value,
                    topicsAddressed: topicsAddressed.value,
                    girls0to17T: girls0to17.value,
                    boys0to17T: boys0to17.value,
                    women18to59T: women18to59.value,
                    men18to59T: men18to59.value,
                    menOlderThan60T: menOlderThan60E.value,
                    womenOlderThan60T: womenOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es transverse cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en transverse cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/transverse")
                .then(function (response) {
                  console.log(response.data, "Este es transverse");
                });
            }
          }
        );

        // Health

        await readXlsxFile(formData, { sheet: "Salud" }).then(
          async (rowsSalud) => {
            if (rowsSalud.length === 4) {
              console.log("Salud no posee datos");
            } else {
              for (let i = 4; i < rowsSalud.length; i++) {
                const fila = rowsSalud[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsSalud[3][j] === "#date+reported") {
                    reportDate.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#fund+type") {
                    monetaryFound.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#adm1+name") {
                    dadeName.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#adm2+name") {
                    municipalityName.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#adm3+name") {
                    parishName.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#location") {
                    establishment_details.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#location+type") {
                    establishmentType.value = rowsSalud[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsSalud[3][j] === "#location") {
                    projectUbication.value = rowsSalud[i][j];
                  }

                  if (
                    rowsSalud[3][j] === "#project+code_name" &&
                    rowsSalud[i][j] !== null
                  ) {
                    projectName.value = rowsSalud[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (rowsSalud[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsSalud[i][j].toString();
                  }
                  if (rowsSalud[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsSalud[i][j].toString();
                  }
                  if (
                    rowsSalud[3][j] === "#activity+natural+disaster" &&
                    rowsSalud[3][j] !== null
                  ) {
                    disasterResponse.value = rowsSalud[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsSalud[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "'#activity+indicator+name") {
                    sectorialActivityIndicator.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "'#activity+indicator+reached") {
                    sectorialActivityIndicatorReached.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#date+start") {
                    startDate.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#status") {
                    activityStatus.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached") {
                    assistedPeople.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+type") {
                    majorityGroup.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsSalud[i][j];
                  }

                  //individual data

                  if (rowsSalud[3][j] === "#activity+subactivity") {
                    subaticity.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#critical+service") {
                    criticalServices.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+f+children+age0_5") {
                    girls0to5.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+m+children+age0_5") {
                    boys0to5.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+f+children+age6_19") {
                    girls6to19.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+m+children+age6_19") {
                    boys6to19.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#reached+f+adult+age20_64") {
                    women20to64.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+m+adult+age20_64") {
                    men20to64.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+m+elderly+age65_") {
                    men65orOlder.value = rowsSalud[i][j];
                  }
                  if (rowsSalud[3][j] === "#reached+f+elderly+age65_") {
                    women65orOlder.value = rowsSalud[i][j];
                  }

                  if (rowsSalud[3][j] === "#activity+comments") {
                    commentary.value = rowsSalud[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/health", {
                    project: projectID.value,
                    subaticity: subaticity.value,
                    criticalServices: criticalServices.value,

                    girls0to5: girls0to5.value,
                    boys0to5: boys0to5.value,
                    girls6to19: girls6to19.value,
                    boys6to19: boys6to19.value,
                    women20to64: women20to64.value,
                    men20to64: men20to64.value,
                    menOlderThan65: men65orOlder.value,
                    womenOlderThan65: women65orOlder.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es health cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en health cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/health")
                .then(function (response) {
                  console.log(response.data, "Este es health");
                });
            }
          }
        );

        // Nutrition

        await readXlsxFile(formData, { sheet: "Nutrición" }).then(
          async (rowsNutricion) => {
            if (rowsNutricion.length === 4) {
              console.log("nutricion no posee datos");
            } else {
              for (let i = 4; i < rowsNutricion.length; i++) {
                const fila = rowsNutricion[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsNutricion[3][j] === "#date+reported") {
                    reportDate.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsNutricion[i][j];
                  }

                  if (rowsNutricion[3][j] === "#fund+type") {
                    monetaryFound.value = rowsNutricion[i][j];
                  }

                  if (rowsNutricion[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsNutricion[i][j];
                  }

                  if (rowsNutricion[3][j] === "#adm1+name") {
                    dadeName.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#adm2+name") {
                    municipalityName.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#adm3+name") {
                    parishName.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#location") {
                    establishment_details.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#location+type") {
                    establishmentType.value = rowsNutricion[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsNutricion[3][j] === "#location") {
                    projectUbication.value = rowsNutricion[i][j];
                  }

                  if (
                    rowsNutricion[3][j] === "#project+code_name" &&
                    rowsNutricion[i][j] !== null
                  ) {
                    projectName.value = rowsNutricion[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (rowsNutricion[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsNutricion[i][j].toString();
                  }
                  if (rowsNutricion[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsNutricion[i][j].toString();
                  }
                  if (
                    rowsNutricion[3][j] === "#activity+natural+disaster" &&
                    rowsNutricion[3][j] !== null
                  ) {
                    disasterResponse.value = rowsNutricion[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsNutricion[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "'#activity+indicator+name") {
                    sectorialActivityIndicator.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "'#activity+indicator+reached") {
                    sectorialActivityIndicatorReached.value =
                      rowsNutricion[i][j];
                  }

                  if (rowsNutricion[3][j] === "#date+start") {
                    startDate.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#status") {
                    activityStatus.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached") {
                    assistedPeople.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+type") {
                    majorityGroup.value = rowsNutricion[i][j];
                  }

                  if (rowsNutricion[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsNutricion[i][j];
                  }

                  //individual data

                  if (rowsNutricion[3][j] === "#reached+f+children+age0_5m") {
                    girls0to5M.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+m+children+age0_5m") {
                    boys0to5M.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+f+children+age6m_59m") {
                    girls6to59m.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+m+children+age6m_59m") {
                    boys6to59M.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+f+children+age5_15") {
                    girls5to15.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+m+children+age5_15") {
                    boys5to15.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+f+adult+age18_59") {
                    women18to59.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#reached+m+adult+age18_59") {
                    men18to59.value = rowsNutricion[i][j];
                  }

                  if (
                    rowsNutricion[3][j] ===
                    "#reached+f+children+age0_17+pregnat"
                  ) {
                    pregnantGirls.value = rowsNutricion[i][j];
                  }
                  if (
                    rowsNutricion[3][j] === "#reached+f+adult+age18_59+pregnant"
                  ) {
                    pregnantWomen.value = rowsNutricion[i][j];
                  }
                  if (
                    rowsNutricion[3][j] ===
                    "#reached+f+children+age0_17+lactating"
                  ) {
                    lactatingGirls.value = rowsNutricion[i][j];
                  }
                  if (
                    rowsNutricion[3][j] ===
                    "#reached+f+adult+age18_59+lactating"
                  ) {
                    lactatingWomen.value = rowsNutricion[i][j];
                  }
                  if (rowsNutricion[3][j] === "#activity+comments") {
                    commentary.value = rowsNutricion[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/nutrition", {
                    project: projectID.value,
                    girls0to5M: girls0to5M.value,
                    boys0to5M: boys0to5M.value,
                    girls6to59m: girls6to59m.value,
                    boys6to59M: boys6to59M.value,
                    girls5to15: girls5to15.value,
                    boys5to15: boys5to15.value,
                    women18to59N: women18to59.value,
                    men18to59N: men18to59.value,
                    pregnantGirls: pregnantGirls.value,
                    pregnantWomen: pregnantWomen.value,
                    lactatingGirls: lactatingGirls.value,
                    lactatingWomen: lactatingWomen.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es nutrition cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en nutrition cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/nutrition")
                .then(function (response) {
                  console.log(response.data, "Este es nutrition");
                });
            }
          }
        );

        // Child Protection

        await readXlsxFile(formData, { sheet: "Prot. - AdR NNA" }).then(
          async (rowsProteccionNinos) => {
            if (rowsProteccionNinos.length === 4) {
              console.log("proteccion infantil no posee datos");
            } else {
              for (let i = 4; i < rowsProteccionNinos.length; i++) {
                const fila = rowsProteccionNinos[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsProteccionNinos[3][j] === "#date+reported") {
                    reportDate.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsProteccionNinos[i][j];
                  }

                  if (rowsProteccionNinos[3][j] === "#fund+type") {
                    monetaryFound.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#adm1+name") {
                    dadeName.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#adm2+name") {
                    municipalityName.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#adm3+name") {
                    parishName.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#location") {
                    establishment_details.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#location+type") {
                    establishmentType.value = rowsProteccionNinos[i][j];
                  }
                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }
                  if (rowsProteccionNinos[3][j] === "#location") {
                    projectUbication.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#project+code_name" &&
                    rowsProteccionNinos[i][j] !== null
                  ) {
                    projectName.value = rowsProteccionNinos[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }
                  if (rowsProteccionNinos[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsProteccionNinos[i][j].toString();
                  }
                  if (rowsProteccionNinos[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsProteccionNinos[i][j].toString();
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                      "#activity+natural+disaster" &&
                    rowsProteccionNinos[3][j] !== null
                  ) {
                    disasterResponse.value = rowsProteccionNinos[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsProteccionNinos[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "'#activity+indicator+name"
                  ) {
                    sectorialActivityIndicator.value =
                      rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "'#activity+indicator+reached"
                  ) {
                    sectorialActivityIndicatorReached.value =
                      rowsProteccionNinos[i][j];
                  }

                  if (rowsProteccionNinos[3][j] === "#date+start") {
                    startDate.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#status") {
                    activityStatus.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#reached") {
                    assistedPeople.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#reached+type") {
                    majorityGroup.value = rowsProteccionNinos[i][j];
                  }

                  if (rowsProteccionNinos[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsProteccionNinos[i][j];
                  }

                  //individual data

                  if (rowsProteccionNinos[3][j] === "#reached+lgbti") {
                    lgtbPeople.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#reached+f+pregnant") {
                    pregnantWomen.value = rowsProteccionNinos[i][j];
                  }
                  if (rowsProteccionNinos[3][j] === "#reached+uasc") {
                    abandonmentPerson.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+physical_legal_protection"
                  ) {
                    legalProtection.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+children+age0_5"
                  ) {
                    girls0to5.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+children+age0_5"
                  ) {
                    boys0to5.value = rowsProteccionNinos[i][j];
                  }

                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+children+age6_9"
                  ) {
                    girls6to9C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+children+age6_9"
                  ) {
                    boys6to9C.value = rowsProteccionNinos[i][j];
                  }

                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+children+age10_11"
                  ) {
                    girls10to11C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+children+age10_11"
                  ) {
                    boys10to11C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+children+age12_14"
                  ) {
                    girls12to14C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+children+age12_14"
                  ) {
                    boys12to14C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+children+age15_17"
                  ) {
                    girls15to17C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+children+age15_17"
                  ) {
                    boys15to17C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+adult+age18_59"
                  ) {
                    women18to59.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+adult+age18_59"
                  ) {
                    men18to59.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+f+elderly+age60_"
                  ) {
                    womenOlderThan60E.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] === "#reached+m+elderly+age60_"
                  ) {
                    menOlderThan60E.value = rowsProteccionNinos[i][j];
                  }

                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+f+children+age0_11"
                  ) {
                    girls0to11C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+m+children+age0_11"
                  ) {
                    boys0to11C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+f+children+age12_13"
                  ) {
                    girls12to13C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+m+children+age12_13"
                  ) {
                    boys12to13C.value = rowsProteccionNinos[i][j];
                  }

                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+f+children+age14_17"
                  ) {
                    girls14to17C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+legal+m+children+age14_17"
                  ) {
                    boys14to17C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+f+children+age0_3m"
                  ) {
                    girls0to3C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+m+children+age0_3m"
                  ) {
                    boys0to3C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+f+children+age4m_8"
                  ) {
                    girls4to8C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+m+children+age4m_8"
                  ) {
                    boys4to8C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+f+children+age9_18"
                  ) {
                    girls9to17C.value = rowsProteccionNinos[i][j];
                  }
                  if (
                    rowsProteccionNinos[3][j] ===
                    "#reached+birth+m+children+age9_18"
                  ) {
                    boys9to17C.value = rowsProteccionNinos[i][j];
                  }

                  if (rowsProteccionNinos[3][j] === "#activity+comments") {
                    commentary.value = rowsProteccionNinos[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/child-protection", {
                    project: projectID.value,
                    lgtbPeopleC: lgtbPeople.value,
                    pregnantWomenC: pregnantWomen.value,
                    abandonmentPerson: abandonmentPerson.value,
                    legalProtectionP: legalProtection.value,
                    girls0to5C: girls0to5.value,
                    boys0to5C: boys0to5.value,
                    girls6to9C: girls6to9C.value,
                    boys6to9C: boys6to9C.value,
                    girls10to11C: girls10to11C.value,
                    boys10to11C: boys10to11C.value,
                    girls12to14C: girls12to14C.value,
                    boys12to14C: boys12to14C.value,
                    girls15to17C: girls15to17C.value,
                    boys15to17C: boys15to17C.value,
                    women18to59C: women18to59.value,
                    men18to59C: men18to59.value,
                    menOlderThan60C: menOlderThan60E.value,
                    womenOlderThan60C: womenOlderThan60E.value,
                    girls0to11C: girls0to11C.value,
                    boys0to11C: boys0to11C.value,
                    girls12to13C: girls12to13C.value,
                    boys12to13C: boys12to13C.value,
                    girls14to17C: girls14to17C.value,
                    boys14to17C: boys14to17C.value,
                    girls0to3C: girls0to3C.value,
                    boys0to3C: boys0to3C.value,
                    girls4to8C: girls4to8C.value,
                    boys4to8C: boys4to8C.value,
                    girls9to17C: girls9to17C.value,
                    boys9to17C: boys9to17C.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es child-protection cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en child-protection cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/child-protection")
                .then(function (response) {
                  console.log(response.data, "Este es child-protection");
                });
            }
          }
        );

        // VBG Protection

        await readXlsxFile(formData, { sheet: "Prot. - AdR VbG" }).then(
          async (rowsProteccionVbg) => {
            if (rowsProteccionVbg.length === 4) {
              console.log("VbG Protection no posee datos");
            } else {
              for (let i = 4; i < rowsProteccionVbg.length; i++) {
                const fila = rowsProteccionVbg[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsProteccionVbg[3][j] === "#date+reported") {
                    reportDate.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#fund+type") {
                    monetaryFound.value = rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#adm1+name") {
                    dadeName.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#adm2+name") {
                    municipalityName.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#adm3+name") {
                    parishName.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#location") {
                    establishment_details.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#location+type") {
                    establishmentType.value = rowsProteccionVbg[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsProteccionVbg[3][j] === "#location") {
                    projectUbication.value = rowsProteccionVbg[i][j];
                  }

                  if (
                    rowsProteccionVbg[3][j] === "#project+code_name" &&
                    rowsProteccionVbg[i][j] !== null
                  ) {
                    projectName.value = rowsProteccionVbg[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (rowsProteccionVbg[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsProteccionVbg[i][j].toString();
                  }
                  if (rowsProteccionVbg[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsProteccionVbg[i][j].toString();
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#activity+natural+disaster" &&
                    rowsProteccionVbg[3][j] !== null
                  ) {
                    disasterResponse.value = rowsProteccionVbg[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsProteccionVbg[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "'#activity+indicator+name") {
                    sectorialActivityIndicator.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "'#activity+indicator+reached"
                  ) {
                    sectorialActivityIndicatorReached.value =
                      rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#date+start") {
                    startDate.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#status") {
                    activityStatus.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached") {
                    assistedPeople.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+type") {
                    majorityGroup.value = rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsProteccionVbg[i][j];
                  }

                  //individual data

                  if (rowsProteccionVbg[3][j] === "#reached+lgbti") {
                    lgtbPeople.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+f+pregnant") {
                    pregnantWomen.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+legal_protection") {
                    physicalProtection.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+physical_protection"
                  ) {
                    legalProtection.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+f+children+age0_9"
                  ) {
                    girls0to9V.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+m+children+age0_9"
                  ) {
                    boys0to9V.value = rowsProteccionVbg[i][j];
                  }

                  if (
                    rowsProteccionVbg[3][j] === "#reached+f+children+age10_14"
                  ) {
                    girls10to14V.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+m+children+age10_14"
                  ) {
                    boys10to14V.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+f+children+age15_19"
                  ) {
                    girls15to19V.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+m+children+age15_19"
                  ) {
                    boys15to19V.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+f+adults+age20_59"
                  ) {
                    women20to59E.value = rowsProteccionVbg[i][j];
                  }
                  if (
                    rowsProteccionVbg[3][j] === "#reached+m+adults+age20_59"
                  ) {
                    men20to59E.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+f+elderly+age60_") {
                    womenOlderThan60E.value = rowsProteccionVbg[i][j];
                  }
                  if (rowsProteccionVbg[3][j] === "#reached+m+elderly+age60_") {
                    menOlderThan60E.value = rowsProteccionVbg[i][j];
                  }

                  if (rowsProteccionVbg[3][j] === "#activity+comments") {
                    commentary.value = rowsProteccionVbg[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/vbg-protection", {
                    project: projectID.value,
                    lgtbPeopleV: lgtbPeople.value,
                    pregnantWomenV: pregnantWomen.value,

                    physicalProtectionV: physicalProtection.value,
                    legalProtectionV: legalProtection.value,
                    girls0to9V: girls0to9V.value,
                    boys0to9V: boys0to9V.value,
                    girls10to14V: girls10to14V.value,
                    boys10to14V: boys10to14V.value,
                    girls15to19V: girls15to19V.value,
                    boys15to19V: boys15to19V.value,
                    women20to59V: women20to59E.value,
                    men20to59V: men20to59E.value,
                    womenOlderThan60V: womenOlderThan60E.value,
                    menOlderThan60V: menOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es vbg-protection cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en vbg-protection cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/vbg-protection")
                .then(function (response) {
                  console.log(response.data, "Este es vbg-protection");
                });
            }
          }
        );

        // Food Safety

        await readXlsxFile(formData, { sheet: "Seguridad Alimentaria" }).then(
          async (rowsSeguridadAlimentaria) => {
            if (rowsSeguridadAlimentaria.length === 4) {
              console.log("seguridad alimentaria no posee datos");
            } else {
              for (let i = 4; i < rowsSeguridadAlimentaria.length; i++) {
                const fila = rowsSeguridadAlimentaria[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsSeguridadAlimentaria[3][j] === "#date+reported") {
                    reportDate.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value =
                      rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#fund+type") {
                    monetaryFound.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#adm1+name") {
                    dadeName.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#adm2+name") {
                    municipalityName.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#adm3+name") {
                    parishName.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#location") {
                    establishment_details.value =
                      rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#location+type") {
                    establishmentType.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#location") {
                    projectUbication.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (
                    rowsSeguridadAlimentaria[3][j] === "#project+code_name" &&
                    rowsSeguridadAlimentaria[i][j] !== null
                  ) {
                    projectName.value = rowsSeguridadAlimentaria[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (
                    rowsSeguridadAlimentaria[3][j] === "#location+geo+latitude"
                  ) {
                    latitude.value = rowsSeguridadAlimentaria[i][j].toString();
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] === "#location+geo+longitude"
                  ) {
                    longitude.value = rowsSeguridadAlimentaria[i][j].toString();
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                      "#activity+natural+disaster" &&
                    rowsSeguridadAlimentaria[3][j] !== null
                  ) {
                    disasterResponse.value = rowsSeguridadAlimentaria[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (
                    rowsSeguridadAlimentaria[3][j] === "#activity+name+selected"
                  ) {
                    sectorialActivity.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#activity+code") {
                    sectorialActivityCode.value =
                      rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "'#activity+indicator+name"
                  ) {
                    sectorialActivityIndicator.value =
                      rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] === "'#direct+beneficiaries"
                  ) {
                    directBenef.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "'#activity+indicator+reached"
                  ) {
                    sectorialActivityIndicatorReached.value =
                      rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#date+start") {
                    startDate.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#status") {
                    activityStatus.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] === "'#activity+recurrent"
                  ) {
                    recurringBenef.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#reached") {
                    assistedPeople.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (rowsSeguridadAlimentaria[3][j] === "#reached+type") {
                    majorityGroup.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] === "#reached+indigenous"
                  ) {
                    nativePopulation.value = rowsSeguridadAlimentaria[i][j];
                  }

                  //individual data

                  if (rowsSeguridadAlimentaria[3][j] === "#reached+centres") {
                    centersServed.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] === "#reached+households"
                  ) {
                    assistedLiving.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+f+children+age0_17"
                  ) {
                    girls0to17.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+m+children+age0_17"
                  ) {
                    boys0to17.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+f+adult+age18_59"
                  ) {
                    women18to59.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+m+adult+age18_59"
                  ) {
                    men18to59.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+f+elderly+age60_"
                  ) {
                    womenOlderThan60E.value = rowsSeguridadAlimentaria[i][j];
                  }
                  if (
                    rowsSeguridadAlimentaria[3][j] ===
                    "#reached+m+elderly+age60_"
                  ) {
                    menOlderThan60E.value = rowsSeguridadAlimentaria[i][j];
                  }

                  if (rowsSeguridadAlimentaria[3][j] === "#activity+comments") {
                    commentary.value = rowsSeguridadAlimentaria[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/food-safety", {
                    project: projectID.value,
                    centersServed: centersServed.value,
                    assistedLiving: assistedLiving.value,

                    girls0to17F: girls0to17.value,
                    boys0to17F: boys0to17.value,
                    women18to59F: women18to59.value,
                    men18to59F: men18to59.value,
                    menOlderThan60F: menOlderThan60E.value,
                    womenOlderThan60F: womenOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es food-safety cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en food-safety cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/food-safety")
                .then(function (response) {
                  console.log(response.data, "Este es food-safety");
                });
            }
          }
        );

        // Protection

        await readXlsxFile(formData, { sheet: "Protección General" }).then(
          async (rowsProteccionGeneral) => {
            if (rowsProteccionGeneral.length === 4) {
              console.log("proteccion no posee datos");
            } else {
              for (let i = 4; i < rowsProteccionGeneral.length; i++) {
                const fila = rowsProteccionGeneral[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsProteccionGeneral[3][j] === "#date+reported") {
                    reportDate.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#fund+type") {
                    monetaryFound.value = rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#adm1+name") {
                    dadeName.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#adm2+name") {
                    municipalityName.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#adm3+name") {
                    parishName.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#location") {
                    establishment_details.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#location+type") {
                    establishmentType.value = rowsProteccionGeneral[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsProteccionGeneral[3][j] === "#location") {
                    projectUbication.value = rowsProteccionGeneral[i][j];
                  }

                  if (
                    rowsProteccionGeneral[3][j] === "#project+code_name" &&
                    rowsProteccionGeneral[i][j] !== null
                  ) {
                    projectName.value = rowsProteccionGeneral[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (
                    rowsProteccionGeneral[3][j] === "#location+geo+latitude"
                  ) {
                    latitude.value = rowsProteccionGeneral[i][j].toString();
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "#location+geo+longitude"
                  ) {
                    longitude.value = rowsProteccionGeneral[i][j].toString();
                  }
                  if (
                    rowsProteccionGeneral[3][j] ===
                      "#activity+natural+disaster" &&
                    rowsProteccionGeneral[3][j] !== null
                  ) {
                    disasterResponse.value = rowsProteccionGeneral[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (
                    rowsProteccionGeneral[3][j] === "#activity+name+selected"
                  ) {
                    sectorialActivity.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "'#activity+indicator+name"
                  ) {
                    sectorialActivityIndicator.value =
                      rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "'#direct+beneficiaries"
                  ) {
                    directBenef.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] ===
                    "'#activity+indicator+reached"
                  ) {
                    sectorialActivityIndicatorReached.value =
                      rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#date+start") {
                    startDate.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#status") {
                    activityStatus.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#reached") {
                    assistedPeople.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#reached+type") {
                    majorityGroup.value = rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsProteccionGeneral[i][j];
                  }

                  //individual data

                  if (rowsProteccionGeneral[3][j] === "#reached+lgbti") {
                    lgtbPeople.value = rowsProteccionGeneral[i][j];
                  }
                  if (rowsProteccionGeneral[3][j] === "#reached+f+pregnant") {
                    pregnantWomen.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "#reached+legal_protection"
                  ) {
                    legalProtection.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] ===
                    "#reached+physical_protection"
                  ) {
                    physicalProtection.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] ===
                    "#reached+f+children+age0_17"
                  ) {
                    girls0to17.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] ===
                    "#reached+m+children+age0_17"
                  ) {
                    boys0to17.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "#reached+f+adult+age18_59"
                  ) {
                    women18to59.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "#reached+m+adult+age18_59"
                  ) {
                    men18to59.value = rowsProteccionGeneral[i][j];
                  }

                  if (
                    rowsProteccionGeneral[3][j] === "#reached+f+elderly+age60_"
                  ) {
                    womenOlderThan60E.value = rowsProteccionGeneral[i][j];
                  }
                  if (
                    rowsProteccionGeneral[3][j] === "#reached+m+elderly+age60_"
                  ) {
                    menOlderThan60E.value = rowsProteccionGeneral[i][j];
                  }

                  if (rowsProteccionGeneral[3][j] === "#activity+comments") {
                    commentary.value = rowsProteccionGeneral[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/protection", {
                    project: projectID.value,
                    lgtbPeople: lgtbPeople.value,
                    pregnantWomen: pregnantWomen.value,
                    legalProtection: legalProtection.value,
                    physicalProtection: physicalProtection.value,
                    girls0to17P: girls0to17.value,
                    boys0to17P: boys0to17.value,
                    women18to59P: women18to59.value,
                    men18to59P: men18to59.value,
                    menOlderThan60P: menOlderThan60E.value,
                    womenOlderThan60P: womenOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es protection cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en protection cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
              axios
                .get("http://localhost:5000/protection")
                .then(function (response) {
                  console.log(response.data, "Este es protection");
                });
            }
          }
        );

        // Education

        await readXlsxFile(formData, { sheet: "Educación" }).then(
          async (rowsEducacion) => {
            if (rowsEducacion.length === 4) {
              console.log("Educacion no posee datos");
            } else {
              for (let i = 4; i < rowsEducacion.length; i++) {
                const fila = rowsEducacion[i].length;
                for (let j = 0; j < fila; j++) {
                  if (rowsEducacion[3][j] === "#date+reported") {
                    reportDate.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#date+month+cycle") {
                    reportedMonth.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#meta+hrp") {
                    humanitaryResponsePlan.value = rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#fund+type") {
                    monetaryFound.value = rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#meta+vhf") {
                    monetaryFound.value = rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#adm1+name") {
                    dadeName.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#adm2+name") {
                    municipalityName.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#adm3+name") {
                    parishName.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#location") {
                    establishment_details.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#location+type") {
                    establishmentType.value = rowsEducacion[i][j];
                  }

                  if (humanitaryResponsePlan.value === "No") {
                    independentActivity.value = "Si";
                  }

                  if (rowsEducacion[3][j] === "#location") {
                    projectUbication.value = rowsEducacion[i][j];
                  }

                  if (
                    rowsEducacion[3][j] === "#project+code_name" &&
                    rowsEducacion[i][j] !== null
                  ) {
                    projectName.value = rowsEducacion[i][j];
                  } else {
                    projectName.value =
                      "Proyecto Indepediente" +
                      " " +
                      reportDate.value.toLocaleDateString();
                  }

                  if (rowsEducacion[3][j] === "#location+geo+latitude") {
                    latitude.value = rowsEducacion[i][j].toString();
                  }
                  if (rowsEducacion[3][j] === "#location+geo+longitude") {
                    longitude.value = rowsEducacion[i][j].toString();
                  }
                  if (
                    rowsEducacion[3][j] === "#activity+natural+disaster" &&
                    rowsEducacion[i][j] !== null
                  ) {
                    disasterResponse.value = rowsEducacion[i][j];
                  } else {
                    disasterResponse.value = "No";
                  }

                  if (rowsEducacion[3][j] === "#activity+name+selected") {
                    sectorialActivity.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#activity+code") {
                    sectorialActivityCode.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "'#activity+indicator+name") {
                    sectorialActivityIndicator.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "'#direct+beneficiaries") {
                    directBenef.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "'#activity+indicator+reached") {
                    sectorialActivityIndicatorReached.value =
                      rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#date+start") {
                    startDate.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#date+end") {
                    expectedFinishDate.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#status") {
                    activityStatus.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#indirect+reached") {
                    indirectBenef.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "'#activity+recurrent") {
                    recurringBenef.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached") {
                    assistedPeople.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+type") {
                    majorityGroup.value = rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#reached+disabled") {
                    disabledPopulation.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+indigenous") {
                    nativePopulation.value = rowsEducacion[i][j];
                  }

                  //individual data

                  if (rowsEducacion[3][j] === "#reached+f+children+age0_2") {
                    girls0to2E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+children+age0_2") {
                    boys0to2E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+children+age3_5") {
                    girls3to5E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+children+age3_5") {
                    boys3to5E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+children+age6_11") {
                    girls6to11E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+children+age6_11") {
                    boys6to11E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+children+age12_17") {
                    girls12to17E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+children+age12_17") {
                    boys12to17E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+children+age18_19") {
                    girls18to19E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+children+age18_19") {
                    boys18to19E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+adult+age20_59") {
                    women20to59E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+adult+age20_59") {
                    men20to59E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+f+elderly+age60_") {
                    womenOlderThan60E.value = rowsEducacion[i][j];
                  }
                  if (rowsEducacion[3][j] === "#reached+m+elderly+age60_") {
                    menOlderThan60E.value = rowsEducacion[i][j];
                  }

                  if (rowsEducacion[3][j] === "#activity+comments") {
                    commentary.value = rowsEducacion[i][j];
                  }
                }
                await axios
                  .get("http://localhost:5000/parroquia")
                  .then(function (response) {
                    response.data.forEach((element, index) => {
                      if (element.name_p === parishName.value) {
                        parishID.value = index;
                        municipalityID.value = element.municipio.id;
                      }
                    });
                  });
                await axios
                  .get("http://localhost:5000/municipio")
                  .then(function (response) {
                    dadeID.value =
                      response.data[municipalityID.value].estado.id;
                  });

                await axios
                  .post("http://localhost:5000/project", {
                    reportDate: reportDate.value,
                    reportedMonth: reportedMonth.value,
                    establishmentType: establishmentType.value,
                    disasterResponse: disasterResponse.value,
                    sectoralActivity: sectorialActivity.value,
                    sectorialActivityCode: sectorialActivityCode.value,
                    sectorialActivityIndicator:
                      sectorialActivityIndicator.value,
                    sectorialActivityIndicatorReached:
                      sectorialActivityIndicatorReached.value,
                    directBenef: directBenef.value,
                    //achievedUnity:
                    startDate: startDate.value,
                    endDate: expectedFinishDate.value,
                    projectStatus: activityStatus.value,
                    majorityGroup: majorityGroup.value,
                    comments: commentary.value,

                    projectName: projectName.value,
                    monetaryFound: monetaryFound.value,
                    establishment_details: establishment_details.value,
                    latitude: latitude.value,
                    longitude: longitude.value,
                    indirectBenef: indirectBenef.value,
                    recurringBenef: recurringBenef.value,
                    disabledPopulation: disabledPopulation.value,
                    nativePopulation: nativePopulation.value,
                    assistedPeople: assistedPeople.value,
                    projectUbication: projectUbication.value,

                    parroquia: parishID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en proyecto");
                  });
                await axios
                  .get("http://localhost:5000/project")
                  .then(function (response) {
                    projectID.value = response.data.length;
                  });
                await axios
                  .post("http://localhost:5000/education", {
                    project: projectID.value,
                    girls0to2E: girls0to2E.value,
                    boys0to2E: boys0to2E.value,
                    girls3to5E: girls3to5E.value,
                    boys3to5E: boys3to5E.value,
                    girls6to11E: girls6to11E.value,
                    boys6to11E: boys6to11E.value,
                    girls12to17E: girls12to17E.value,
                    boys12to17E: boys12to17E.value,
                    girls18to19E: girls18to19E.value,
                    boys18to19E: boys18to19E.value,
                    women20to64E: women20to59E.value,
                    men20to64E: men20to59E.value,
                    menOlderThan60E: menOlderThan60E.value,
                    womenOlderThan60E: womenOlderThan60E.value,
                  })
                  .then(function (response) {
                    //console.log(response, "esto es education cluster");
                  })
                  .catch(function (error) {
                    console.log(error, "error en education cluster");
                  });
                await axios
                  .post("http://localhost:5000/register", {
                    project: projectID.value,
                  })
                  .then(function (response) {})
                  .catch(function (error) {
                    console.log(error, "error en register");
                  });
              }
            }

            axios
              .get("http://localhost:5000/education")
              .then(function (response) {
                console.log(response.data, "Este es Educacion");
              });
          }
        );

        // Sanitation
        await readXlsxFile(formData, {
          sheet: "Agua, Saneamiento e Higiene",
        }).then(async (rowsSaneamiento) => {
          if (rowsSaneamiento.length === 4) {
            console.log("saneamiento no posee datos");
          } else {
            //projectUbication.value = null;
            //projectName.value = null;
            for (let i = 4; i < rowsSaneamiento.length; i++) {
              const fila = rowsSaneamiento[i].length;
              projectUbication.value = null;
              projectName.value = null;
              console.log(projectUbication.value);
              console.log(projectName.value);
              for (let j = 0; j < fila; j++) {
                if (rowsSaneamiento[3][j] === "#date+reported") {
                  reportDate.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#date+month+cycle") {
                  reportedMonth.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#meta+hrp") {
                  humanitaryResponsePlan.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#fund+type") {
                  monetaryFound.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#meta+vhf") {
                  monetaryFound.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#adm1+name") {
                  dadeName.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#adm2+name") {
                  municipalityName.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#adm3+name") {
                  parishName.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#location") {
                  establishment_details.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#location+type") {
                  establishmentType.value = rowsSaneamiento[i][j];
                }

                if (humanitaryResponsePlan.value === "No") {
                  independentActivity.value = "Si";
                }

                if (rowsSaneamiento[3][j] === "#location") {
                  projectUbication.value = rowsSaneamiento[i][j];
                }

                if (
                  rowsSaneamiento[3][j] === "#project+code_name" &&
                  rowsSaneamiento[i][j] !== null
                ) {
                  projectName.value = rowsSaneamiento[i][j];
                } else {
                  projectName.value =
                    "Proyecto Indepediente" +
                    " " +
                    reportDate.value.toLocaleDateString();
                }

                if (rowsSaneamiento[3][j] === "#location+geo+latitude") {
                  latitude.value = rowsSaneamiento[i][j].toString();
                }

                if (rowsSaneamiento[3][j] === "#location+geo+longitude") {
                  longitude.value = rowsSaneamiento[i][j].toString();
                }
                if (
                  rowsSaneamiento[3][j] === "#activity+natural+disaster" &&
                  rowsSaneamiento[i][j] !== null
                ) {
                  disasterResponse.value = rowsSaneamiento[i][j];
                } else {
                  disasterResponse.value = "No";
                }

                if (rowsSaneamiento[3][j] === "#activity+name+selected") {
                  sectorialActivity.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#activity+code") {
                  sectorialActivityCode.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "'#activity+indicator+name") {
                  sectorialActivityIndicator.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "'#direct+beneficiaries") {
                  directBenef.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "'#activity+indicator+reached") {
                  sectorialActivityIndicatorReached.value =
                    rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#date+start") {
                  startDate.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#date+end") {
                  expectedFinishDate.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#status") {
                  activityStatus.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#indirect+reached") {
                  indirectBenef.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "'#activity+recurrent") {
                  recurringBenef.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached") {
                  assistedPeople.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+type") {
                  majorityGroup.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#reached+disabled") {
                  disabledPopulation.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+indigenous") {
                  nativePopulation.value = rowsSaneamiento[i][j];
                }

                //individual data

                if (rowsSaneamiento[3][j] === "#reached+f+children+age0_17") {
                  girls0to17.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+m+children+age0_17") {
                  boys0to17.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+f+adult+age18_59") {
                  women18to59.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+m+adult+age18_59") {
                  men18to59.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#reached+f+elderly+age60_") {
                  womenOlderThan60E.value = rowsSaneamiento[i][j];
                }
                if (rowsSaneamiento[3][j] === "#reached+m+elderly+age60_") {
                  menOlderThan60E.value = rowsSaneamiento[i][j];
                }

                if (rowsSaneamiento[3][j] === "#activity+comments") {
                  commentary.value = rowsSaneamiento[i][j];
                }
              }
              await axios
                .get("http://localhost:5000/parroquia")
                .then(function (response) {
                  response.data.forEach((element, index) => {
                    if (element.name_p === parishName.value) {
                      parishID.value = index;
                      municipalityID.value = element.municipio.id;
                    }
                  });
                });
              await axios
                .get("http://localhost:5000/municipio")
                .then(function (response) {
                  dadeID.value = response.data[municipalityID.value].estado.id;
                });

              await axios
                .post("http://localhost:5000/project", {
                  reportDate: reportDate.value,
                  reportedMonth: reportedMonth.value,
                  establishmentType: establishmentType.value,
                  disasterResponse: disasterResponse.value,
                  sectoralActivity: sectorialActivity.value,
                  sectorialActivityCode: sectorialActivityCode.value,
                  sectorialActivityIndicator: sectorialActivityIndicator.value,
                  sectorialActivityIndicatorReached:
                    sectorialActivityIndicatorReached.value,
                  directBenef: directBenef.value,
                  //achievedUnity:
                  startDate: startDate.value,
                  endDate: expectedFinishDate.value,
                  projectStatus: activityStatus.value,
                  majorityGroup: majorityGroup.value,
                  comments: commentary.value,

                  projectName: projectName.value,
                  monetaryFound: monetaryFound.value,
                  establishment_details: establishment_details.value,
                  latitude: latitude.value,
                  longitude: longitude.value,
                  indirectBenef: indirectBenef.value,
                  recurringBenef: recurringBenef.value,
                  disabledPopulation: disabledPopulation.value,
                  nativePopulation: nativePopulation.value,
                  assistedPeople: assistedPeople.value,
                  projectUbication: projectUbication.value,

                  parroquia: parishID.value,
                })
                .then(function (response) {})
                .catch(function (error) {
                  console.log(error, "error en proyecto");
                });
              await axios
                .get("http://localhost:5000/project")
                .then(function (response) {
                  projectID.value = response.data.length;
                });
              await axios
                .post("http://localhost:5000/sanitation", {
                  project: projectID.value,
                  girls0to17S: girls0to17.value,
                  boys0to17S: boys0to17.value,
                  women18to59S: women18to59.value,
                  men18to59S: men18to59.value,
                  menOlderThan60S: menOlderThan60E.value,
                  womenOlderThan60S: womenOlderThan60E.value,
                })
                .then(function (response) {
                  //console.log(response, "esto es sanitation cluster");
                })
                .catch(function (error) {
                  console.log(error, "error en sanitation cluster");
                });
              await axios
                .post("http://localhost:5000/register", {
                  project: projectID.value,
                })
                .then(function (response) {})
                .catch(function (error) {
                  console.log(error, "error en register");
                });
            }
          }
          axios
            .get("http://localhost:5000/sanitation")
            .then(function (response) {
              console.log(response.data, "Este es sanitation");
            });
        });

        // Hosting
        await readXlsxFile(formData, {
          sheet: "Alojamiento, Energía y Enseres",
        }).then(async (rowsAlojamiento) => {
          if (rowsAlojamiento.length === 4) {
            console.log("alojamiento no posee datos");
          } else {
            for (let i = 4; i < rowsAlojamiento.length; i++) {
              const fila = rowsAlojamiento[i].length;
              for (let j = 0; j < fila; j++) {
                if (rowsAlojamiento[3][j] === "#date+reported") {
                  reportDate.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#date+month+cycle") {
                  reportedMonth.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#meta+hrp") {
                  humanitaryResponsePlan.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#fund+type") {
                  monetaryFound.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#meta+vhf") {
                  monetaryFound.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#adm1+name") {
                  dadeName.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#adm2+name") {
                  municipalityName.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#adm3+name") {
                  parishName.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#location") {
                  establishment_details.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#location+type") {
                  establishmentType.value = rowsAlojamiento[i][j];
                }

                if (humanitaryResponsePlan.value === "No") {
                  independentActivity.value = "Si";
                }

                if (rowsAlojamiento[3][j] === "#location") {
                  projectUbication.value = rowsAlojamiento[i][j];
                }

                if (
                  rowsAlojamiento[3][j] === "#project+code_name" &&
                  rowsAlojamiento[i][j] !== null
                ) {
                  projectName.value = rowsAlojamiento[i][j];
                } else {
                  projectName.value =
                    "Proyecto Indepediente" +
                    " " +
                    reportDate.value.toLocaleDateString();
                }

                if (rowsAlojamiento[3][j] === "#location+geo+latitude") {
                  latitude.value = rowsAlojamiento[i][j].toString();
                }
                if (rowsAlojamiento[3][j] === "#location+geo+longitude") {
                  longitude.value = rowsAlojamiento[i][j].toString();
                }
                if (
                  rowsAlojamiento[3][j] === "#activity+natural+disaster" &&
                  rowsAlojamiento[3][j] !== null
                ) {
                  disasterResponse.value = rowsAlojamiento[i][j];
                } else {
                  disasterResponse.value = "No";
                }

                if (rowsAlojamiento[3][j] === "#activity+name+selected") {
                  sectorialActivity.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#activity+code") {
                  sectorialActivityCode.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#activity+indicator+name") {
                  sectorialActivityIndicator.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#direct+beneficiaries") {
                  directBenef.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#activity+indicator+reached") {
                  sectorialActivityIndicatorReached.value =
                    rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#date+start") {
                  startDate.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#date+end") {
                  expectedFinishDate.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#status") {
                  activityStatus.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#indirect+reached") {
                  indirectBenef.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#activity+recurrent") {
                  recurringBenef.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached") {
                  assistedPeople.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+type") {
                  majorityGroup.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#reached+disabled") {
                  disabledPopulation.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+indigenous") {
                  nativePopulation.value = rowsAlojamiento[i][j];
                }

                //individual data

                if (rowsAlojamiento[3][j] === "#kit+type") {
                  kitType.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#kit+items") {
                  reportItem.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#unit+type") {
                  emergencyHousingUnit.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "'#energy+generate+method") {
                  mediumPowerGeneration.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+f+children+age0_17") {
                  girls0to17.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+m+children+age0_17") {
                  boys0to17.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+f+adult+age18_59") {
                  women18to59.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+m+adult+age18_59") {
                  men18to59.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#reached+f+elderly+age60_") {
                  womenOlderThan60E.value = rowsAlojamiento[i][j];
                }
                if (rowsAlojamiento[3][j] === "#reached+m+elderly+age60_") {
                  menOlderThan60E.value = rowsAlojamiento[i][j];
                }

                if (rowsAlojamiento[3][j] === "#activity+comments") {
                  commentary.value = rowsAlojamiento[i][j];
                }
              }
              await axios
                .get("http://localhost:5000/parroquia")
                .then(function (response) {
                  response.data.forEach((element, index) => {
                    if (element.name_p === parishName.value) {
                      parishID.value = index;
                      municipalityID.value = element.municipio.id;
                    }
                  });
                });
              await axios
                .get("http://localhost:5000/municipio")
                .then(function (response) {
                  dadeID.value = response.data[municipalityID.value].estado.id;
                });

              await axios
                .post("http://localhost:5000/project", {
                  reportDate: reportDate.value,
                  reportedMonth: reportedMonth.value,
                  establishmentType: establishmentType.value,
                  disasterResponse: disasterResponse.value,
                  sectoralActivity: sectorialActivity.value,
                  sectorialActivityCode: sectorialActivityCode.value,
                  sectorialActivityIndicator: sectorialActivityIndicator.value,
                  sectorialActivityIndicatorReached:
                    sectorialActivityIndicatorReached.value,
                  directBenef: directBenef.value,
                  startDate: startDate.value,
                  endDate: expectedFinishDate.value,
                  projectStatus: activityStatus.value,
                  majorityGroup: majorityGroup.value,
                  comments: commentary.value,

                  projectName: projectName.value,
                  monetaryFound: monetaryFound.value,
                  establishment_details: establishment_details.value,
                  latitude: latitude.value,
                  longitude: longitude.value,
                  indirectBenef: indirectBenef.value,
                  recurringBenef: recurringBenef.value,
                  disabledPopulation: disabledPopulation.value,
                  nativePopulation: nativePopulation.value,
                  assistedPeople: assistedPeople.value,
                  projectUbication: projectUbication.value,

                  parroquia: parishID.value,
                })
                .then(function (response) {})
                .catch(function (error) {
                  console.log(error, "error en proyecto");
                });
              await axios
                .get("http://localhost:5000/project")
                .then(function (response) {
                  projectID.value = response.data.length;
                });
              await axios
                .post("http://localhost:5000/hosting", {
                  project: projectID.value,
                  kitType: kitType.value,
                  reportItem: reportItem.value,
                  emergencyHousingUnit: emergencyHousingUnit.value,
                  mediumPowerGeneration: mediumPowerGeneration.value,
                  girls0to17: girls0to17.value,
                  boys0to17: boys0to17.value,
                  women18to59: women18to59.value,
                  men18to59: men18to59.value,
                  menOlderThan60: menOlderThan60E.value,
                  womenOlderThan60: womenOlderThan60E.value,
                })
                .then(function (response) {
                  //console.log(response, "esto es hosting cluster");
                })
                .catch(function (error) {
                  console.log(error, "error en hosting cluster");
                });
              await axios
                .post("http://localhost:5000/register", {
                  project: projectID.value,
                })
                .then(function (response) {})
                .catch(function (error) {
                  console.log(error, "error en register");
                });
            }
            axios
              .get("http://localhost:5000/hosting")
              .then(function (response) {
                console.log(response.data, "Este es hosting");
              });
          }
        });
      },
    };
  },
});
</script>
