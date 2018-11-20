<template>
    <div>
        <form v-on:submit.prevent="Auth" class="black">
            <input type="text" placeholder="name" v-model="name">
            <input type="text" placeholder="password" v-model="password">
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import sha256 from 'sha256';

    export default{
        data: {
            name: null,
            password: null,
            user: {},
        },
        computed:{
            user1: {
                get: function () {
                    return this.user;
                },
                set: function (v) {
                    this.user = v;
                }
            }, 
        },
        methods: {
            Auth() {
            var  self = this;
            var objUser = {
                "username": this.name,
                "password": sha256(this.password),
            };
            console.warn(objUser);
            setTimeout(() => {
                axios.post('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/login/authenticate', objUser).then(response => {
                    this.$store.commit('changes', JSON.stringify(response.data));
                    alert(JSON.stringify(response.data));
                    if(response.data.Permisos == 10){
                        this.$store.commit('change', 3);
                    }else if(response.data.Permisos == 9){
                        this.$store.commit('change', 4);
                    }
                    //4 o 3 dependiendo si es vendedor o cliente, pero aun en la api no nos mandan el tipo de usuario
                }).catch(e => {
                    console.warn(e);
                })
            },
            300
            );
            
            }
        },
    }   
</script>

<style>

</style>


