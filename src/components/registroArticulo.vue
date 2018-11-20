<template>
    <div>
        <form>
            Codigo: <input type="text" name="Codigo"><br>
            Precio: <input type="text" name="Precio"><br>
            Descripcion: <input type="text" name="Descripcion"><br>
            <select class="selectpicker" v-model="Marca" v-on:click="show(Marca)">
                <option v-for="marca in loadMarcas" v-bind:key="marca">
                {{ marca.Nombre }}
                </option>
            </select>
            <input type="submit" value="Agregar">
            <br>
        </form>
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
        Marca: '',
    },
    methods:{
        loadComponents(){
            var user = JSON.parse(this.$store.getters.session);
            var head = { "headers": { "Authorization": 'Bearer ' + user.Token }}
            axios.get('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/marcas/getAll', head).then(response => { //aqui utilizo la librería de axios
                this.$store.commit('marcas', response.data);
                alert(JSON.stringify(response.data));
            }).catch(e => {
                alert(e);
            })
        },
        show(Marca){
            console.warn(Marca);
        }
    },
    computed: {
        loadMarcas(){
            return this.$store.getters.marcas;
        },
    }
}
</script>

<style>

</style>