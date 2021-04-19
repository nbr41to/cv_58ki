function janken () {
  /* 変数定義 ************************/
  // ジャンケンの手の番号を設定
  var GU    = document.getElementById('gu')
  var CHOKI = document.getElementById('chi')
  var PA    = document.getElementById('pa')
  
  /* 関数定義 ************************/  
  // コンピュータの手を決める
  const comHand = [GU, CHOKI, PA]
  const handNo = Math.floor(Math.random() * comHand.length)
  const com = comHand[handNo]

  // 手の名前を取得
  function getHandName(num) {
    switch (num) {
      case GU:
      return '✊';
      case CHOKI:
      return '✌️';
      case PA:
      return '✋';
    }
  }

  // 結果の判定
  function getResult(com, hum) {
    if (com === hum) {
      return '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      return '勝ちました。';
    } else {
      return '負けました。';
    }
  }

  // リロードボタンの作成
  // const reload =document.querySelectorAll('.reload');
  const reload =document.getElementById('reload');
  reload.addEventListener('click',() => {
    window.location.reload();
  });

  // 最終的な結果のメッセージ
  function getResultMsg(com, hum) {
    return getResult(com, hum) + '\nあなたは「' + getHandName(hum) + '」を出しました。\n' + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
  }

  /* 実行する処理 ************************/
  // var hum = getHumHand()
  let yourHand = document.getElementsByClassName('hand');
  let hum = yourHand
    
  for (let i = 0; i < yourHand.length; i++) {
    hum[i].addEventListener('click', () => {
      hum = yourHand[i]
      const result = document.getElementById('result')
      const resultMsg = document.createElement('p')
      resultMsg.textContent = getResultMsg(com, hum)
      result.appendChild(resultMsg)
      resultMsg.scrollIntoView({block:"start"})
    })
  }
}
janken();
