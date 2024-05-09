<template>
  <q-page>
    <div class="flex row q-mx-lg q-py-xs flex-center">
      <q-card class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-ma-lg">
        <q-card-section class="flex row q-px-sm">
          <h5
            class="text-bold q-mx-lg"
            style="margin-top: 1%; margin-bottom: 0%"
          >
            Editar perfil
          </h5>
          <hr />
        </q-card-section>
        <q-card-section
          style="margin: 0%; padding: 0%"
          class="flex row q-px-sm"
        >
          <div class="flex row q-mx-lg q-py-xs flex-center">
            <div class="q-px-xs col-xs-12 col-sm-4 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Cédula
              </div>
              <div class="flex flex-center row">
                <div class="col-3">
                  <q-select
                    v-model="preferred"
                    :options="options"
                    dense
                    outlined
                    :rules="[(val) => noEmpty(val)]"
                  />
                </div>
                <div class="col-9">
                  <q-input
                    dense
                    outlined
                    v-model.trim="idNumber"
                    @keypress="isNumber($event)"
                    label="Inserte su cédula"
                    :mask="automatedMask"
                    class="q-ml-xs"
                    :rules="[(val) => minimumId(val)]"
                    :disable="preferred === null || preferred === ''"
                  />
                </div>
              </div>
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-2 col-lg-2 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Nombre
              </div>
              <q-input
                dense
                outlined
                v-model.trim="firstName"
                @keypress="isLetter($event)"
                label="Inserte su nombre"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-6 col-sm-4 col-md-2 col-lg-2 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Apellido
              </div>
              <q-input
                dense
                outlined
                v-model.trim="lastName"
                @keypress="isLetter($event)"
                label="Inserte su apellido"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Teléfono
              </div>
              <div class="flex flex-center row">
                <div class="col-4">
                  <q-select
                    v-model="phoneCode"
                    :options="numberFormats"
                    option-label="code"
                    option-value="code"
                    dense
                    outlined
                    label="Seleccione el pais"
                    :rules="[(val) => noEmpty(val)]"
                  >
                    <template v-slot:option="scope">
                      <q-item v-bind="scope.itemProps">
                        <q-item-section>
                          <q-item-label>{{ scope.opt.code }}</q-item-label>
                          <q-item-label caption>{{
                            scope.opt.name
                          }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </template></q-select
                  >
                </div>
                <div class="col-8">
                  <q-input
                    dense
                    outlined
                    v-model.trim="pNumber"
                    :mask="maskList"
                    @keypress="isNumber($event)"
                    label="Inserte su telefono o numero para contacto"
                    placeholder="(ejemplo): 424#######"
                    hint="Numero de operador sin 0 (Ejemplo: 424#######)"
                    :rules="[(val) => phoneMinimum(val)]"
                    class="q-ml-xs"
                    :disable="phoneCode === null || phoneCode === ''"
                  />
                </div>
              </div>
            </div>
            <div
              class="q-px-xs col-xs-12 col-sm-12 col-md-12 col-lg-12 q-my-sm"
            >
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Dirección
              </div>
              <q-input
                dense
                outlined
                v-model="direction"
                label="Inserte su dirección"
                @click="prueba()"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Correo electrónico
              </div>

              <q-input
                dense
                outlined
                v-model.trim="email"
                label="Inserte su correo"
                :rules="[(val) => validateEmail(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Nueva Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model.trim="password"
                label="Inserte su contraseña"
                :rules="[(val) => noEmpty(val)]"
              />
            </div>
            <div class="q-px-xs col-xs-12 col-sm-12 col-md-4 col-lg-4 q-my-sm">
              <div style="margin-bottom: 0px" class="text-weight-medium">
                Confirme su Nueva Contraseña
              </div>
              <q-input
                dense
                outlined
                v-model.trim="passwordConfirm"
                label="Re-inserte su contraseña"
                :rules="[(val) => confirmationPassword(val)]"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="flex row items-center justify-center">
            <div class="container flex">
              <div class="flex column">
                <q-btn
                  color="green"
                  label="Guardar cambios"
                  style="margin-top: 1%; margin-bottom: 1%"
                  :disable="
                    idNumber === null ||
                    idNumber === '' ||
                    firstName === null ||
                    firstName === '' ||
                    lastName === null ||
                    lastName === '' ||
                    pNumber === null ||
                    pNumber === '' ||
                    email === null ||
                    email === '' ||
                    passwordConfirm !== password ||
                    passwordConfirm === null ||
                    passwordConfirm === ''
                  "
                  @click="entry() /*&& $router.push('/')*/"
                />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";

const maskID = ref("");
const maskPhone = ref("");
const preferred = ref("");
const phoneCode = ref("");
const idNumber = ref(null);
const pNumber = ref(null);
const firstName = ref(null);
const lastName = ref(null);
const direction = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);

