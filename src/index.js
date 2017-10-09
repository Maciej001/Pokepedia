import React, { Component } from 'react';
import { render } from 'react-dom';

import Images from './Images';

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

class App extends Component {
  state = {
    search: ""
  }

  onChange = e => this.setState({search: e.target.value});

  render() {
    return (
      <div className="app">
        <h1>Lunch Tinder</h1>
        <input type="text" value={this.state.search} onChange={this.onChange}/>
        <Images images={images} />
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById('root'));
