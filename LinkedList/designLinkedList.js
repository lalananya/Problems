class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class MyLinkedList{
    constructor(){
        this.root = null;
        this.count = 0;
    }

    updateListCount(){
        this.count++;
    }
    createNode(data){
        return new Node(data);
    }
    insertNodeAtLast(data){
        let newNode = createNode(data);
        if(this.root === null) this.root = newNode;
        else{
            let current = this.root;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        updateListCount();
    }

    insertNodeAfterPos(data,index){
        let newNode = createNode(data);
        if(this.root === null) this.root = newNode;
        else{
            let current = this.root;
            let count = 0;
            while(count !== index){
                current = current.next;
                count++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        updateListCount();
    }

    insertAtHead(data){
        let newNode = this.createNode(data);
        newNode.next = this.root;
        this.root = newNode;
    }

    // reverseList(){
    //     let current = this.root;
    //     let nextNode = null;
    //     let prevNode = null;
    //     if(current === null) throw new Error('Can\'t reverse empty Linked list');
    //     else{
    //         this.root = current.next;
    //         current.next = prevNode;

    //     }
    // }
}