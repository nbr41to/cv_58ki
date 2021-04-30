document.getElementById("hand").style.visibility = "hidden";

const hands = ["gu", "cho", "pa"];
const startButton = document.getElementById("btn_start");
const result = document.getElementById("result");

// ゲームスタート
const start = () => {
  const hand = document.getElementById("hand");
  if (hand.style.visibility == "visible") {
    // hiddenで非表示
    hand.style.visibility = "hidden";
    document.querySelector(".btn_start").innerHTML = "START";
    // document.getElementById("result").innerHTML = "";
  } else {
    // visibleで表示
    hand.style.visibility = "visible";
  }

  /* resetボタンへの切り替え */
  startButton.textContent = "RETRY?";
  startButton.setAttribute("disabled", true);
  startButton.addEventListener("click", reset);
  startButton.removeEventListener("click", start);
};

// スタートボタンを押したときにスタート関数
startButton.addEventListener("click", start);

// リセット処理
const reset = () => {
  /* selectButonをもう一度押せるように */
  startButton.setAttribute("disabled", true);
  for (const hand_btn of hand) {
    hand_btn.removeAttribute("disabled");
    hand_btn.classList.remove("selected");
  }

  result.textContent = "じゃんけん？"; // resultTextを戻す

  startRoulette(); // ルーレットの再開
};

/* ボタンに関数をセット */
const sethand = () => {
  const hand = document.querySelectorAll(".hand_btn");
  for (const hand_btn of hand) {
    hand_btn.addEventListener("click", function () {
      selectHand = this.dataset.hand;
      this.classList.add("selected");
      const hand = document.querySelectorAll(".hand_btn");
      for (const hand_btn of hand) {
        hand_btn.setAttribute("disabled", true);
      }
      document.getElementById("startButton").removeAttribute("disabled");

      endRoulette(); // ルーレットを止める
      judge();
    });
    hand_btn.classList.remove("selected");
  }
};

/* 勝敗を決めて表示 */
const judge = () => {
  result.textContent = ResultText(playerHand, cpuHand);
};

const ResultText = (playerHand, cpuHand) => {
  if (playerHand === cpuHand) {
    // あいこ
    result.textContent = "あいこです。";
  } else {
    // あいこじゃなかったら勝敗を決める
    if (playerHand === 0) {
      // playerはグー
      if (cpuHand === 1) {
        // cpuはチョキ
        result.textContent = "勝ちました。";
      } else {
        // cpuはパー
        result.textContent = "負けました。";
      }
    } else if (playerHand === 1) {
      // playerはチョキ
      if (cpuHand === 0) {
        // cpuはグー
        result.textContent = "負けました。";
      } else {
        // cpuはパー
        result.textContent = "勝ちました。";
      }
    } else {
      // playerはパー
      if (cpuHand === 0) {
        // cpuはグー
        result.textContent = "勝ちました。";
      } else {
        // cpuはチョキ
        result.textContent = "負けました。";
      }
    }
  }
};

// function janken(playerHand) {
//   const cpuHand = Math.floor(Math.random() * 3);
//   const gu = document.querySelector(".btn_gu");
//   const cho = document.querySelector(".btn_cho");
//   const pa = document.querySelector(".btn_pa");

//   if (playerHand === 0) {
//     gu.setAttribute("disabled", true);
//     cho.setAttribute("disabled", true);
//     pa.setAttribute("disabled", true);
//   }
//   if (playerHand === 1) {
//     gu.setAttribute("disabled", true);
//     cho.setAttribute("disabled", true);
//     pa.setAttribute("disabled", true);
//   }
//   if (playerHand === 2) {
//     gu.setAttribute("disabled", true);
//     cho.setAttribute("disabled", true);
//     pa.setAttribute("disabled", true);
//   }
// }

// ルーレット
const cpuHandRoulette = () => {
  const currentImagePath = document.getElementById("cpuHand").getElementsByTagName("img")[0].getAttribute("src");
  let newImagePath = "";
  do {
    const dice = Math.floor(Math.random() * 3);
    cpuHand = hands[dice];
    newImagePath = `./img/${hands[dice]}.png`;
  } while (currentImagePath === newImagePath);
  document.getElementById("cpuHand").getElementsByTagName("img")[0].setAttribute("src", newImagePath);
};

const startRoulette = () => {
  roulette = setInterval(() => {
    cpuHandRoulette();
  }, 300);
};

const endRoulette = () => {
  clearInterval(roulette);
};
