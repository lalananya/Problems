/* Print Cousins of a binary tree */

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

    printCousins(current){ // works needs optimization
        if(current === null) return 'No cousins';
        else{
            if(current.left !== null && current.right !== null){
                let parentLeft = current.left;
                let parentRight = current.right;
                if(parentLeft.left !== null && parentRight.left !== null){
                    console.log(`Cousins ${parentLeft.left.data},${parentRight.left.data}`)
                }
                if(parentLeft.left !== null && parentRight.right !== null){
                    console.log(`Cousins ${parentLeft.left.data},${parentRight.right.data}`)
                }
                if(parentLeft.right !== null && parentRight.left !== null){
                    console.log(`Cousins ${parentLeft.right.data},${parentRight.left.data}`)
                }
                if(parentLeft.right !== null && parentRight.right !== null){
                    console.log(`Cousins ${parentLeft.right.data},${parentRight.right.data}`)
                }

                this.printCousins(current.left);
                this.printCousins(current.right);
            }
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
    bst.printCousins(bst.root);

})();