const user = [];
//const authenticated = ref(false);
//const authSuperUser = ref(false);
//const authAdmin = ref(false);

function char_count(str, letter) {
  // Initialize a variable letter_Count to store the count of occurrences
  var letter_Count = 0;
  // Iterate through each position in the input string
  for (var position = 0; position < str.length; position++) {
    // Check if the character at the current position is equal to the specified letter
    if (str.charAt(position) == letter) {
      // If true, increment the letter_Count by 1
      letter_Count += 1;
    }
  }

  // Return the final count of occurrences
  return letter_Count;
}

const automatedMask = computed(() => {
  if (preferred.value === "") {
    maskID.value = "";
    idNumber.value = null;
  }
  if (preferred.value === "V") {
    maskID.value = "########";
    idNumber.value = null;
  }
  if (preferred.value === "E") {
    maskID.value = "##########";
    idNumber.value = null;
  }
  if (preferred.value === "J") {
    maskID.value = "#########";
    idNumber.value = null;
  }
  return maskID.value;
});
const maskList = computed(() => {
  switch (phoneCode.value.code) {
    case "+247":
      maskPhone.value = "####";
      pNumber.value = null;
      break;
    case "+290":
      maskPhone.value = "####";
      pNumber.value = null;
      break;
    case "+290":
      maskPhone.value = "####";
      pNumber.value = null;
      break;
    case "+683":
      maskPhone.value = "####";
      pNumber.value = null;
      break;
    case "+690":
      maskPhone.value = "####";
      pNumber.value = null;
      break;
    case "+500":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+676":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+677":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+678":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+688":
      maskPhone.value = "2####";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+682":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+686":
      maskPhone.value = "#####";
      pNumber.value = null;
      break;
    case "+688":
      maskPhone.value = "90####";
      pNumber.value = null;
      break;
    case "+95":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+298":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+376":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+387":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+508":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+597":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+672":
      maskPhone.value = "1#####";
      pNumber.value = null;
      break;
    case "+672":
      maskPhone.value = "3#####";
      pNumber.value = null;
      break;
    case "+681":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+685":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+687":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+230":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+239":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+245":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+246":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+263":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+269":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+297":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+299":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+354":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+372":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+387":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+501":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+507":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+592":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+597":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+599":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+599":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+599":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+60":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+65":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+670":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+673":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+674":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+677":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+678":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+679":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+680":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+689":
      maskPhone.value = "######";
      pNumber.value = null;
      break;
    case "+691":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+692":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+95":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+960":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+220":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+232":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+234":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+237":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+238":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+248":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+252":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+252":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+265":
      maskPhone.value = "1 ######";
      pNumber.value = null;
      break;
    case "+291":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+350":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+356":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+372":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+373":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+47":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+504":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+505":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+506":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+52":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+53":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+599":
      maskPhone.value = "9#######";
      pNumber.value = null;
      break;
    case "+60":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+64":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+66":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+670":
      maskPhone.value = "77######";
      pNumber.value = null;
      break;
    case "+670":
      maskPhone.value = "78######";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+852":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+853":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+886":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+95":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+961":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+965":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+967":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+973":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+974":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+975":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+1 #":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+1 2":
      maskPhone.value = "42 #######";
      pNumber.value = null;
      break;
    case "+1 2":
      maskPhone.value = "46 #######";
      pNumber.value = null;
      break;
    case "+1 2":
      maskPhone.value = "64 #######";
      pNumber.value = null;
      break;
    case "+1 2":
      maskPhone.value = "68 #######";
      pNumber.value = null;
      break;
    case "+1 2":
      maskPhone.value = "84 #######";
      pNumber.value = null;
      break;
    case "+1 3":
      maskPhone.value = "40 #######";
      pNumber.value = null;
      break;
    case "+1 3":
      maskPhone.value = "45 #######";
      pNumber.value = null;
      break;
    case "+1 4":
      maskPhone.value = "41 #######";
      pNumber.value = null;
      break;
    case "+1 4":
      maskPhone.value = "73 #######";
      pNumber.value = null;
      break;
    case "+1 6":
      maskPhone.value = "49 #######";
      pNumber.value = null;
      break;
    case "+1 6":
      maskPhone.value = "64 #######";
      pNumber.value = null;
      break;
    case "+1 6":
      maskPhone.value = "70 #######";
      pNumber.value = null;
      break;
    case "+1 6":
      maskPhone.value = "71 #######";
      pNumber.value = null;
      break;
    case "+1 6":
      maskPhone.value = "84 #######";
      pNumber.value = null;
      break;
    case "+1 7":
      maskPhone.value = "21 #######";
      pNumber.value = null;
      break;
    case "+1 7":
      maskPhone.value = "58 #######";
      pNumber.value = null;
      break;
    case "+1 7":
      maskPhone.value = "67 #######";
      pNumber.value = null;
      break;
    case "+1 7":
      maskPhone.value = "84 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "09 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "29 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "49 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "68 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "69 #######";
      pNumber.value = null;
      break;
    case "+1 8":
      maskPhone.value = "76 #######";
      pNumber.value = null;
      break;
    case "+216":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+218":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+222":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+223":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+224":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+225":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+226":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+227":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+228":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+229":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+231":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+234":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+236":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+241":
      maskPhone.value = "#######";
      pNumber.value = null;
      break;
    case "+252":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+254":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+257":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+258":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+262":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+262":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+266":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+267":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+268":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+27":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+31":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+32":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+33":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+34":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+357":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+36":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+370":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+371":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+374":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+377":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+382":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+385":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+386":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+389":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+39":
      maskPhone.value = "6 698 #####";
      pNumber.value = null;
      break;
    case "+40":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+41":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+45":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+46":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+48":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+502":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+503":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+509":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+51":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+56":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+591":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+593":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+594":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+60":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+60":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+61":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "8########";
      pNumber.value = null;
      break;
    case "+64":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+66":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+675":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+81":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+82":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+84":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+855":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+856":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+880":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+93":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+94":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+961":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+966":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+967":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+968":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+971":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+972":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+975":
      maskPhone.value = "17 ######";
      pNumber.value = null;
      break;
    case "+976":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+977":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+993":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+20":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+211":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+212":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+213":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+218":
      maskPhone.value = "21 #######";
      pNumber.value = null;
      break;
    case "+221":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+233":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+235":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+240":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+242":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+243":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+244":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+249":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+250":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+251":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+253":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+255":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+256":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+260":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+261":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+264":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+265":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+30":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+351":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+352":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+353":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+355":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+359":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+377":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+378":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+381":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+39":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+420":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+421":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+43":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+44":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+52":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+54":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+55":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+55":
      maskPhone.value = "##7#######";
      pNumber.value = null;
      break;
    case "+57":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+58":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+590":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+593":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+595":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+598":
      maskPhone.value = "########";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "8#########";
      pNumber.value = null;
      break;
    case "+63":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+64":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+7 #":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+7 6":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+7 7":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+81":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+84":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+86":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+886":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+90":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+91":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+92":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+962":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+963":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+966":
      maskPhone.value = "5 ########";
      pNumber.value = null;
      break;
    case "+967":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+970":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+971":
      maskPhone.value = "5########";
      pNumber.value = null;
      break;
    case "+972":
      maskPhone.value = "5########";
      pNumber.value = null;
      break;
    case "+98":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+992":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+995":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+996":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+998":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+234":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+234":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+375":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+380":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+423":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+49":
      maskPhone.value = "###########";
      pNumber.value = null;
      break;
    case "+55":
      maskPhone.value = "##9########";
      pNumber.value = null;
      break;
    case "+596":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "191 #######";
      pNumber.value = null;
      break;
    case "+856":
      maskPhone.value = "20########";
      pNumber.value = null;
      break;
    case "+86":
      maskPhone.value = "###########";
      pNumber.value = null;
      break;
    case "+964":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+994":
      maskPhone.value = "#########";
      pNumber.value = null;
      break;
    case "+358":
      maskPhone.value = "##########";
      pNumber.value = null;
      break;
    case "+62":
      maskPhone.value = "8##########";
      pNumber.value = null;
      break;
    case "+86":
      maskPhone.value = "############";
      pNumber.value = null;
      break;
    case "+850":
      maskPhone.value = "#################";
      pNumber.value = null;
      break;
  }

  return maskPhone.value;
});

