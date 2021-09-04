class StackNode<T>{
    public data: T;
    public next: StackNode<T>;

    constructor(data: T){
        this.data = data;
    }
}

class Stack<T>{
   
    private top: StackNode<T>;

    pop(){
        if(top == null) throw new Error("EmptyStackException");
        let item: T = this.top.data;
        this.top = this.top.next;
        return item;

    }

    push(item: T){
        let t: StackNode<T> = new StackNode<T>(item);
        t.next = this.top;
        this.top = t;
    }
    peek(){
        if(top == null) throw new Error("EmptyStackException")
        return this.top.data;
    }
    isEmpty(){
        return this.top==null;
    }
}