import React from 'react'
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  componentDidMount() {
    const customSelect = document.querySelector('.choose-your-side__title');
    const customSelectOptions = document.querySelectorAll('.choose-your-side__options > div');

    customSelect.addEventListener('keypress', (e) => {
      if(e.charCode ===  13 || e.charCode ===  32) {
        e.preventDefault();
        this.toggleSelect(e.path[0]);
      }
    });
    
    customSelectOptions.forEach((option) => {
      option.setAttribute('tabindex', -1);

      option.addEventListener('keypress', (e) => {
        if(e.charCode ===  13 || e.charCode ===  32) {
          e.preventDefault();          
          const thisSide = e.target.innerText === 'Dark Side' ? 'darkSide' : 'lightSide'; 

          this.props.changeSide(thisSide)
        }
      });
    });
  }

  toggleSelect(target) {
    const customSelect = target.parentNode.querySelector('.choose-your-side__options');
    
    if(customSelect) {
      const customSelectOptions = customSelect.querySelectorAll('.choose-your-side__options > div');
      const customSelectState = customSelect.classList.contains('active') ? -1 : 0;

      customSelect.classList.toggle('active');

      customSelectOptions.forEach((option) => {
        option.setAttribute('tabindex', customSelectState);
      });
    }
  }

  render() {
    const isDarkSide = this.props.currentSide.darkSide;
    const isLightSide = this.props.currentSide.lightSide;

    return (
      <nav className="Navigation">
        <div className="choose-your-side" onClick={(e) => this.toggleSelect(e.target)}>
          <div className="choose-your-side__title" aria-label="Choose your side" tabIndex="0 ">Choose your side</div>
          <div className="choose-your-side__options">
            <div 
              className={`side__dark ${isDarkSide ? 'active' : ''}`}
              tabIndex="0 "
              onClick={() => this.props.changeSide('darkSide')}>
                Dark Side
            </div>

            <div 
              className={`side__light ${isLightSide  ? 'active' : ''}`}
              tabIndex="0 "
              onClick={() => this.props.changeSide  ('lightSide')}>
                Light side
            </div>
          </div>
        </div>


        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'prequels' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('prequels') }
          aria-label="prequels">
            Prequels
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'originals' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('originals') }
          aria-label="originals">
            Originals
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'sequels' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('sequels') }
          aria-label="sequels">
            Sequels
        </div>
      </nav>
    );
  }
}

export default Navigation;
