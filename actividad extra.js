const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const deckOfCards = [...cards, ...cards, ...cards, ...cards];

var jug = 0;
var compu = 0;

function getRandomCard() {
  const randomCard = Math.floor(Math.random() * 58);
  const pickedCard = deckOfCards.splice(randomCard, 1)[0];
  return pickedCard;
}

jug += getRandomCard();
jug += getRandomCard();

compu += getRandomCard();
compu += getRandomCard();

console.log(jug);
console.log(compu);

function checkBlackjack() {
  if (jug === 21) {
    console.log("has ganado!");
  } else if (compu === 21) {
    console.log("gano la compu");
  } else if (jug  === 21 && compu === 21) {
    console.log("empate");
  } else if (jug <= 17) {
    while (jug <= 17) {
      return (jug += getRandomCard());
    }
    if (jug > 21) {
      alert ("caompu gana. finaliza el juego");
    } else if (jug >= 17) {
      while (compu > jug) {
        return (compu += getRandomCard());
      }
      if (compu > 21) {
        alert ("has ganado. finaliza e juego");
      }
    }
  }
}
alert (checkBlackjack());