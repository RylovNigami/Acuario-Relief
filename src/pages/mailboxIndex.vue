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
              <q-td key="commentM" :props="props">{{
                props.row.commentM
              }}</q-td>
              <q-td key="createdAt" :props="props">{{
                props.row.createdAt
              }}</q-td>
              <q-td key="updateAt" :props="props">{{
                props.row.updateAt
              }}</q-td>
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

async function guardar(newVal, oldVal, fila, col) {
  //Tengo que buscar que columna se edito...
  const editedClaim = rows.value.find((obj) => obj.id == fila.row.id);
  console.log(editedClaim, "before change");

  editedClaim.inputStatus = newVal;
  console.log(editedClaim, "after change");

  await axios
    .patch(`http://localhost:5000/mailbox/${editedClaim.id}`, {
      inputStatus: editedClaim.inputStatus,
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
];

export default defineComponent({
  name: "mailboxIndex",

  beforeCreate() {
    this.action();
  },

  created() {
    verification();

    //localStorage.removeItem("tokenUser");
  },

  setup() {
    return {
      guardar,
      columns,
      rows,
      user,
      userID,
      statusOptions: ["Visto", "Atendido"],
      /*prueba(newVal, oldVal, fila, col){
        const editedUser = rows.value.find((element) => element.id == fila.row.id);
        console.log(editedUser)

      },*/
      action() {
        rows.value.splice(0);
        axios.get("http://localhost:5000/mailbox").then(function (response) {
          //console.log(response.data);
          response.data.forEach((element) => {
            rows.value.push(element);
            //console.log(element, "Elemento de axios.response.data a users");
          });
        });
        console.log(rows, "rows");
      },

      async insert() {
        await axios
          .post("http://localhost:5000/mailbox", {
            inputType: inputType.value,
            inputStatus: "Recibido",
          })
          .then(function (response) {
            console.log(response, "Esto es mailbox");
          })
          .catch(function (error) {
            console.log(error, "error en mailbox");
          });
        await axios
          .get("http://localhost:5000/mailbox")
          .then(function (response) {
            console.log(response.data);
            mailboxID.value = response.data.length;
            console.log(mailboxID.value);
          });

        await axios
          .post("http://localhost:5000/association-one", {
            commentA: commentA.value,
            users: user[0].id,
            persons: user[0].persons.id,
            mailbox: mailboxID.value,
          })
          .then(function (response) {
            console.log(response, "Esto es association-one");
            Swal.fire({
              icon: "success",
              title: `¡Enviado!`,
              text: "Su mensaje ha sido enviado con exito.",
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonText: "Enviar otro mensaje",
              cancelButtonText: "ir a Página Principal",
              reverseButtons: true,
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                location.reload();
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.href = "http://localhost:8080/";
              }
            });
          })
          .catch(function (error) {
            console.log(error, "error en mailbox");
            Swal.fire({
              icon: "error",
              title: `Ha ocurrido un error al enviar el mensaje`,
              showConfirmButton: false,
              toast: true,
              showCloseButton: true,
            });
          });
      },
    };
  },
});
</script>
