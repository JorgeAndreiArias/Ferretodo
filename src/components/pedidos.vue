<template>
    <div>
        <table style="width:70%" class="text-light">
            <thead>
                <tr>
                    <th>Folio</th>
                    <th>Nombre</th>
                    <th>Fecha</th> 
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pedido in loadPedidos" v-bind:key="pedido">
                    <th>{{ pedido.Folio }}</th>
                    <th>{{ pedido.C.Nombre }}</th>
                    <th>{{ pedido.Date }}</th>
                    <th>{{ pedido.Total }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'; 
export default {
    mounted: function(){
        this.loadComponents();
    },
    data: {
        pedidos: [],
    },
    methods:{
        loadComponents(){
            var user = JSON.parse(this.$store.getters.session);
            var head = { "headers": { "Authorization": 'Bearer ' + user.Token }}
            axios.get('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/venta/getAll', head).then(response => { //aqui utilizo la librería de axios
                this.$store.commit('pedidos', response.data);
            }).catch(e => {
                alert(e);
            })
        },
        show(){
            alert(selectedClient);
        }
    },
    computed: {
        loadPedidos(){
            return this.$store.getters.pedidos;
        }
    }
}
</script>

<style>

</style>