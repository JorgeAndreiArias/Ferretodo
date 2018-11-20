<template>
    <div>
        <form v-on:submit.prevent="RegisterClient">
            <input type="text" placeholder="Username" v-model="username"><br>
            <input type="submit" value="Registro">
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: {
            username: null,
        },
        methods: {
            RegisterClient() {
            var user = JSON.parse(this.$store.getters.session);
            var head = { "headers": { "Authorization": 'Bearer ' + user.Token }}
            axios.post('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/clientes/post?c=' + this.username,'', head).then(response => {
                alert(JSON.stringify(response));
            }).catch(e => {
                console.warn(e);
            })
            this.username = "";
            }
            
        },
    }
</script>

