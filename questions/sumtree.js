/* given a tree and given the nodes we have to update the value of the node to the sum of all the nodes of left and the right subtree */
/* select which order you can use */

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
    sumtree(current){
        if(current === null) return 0;

        let left = this.sumtree(current.left);
        let right = this.sumtree(current.right);
        let old = current.data;
        current.data = left + right;
        
        return current.data + old;
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
    //bst.sumtree(bst.root,0);
    bst.sumtree(bst.root);
    console.log(bst);
    bst.preOrder(bst.root);
})();


