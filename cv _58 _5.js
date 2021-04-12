
const yourhand = window.prompt(`0~2の数字を入力してください`)
const num=Math.random()

if (yourhand >= num)　{
    console.log(勝ちました)
} else if (yourhand<= num)　{
    console.log(負けました)
}　else 　 {
    console.log(引き分けです)
}