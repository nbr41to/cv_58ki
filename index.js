document.getElementById("hand").style.visibility = "hidden";

function start() {
  const hand = document.getElementById("hand");
  if (hand.style.visibility == "visible") {
    // hiddenで非表示
    hand.style.visibility = "hidden";
    document.querySelector(".btn_start").innerHTML = "Start";
    document.getElementById("result").innerHTML = "";
  } else {
    // visibleで表示
    hand.style.visibility = "visible";
  }
}

function janken(playerSelect) {
  const cpuSelect = Math.floor(Math.random() * 3);
  const hand = ["✊", "✌", "✋"];
  const gu = document.querySelector(".btn_gu");
  const cho = document.querySelector(".btn_cho");
  const pa = document.querySelector(".btn_pa");

  if (playerSelect === 0) {
    gu.setAttribute("disabled", true);
    cho.setAttribute("disabled", true);
    pa.setAttribute("disabled", true);
  }
  if (playerSelect === 1) {
    gu.setAttribute("disabled", true);
    cho.setAttribute("disabled", true);
    pa.setAttribute("disabled", true);
  }
  if (playerSelect === 2) {
    gu.setAttribute("disabled", true);
    cho.setAttribute("disabled", true);
    pa.setAttribute("disabled", true);
  }

  if (playerSelect === cpuSelect) {
    // あいこ
    result = "あいこです。";
  } else {
    // あいこじゃなかったら勝敗を決める
    if (playerSelect === 0) {
      // playerはグー
      if (cpuSelect === 1) {
        // cpuはチョキ
        result = "勝ちました。";
      } else {
        // cpuはパー
        result = "負けました。";
      }
    } else if (playerSelect === 1) {
      // playerはチョキ
      if (cpuSelect === 0) {
        // cpuはグー
        result = "負けました。";
      } else {
        // cpuはパー
        result = "勝ちました。";
      }
    } else {
      // playerはパー
      if (cpuSelect === 0) {
        // cpuはグー
        result = "勝ちました。";
      } else {
        // cpuはチョキ
        result = "負けました。";
      }
    }
  }

  if (result === "負けました。") {
    document.getElementById("result").innerHTML = `
    <p>You Lose…</P>
    <P>あなた：${hand[playerSelect]}</P>
    <P>CPU：${hand[cpuSelect]}</P>`;
  } else if (result === "勝ちました。") {
    document.getElementById("result").innerHTML = `
    <p>You Win!!</P>
    <P>あなた：${hand[playerSelect]}</P>
    <P>CPU：${hand[cpuSelect]}</P>`;
  } else {
    document.getElementById("result").innerHTML = `
    <p>Drow</P>
    <P>あなた：${hand[playerSelect]}</P>
    <P>CPU：${hand[cpuSelect]}</P>`;
  }

  console.log(result);
  document.querySelector(".btn_start").innerHTML = "もう一度やる";
}
