// created by Akash Modak
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
class singly{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertfirst(data){
        this.head=new Node(data,this.head);
        this.size++;
    }
    insertlast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head=node;
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const li= new singly();
li.insertfirst(10);
li.insertfirst(20);
li.insertfirst(30);
li.insertfirst(40);
li.insertlast(50);

li.print();
