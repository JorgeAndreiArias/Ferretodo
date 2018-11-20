<template>
    <div>
        Codigo: <input type="text" name="Nombre"><br>
        Cliente: 
        <select class="selectpicker" v-model="selectedClient">
            <option v-for="(cliente) in loadClientes" v-bind:key="cliente">
            {{ cliente }}
            </option>
        </select>
        <input type="submit" value="Nuevo Cliente"><br>
        Cantidad: <input type="text" name="Rol"><br>
        <input type="submit" value="Agregar">
        <table style="width:100%">
            <tr>
                <th>Codigo</th>
                <th>Precio Unitario</th> 
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
            </tr>
        </table>
        <input type="submit" value="Fin Pedido">
        Selected: {{selectedClient}}
    </div>
    
</template>

<script>
import axios from 'axios'; 
export default {
    mounted: function(){
        this.loadComponents();
    },
    data: {
        venta: [],
        selectedClient: "Selecciona una opcion",
    },
    methods:{
        loadComponents(){
            var user = JSON.parse(this.$store.getters.session);
            var head = { "headers": { "Authorization": 'Bearer ' + user.Token }}
            axios.get('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/clientes/get', head).then(response => { //aqui utilizo la librería de axios
                this.$store.commit('clients', response.data);
            }).catch(e => {
                alert(e);
            })
        },
        show(){
            alert(selectedClient);
        }
    },
    computed: {
        loadClientes(){
            return this.$store.getters.clients;
        }
    }
}
</script>

<style>

</style>

