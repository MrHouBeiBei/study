let aname:string = '小王'

console.log(aname)

let introduce:string = `he name is ${aname}`

console.log(introduce)


// 数组
let arr1:number[] = [1,2]
let arr2:string[] = ['a','b']
let arr3:Array<number> = [1,2,2]
console.log(arr1)
console.log(arr2)
console.log(arr3)

let x:[number,string] ;
x = [1,'abc']
console.log(x)

console.log(x[1].substr(1))

x[2] = 'world'
console.log(x)

// 枚举
enum color1{pink,green,blue}
console.log(color1)

let c:color1 = color1.pink
console.log(c)

enum color2{pink=1,green=4,blue}
let c2:color2 = color2.pink
let c3:color2 = color2.green
console.log(c2)
console.log(c3)

let colorName:string = color2[4]
console.log(colorName)

// 任意值
let notSure:any = 666;
notSure = 'aTest'
console.log(notSure)
notSure = true
console.log(notSure)

notSure = 0.2
console.log(notSure.toFixed())

let aNumber:any = 0.6;
console.log(aNumber.toFixed())

let aObj:Object = 5.1;
console.log(aObj.toFixed())
