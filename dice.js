const students = [
  // '吉村',
  // '天辰',
  '成田',
  '加藤',
  '上内',
];
let dice = Math.floor(Math.random() * students.length);

const taget = document.getElementById('target');
taget.textContent = `${students[dice]}さん`;

const redice = () => {
  dice = Math.floor(Math.random() * students.length);
  taget.textContent = `${students[dice]}さん`;
};

// document.getElementById('id').innerHTML;
// document.getElementsByClassName('class')[0];
// document.getElementsByTagName('h1')[0];

// document.querySelector('h1').textContent = 'dadadada';
// document.querySelectorAll('h1')[0];

// document.createElement()

//   .addEventListener()
//   .appendChild();

// const items = [
//   '',
//   { name: { label: ['abc', 'dadada', 'dadada'] } }
// ];

// items[1].name.label[0];

// console.log(document.getElementById('id'));

