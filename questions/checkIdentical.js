/* Check if two binary trees are identical or not */

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

    compare(tree_one,tree_two,check){
        if(tree_one !== null && tree_two !== null){
            if(check ==="left" && tree_one.data === tree_two.data && this.compare(tree_one.left,tree_two.left,check)){
                return true;
            }
        }
        if(tree_one !== null && tree_two !== null ){
            if(check ==="left" && tree_one.data === tree_two.data && this.compare(tree_one.right,tree_two.right,check)){
                return true;
            }
        }
             // issue here with the last node then what ?
    }
}

(function run(){
    var firstTree = new BinarySearchTree();
    firstTree.insert(50);
    firstTree.insert(40);
    firstTree.insert(60);
    firstTree.insert(80);
    firstTree.insert(30);
    
    var secondTree = new BinarySearchTree();
    secondTree.insert(50);
    secondTree.insert(40);
    secondTree.insert(60);
    secondTree.insert(80);
    secondTree.insert(30);
    //secondTree.insert(55);

    if(firstTree.compare(firstTree.root,secondTree.root,'left') && firstTree.compare(firstTree.root,secondTree.root,'right')){
        console.log('identical');
    }
    else console.log('non identical');


})();


