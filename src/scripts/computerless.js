var cardIndex = 0;
var crayons = ['red', 'yellow', 'blue', 'green', 'black', 'purple'];
var cards = ['red', 'yellow', 'blue', 'green'];


var outputs = {
  drawings: Array(3).fill(null),
  colors: Array(3).fill(null),
  crayons: Array(3).fill(null)
}

//Sample working code -- groups solutions go here

for (var i = 0; i < cards.length; i++) {

  if (cards[i] == 'blue') {
    for (var j = 0; j < crayons.length; j++) {
      if (crayons[j] == 'yellow') {
        drawSoccerBall(crayons[j], cards[i]);
        break
        }
      }
    }

  if (cards[i] == 'red') {
    for (var k = 0; k < crayons.length; k++) {
      if (crayons[k] == 'blue') {
        drawStickFigure(crayons[k], cards[i]);
        break
      }
    }
  }

  if (cards[i] == 'green') {
    for (var l = 0; l < crayons.length; l++) {
      if (crayons[l] == 'purple') {
        drawTrophy(crayons[l], cards[i]);
        break
      }
    }
  }

}



// ===========================================

function drawStickFigure (crayon, card) {

  outputs.drawings[cardIndex] = 'stickfigure';
  outputs.colors[cardIndex] = card + 'Card';
  outputs.crayons[cardIndex] = crayon;

  cardIndex++;
}


function drawSoccerBall (crayon, card) {

  outputs.drawings[cardIndex] = 'soccer';
  outputs.colors[cardIndex] = card + 'Card';
  outputs.crayons[cardIndex] = crayon;

  cardIndex++;
}


function drawTrophy (crayon, card) {

  outputs.drawings[cardIndex] = 'trophy';
  outputs.colors[cardIndex] = card + 'Card';
  outputs.crayons[cardIndex] = crayon;

  cardIndex++;
}


export default outputs;
