/*
0: グー
1: チョキ
2: パー

勝ち負けは（プレイヤーが）
0: 負け
1: 勝ち
2: あいこ
*/


// const janken = (player) => {
//   const cpu = Math.floor(random * 3 );
//   if (cpu % 3 === 0) {
//   } else if (cpu % 3 === 1) {
//     console.log('負けました');
//   } else if (cpu % 3 === 2) {
//     console.log('あいこです.');
//   } else {
//     // console.log('あなたとはじゃんけんしません');
//   }

// }

const janken = (playerSelect) => {
  const cpuSelect = Math.floor(Math.random() * 3);
  // console.log(cpuSelect);
  // console.log(playerSelect);

  if (playerSelect === cpuSelect) {    // あいこ
    result = 2;

  } else {
    // あいこじゃなかったら勝敗を決める
    if (playerSelect === 0) {    // playerはグー
      if (cpuSelect === 1) {     // cpuはチョキ
        result = 1;
      } else {                  // cpuはパー
        result = 0;
      }

    } else if (playerSelect === 1) {     // playerはチョキ
      if (cpuSelect === 0) {     // cpuはグー
        result = 0;
      } else {                  // cpuはパー
        result = 1;
      }

    } else {                    // playerはパー
      if (cpuSelect === 0) {     // cpuはグー
        result = 1;
      } else {                  // cpuはチョキ
        result = 0;
      }
    }
  }
  console.log(result);
}

document.getElementById("gu").onclick = janken(0);
document.getElementById("tyo").onclick = janken(1);
document.getElementById("pa").onclick = janken(2);
const hand = ["✊","✌", "✋"];


if (result == 0) {
  document.getElementById('result').innerHTML =`
  <p>まけ</P>
  `;
  // <P>あなた：${hand[playerSelect]}</P>
  // <P>CPU：${hand[cpuSelect]}</P>
} else if (result === 1) {
  document.getElementById('result').innerHTML =`
  <p>かち</P>
  `;
  // <P>あなた：${hand[playerSelect]}</P>
  // <P>CPU：${hand[cpuSelect]}</P>
} else {
  document.getElementById('result').innerHTML =`
  <p>あいこ</P>
  `;
  // <P>あなた：${hand[playerSelect]}</P>
  // <P>CPU：${hand[cpuSelect]}</P>
}
