const stone = document.getElementById("stone");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

const user = document.getElementById("user");
const cpu = document.getElementById("cpu");

const result = document.getElementById("result");

// 以下userの出した結果により場合分け

// i)グーの場合
stone.addEventListener("click", (janken) => {
    let random = Math.floor(Math.random() * 3);
    user.textContent = "グー";
    if ( random === 0 ) {
        result.textContent = "勝ち";
        cpu.textContent = "チョキ";
    } else if ( random === 1 ) {
        result.textContent = "負け";
        cpu.textContent = "パー";
    } else {
        result.textContent = "あいこ";
        cpu.textContent = "グー";
    }
});

// ii)チョキの場合
scissors.addEventListener("click", (janken) => {
    let random = Math.floor(Math.random() * 3);
    user.textContent = "チョキ";
    if ( random === 0 ) {
        result.textContent = "勝ち";
        cpu.textContent = "パー";
    } else if ( random === 1 ) {
        result.textContent = "負け";
        cpu.textContent = "グー";
    } else {
        result.textContent = "あいこ";
        cpu.textContent = "チョキ";
    }
});

// iii)パーの場合
paper.addEventListener("click", (janken) => {
    let random = Math.floor(Math.random() * 3);
    user.textContent = "パー";
    if ( random === 0 ) {
        result.textContent = "勝ち";
        cpu.textContent = "グー";
    } else if ( random === 1 ) {
        result.textContent = "負け";
        cpu.textContent = "チョキ";
    } else {
        result.textContent = "あいこ";
        cpu.textContent = "パー";
    }
});