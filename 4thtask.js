function cointoss() {
  const num = Math.random() // numは0.0〜1.0のランダムな数値

  // ①ここを埋める
  if (num>=0.5) {
    console.log(`表`)
  } else {
    console.log(`裏`)
  }
}

for (let i=0 ; i=10 ; i++) {
    cointoss() //関数を呼び出している。
}