/*function userData() {
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));
  if (datoslocalstorageUser !== null) {
    user.push(datoslocalstorageUser);
  }
  if (user[0].role === "superuser") {
    authSuperUser.value = true;
    authAdmin.value = true;
  }

  if (user[0].role === "admin") {
    authAdmin.value = true;
  }

  if (user.length === 0) {
    authenticated.value = false;
  } else {
    authenticated.value = true;
  }

  preferred.value = user.persons.cedula.slice(0, 2);
  idNumber.value = user.persons.cedula.slice(3);

  firstName.value = user.persons.first_name;
  lastName.value = user.persons.last_name;

  //phoneCode.value = user.persons.phone;
  //pNumber.value = user.persons.phone;
  direction.value = user.persons.address;

  email.value = user.email;
}*/

function verification() {
  console.log(localStorage, "localstorage");
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));

  console.log(user, "user");

  if (datoslocalstorageUser !== null) {
    user.push(datoslocalstorageUser);
    preferred.value = user[0].persons.cedula.slice(0, 1);
    idNumber.value = user[0].persons.cedula.slice(2);

    firstName.value = user[0].persons.first_name;
    lastName.value = user[0].persons.last_name;

    let line = user[0].persons.phone.indexOf("-");
    let afterline = line + 1;

    phoneCode.value = user[0].persons.phone.slice(0, line);
    pNumber.value = user[0].persons.phone.slice(afterline);
    direction.value = user[0].persons.address;

    email.value = user[0].email;
  } else {
    window.location.href = "http://localhost:8080/";
  }
}

