

function writeCards(cards, events) {
  let newArray=[]
  for (let i = 0; i < cards.length; i++) {
    newArray.push(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);
  }

  return newArray;
}

writeCards(cards,"surprise");

function countDown() {
  let i = 10;
  while (i >= 0){
    console.log(i--);
  }
}