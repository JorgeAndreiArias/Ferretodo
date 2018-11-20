<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand"><img class="img-responsive img-fluid" width="200" :src="logo"></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
		 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto" v-if="checkUser == 10">
				<li class="nav-item active">
					<a class="nav-link" href="#">Menú<span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="pedido" href="#">Ver Pedidos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="articulos" href="#">Nuevo Artículo</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="cliente" href="#">Nuevo Cliente</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="usuario" href="#">Nuevo Usuario</a>
				</li>
			</ul>
			<ul class="navbar-nav mr-auto" v-if="checkUser == 9">
				<li class="nav-item active">
					<a class="nav-link" href="#">Menú<span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="cliente" href="#">Nuevo Cliente</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="ventas" href="#">Nuevo Pedido</a>
				</li>
			</ul>
		</div>
	</nav>    
</template>

<script>
import logo from "../assets/logo_ferre.png";
export default {
	 mounted:{
        show(){
            alert(JSON.stringify(this.$store.getters.session.Permisos));
        }
    },
    data: function(){
		return{
			logo: logo,
		}
	}, 
	methods:{
		pedido(){
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
		},
		ventas(){
            this.$store.commit('change', 7);
        }, 
	},
	computed:{
		checkUser(){
			var usuario = JSON.parse(this.$store.getters.session);
			return usuario.Permisos;
		}
	}
}
</script>

<style >
</style> 