export default defineComponent({
  components: {
    //Field,
    //ValidationForm,
    //ErrorMessage,
  },

  name: "userEdit, App",
  created() {
    verification();
    //userData();
  },
  mounted() {},

  setup() {
    const personID = ref(0);

    /*const { email, errorMessage } = useField("name", (email) => {
      return email ? true : "field is required";
    });*/

    return {
      //errorMessage,
      isLetter(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[A-Za-z\u00C0-\u017F\s]+$/i.test(char))
          return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },
      isNumber(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if (/^[0-9]+$/i.test(char)) return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      },

      isValidEmail(email) {
        const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
        return regex.test(email);
      },
      idNumber,
      firstName,
      pNumber,
      lastName,
      direction,
      email,
      password,
      passwordConfirm,
      personID,
      automatedMask,
      maskList,
      preferred,
      phoneCode,
      maskID,
      maskPhone,
      options: ["", "V", "E", "J"],
      numberFormats: [
        //{ name: "", code: "" },
        { name: "Venezuela", code: "+58" },
        { name: "Afghanistan", code: "+93" },
        { name: "Albania", code: "+355" },
        { name: "Algeria", code: "+213" },
        { name: "American Samoa", code: "+1684" },
        { name: "Andorra", code: "+376" },
        { name: "Angola", code: "+244" },
        { name: "Anguilla", code: "+1264" },
        { name: "Antarctica", code: "+672" },
        { name: "Antigua and Barbuda", code: "+1268" },
        { name: "Argentina", code: "+54" },
        { name: "Armenia", code: "+374" },
        { name: "Aruba", code: "+297" },
        { name: "Australia", code: "+61" },
        { name: "Austria", code: "+43" },
        { name: "Azerbaijan", code: "+994" },
        { name: "Bahamas", code: "+1242" },
        { name: "Bahrain", code: "+973" },
        { name: "Bangladesh", code: "+880" },
        { name: "Barbados", code: "+1246" },
        { name: "Belarus", code: "+375" },
        { name: "Belgium", code: "+32" },
        { name: "Belize", code: "+501" },
        { name: "Benin", code: "+229" },
        { name: "Bermuda", code: "+1441" },
        { name: "Bhutan", code: "+975" },
        { name: "Bolivia", code: "+591" },
        { name: "Bosnia and Herzegovina", code: "+387" },
        { name: "Botswana", code: "+267" },
        { name: "Brazil", code: "+55" },
        { name: "British Indian Ocean Territory", code: "+246" },
        { name: "British Virgin Islands", code: "+1284" },
        { name: "Brunei", code: "+673" },
        { name: "Bulgaria", code: "+359" },
        { name: "Burkina Faso", code: "+226" },
        { name: "Burundi", code: "+257" },
        { name: "Cambodia", code: "+855" },
        { name: "Cameroon", code: "+237" },
        { name: "Canada", code: "+1" },
        { name: "Cape Verde", code: "+238" },
        { name: "Cayman Islands", code: "+1345" },
        { name: "Central African Republic", code: "+236" },
        { name: "Chad", code: "+235" },
        { name: "Chile", code: "+56" },
        { name: "China", code: "+86" },
        { name: "Christmas Island", code: "+61" },
        { name: "Cocos Islands", code: "+61" },
        { name: "Colombia", code: "+57" },
        { name: "Comoros", code: "+269" },
        { name: "Cook Islands", code: "+682" },
        { name: "Costa Rica", code: "+506" },
        { name: "Croatia", code: "+385" },
        { name: "Cuba", code: "+53" },
        { name: "Curacao", code: "+599" },
        { name: "Cyprus", code: "+357" },
        { name: "Czech Republic", code: "+420" },
        { name: "Democratic Republic of the Congo", code: "+243" },
        { name: "Denmark", code: "+45" },
        { name: "Djibouti", code: "+253" },
        { name: "Dominica", code: "+1767" },
        { name: "Dominican Republic", code: "+1809, 1829, 1849" },
        { name: "East Timor", code: "+670" },
        { name: "Ecuador", code: "+593" },
        { name: "Egypt", code: "+20" },
        { name: "El Salvador", code: "+503" },
        { name: "Equatorial Guinea", code: "+240" },
        { name: "Eritrea", code: "+291" },
        { name: "Estonia", code: "+372" },
        { name: "Ethiopia", code: "+251" },
        { name: "Falkland Islands", code: "+500" },
        { name: "Faroe Islands", code: "+298" },
        { name: "Fiji", code: "+679" },
        { name: "Finland", code: "+358" },
        { name: "France", code: "+33" },
        { name: "French Polynesia", code: "+689" },
        { name: "Gabon", code: "+241" },
        { name: "Gambia", code: "+220" },
        { name: "Georgia", code: "+995" },
        { name: "Germany", code: "+49" },
        { name: "Ghana", code: "+233" },
        { name: "Gibraltar", code: "+350" },
        { name: "Greece", code: "+30" },
        { name: "Greenland", code: "+299" },
        { name: "Grenada", code: "+1473" },
        { name: "Guam", code: "+1671" },
        { name: "Guatemala", code: "+502" },
        { name: "Guernsey", code: "+441481" },
        { name: "Guinea", code: "+224" },
        { name: "GuineaBissau", code: "+245" },
        { name: "Guyana", code: "+592" },
        { name: "Haiti", code: "+509" },
        { name: "Honduras", code: "+504" },
        { name: "Hong Kong", code: "+852" },
        { name: "Hungary", code: "+36" },
        { name: "Iceland", code: "+354" },
        { name: "India", code: "+91" },
        { name: "Indonesia", code: "+62" },
        { name: "Iran", code: "+98" },
        { name: "Iraq", code: "+964" },
        { name: "Ireland", code: "+353" },
        { name: "Isle of Man", code: "+441624" },
        { name: "Israel", code: "+972" },
        { name: "Italy", code: "+39" },
        { name: "Ivory Coast", code: "+225" },
        { name: "Jamaica", code: "+1876" },
        { name: "Japan", code: "+81" },
        { name: "Jersey", code: "+441534" },
        { name: "Jordan", code: "+962" },
        { name: "Kazakhstan", code: "+7" },
        { name: "Kenya", code: "+254" },
        { name: "Kiribati", code: "+686" },
        { name: "Kosovo", code: "+383" },
        { name: "Kuwait", code: "+965" },
        { name: "Kyrgyzstan", code: "+996" },
        { name: "Laos", code: "+856" },
        { name: "Latvia", code: "+371" },
        { name: "Lebanon", code: "+961" },
        { name: "Lesotho", code: "+266" },
        { name: "Liberia", code: "+231" },
        { name: "Libya", code: "+218" },
        { name: "Liechtenstein", code: "+423" },
        { name: "Lithuania", code: "+370" },
        { name: "Luxembourg", code: "+352" },
        { name: "Macao", code: "+853" },
        { name: "Macedonia", code: "+389" },
        { name: "Madagascar", code: "+261" },
        { name: "Malawi", code: "+265" },
        { name: "Malaysia", code: "+60" },
        { name: "Maldives", code: "+960" },
        { name: "Mali", code: "+223" },
        { name: "Malta", code: "+356" },
        { name: "Marshall Islands", code: "+692" },
        { name: "Mauritania", code: "+222" },
        { name: "Mauritius", code: "+230" },
        { name: "Mayotte", code: "+262" },
        { name: "Mexico", code: "+52" },
        { name: "Micronesia", code: "+691" },
        { name: "Moldova", code: "+373" },
        { name: "Monaco", code: "+377" },
        { name: "Mongolia", code: "+976" },
        { name: "Montenegro", code: "+382" },
        { name: "Montserrat", code: "+1664" },
        { name: "Morocco", code: "+212" },
        { name: "Mozambique", code: "+258" },
        { name: "Myanmar", code: "+95" },
        { name: "Namibia", code: "+264" },
        { name: "Nauru", code: "+674" },
        { name: "Nepal", code: "+977" },
        { name: "Netherlands", code: "+31" },
        { name: "Netherlands Antilles", code: "+599" },
        { name: "New Caledonia", code: "+687" },
        { name: "New Zealand", code: "+64" },
        { name: "Nicaragua", code: "+505" },
        { name: "Niger", code: "+227" },
        { name: "Nigeria", code: "+234" },
        { name: "Niue", code: "+683" },
        { name: "North Korea", code: "+850" },
        { name: "Northern Mariana Islands", code: "+1670" },
        { name: "Norway", code: "+47" },
        { name: "Oman", code: "+968" },
        { name: "Pakistan", code: "+92" },
        { name: "Palau", code: "+680" },
        { name: "Palestine", code: "+970" },
        { name: "Panama", code: "+507" },
        { name: "Papua New Guinea", code: "+675" },
        { name: "Paraguay", code: "+595" },
        { name: "Peru", code: "+51" },
        { name: "Philippines", code: "+63" },
        { name: "Pitcairn", code: "+64" },
        { name: "Poland", code: "+48" },
        { name: "Portugal", code: "+351" },
        { name: "Puerto Rico", code: "+1787, 1939" },
        { name: "Qatar", code: "+974" },
        { name: "Republic of the Congo", code: "+242" },
        { name: "Reunion", code: "+262" },
        { name: "Romania", code: "+40" },
        { name: "Russia", code: "+7" },
        { name: "Rwanda", code: "+250" },
        { name: "Saint Barthelemy", code: "+590" },
        { name: "Saint Helena", code: "+290" },
        { name: "Saint Kitts and Nevis", code: "+1869" },
        { name: "Saint Lucia", code: "+1758" },
        { name: "Saint Martin", code: "+590" },
        { name: "Saint Pierre and Miquelon", code: "+508" },
        { name: "Saint Vincent and the Grenadines", code: "+1784" },
        { name: "Samoa", code: "+685" },
        { name: "San Marino", code: "+378" },
        { name: "Sao Tome and Principe", code: "+239" },
        { name: "Saudi Arabia", code: "+966" },
        { name: "Senegal", code: "+221" },
        { name: "Serbia", code: "+381" },
        { name: "Seychelles", code: "+248" },
        { name: "Sierra Leone", code: "+232" },
        { name: "Singapore", code: "+65" },
        { name: "Sint Maarten", code: "+1721" },
        { name: "Slovakia", code: "+421" },
        { name: "Slovenia", code: "+386" },
        { name: "Solomon Islands", code: "+677" },
        { name: "Somalia", code: "+252" },
        { name: "South Africa", code: "+27" },
        { name: "South Korea", code: "+82" },
        { name: "South Sudan", code: "+211" },
        { name: "Spain", code: "+34" },
        { name: "Sri Lanka", code: "+94" },
        { name: "Sudan", code: "+249" },
        { name: "Suriname", code: "+597" },
        { name: "Svalbard and Jan Mayen", code: "+47" },
        { name: "Swaziland", code: "+268" },
        { name: "Sweden", code: "+46" },
        { name: "Switzerland", code: "+41" },
        { name: "Syria", code: "+963" },
        { name: "Taiwan", code: "+886" },
        { name: "Tajikistan", code: "+992" },
        { name: "Tanzania", code: "+255" },
        { name: "Thailand", code: "+66" },
        { name: "Togo", code: "+228" },
        { name: "Tokelau", code: "+690" },
        { name: "Tonga", code: "+676" },
        { name: "Trinidad and Tobago", code: "+1868" },
        { name: "Tunisia", code: "+216" },
        { name: "Turkey", code: "+90" },
        { name: "Turkmenistan", code: "+993" },
        { name: "Turks and Caicos Islands", code: "+1649" },
        { name: "Tuvalu", code: "+688" },
        { name: "U.S. Virgin Islands", code: "+1340" },
        { name: "Uganda", code: "+256" },
        { name: "Ukraine", code: "+380" },
        { name: "United Arab Emirates", code: "+971" },
        { name: "United Kingdom", code: "+44" },
        { name: "United States", code: "+1" },
        { name: "Uruguay", code: "+598" },
        { name: "Uzbekistan", code: "+998" },
        { name: "Vanuatu", code: "+678" },
        { name: "Vatican", code: "+379" },
        { name: "Vietnam", code: "+84" },
        { name: "Wallis and Futuna", code: "+681" },
        { name: "Western Sahara", code: "+212" },
        { name: "Yemen", code: "+967" },
        { name: "Zambia", code: "+260" },
        { name: "Zimbabwe", code: "+263" },
      ],

      /*onSubmit(values) {
        console.log(JSON.stringify(values, null, 2));
      },*/
      noEmpty(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // All is good
        return true;
      },

      minimumId(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is too short
        if (value.length < 7) {
          return "Este numero de cedula no es valido.";
        }

        // All is good
        return true;
      },

      prueba() {
        //console.log(phoneCode.value.code.concat(pNumber.value));
        /*let h = new Date();
        console.log(h.toLocaleDateString());
        console.log(h.toISOString());
        console.log(h.toJSON());
        console.log(h.toLocaleString());
        console.log(h.toUTCString());*/
        //char_count(maskPhone.value, "#");
        //minimum.value = char_count(maskPhone.value, "#");
        //console.log(minimum.value);
        //console.log(letter_Count);
      },

      phoneMinimum(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is too short
        if (value.length < char_count(maskPhone.value, "#")) {
          return "Este numero de telefono no es valido.";
        }

        // All is good
        return true;
      },

      validationButton() {},

      validateEmail(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is not a valid email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return "E-mail Invalido.";
        }

        // All is good
        return true;
      },

      confirmationPassword(value) {
        // if the field is empty
        if (!value) {
          return "Debe Rellenar este campo.";
        }

        // if the field is not a valid password
        if (value !== password.value) {
          return "Su contraseña no coincide, intentelo de nuevo.";
        }

        // All is good
        return true;
      },
      async entry() {
        await axios
          .put(`http://localhost:5000/persons/${user.id}`, {
            cedula: preferred.value.concat("-", idNumber.value),
            first_name: firstName.value,
            last_name: lastName.value,
            phone: phoneCode.value.code.concat(pNumber.value),
            address: direction.value,
          })
          .then(function (response) {
            console.log(response, "esto es usuario");
          })
          .catch(function (error) {
            console.log(error, "Ha ocurrido un error actualizando la persona.");
            Swal.fire({
              icon: "error",
              title: `Error al actualizar.`,
              text: "Ha ocurrido un error actualizando el usuario.",
              showConfirmButton: false,
              //toast: true,
              showCloseButton: true,
            });
          });
        await axios
          .put(`http://localhost:5000/users/${user.id}`, {
            email: email.value,
            password: password.value,
          })
          .then(function (response) {
            console.log(response, "esto es usuario");

            Swal.fire({
              icon: "success",
              title: `Usuario registrado`,
              text: "El usuario ha sido actualizado con exito.",
              cancelButton: "btn btn-danger",
              showConfirmButton: true,
              showCancelButton: false,
              confirmButtonText: "ir a Página Principal",
              reverseButtons: true,
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.removeItem("tokenUser");
                window.location.href = "http://localhost:8080/";
              }
            });
          })
          .catch(function (error) {
            console.log(error, "Ha ocurrido un error actualizando el usuario.");
            Swal.fire({
              icon: "error",
              title: `Error al registrar.`,
              text: "Ha ocurrido un error registrando el usuario.",
              showConfirmButton: false,
              //toast: true,
              showCloseButton: true,
            });
          });
      },
    };
  },
});
</script>
