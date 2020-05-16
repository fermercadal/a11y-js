import React from 'react'
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.openSelect = this.openSelect.bind(this);
  }

  openSelect() {
    document.querySelector('.choose-your-side__options').classList.toggle('active');
  }

  render() {
    const isDarkSide = this.props.currentSide.darkSide;
    const isLightSide = this.props.currentSide.lightSide;

    return (
      <nav className="Navigation">
        <div className="choose-your-side" onClick={() => this.openSelect()}>
          <div className="choose-your-side__title" aria-label="Choose your side" tabindex="0 ">Choose your side</div>
          <div className="choose-your-side__options">
            <div 
              className={`side__dark ${isDarkSide ? 'active' : ''}`}
              tabindex="0 "
              onClick={this.props.changeSide.bind(this, 'darkSide', false)}>
                Dark Side
            </div>

            <div 
              className={`side__light ${isLightSide  ? 'active' : ''}`}
              tabindex="0 "
              onClick={this.props.changeSide.bind(this, 'lightSide', false)}>
                Light side
            </div>
          </div>
        </div>


        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'prequels' ? 'active' : ''}`}
          tabindex="0 "
          onClick={ this.props.changeTrilogy.bind(this, 'prequels', false) }
          aria-label="Precuels">
            Prequels
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'originals' ? 'active' : ''}`}
          tabindex="0 "
          onClick={ this.props.changeTrilogy.bind(this, 'originals', false) }
          aria-label="Originals">
            Originals
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'sequels' ? 'active' : ''}`}
          tabindex="0 "
          onClick={ this.props.changeTrilogy.bind(this, 'sequels', false) }
          aria-label="Sequels">
            Sequels
        </div>
      </nav>
    );
  }
}

export default Navigation;
