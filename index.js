
let meehandw = '';
let youhandw = '';

//要素の追加
const d = document.getElementById('result');
function addgame () {
  const element = document.createElement('p');
  element.id = 'game';
  element.innerHTML = ''

  d.appendChild(element);
}
function addmee () {
  const element = document.createElement('p');
  element.id = 'mee';
  element.innerHTML = ''

  d.appendChild(element);
}
function addyou () {
  const element = document.createElement('p');
  element.id = 'you';
  element.innerHTML = ''

  d.appendChild(element);
}
addgame();
addmee();
addyou();
//要素の追加



//clickEvent
document.addEventListener('click', function (event) {

  meehandw = event.target.textContent;
  //改善点：ボタン以外も押せてしまう

  //you
  const n = Math.floor(Math.random() * 3);
  if (n === 0) {
    youhandw = "✊";
  } else if (n === 1) {
    youhandw = "✌";
  } else if (n === 2) {
    youhandw = "✋";
  } else {
    youhandw = "✋";
  }
  //you

  //勝敗
  let issue = 'You Win!';
  if ((meehandw === "✊" && youhandw === "✊") || (meehandw === "✌" && youhandw === "✌") || (meehandw === "✋" && youhandw === "✋")) {
    issue = 'Draw';
  } else if ((meehandw === "✊" && youhandw === "✋") || (meehandw === "✌" && youhandw === "✊") || (meehandw === "✋" && youhandw === "✌")) {
    issue = 'You Lose';
  } else if ((meehandw === "✊" && youhandw === "✌") || (meehandw === "✌" && youhandw === "✋") || (meehandw === "✋" && youhandw === "✊")) {
    issue = 'You Win!';
  } else {
    issue = 'ボタンを押してください';
  }
  //勝敗

  const funcgame = () => {
    document.getElementById('game').innerHTML = "<p>" + issue + "</p>";
  }
  const funcmee = () => {
    document.getElementById('mee').innerHTML = "<p>あなた：" + meehandw + "</p>";
  }
  const funcyou = () => {
    document.getElementById('you').innerHTML = "<p>あいて：" + youhandw + "</p>"
  }
  funcgame();
  funcmee();
  funcyou();

  
}, false);
//clickEvent