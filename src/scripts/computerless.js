var cardIndex = 0;
var crayons = ['red', 'yellow', 'blue', 'green', 'black', 'purple'];
var cards = ['red', 'yellow', 'blue', 'green'];


var outputs = {
  drawings: Array(3).fill(null),
  colors: Array(3).fill(null),
  crayons: Array(3).fill(null)
}

// =============================================

//Sample working code -- groups solutions go here
//note to self re: level of complexity if multiple cards of same color and does this apply to crayons too? maybe depends on how they sort

var tools = [];

for (var i = 0; i < cards.length; i++) {
  if (cards[i] === 'yellow') {
    tools.push(cards[i])
  }
}

for (var j = 0; j < crayons.length; j++) {
  if (crayons[j] === 'blue') {
    tools.push(crayons[j])
  }
}

drawStickFigure(tools[1], tools[0])

for (var k = 0; k < cards.length; k++) {
  if (cards[k] === 'green') {
    tools.push(cards[k])
  }
}

for (var l = 0; l < crayons.length; l++) {
  if (crayons[l] === 'purple') {
    tools.push(crayons[l])
  }
}

drawSoccerBall(tools[3], tools[2])


for (var m = 0; m < cards.length; m++) {
  if (cards[m] === 'blue') {
    for (var n = 0; n < crayons.length; n++) {
      if (crayons[n] === 'red'){
        drawTrophy(crayons[n], cards[m])
        break
      }
    }
    break
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
