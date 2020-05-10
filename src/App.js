import React from 'react'
import Navigation from './Components/Navigation/Navigation';
import Trilogy from './Components/Trilogy/Trilogy';

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
        precuels: {
          title: "Prequel Trilogy",
          episodes: {
            episode1: {
              title: 'Star Wars: Episode I The Phantom Menace',
              year: '1999',
              poster: episode1
            },
            episode2: {
              title: 'Star Wars: Episode II Attack of the Clones',
              year: '2002',
              poster: episode2
            },
            episode3: {
              title: 'Star Wars: Episode III Revenge of the Sith',
              year: '2005',
              poster: episode3
            }
          }
          
        },
        originals: {
          title: "Original Trilogy",
          episodes: {
            episode4: {
              title: 'Star Wars: Episode IV A New Hope',
              year: '1977',
              poster: episode4
            },
            episode5: {
              title: 'Star Wars: Episode V The Empire Strikes Back',
              year: '1980',
              poster: episode5
            },
            episode6: {
              title: 'Star Wars: Episode VI Return of the Jedi',
              year: '1983',
              poster: episode6
            }
          }
          
        },
        sequels: {
          title: "Sequel Trilogy",
          episodes: {
            episode7: {
              title: 'Star Wars: Episode VII The Force Awakens',
              year: '2015',
              poster: episode7
            },
            episode8: {
              title: 'Star Wars: Episode VIII The Last Jedi',
              year: '2017',
              poster: episode8
            },
            episode9: {
              title: 'Star Wars: Episode IX The Rise of Skywalker',
              year: '2019',
              poster: episode9
            }
          }
          
        },
      },
      currentTrilogy: 'originals',
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
        <Trilogy series={ this.state.currentTrilogy } saga={this.state.saga}/>
      </div>
    );
  }
}

export default App;
