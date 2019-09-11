import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/'
})

export default new Vuex.Store({
  state: {
    //Cars
    cars: [],
    activeCar: {},
    //Houses
    houses: [],
    activeHouse: {}
  },
  mutations: {
    //Cars

    setCars(state, payload) {
      state.cars = payload
    },
    setActiveCar(state, payload) {
      state.activeCar = payload
    },

    //Houses
    setHouses(state, payload) {
      state.houses = payload
    },
    setActivehouse(state, payload) {
      state.activeHouse = payload
    }
  },
  actions: {
    //Cars
    async getCars({ commit, dispatch }) {
      try {
        let res = await api.get('cars')
        commit('setCars', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/cars/${payload.carId}`)
        commit('setActiveCar', res.data.data)

      } catch (error) {
        console.error(error)

      }
    },
    async addCar({ dispatch }, payload) {
      try {
        let res = await api.post('/cars', payload)
        dispatch('getCars')
      } catch (error) {
        console.error(error)

      }
    },
    async delortCar({ dispatch }, payload) {
      try {
        let res = await api.delete('/cars/' + payload)
        dispatch('getCars')
        //NOTE this is coming from the import statement at the top
        router.push({ name: 'cars' })
      } catch (error) {
        console.error(error)
      }
    },

    //Houses
    async getHouses({ commit, dispatch }) {
      try {
        let res = await api.get('houses')
        commit('setHouses', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getHouseById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(`/houses/${payload.houseId}`)
        commit('setActiveHouse', res.data.data)

      } catch (error) {
        console.error(error)
      }
    },
    async addHouse({ dispatch }, payload) {
      try {
        let res = await api.post('/houses', payload)
        dispatch('getHouses')
      } catch (error) {
        console.error(error)

      }
    }

  }
})
