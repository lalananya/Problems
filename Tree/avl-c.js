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
    balanceFactor(current){
        if(current === null) return 0;
        else{
            let leftHeight = 0;
            let rightHeight = 0;
            if(current.left !== null){
                leftHeight = this.balanceFactor(current.left);
            }
            else if(current.right !== null){
                rightHeight = this.balanceFactor(current.right);
            }

            return leftHeight - rightHeight;
        }
    }
}

(function run(){
    var avl = new AVLTree();
    avl.insert(50);
    avl.insert(40);
    avl.insert(60);
    //avl.insert(80);
    //avl.insert(30);
    console.log(avl);
    console.log(avl.balanceFactor(avl.root.left));
})();


