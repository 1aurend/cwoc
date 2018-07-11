
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import stickfigure from './images/stick-figure.png';
import soccer from './images/soccer.png';
import trophy from './images/trophy.png';
import outputs from './scripts/computerless';
console.log({outputs});



function Card(props) {

  var image;
  if (props.value === 'soccer') {
    image = soccer;
  }
  else if (props.value === 'trophy') {
    image = trophy;
  }
  else if (props.value === 'stickfigure') {
    image = stickfigure;
  }
  else image = null;

  console.log(props.value);

  var buttonColor = props.color;
  console.log(props.color);

  var crayonColor = '6px solid ' + props.crayon;
  var border = {border: crayonColor}
  console.log(crayonColor);
  console.log(border);

  if (image != null) {
    return (
      <button className={buttonColor} onClick={props.onClick}>
        <img src={image} alt='blank card' style={border}></img>
      </button>
    );
  }
  else {
    return(
       <button className={buttonColor} onClick={props.onClick}>
       </button>
     );
   }
}


class CardCollection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: Array(3).fill(null),
      colors: ['blankCard', 'blankCard', 'blankCard',],
      crayons: Array(3).fill(null)
    };
  }


  handleClick(i) {
    const cards = this.state.cards.slice();
    const colors = this.state.colors.slice();
    const crayons = this.state.crayons.slice();
    if (cards[i]) {
      return;
    }
    cards[i] = outputs.drawings[i];
    colors[i] = outputs.colors[i];
    crayons[i] = outputs.crayons[i];
    this.setState({
      cards: cards,
      colors: colors,
      crayons: crayons
    });
  }


  renderCard(i) {
    return (
      <Card
      value={this.state.cards[i]}
      color={this.state.colors[i]}
      crayon={this.state.crayons[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
      var status = 'Here are your cards: '
      console.log(this.renderCard(0));

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
        </div>
      </div>
    );
  }



}


  ReactDOM.render(
    <CardCollection />,
    document.getElementById('root')
  );
