
/**
 * ==============================
 * 04. オブジェクト
 * ==============================
 */

/* オブジェクトを定義 */
// { key1: property1, key2: property2, ... }
const user = { name: "ソーシャルディスタンス", level: 999, hobby: ['programming', 'football'] };
// 名前の付いたの配列のようなもの 順番という概念はない

// 特定の値を呼び出す（ドット記法）
console.log(user.name);

// 変数を使った呼び出し（ブランケット記法）
const key = "level";
console.log(user[key]);
console.log(user['level']); // 直接文字列でも可

// 'programming'を呼び出すには？


// オブジェクトを書き換え
user.name = "のぶこ";

// オブジェクトを追加
user.weight = 100;

console.log(user);

// 実用例
console.log(users.state.age);
const users = [
  {
    id: 123,
    user_name: "あられちゃん",
    email: "aaa@aaa.jp",
    country: "US",
    favorite_food: ["apple", "cherry"],
    state: { age: 123, address: "西日暮里ロサンゼルス" },
  },
  {
    id: 124,
    user_name: "ひょうくん",
    email: "hhh@hhh.co.jp",
    country: "JP",
    favorite_food: ["apple", "banana", "cherry"],
    state: { age: 3, address: "" },
  },
  {
    id: 124,
    user_name: "ゆきさん",
    email: "yyy@yyy.com",
    country: "EU",
    favorite_food: ["cherry"],
    state: {},
  },
];
console.log(users[1].favorite_food[2]);
console.log(users[1].state.age);

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


// // for文 処理を繰り返す

// const nums = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i++) {
//   // 繰り返す処理
//   console.log(nums[i] * 2);
// }

// // while文 処理を繰り返す

// // let i = 0;

// // while (i < 5) {
// //   // 繰り返す処理
// //   console.log(nums[i] * 2);
// //   i++;
// // }

// // do while

// let power = 98;
// let i = 0;

// do {
//   console.log(`今のpower:${power}`);
//   if (power >= 99) {
//     console.log('powerは最大です');
//     i += 3;
//   } else {
//     power += 1;
//     i++;
//   }
// } while (i < 3);

// console.log(power);

// // 関数

// function iii() {

// }

// const aaa = function () {

// };

// // アロー関数
// const uuu = () => {
//   console.log(power);
//   console.log(power);
//   console.log(power);
//   console.log(power);
//   console.log(power);
//   console.log(power);
// };

// // 戻り値
// const stringReturn = () => {
//   if ('aa') {

//     return ("文字だよ");
//   }
// };

// console.log(stringReturn());

// // 引数

// const greet = (name, age) => {
//   console.log(`こんにちは！${name}さん.あなたは${age}歳です`);
// };

// greet(123, 'nobuyuki');

// メソッド
// 関数？を呼び出す

const aaa = 'adadadadada';
const bbb = [1, 2, 3, 4, 5, 6,];

const cards = [
  { suit: '♥', num: 1 },
  { suit: '◆', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
  { suit: '♥', num: 1 },
];

// if (cards[0].num === cards[0].num) {
//   point++;
// }


/* 2021/04/10 */
// オブジェクト指向

// const obj = {
//   method: () => { redice(); },
//   users: {
//     123: { name: 'adadada', age: 123, hobby: ['soccer', 'programming'] },
//     123: { name: 'adadada', age: 123 },
//     123: { name: 'adadada', age: 123 },
//     123: { name: 'adadada', age: 123 },
//   },
//   error: false
// };

// obj.method();

// const aaa = { 100: 'foobar' };
// console.log(aaa['100']);


// 高階関数...コールバック関数

// const add2 = x => x + 2;

// function twice(func, x) {
//   return func(x);
// }

// const result = twice(add2, 10);
// console.log(result); //=> 14


// const items = ['a', 'b', 'c'];

// const func = (item) => { console.log(item); };

// items.map(func);
// const newItems = items.map((item) => {
//   console.log(item);
//   return item + 'です';
// });
// console.log(newItems);

// items.forEach((item) => { console.log(item); });


// window.alert('ara-todayo');
// window.confirm('ara-todayo');
// if (window.confirm('ara-todayo')) {
//   console.log('trueきた');
// } else {
//   console.log('falseきた');
// }

// const yourHand = window.prompt('0~2の数字を入力してください');

// if (yourHand % 3 === 0) {
//   console.log('勝ちました');
// } else if (yourHand % 3 === 1) {
//   console.log('負けました');
// } else if (yourHand % 3 === 2) {
//   console.log('あいこです.');
// } else {
//   console.log('あなたとはじゃんけんしません');
// }

