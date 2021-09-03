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
    heightOfNode(current){
        /* Will print the height of each node */
        if(current === null) return ;
        else {
            /* max(height of left subtree, height of right subtree) + 1 */
            /* we need to traverse the tree, calculate the height of each node thus, we are going to use PreOrder - Root Left Right */
            //current.data + 
        }
    }
    
}

(function run(){
    var avl = new AVLTree();
    avl.insert(50);
    avl.insert(40);
    avl.insert(60);
    avl.insert(80);
    avl.insert(30);
    avl.heightOfNode(avl.root);
})();


