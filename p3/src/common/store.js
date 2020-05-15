import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // State - Single source of truth; object where all data is stored.
    state: {
        favoritesNum: 0,
        entries: [],
        user: null
    },
    // Mutations - Methods used to update data in the store.
    mutations: {
        setFavorites(state, payload) {
            state.favoritesNum = payload;
        },
        updateFavorites(state, payload) {
            state.favoritesNum += payload;
        },
        updateEntries(state, payload) {
            state.entries = payload;
        },
        setEntries(state, payload) {
            state.entries = payload;
        }
    },
    // Actions - Methods used to asynchronously change the store, committing the changes via mutations.
    actions: {
        setEntries(context) {
            app.api.all('entries').then(response => {
                context.commit('updateEntries', response);
            });
        },
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
        getEntryById(state) {
            return function (slug) {
                for (let key of Object.keys(state.entries)) {
                    if (state.entries[key].slug == slug) {
                        return state.entries[key];
                    }
                }
            }
        }
    }
})