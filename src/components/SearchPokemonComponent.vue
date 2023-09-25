<template>
    <v-app>
        <v-container fill-height fluid>
            <v-sheet :elevation="4" class="mx auto pa-12">
                <v-row>
                    <v-col cols="8">
                        <v-text-field label="Search pokemon" variant="solo-filled" v-model="queryPkmn"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn @click="searchPokemon" size="large" block class="ma-0 pa-0 " color="deep-orange darken-1">
                            Search
                        </v-btn>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>

        <v-sheet :elevation="4" class="mx auto pa-12">
            <v-card v-if="Object.entries(pokemonData).length > 0" class="mx-auto" max-width="400">
                <v-card-title>{{ pokemonData.name }}</v-card-title>
                <v-img :src="pokemonData.sprites.front_default" class="align-end mx-auto text-orange" height="200"
                    width="200" cover>

                </v-img>

                <v-card-subtitle class="pt-4">
                    Pokedex number: {{ pokemonData.id }}
                </v-card-subtitle>
            </v-card>
        </v-sheet>
    </v-app>
</template>
  
<script lang="ts">

import { pokeAPI } from '../utils/constants'

export default {

    data() {
        return {
            pokemonData: {},
            queryPkmn: '',
        }
    },

    methods: {
        async searchPokemon(): Promise<void> {
            try {
                const pokemonToFind = await fetch(`${pokeAPI}/${this.queryPkmn.toLowerCase()}`);
                const pokemon = await pokemonToFind.json();
                this.pokemonData = pokemon;
                return pokemon;
            } catch (error) {
                console.error('Error searching for Pokemon:', error);
                alert('Pokemon was not found');
            }
        }
    }


};

</script>
  