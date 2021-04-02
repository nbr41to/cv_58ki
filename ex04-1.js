'use strict'

function cointoss() {
  const num = Math.random(); // numは0.0〜1.0のランダムな数値

  // ①ここを埋める
  if (num < 0.55 ) {
    console.log('表');
  } else {
    console.log('裏');
  }
}
  
for (let i = 0; i < 10; i++) {
  cointoss();
}