/* 番外編 */

// スプレッド構文

const fruits = ['apple', 'banana', 'cherry'];

const newFruites = ['grape', 'mangoo', ...fruits];

console.log(newFruites);


// 分割代入
const [hoge1, hoge2, hoge3] = fruits;
// const hoge1 = fruits[0]
// const hoge2 = fruits[1]
// const hoge3 = fruits[2]

console.log(hoge2);
