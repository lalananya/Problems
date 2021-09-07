class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class AVLTree{
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
    heightofNode(current){
        if(current === null) return -1;
        let leftTree = this.heightofNode(current.left) + 1;
        let righTree = this.heightofNode(current.right) + 1;
        console.log(`${current}, ${Math.max(leftTree,righTree)}`);
        return Math.max(leftTree,righTree);
    }
    
}

(function run(){
    var avl = new AVLTree();
    avl.insert(50);
    avl.insert(40);
    avl.insert(60);
    avl.insert(55);
    avl.insert(80);
    avl.insert(90);
    avl.insert(30);
    console.log(avl.heightofNode(avl.root));
})();


