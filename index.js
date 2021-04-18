let timeoutId = undefined;
let meehand = '';
let youhandw = '';
//スタート

const you = document.getElementById('you');
const youhand = document.createElement('img');
youhand.src = 'img/janken_gu.png';
you.appendChild(youhand);

const startbtn = document.getElementById('btn');
const img_elementgu = document.createElement('img');
img_elementgu.src= 'img/janken_gu.png';
img_elementgu.id = "gu";
img_elementgu.width = 200;
img_elementgu.height = 200;
startbtn.appendChild(img_elementgu);
const img_elementchoki = document.createElement('img');
img_elementchoki.src= 'img/janken_choki.png';
img_elementchoki.id ="choki";
img_elementchoki.width = 200;
img_elementchoki.height = 200;
startbtn.appendChild(img_elementchoki);
const img_elementpa = document.createElement('img');
img_elementpa.src= 'img/janken_pa.png';
img_elementpa.id="pa";
img_elementpa.width = 200;
img_elementpa.height = 200;
startbtn.appendChild(img_elementpa);

startbtn.style.display = "none";
you.style.display = "none";

const start = document.getElementById('start');
start.addEventListener('click', () => {
  if (start.classList.contains('inactive')) {
    return;
  }
  start.classList.add('inactive');
  timeoutId = setInterval(roulette, 300);
  startbtn.style.display = "flex";
  you.style.display = "flex";

});

function roulette () {
  const images = [
    {key: 'gu', src: 'img/janken_gu.png'},
    {key: 'choki', src: 'img/janken_choki.png'},
    {key: 'pa', src: 'img/janken_pa.png'},
  ];
  let i = Math.floor(Math.random() * images.length);
  youhand.src = images[i].src;
  youhandw = images[i].key;
}
function spin () {
  roulette ();
  timeoutId = setTimeout(() => {
    spin();
  }, 300);
}

function roulettestop () {
  clearTimeout(timeoutId);
}
//スタート

// //clickEvent
const gu = document.getElementById('gu');
const choki = document.getElementById('choki');
const pa = document.getElementById('pa');
gu.addEventListener('click', function () {
  if (gu.classList.contains('inactive')) {
    return;
  }
  meehand = 'gu';
  gu.classList.add('choice', 'inactive');
  choki.classList.add('unchoice', 'inactive');
  pa.classList.add('unchoice', 'inactive');
  roulettestop();
  judge();
  replay();
}, false);
choki.addEventListener('click', function () {
  if (choki.classList.contains('inactive')) {
    return;
  }
  meehand = 'choki';
  choki.classList.add('choice', 'inactive');
  gu.classList.add('unchoice', 'inactive');
  pa.classList.add('unchoice', 'inactive');
  roulettestop();
  judge();
  replay();
}, false);
pa.addEventListener('click', function () {
  if (pa.classList.contains('inactive')) {
    return;
  }
  meehand = 'pa';
  pa.classList.add('choice', 'inactive')
  choki.classList.add('unchoice', 'inactive');
  gu.classList.add('unchoice', 'inactive');
  roulettestop();
  judge();
  replay();
}, false);
//clickEvnet

//勝敗
function judge () {
  let issue = 'You Win!';
  if ((meehand === 'gu' && youhandw === 'gu') || (meehand === 'choki' && youhandw === 'choki') || (meehand === 'pa' && youhandw === 'pa')) {
    issue = 'Draw';
  } else if ((meehand === 'gu' && youhandw === 'pa') || (meehand === 'choki' && youhandw === 'gu') || (meehand === 'pa' && youhandw === 'choki')) {
    issue = 'You Lose';
  } else if ((meehand === 'gu' && youhandw === 'choki') || (meehand === 'choki' && youhandw === 'pa') || (meehand === 'pa' && youhandw === 'gu')) {
    issue = 'You Win!';
  } else {
    issue = 'ボタンを押してください';
  }
  document.getElementById('result').style.display = "block";
  document.getElementById('result').innerHTML = "<p>" + issue + "</p>";
}
//勝敗

//replay
function replay () {
  start.classList.remove('inactive');
  start.textContent = 'REPLAY';
  start.addEventListener('click', () => {
    gu.classList.remove('choice', 'unchoice', 'inactive');
    choki.classList.remove('choice', 'unchoice', 'inactive');
    pa.classList.remove('choice', 'unchoice', 'inactive');
    start.textContent = 'START';
    document.getElementById('result').style.display = "none";
  });
}
//replay