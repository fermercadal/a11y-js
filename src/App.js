import React from 'react'
import Navigation from './Components/Navigation/Navigation';
import Trilogy from './Components/Trilogy/Trilogy';
import './App.scss';

import episode1 from './Images/episode1.jpg';
import episode2 from './Images/episode2.jpg';
import episode3 from './Images/episode3.jpg';
import episode4 from './Images/episode4.jpg';
import episode5 from './Images/episode5.jpg';
import episode6 from './Images/episode6.jpg';
import episode7 from './Images/episode7.jpg';
import episode8 from './Images/episode8.jpg';
import episode9 from './Images/episode9.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      saga: {
        prequels: {
          title: "Prequel Trilogy",
          episodes: {
            episode1: {
              title: 'Episode I The Phantom Menace',
              year: '1999',
              poster: episode1
            },
            episode2: {
              title: 'Episode II Attack of the Clones',
              year: '2002',
              poster: episode2
            },
            episode3: {
              title: 'Episode III Revenge of the Sith',
              year: '2005',
              poster: episode3
            }
          }
          
        },
        originals: {
          title: "Original Trilogy",
          episodes: {
            episode4: {
              title: 'Episode IV A New Hope',
              year: '1977',
              poster: episode4
            },
            episode5: {
              title: 'Episode V The Empire Strikes Back',
              year: '1980',
              poster: episode5
            },
            episode6: {
              title: 'Episode VI Return of the Jedi',
              year: '1983',
              poster: episode6
            }
          }
          
        },
        sequels: {
          title: "Sequel Trilogy",
          episodes: {
            episode7: {
              title: 'Episode VII The Force Awakens',
              year: '2015',
              poster: episode7
            },
            episode8: {
              title: 'Episode VIII The Last Jedi',
              year: '2017',
              poster: episode8
            },
            episode9: {
              title: 'Episode IX The Rise of Skywalker',
              year: '2019',
              poster: episode9
            }
          }
          
        },
      },
      currentTrilogy: 'originals',
      Side: {
        darkSide: false,
        lightSide: true
      }
    }

    this.changeSide = this.changeSide.bind(this);
    this.changeTrilogy = this.changeTrilogy.bind(this);
  }

  changeSide(side) {
    if(side === 'darkSide') {
      this.setState({
        Side: {
          darkSide: true,
          lightSide: false
        }
      });
    } else {
      this.setState({
        Side: {
          darkSide: false,
          lightSide: true
        }
      });
    }
  }

  changeTrilogy(trilogy) {
    this.setState({
      currentTrilogy: trilogy,
    });
  }

  render() {
    const isDarkSide = this.state.Side.darkSide;
    const isLightSide = this.state.Side.lightSide;

    return (
      <div className={`App ${isDarkSide ? 'App__dark-side' : ''} ${isLightSide ? 'App__light-side' : ''}`}>
        <div className="App__title">A11y JS</div>

        <Navigation 
          changeSide={ this.changeSide } 
          changeTrilogy={ this.changeTrilogy }
          currentTrilogy={ this.state.currentTrilogy }
          currentSide={ this.state.Side }
          />

        <Trilogy series={ this.state.currentTrilogy } saga={ this.state.saga }/>
      </div>
    );
  }
}

export default App;
