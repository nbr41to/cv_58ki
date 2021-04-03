// for文 処理を繰り返す

const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  // 繰り返す処理
  console.log(nums[i] * 2);
}

// while文 処理を繰り返す

// let i = 0;

// while (i < 5) {
//   // 繰り返す処理
//   console.log(nums[i] * 2);
//   i++;
// }

// do while

let power = 99;
let i = 0;

do {
  if (power >= 99) {
    console.log('powerは最大です');
  } else {
    power += 1;
    i++;
  }
  power += 1;
  i++;
} while (i < 3);

console.log(power);
