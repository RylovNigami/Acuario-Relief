<template>
  <q-page class="flex justify-center row">
    <div class="col-12">
      <div class="q-pa-md">
        <q-table
          flat
          bordered
          color="primary"
          table-header-class="text-bold"
          table-class="text-black"
          card-class=" text-bold"
          title="Buzón de mensajes"
          :rows="rows"
          :columns="columns"
          row-key="id"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id" :props="props">{{ props.row.id }}</q-td>
              <q-td key="inputType" :props="props">{{
                props.row.inputType
              }}</q-td>
              <q-td key="createdAt" :props="props">{{
                props.row.createdAt.slice(0, 10)
              }}</q-td>
              <q-td key="updateAt" :props="props">{{
                props.row.updateAt.slice(0, 10)
              }}</q-td>
              <q-td key="commentM" :props="props"
                >{{ props.row.commentM }}
                <!--q-popup-edit :title="props.row.commentM"> </q-popup-edit-->
              </q-td>
              <q-td key="inputStatus" :props="props">
                <q-select
                  style="text-align: center"
                  v-model="props.row.inputStatus"
                  :options="statusOptions"
                  @remove="
                    guardar(
                      props.row.inputStatus,
                      initialValue,
                      props,
                      'inputStatus'
                    )
                  "
                  @popup-hide="
                    guardar(
                      props.row.inputStatus,
                      initialValue,
                      props,
                      'inputStatus'
                    )
                  "
                />

                <!--div class="">{{ props.row.role }} @click="prueba(props.row.role, value, props, 'role')" </div-->
              </q-td>
              <q-td key="view" :props="props">
                <q-btn
                  rounded
                  color="warning"
                  icon="mdi-glasses"
                  @click="(dialogMessages = true) && messageDataViewer(props)"
                />
              </q-td>
              <q-dialog v-model="dialogMessages" full-width>
                <q-card class="flex row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="row justify-end">
                      <q-btn
                        flat
                        rounded
                        icon="close"
                        class="q-mt-xl q-mr-xl"
                        v-close-popup
                      />
                    </div>
                  </div>

                  <div class="flex row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <h4
                        class="row items-center justify-center text-bold"
                        style="height: 5%"
                      >
                        Detalles del mensaje
                      </h4>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <h5 class="q-mx-xl column text-bold">
                        <u>Enviado por:</u><br />
                        {{
                          claimMessage[0].persons.first_name +
                          " " +
                          claimMessage[0].persons.last_name
                        }}
                      </h5>
                      <h5 class="q-mx-xl column text-bold">
                        <u>Numero de telefono de la persona:</u><br />
                        {{ claimMessage[0].persons.phone }}
                      </h5>
                      <h5 class="q-mx-xl column text-bold">
                        <u>Email de la persona:</u> <br />{{
                          claimMessage[0].users.email
                        }}
                      </h5>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <h5 class="q-mx-xl column text-bold">
                        <u>Fecha en que fue enviado:</u>
                        {{ claimMessage[0].createdAt.slice(0, 10) }}
                      </h5>
                      <h5 class="q-mx-xl column text-bold">
                        <u>Tipo de mensaje:</u> <br />
                        {{ claimMessage[0].inputType }}
                      </h5>
                      <h5 class="q-mx-xl column text-bold">
                        <u>Asunto:</u> <br />{{ claimMessage[0].inputClass }}
                      </h5>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <h5 class="q-mx-xl column text-bold">
                        <u>Estatus del mensaje:</u> <br />{{
                          claimMessage[0].inputStatus
                        }}
                      </h5>
                      <h5 class="q-mx-xl column text-bold">
                        <u>Mensaje:</u><br />
                        {{ claimMessage[0].commentM }}
                      </h5>
                    </div>
                  </div>
                </q-card>
              </q-dialog>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { reactive, computed } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuasar } from "quasar";

const userID = ref(null);
const date = new Date();
const claimMessage = ref([]);

function verification() {
  console.log(localStorage, "localstorage");
  let datoslocalstorageUser = JSON.parse(localStorage.getItem("tokenUser"));

  console.log(user, "user");

  if (datoslocalstorageUser !== null) {
    user.push(datoslocalstorageUser);
  } else {
    window.location.href = "http://localhost:8080/";
  }
}

function action() {
  rows.value.splice(0);
  axios.get("http://localhost:5000/mailbox").then(function (response) {
    //console.log(response.data);
    response.data.forEach((element) => {
      rows.value.push(element);
      //console.log(element, "Elemento de axios.response.data a users");
    });
  });
  console.log(rows, "rows");
}

function messageDataViewer(fila) {
  claimMessage.value.splice(0);
  //Tengo que buscar que columna se edito...
  const message = rows.value.find((obj) => obj.id == fila.row.id);
  console.log(message, "before change");

  rows.value.forEach((element) => {
    if (element.id === message.id) {
      claimMessage.value.push(element);
    }
  });
}

async function guardar(newVal, oldVal, fila, col) {
  //Tengo que buscar que columna se edito...
  const editedClaim = rows.value.find((obj) => obj.id == fila.row.id);
  console.log(editedClaim, "before change");

  editedClaim.inputStatus = newVal;
  console.log(editedClaim, "after change");

  await axios
    .patch(`http://localhost:5000/mailbox/${editedClaim.id}`, {
      inputStatus: editedClaim.inputStatus,
      updateAt: date.toJSON(),
    })
    .then(function (response) {
      console.log(response, "Cambio de estatus realizado");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Se ha cambiado el estatus con exito!",
        showConfirmButton: false,
        timer: 1500,
      });
      action();
    })
    .catch(function (error) {
      console.log(error, "Error al cambiar estatus");
      Swal.fire({
        icon: "error",
        title: `Ha ocurrido un error al cambiar el estatus`,
        showConfirmButton: false,
        timer: 5000,
        position: "bottom-end",
        timerProgressBar: true,
        toast: true,
        showCloseButton: true,
      });
    });
}

//const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const user = [];
const rows = ref([]);
const columns = [
  {
    name: "id",
    label: "ID",
    field: "id",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "inputType",
    label: "Tipo de mensaje",
    field: "inputType",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "createdAt",
    label: "Creado",
    field: "createdAt",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "updateAt",
    label: "Modificado",
    field: "updateAt",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "commentM",
    label: "Mensaje",
    field: "commentM",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
    style: "width: 10px",
  },
  {
    name: "inputStatus",
    label: "Estado del mensaje",
    field: "inputStatus",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "view",
    align: "center",
    label: "Visualizar",
    field: "view",
    format: (val) => `${val}`,
  },
];

export default defineComponent({
  name: "mailboxIndex",

  beforeCreate() {
    action();
  },

  created() {
    verification();

    //localStorage.removeItem("tokenUser");
  },

  setup() {
    return {
      dialogMessages: ref(false),
      guardar,
      messageDataViewer,
      claimMessage,
      columns,
      rows,
      user,
      userID,
      statusOptions: ["Visto", "Atendido"],
      /*prueba(newVal, oldVal, fila, col){
        const editedUser = rows.value.find((element) => element.id == fila.row.id);
        console.log(editedUser)

      },*/
    };
  },
});
</script>
