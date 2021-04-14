function scoring(score) {
  if (score >= 90) {
    return "秀";
    // console.log('秀')
  } else if (score >= 75) {
    return "優";
    // console.log('優')
  } else if (score >= 60) {
    return "良";
    // console.log('良')
  } else if (score >= 30) {
    return "可";
    // console.log('可')
  } else {
    return "不可";
    // console.log('不可')
  }
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(90)) //=> 秀
console.log(scoring(75)) //=> 優
console.log(scoring(60)) //=> 良
console.log(scoring(30)) //=> 可
console.log(scoring(13)) //=> 不可
