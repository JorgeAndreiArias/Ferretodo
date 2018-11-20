<template>
    <div>
        <form v-on:submit.prevent="Register" class="black">
            <input type="text" placeholder="Username" v-model="username"><br>
            <input type="Password" placeholder="Password" v-model="password"><br>
            <input type="text" placeholder="Name" v-model="name"><br>
            <input type="text" placeholder="LastName" v-model="lastname"><br>
            <select v-model="status">
                <option disabled value="">Please select one</option>
                <option>Administrador</option>
                <option>Vendedor</option>
            </select>
            <input type="submit" value="Registro">
            
        </form>
    </div>
</template>

<script>
import axios from 'axios'; 
import sha256 from 'sha256';

    export default {
        data: {
            username: "",
            password: "",
            name: "",
            lastname: "",
            status: "",
        },
        methods: {
            Register() {
                var mesaageError = this.validateForm();
                if(mesaageError.length == 0){
                    const self = this;
                    var sts = null;
                    switch(this.status){
                        case "Administrador":
                            sts = 10;
                            break;
                        case "Vendedor":
                            sts = 9;
                            break;
                    }
                    var objUser = {
                            "username": this.username,
                            "password": sha256(this.password),
                            "name": this.name,
                            "lastname": this.lastname,
                            "status": sts
                        };
                    console.warn(objUser);
                    var user = JSON.parse(this.$store.getters.session);
                    var head = { "headers": { "Authorization": 'Bearer ' + user.Token }}
                    axios.post('https://cors-anywhere.herokuapp.com/https://capturadorpedidosweb2.azurewebsites.net/api/register/register', objUser).then(response => {
                        JSON.stringify(response.data);
                    }).catch(e => {
                        console.warn(e);
                    })
                }else{
                    alert(mesaageError);
                }
                
               
                
            }, 
            validateForm(){
                var messageError = "";
                if(this.username == null || this.username == ""){
                    messageError += "Username, ";
                }
                if(this.password == null || this.password == ""){
                    messageError += "Password, ";
                }
                if(this.name == null || this.name == ""){
                    messageError += "Name, ";
                }
                if(this.lastname == null || this.lastname == ""){
                    messageError += "Lastname, ";
                }
                if(this.status == null || this.status == ""){
                    messageError += "Status, ";
                }
                if(messageError.length != 0){
                    messageError = "Field empty: " + messageError; 
                }
                return messageError;
            }
        },
    }
</script>

