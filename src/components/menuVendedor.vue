<template>
    <div>
        <input type="submit" value="Ventas" v-on:click="ventas">
        <br/>
        <input type="submit" value="Cliente" v-on:click="cliente">
    </div>
</template>

<script>
export default {
    data: {
        page: 0,
    },
    methods:{
        ventas(){
            this.$store.commit('change', 7);
        }, 
        cliente(){
            this.$store.commit('change', 8);
        }, 
    }
}
</script>

<style>

</style>