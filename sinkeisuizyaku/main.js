window.onload = function() {
  function Card(suit,num) {
  this.suit = suit;
  this.num = num;
  this.front;
  this.setFront = function() {
    this.front = `${this.suit}${this.num<10 ? '0' : ''}${this.num}.gif`;
  }
}

const cards = [];
const suits = ['s', 'd', 'h', 'c'];
for(let i = 0; i < suits.length; i++) {
  for(let j = 1; j <= 13; j++) {
    let card = new Card(suits[i],j);
    card.setFront();
    cards.push(card);
  }
}

function shuffle() {
  for (let i = 0; i < 13 * 4; i++) {
    let ccard = cards[i];
    r = Math.floor(Math.random() * 13 * 4);
    cards[i] = cards[r];
    cards[r] = ccard;
  }
}
shuffle();

const table = document.getElementById('table');
for(let i = 0; i < suits.length; i++) {
  let tr = document.createElement('tr');
  for(let j = 0; j < 13; j++) {
    let td = document.createElement('td');
    let tempCard = cards[i*13+j];
    td.classList.add('card', 'back');
    td.style.backgroundImage=`url(images/${tempCard.front})`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
  }
  let c = '';
  function game () {
    const cardtachi = [];
    let m = 0;
    for (let i = 0; i < cards.length; i++) {
      cardtachi[i] = document.getElementsByClassName('card')[i];
      cardtachi[i].addEventListener('click', (e) => {
        c = e.target;
        c.classList.remove('back');
        c.classList.add('open')
        m++;
        switch(m) {
          case 1:
            judge1();
            break;
          case 2:
            judge2();
            break;
          case 3:
            judge3();
          default:
            return;
        }
      });
    }
  }
  let res1 = 0;
  let res2 = 0;
  let res3 = '';
  let res4 = '';
  function judge1() {
    res3 = c;
    let source = c.outerHTML;
    let res = parseInt(source.replace(/[^0-9]/g, ''), 10);
    res1 = res;
  }
  function judge2() {
    res4 = c;
    let source = c.outerHTML;
    let res = parseInt(source.replace(/[^0-9]/g, ''), 10);
    res2 = res
    if (res1 === res2) {
      res3.classList.add('match');
      res4.classList.add('match');
      game();
    } else {
      res3.classList.remove('open');
      res4.classList.remove('open');
      game();
    }
  }
  function judge3 () {
      res3.classList.add('back');
      res4.classList.add('back');
      res3.classList.remove('open');
      res4.classList.remove('open');
  }
  let count = document.getElementsByClassName('match').length;
  if (count === cards.length) {
    let reset = window.confirm('reset?');
    if (reset) {
      let matchElements = [];
      for(let i = 0; i < cards.length; i++) {
        matchElements[i] = document.getElementsByClassName('match')[i];
        matchElements[i].classList.remove('match');
        matchElements[i].classList.add('back');
      }
    } else {
      console.log('キャンセルされました');
    }
  }
    game();
}
