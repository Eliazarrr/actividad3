const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const deckOfCards = [...cards, ...cards, ...cards, ...cards];

let samPoints = 0;
let dealerPoints = 0;

function getRandomCard() {
  const randomCard = Math.floor(Math.random() * 52);
  const pickedCard = deckOfCards.splice(randomCard, 1)[0];
  return pickedCard;
}

samPoints += getRandomCard();
samPoints += getRandomCard();

dealerPoints += getRandomCard();
dealerPoints += getRandomCard();

console.log(samPoints);
console.log(dealerPoints);

function checkBlackjack() {
  if (samPoints === 21) {
    console.log("Sam wins!");
  } else if (dealerPoints === 21) {
    console.log("Dealer wins");
  } else if (samPoints === 21 && dealerPoints === 21) {
    console.log("Its a draw");
  } else if (samPoints <= 17) {
    while (samPoints <= 17) {
      return (samPoints += getRandomCard());
    }
    if (samPoints > 21) {
      alert ("Dealer wins. Game over");
    } else if (samPoints >= 17) {
      while (dealerPoints > samPoints) {
        return (dealerPoints += getRandomCard());
      }
      if (dealerPoints > 21) {
        alert ("Sam wins. Game over");
      }
    }
  }
}
alert (checkBlackjack());