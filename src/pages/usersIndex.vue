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
          title="Usuarios Registrados"
          :rows="rows"
          :columns="columns"
          row-key="id"
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id" :props="props">{{ props.row.id }}</q-td>
              <q-td key="email" :props="props">{{ props.row.email }}</q-td>
              <q-td key="role" :props="props" style="cursor: pointer">
                <q-select
                  :disable="props.row.email === user[0].email"
                  style="text-align: center"
                  v-model="props.row.role"
                  :options="roleTypes"
                  @remove="guardar(props.row.role, initialValue, props, 'role')"
                  @popup-hide="
                    guardar(props.row.role, initialValue, props, 'role')
                  "
                />
                <!--div class="">{{ props.row.role }} @click="prueba(props.row.role, value, props, 'role')" </div-->
              </q-td>
              <q-td key="email" :props="props">{{ props.row.createdAt }}</q-td>
              <q-td key="email" :props="props">{{ props.row.updateAt }}</q-td>
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
  const editedUser = rows.value.find((obj) => obj.id == fila.row.id);
  console.log(editedUser, "before change");

  editedUser.role = newVal;
  console.log(editedUser, "after change");

  await axios
    .put(`http://localhost:5000/users/${editedUser.id}/role`, {
      role: editedUser.role,
    })
    .then(function (response) {
      console.log(response, "cambio satisfactorio de rol");
      Swal.fire({
        icon: "success",
        title: `¡Actualizado!`,
        text: "El usuario fue actualizado con exito.",
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Hacer otro cambio",
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
      console.log(error, "error al cambiar rol");
      Swal.fire({
        icon: "Error",
        title: `Ha ocurrido al actualizar el usuario.`,
        showConfirmButton: false,
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
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: (val) => `${val}`,
  },
  {
    name: "email",
    label: "E-mail",
    field: "email",
    required: true,
    align: "center",
    sortable: true,
    format: (val) => `${val}`,
  },
  {
    name: "role",
    label: "Rol",
    field: "role",
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
];

export default defineComponent({
  name: "usersIndex",

  beforeCreate() {
    this.action();
  },

  created() {
    verification();

    //localStorage.removeItem("tokenUser");
  },

  setup() {
    return {
      selected: ref([]),
      guardar,
      columns,
      rows,
      user,
      userID,
      roleTypes: ["admin", "user", "superuser"],
      /*prueba(newVal, oldVal, fila, col){
        const editedUser = rows.value.find((element) => element.id == fila.row.id);
        console.log(editedUser)

      },*/
      action() {
        rows.value.splice(0);
        axios.get("http://localhost:5000/users").then(function (response) {
          //console.log(response.data);
          response.data.forEach((element) => {
            rows.value.push(element);
            //console.log(element, "Elemento de axios.response.data a users");
          });
        });
        console.log(rows, "rows");
      },
    };
  },
});
</script>
