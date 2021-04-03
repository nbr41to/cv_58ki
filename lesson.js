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

