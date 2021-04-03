const students = [
  '吉村',
  '天辰',
  '成田',
  '加藤',
  // '上内',
];
let dice = Math.floor(Math.random() * students.length);

const taget = document.getElementById('target');
taget.textContent = `${students[dice]}さん`;

const redice = () => {
  dice = Math.floor(Math.random() * students.length);
  taget.textContent = `${students[dice]}さん`;
};
