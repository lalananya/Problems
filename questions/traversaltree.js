/* given a tree traverse it in different orders*/

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

    preOrder(current){ /* it is magic ! when left ends, it checks root, then root's right , and when null again backtrace */
        if(current !== null){
            console.log(current.data);
            this.preOrder(current.left);
            this.preOrder(current.right);
        }
    }
    postOrder(current){ /* it is magic ! when left ends, it checks root, then root's right , and when null again backtrace */
        if(current !== null){
            this.preOrder(current.left);
            console.log(current.data);
            this.preOrder(current.right);
        }
    }
    inOrder(current){ /* it is magic ! when left ends, it checks root, then root's right , and when null again backtrace */
        if(current !== null){
            this.preOrder(current.left);
            this.preOrder(current.right);
            console.log(current.data);
        }
    }
}

(function run(){
    var bst = new BinarySearchTree();
    bst.insert(50);
    bst.insert(40);
    bst.insert(45);
    bst.insert(60);
    bst.insert(55);
    bst.insert(80);
    bst.insert(30);
    bst.insert(20);
    bst.insert(32);
    bst.insert(43);
    bst.insert(47);
    bst.preOrder(bst.root);
})();


