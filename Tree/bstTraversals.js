class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root === null) this.root = newNode;
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(current,newNode){
       if(newNode.data < current.data){
           if(current.left === null) current.left = newNode;
           else this.insertNode(current.left,newNode);
       }
       if(newNode.data > current.data){
        if(current.right === null) current.right = newNode;
        else this.insertNode(current.right,newNode);
       }
    }
    inOrder(current){
        /* Left Root Right */
        if(current !== null){
            this.inOrder(current.left);
            console.log(current.data);
            this.inOrder(current.right);
        }
    }
    postOrder(current){
        /* Left Right Root */
        if(current !== null){
            this.postOrder(current.left);
            this.postOrder(current.right);
            console.log(current.data);
        }
    }
    preOrder(current){
        /* Root Left Right */
        if(current !== null){
            console.log(current.data);
            this.preOrder(current.left);
            this.preOrder(current.right);
        }
    }
}

(function run(){
    var bstObj = new BinarySearchTree();
    bstObj.insert(50);
    bstObj.insert(40);
    bstObj.insert(60);
    bstObj.insert(55);
    bstObj.insert(80);
    bstObj.insert(45);
    bstObj.insert(30);
    bstObj.insert(20);
    console.log(bstObj);
    //bstObj.inOrder(bstObj.root);
    //bstObj.preOrder(bstObj.root);
    bstObj.postOrder(bstObj.root);
})();


