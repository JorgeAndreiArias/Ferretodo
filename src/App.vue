<template>
  <v-app>
    <v-div>
      <v-div v-if="loggedIn">
          <barra></barra>
      </v-div>
      <v-div>
          <login v-if="page == 1"></login>
          <detallePedido v-if="page == 2"></detallePedido>
          <menuAdmin v-if="page == 3"></menuAdmin>
          <menuVendedor v-if="page == 4"></menuVendedor>
          <pedidos v-if="page == 5"></pedidos>
          <registroArticulo v-if="page == 6"></registroArticulo>
          <ventas v-if="page == 7"></ventas>
          <registroCliente v-if="page == 8"></registroCliente>
          <registroUsuario v-if="page == 9"></registroUsuario>
      </v-div>  
      <v-footer>

      </v-footer>
    </v-div>
  </v-app>
    
</template>

<script>
import login from './components/login.vue'
import barra from './components/barra.vue'
import detallePedido from './components/detallePedidos.vue'
import menuAdmin from './components/menuAdmin.vue'
import menuVendedor from './components/menuVendedor.vue'
import pedidos from './components/pedidos.vue'
import registroArticulo from './components/registroArticulo.vue'
import ventas from './components/ventas.vue'
import registroCliente from './components/registroCliente.vue'
import registroUsuario from './components/registroUsuario.vue'


export default{

  components: {login, barra, detallePedido, menuAdmin, menuVendedor,pedidos, registroArticulo, ventas, registroCliente, registroUsuario},
  data: {
    session: null,
  },
  computed:{
    page(){
        return this.$store.getters.page;
    },
    loggedIn() {
      return Boolean(this.$store.getters.session);
    }
  }
}
</script>

<style>
</style>
