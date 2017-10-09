import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import Images from './Images'

export default class ImagesOut extends Component {
  render() {
    console.log("when")
    return <WithImages />
  }
}

const WithImages = graphql(gql`{
    business(id: "garaje-san-francisco") {
        name
        id
        rating
        url
    }
}`)(Images)
