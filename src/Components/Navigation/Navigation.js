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

      const customSelectState = {
        tabindex: customSelect.classList.contains('active') ? -1 : 0,
        expanded: customSelect.classList.contains('active') ? false : true
      }

      customSelect.classList.toggle('active');
      target.setAttribute('aria-expanded', customSelectState.expanded);

      customSelectOptions.forEach((option) => {
        option.setAttribute('tabindex', customSelectState.tabindex);
      });
    }
  }

  render() {
    const isDarkSide = this.props.currentSide.darkSide;
    const isLightSide = this.props.currentSide.lightSide;

    return (
      <nav className="Navigation">
        <div role="listbox" className="choose-your-side" onClick={(e) => this.toggleSelect(e.target)}>
          <div 
            aria-label="Choose your side"
            aria-expanded="false"
            className="choose-your-side__title"  
            tabIndex="0 ">
              Choose your side
          </div>
          <div className="choose-your-side__options">
            <div
              role="option"
              aria-label="Dark side"
              aria-selected={isDarkSide  ? true : false}
              className={`side__dark ${isDarkSide ? 'active' : ''}`}
              tabIndex="0 "
              onClick={() => this.props.changeSide('darkSide')}>
                Dark Side
            </div>

            <div
              role="option"
              aria-label="Light side"
              aria-selected={isLightSide  ? true : false}
              className={`side__light ${isLightSide  ? 'active' : ''}`}
              tabIndex="0 "
              onClick={() => this.props.changeSide  ('lightSide')}>
                Light side
            </div>
          </div>
        </div>


        <div 
          role="button"
          aria-label="prequels"
          aria-pressed={this.props.currentTrilogy === 'prequels' ? true : false}
          className={`trilogy__link button ${this.props.currentTrilogy === 'prequels' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('prequels') }>
            Prequels
        </div>

        <div 
          role="button"
          aria-label="originals"
          aria-pressed={this.props.currentTrilogy === 'originals' ? true : false}
          className={`trilogy__link button ${this.props.currentTrilogy === 'originals' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('originals') }>
            Originals
        </div>

        <div 
          role="button"
          aria-label="sequels"
          aria-pressed={this.props.currentTrilogy === 'sequels' ? true : false}
          className={`trilogy__link button ${this.props.currentTrilogy === 'sequels' ? 'active' : ''}`}
          tabIndex="0 "
          onClick={ () => this.props.changeTrilogy('sequels') }>
            Sequels
        </div>
      </nav>
    );
  }
}

export default Navigation;
