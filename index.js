// 条件分岐

let score = Math.random() * 100;

if (undefined) {
  score = score * 2;
  console.log('trueだよ');
} else {
  console.log('falseだよ');
  score = score / 2;
}
console.log(score);

// 三項演算子
console.log(score > 50 ? 'おめでとう' : '残念');

// 条件式
true, false; //真偽値

console.log('文字列');
console.log(123);
console.log(true);
console.log(false);
console.log(undefined);
console.log(null);

// switch

const ransu = Math.floor(Math.random() * 3);
console.log(ransu); // 0,1,2

const colors = ['red', 'yellow', 'blue'];
const signal = colors[ransu];
console.log(signal);

// let signal = 'red';
// if (ransu === 0) {
//   signal = 'red';
// } else if (ransu === 1) {
//   signal = 'yellow';
// } else if (ransu === 2) {
//   signal = 'blue';
// }

switch (signal) {
  case 'red':
    console.log('止まりなさい！');
    break;
  case 'yellow':
    console.log('Be careful');
    break;
  case 'blue':
    console.log('進め');
    break;
  default:
    console.log('あなたは何色ですか？');
    break;
}

if (signal === 'red') {
  console.log('止まりなさい！');
} else if (signal === 'yellow') {
  console.log('Be careful');
} else if (signal === 'blue') {
  console.log('進め');
} else {
  console.log('あなたは何色ですか？');
}
