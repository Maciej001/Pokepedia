import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import _ from 'underscore'

const Image = ({url}) => {
  const style = {
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    overflow: 'hidden',
    width: '19vw',
    marginRight: '1vw',
    height: '19vw',
    marginBottom: '1vw',
    cursor: 'pointer',
  }

  return <div style={style}></div>
}

const Images = (props) => {
  const pokemons = props.data.pokemons
  if (!pokemons)
    return null
  const randomPokemons = _.shuffle(_.sample(pokemons, 9))
  return (
    <div className='images'>
      {randomPokemons.map(pokemon =>
        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}<Image key={pokemon.id} url={pokemon.image} className='image' /></Link>
      )}
    </div>
  )
}


const ImagesWithData = graphql(gql`{
    pokemons (first:150) {
        id,
        image,
        name
    }
}`)(Images)


export default ImagesWithData
