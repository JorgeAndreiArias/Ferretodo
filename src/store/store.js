import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        page: 1,
        session: null,
        clients: [],
        marcas: [],
        pedidos: [],
    },
    mutations: {
        change(state, page) {
            state.page = page;
        }, 
        changes(state, session){
            state.session = session;
        },
        clients(state, clients){
            state.clients = clients;
        }, 
        marcas(state, marcas){
            state.marcas = marcas;
        }, 
        pedidos(state, pedidos){
            state.pedidos = pedidos;
        }
    },
    getters: {
        page: state => state.page,
        session: state => state.session,
        clients: state => state.clients,
        marcas: state => state.marcas,
        pedidos: state => state.pedidos,
    }
})