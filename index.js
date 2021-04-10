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

const yourHand = window.prompt('0~2の数字を入力してください');

if (yourHand % 3 === 0) {
  console.log('勝ちました');
} else if (yourHand % 3 === 1) {
  console.log('負けました');
} else if (yourHand % 3 === 2) {
  console.log('あいこです.');
} else {
  console.log('あなたとはじゃんけんしません');
}

















