import React, { Component } from 'react';
import { render } from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider, gql, graphql } from 'react-apollo';
import Images from './Images';
import ImagesOut from './ImagesOut';
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://api.yelp.com/v3/graphql',
  opts: {
    credentials: 'include',
    mode: 'no-cors',
  },
});
// yc8uSLGDwyEi93vhPBUDgpIfDQX0u3xKO3KMlJksRXfUwY2JFJckF4S7tmakoQiTEfg46cfnE1qujB2lUlm1jF9SGJD9pLkKBJF8ybeSzBX4ll37cyOBUyHasz3bWXYx


networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = "yc8uSLGDwyEi93vhPBUDgpIfDQX0u3xKO3KMlJksRXfUwY2JFJckF4S7tmakoQiTEfg46cfnE1qujB2lUlm1jF9SGJD9pLkKBJF8ybeSzBX4ll37cyOBUyHasz3bWXYx"
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    console.log("Gandecki req.options.headers", req.options);
    next();
  }
}]);

const client = new ApolloClient({ networkInterface });


const images = [
  {
    id: 1,
    url: "https://s3-media2.fl.yelpcdn.com/bphoto/n4t7Oe5C3idM7YeAPbfKrg/o.jpg"
  },
  {
    id: 2,
    url: "https://s3-media3.fl.yelpcdn.com/bphoto/4qGnrSpdD_GgmHh1pz79MA/o.jpg"
  },
  {
    id: 3,
    url: "https://s3-media1.fl.yelpcdn.com/bphoto/h8wm8Atx0fcfBzllpFkaug/o.jpg"
  },
  {
    id: 4,
    url: "https://s3-media4.fl.yelpcdn.com/bphoto/5YhkzGbG2V6prKMAmBzkTw/o.jpg"
  },{
    id: 5,
    url: "https://s3-media3.fl.yelpcdn.com/bphoto/RYd6d03OAK8j0kT6G5dnmQ/o.jpg"
  },
  {
    id: 6,
    url: "https://s3-media2.fl.yelpcdn.com/bphoto/OEXMcpLCNIGB_bsWlFlzKg/o.jpg"
  },
  {
    id: 7,
    url: "https://s3-media2.fl.yelpcdn.com/bphoto/s1qI8vxkt5NyD3i_zWdXTQ/o.jpg"
  },
  {
    id: 8,
    url: "https://s3-media2.fl.yelpcdn.com/bphoto/IQwtQuvQsAymk6Jtj--WOA/o.jpg"
  },
]




// Client ID
//
// R4LSI_Dt1s7IseT4EkCNpA
//
//
// Client Secret
// BCOmQ78erlJvrd1HeOVlyye11LXn16XEmjMt9OQK7E7EXgnKDQ3guOy7PFgI57jm
// token



// const ImagesWithData = graphql(gql`{
//     search(term:"restaurant", location:"London", limit:50, sort_by:"rating"){
//         business {
//             id
//             photos
//         }
//
//     }
// }`)(Images)



class App extends Component {
  state = {
    search: ""
  }

  onChange = e => this.setState({search: e.target.value});

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="app">
        <h1>Lunch Tinder</h1>
        <input type="text" value={this.state.search} onChange={this.onChange}/>
        {/* <Images images={images} /> */}
        <ImagesOut />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

render(<App />, document.getElementById('root'));
