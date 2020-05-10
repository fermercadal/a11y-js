import React from 'react'
import Navigation from './Components/Navigation/Navigation';
import Trilogy from './Components/Trilogy/Trilogy';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      saga: {
        precuels: {
          episode1: {
            title: '',
            year: '',
            poster: undefined
          },
          episode2: {
            title: '',
            year: '',
            poster: undefined
          },
          episode3: {
            title: '',
            year: '',
            poster: undefined
          }
        },
        originals: {
          episode4: {
            title: '',
            year: '',
            poster: undefined
          },
          episode5: {
            title: '',
            year: '',
            poster: undefined
          },
          episode6: {
            title: '',
            year: '',
            poster: undefined
          }
        },
        sequels: {
          episode7: {
            title: '',
            year: '',
            poster: undefined
          },
          episode8: {
            title: '',
            year: '',
            poster: undefined
          },
          episode9: {
            title: '',
            year: '',
            poster: undefined
          }
        },
      },
      Side: {
        darkSide: false,
        lightSide: false
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>A11y JS</div>
        <Navigation/>
        <Trilogy/>
      </div>
    );
  }
}

export default App;
