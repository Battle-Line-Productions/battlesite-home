import pickBy from 'lodash/pickBy'

export function state() {
    return {
      environments: {},
    }
  }
  
  export const mutations = {
    setEnvironment(state, environments) {
      state.environments = environments
    },
  }
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      commit('setEnvironment', extractNuxtEnvironments(process.env))
    },
  }
  
  function extractNuxtEnvironments(environments) {
    return pickBy(environments, (_value, key) => key.indexOf('NUXT_APP') !== -1)
  }

