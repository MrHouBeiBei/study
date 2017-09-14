class firstC{
    a:string
    constructor(b:string){
        this.a = b
    }
    fn(){
        return 'hello,'+this.a
    }
}

let re = new firstC("world")

console.log(re.fn())