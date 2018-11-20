<template>
    <div>
        <input type="submit" value="Pedidos" v-on:click="ventas">
        <br/>
        <input type="submit" value="Articulo" v-on:click="articulos">
        <br/>
        <input type="submit" value="Cliente" v-on:click="cliente">
        <br/>
        <input type="submit" value="Usuario" v-on:click="usuario">
    </div>
</template>

<script>
export default {
    data: {
        page: 0,
    },
    methods:{
        ventas(){
            this.$store.commit('change', 5);
        }, 
        articulos(){
            this.$store.commit('change', 6);
        },
        cliente(){
            this.$store.commit('change', 8);
        }, 
        usuario(){
            this.$store.commit('change', 9);
        }
    }
    
}
</script>

<style>

</style>