const hands = ["gu", "cho", "pa"];

let selectHand;
let enemyHand;

/* じゃんけんが始まる */
const start = () => {
  startRoulette(); // ルーレットの開始

  /* selectButtonsのイベントのセットと表示 */
  setSelectButtons();
  document.getElementById("selectButtons").style.display = "flex";

  /* resetボタンへの切り替え */
  const startButton = document.getElementById("startButton");
  startButton.textContent = "RETRY?";
  startButton.setAttribute("disabled", true);
  startButton.addEventListener("click", reset);
  startButton.removeEventListener("click", start);
};

/* もう一度遊ぶための準備 */
const reset = () => {
  /* selectButonをもう一度押せるように */
  const selectButtons = document.querySelectorAll(".selectButton");
  document.getElementById("startButton").setAttribute("disabled", true);
  for (const selectButton of selectButtons) {
    selectButton.removeAttribute("disabled");
    selectButton.classList.remove("selected");
  }

  document.getElementById("resultText").textContent = "じゃんけん？"; // resultTextを戻す

  startRoulette(); // ルーレットの再開
};
/* ボタンに関数をセット */
const setSelectButtons = () => {
  const selectButtons = document.querySelectorAll(".selectButton");
  for (const selectButton of selectButtons) {
    selectButton.addEventListener("click", function () {
      selectHand = this.dataset.hand;
      this.classList.add("selected");
      const selectButtons = document.querySelectorAll(".selectButton");
      for (const selectButton of selectButtons) {
        selectButton.setAttribute("disabled", true);
      }
      document.getElementById("startButton").removeAttribute("disabled");

      endRoulette(); // ルーレットを止める
      judge();
    });
    selectButton.classList.remove("selected");
  }
};

/* 勝敗を決めて表示 */
const judge = () => {
  document.getElementById("resultText").textContent = judgeResultText(selectHand, enemyHand);
};
/* 勝敗結果のテキストを決める */
const judgeResultText = (selectHand, enemyHand) => {
  if (selectHand === enemyHand) {
    return (resultText.textContent = "あいこ");
  }
  switch (selectHand) {
    case "gu":
      if (enemyHand == "cho") return "WIN!!";
      if (enemyHand == "pa") return "LOSE...";
      break;
    case "cho":
      if (enemyHand == "pa") return "WIN!!";
      if (enemyHand == "gu") return "LOSE...";
      break;
    case "pa":
      if (enemyHand == "gu") return "WIN!!";
      if (enemyHand == "cho") return "LOSE...";
      break;
    default:
      return alert("エラーです");
  }
};

/* ルーレット一回分 */
const enemyHundRoulette = () => {
  const currentImagePath = document.getElementById("enemyHand").getElementsByTagName("img")[0].getAttribute("src");
  let newImagePath = "";
  do {
    const dice = Math.floor(Math.random() * 3);
    enemyHand = hands[dice];
    newImagePath = `./img/${hands[dice]}.png`;
  } while (currentImagePath === newImagePath);
  document.getElementById("enemyHand").getElementsByTagName("img")[0].setAttribute("src", newImagePath);
};
/* ルーレットの開始 */
const startRoulette = () => {
  roulette = setInterval(() => {
    enemyHundRoulette();
  }, 300);
};
/* ルーレットの終了 */
const endRoulette = () => {
  clearInterval(roulette);
};

/* STARTボタンにイベントを追加 */
document.getElementById("startButton").addEventListener("click", start);
