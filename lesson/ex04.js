///////////////////////////
//   ----- 課題4-------　//
///////////////////////////

//課題04-1//

function cointoss() {
    const num = Math.random() // numは0.0〜1.0のランダムな数値
    if (num >= 0.5) {
        console.log('表')
    } else {
        console.log('裏')
    }

}

for (let i = 0; i < 10; i++) {
    cointoss(i)
}

//課題04-2//

function scoring(score) {
    if (score >= 90) {
        return ('秀')
    } else if (score >= 75) {
        return ('優')
    } else if (score >= 60) {
        return ('良')
    } else if (score >= 30) {
        return ('可')
    } else {
        return ('不可')
    }
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可



//課題04-3//

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
    if (score >= 90) {
        return ('秀')
    } else if (score >= 75) {
        return ('優')
    } else if (score >= 60) {
        return ('良')
    } else if (score >= 30) {
        return ('可')
    } else {
        return ('不可')
    }
}

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
scores.forEach((scores) => {
    console.log(scores)
})

//うまく出力出来ませんでした。//