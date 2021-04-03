//課題5-2

const json =
[
    {"total":1,},
    {items:["Item",   ,]},
    {"id":456,}
]


const obj =JSON.parse(json)
console.log(obj.total)//=>2
console.log(obj.items[0].name)//=>Item 123
console.log(obj.items[0].id)//=>Item 456
console.log(obj.items[1].name)//=>456
console.log(obj.items[1].id)//=>456
console.log(obj.next.id)//=>789
