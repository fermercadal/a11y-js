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
              poster: episode1,
              posterDescription: 'The boy Anakin skywalker, young Obi-Wan Kenobi, Qui-Gon Jinn, Queen Padme Admidala, Jar Jar Binks and the droids R2D2 and C3PO, movie poster.',
              trailer: 'https://youtu.be/bD7bpG-zDJQ'
            },
            episode2: {
              title: 'Episode II Attack of the Clones',
              year: '2002',
              poster: episode2,
              posterDescription: 'Young Anakin Skywalker and Padme Amidala  spotlight.  Jango Fett, Obi-Wan Kenobi, Yoda, Mace Windu and the droids R2D2 and C3PO, movie poster.',
              trailer: 'https://youtu.be/gYbW1F_c9eM'
            },
            episode3: {
              title: 'Episode III Revenge of the Sith',
              year: '2005',
              poster: episode3,
              posterDescription: 'Anakin Skywalker fighting Obi-Wab Kenobi, surrounded by Yoda, Padme Amidala, Mace Windu and Darth Sidius, Darth Vader in the background, movie poster.',
              trailer: 'https://youtu.be/5UnjrG_N8hU'
            }
          }
          
        },
        originals: {
          title: "Original Trilogy",
          episodes: {
            episode4: {
              title: 'Episode IV A New Hope',
              year: '1977',
              poster: episode4,
              posterDescription: 'Luke Skywalker holding a laser sword, Leia Organa holding a blaster and droids R2D2 and C3PO in front, Darth Vader and the first Death Star being attacked by rebel ships in the background, movie poster.',
              trailer: 'https://youtu.be/vZ734NWnAHA'
            },
            episode5: {
              title: 'Episode V The Empire Strikes Back',
              year: '1980',
              poster: episode5,
              posterDescription: 'Luke Skywalker surrounded by Han Solo and Leia Organa, Chewbacca and the droids R2D2 and C3PO. Darth Vader in the background. movie poster.',
              trailer: 'https://youtu.be/JNwNXF9Y6kY'
            },
            episode6: {
              title: 'Episode VI Return of the Jedi',
              year: '1983',
              poster: episode6,
              posterDescription: 'Luke Skywalker, Han Solo and Leia Organa spotlighted, Darth Vader in the background, movie poster.',
              trailer: 'https://youtu.be/7L8p7_SLzvU'
            }
          }
          
        },
        sequels: {
          title: "Sequel Trilogy",
          episodes: {
            episode7: {
              title: 'Episode VII The Force Awakens',
              year: '2015',
              poster: episode7,
              posterDescription: '',
              trailer: 'https://youtu.be/sGbxmsDFVnE'
            },
            episode8: {
              title: 'Episode VIII The Last Jedi',
              year: '2017',
              poster: episode8,
              posterDescription: '',
              trailer: 'https://youtu.be/Q0CbN8sfihY'
            },
            episode9: {
              title: 'Episode IX The Rise of Skywalker',
              year: '2019',
              poster: episode9,
              posterDescription: '',
              trailer: 'https://youtu.be/8Qn_spdM5Zg'
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

  componentDidMount() {
    const customButtons = document.querySelectorAll('.button');
      
    customButtons.forEach((button) => {
      button.addEventListener('keypress', (e) => {
        if(e.charCode ===  13 || e.charCode ===  32) {
          e.preventDefault();
          this.changeTrilogy(button.getAttribute('aria-label'));
        }
      });
    });
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
      <>
        <header className={`App ${isDarkSide ? 'App__dark-side' : ''} ${isLightSide ? 'App__light-side' : ''}`}>
          <h1 className="App__title">A11y JS</h1>
          
          <Navigation 
            changeSide={ this.changeSide } 
            changeTrilogy={ this.changeTrilogy }
            currentTrilogy={ this.state.currentTrilogy }
            currentSide={ this.state.Side }
            />
        </header>

        <Trilogy 
          series={ this.state.currentTrilogy } 
          saga={ this.state.saga }
          currentSide={ this.state.Side }
          />
      </>
    );
  }
}

export default App;
