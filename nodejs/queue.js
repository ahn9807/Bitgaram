
class Queue {
    constructor(){
        this.q = [];
    }
    init(){
        this.q = []
    }
    push(val) {
        this.q.push(val)
    }
    pop(){
        if(this.q.length !== 0){
            return this.q.shift();
        }
        return null
    }
    empty(){
        if(this.q.length === 0) return true
        return false
    }
    printQueue(){
        this.q.forEach(val=>{
            console.log(val)
        })
    }
}

exports.Queue = Queue