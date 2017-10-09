import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const Pokemon = (props) => {
  if (!props.data.pokemon) {
    return <div></div>
  }


  const pokemonsToDisplay = [props.data.pokemon]
  if (props.data.pokemon.evolutions) {
    pokemonsToDisplay.push(...props.data.pokemon.evolutions)
  }

  const pokemons = pokemonsToDisplay.map(pokemon => {
    return <div>{pokemon.name}<img src={pokemon.image}/></div>
  })

  return <div>{pokemons}</div>
}

const SelectedPokemon = gql`
    query pokemons($id: String!) {
        pokemon(id: $id) {
            id, name, image, weight, height, evolutions {
                image
                name
                weight
                height
            }
        }
    }`

const PokemonWithData = graphql(SelectedPokemon,
  {
    options: (props) => {
      const pokemonId = props.match.params.pokemonId
      return {
        variables: {id: pokemonId}
      }
    }

  })(Pokemon)

export default PokemonWithData