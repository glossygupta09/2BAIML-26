class hello{
    constructor() {
        console.log("hello contructor");
    }
}
class Hi extends hello
{
    constructor(){
        super()
        console.log("hii consructor")
    }
}
let n1 = new Hi()
