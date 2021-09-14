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
        this.insertType = '';
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
            this.insertType += '';
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(current,newNode){
       if(newNode.data < current.data){
           if(current.left === null) {
            current.left = newNode;
            this.insertType += 'L';
           }
           else this.insertNode(current.left,newNode);
       }
       if(newNode.data > current.data){
        if(current.right === null) {
            current.right = newNode;
            this.insertType += 'R';
        }
        else this.insertNode(current.right,newNode);
       }
    }
    heightofNode(current){
        if(current === null) return -1;
        let leftTree = this.heightofNode(current.left) + 1;
        let righTree = this.heightofNode(current.right) + 1;
        return Math.max(leftTree,righTree);
    }

    balanceFactor(current){
        if(current === null) return -1;
        let leftTree = this.heightofNode(current.left) + 1;
        let righTree = this.heightofNode(current.right) + 1;
        return ( leftTree - righTree < -1 || leftTree - righTree > 1) ? current : null ;
    }

    performLLRotation(current){
        let temp = current;
        this.root = current.left;
        this.root.right = temp;
    }

    performRRRotation(current){
        let temp = current;
        this.root = current.right;
        this.root.left = temp;
    }

    performLRRotation(current){
        let temp = current.left;
        current.left = temp.right;
        current.left.left = temp;
        this.performLLRotation(current);
    }

    performRLRotation(current){
        let temp = current.right;
        current.right = temp.left;
        current.right.right = temp;
        this.performRRRotation(current);
    }
    
}

(function run(){
    var avl = new AVLTree();
    //var arr = [50,40,60,55,80,90,30];
    var arr = [50,60,55];
    for(let i=0; i<arr.length; i++){
        avl.insert(arr[i]);
        let imbalancedNode = avl.balanceFactor(avl.root);
        if(imbalancedNode !== null){
            if(avl.insertType === 'LL'){
                avl.performLLRotation(imbalancedNode);
                console.log(avl);
            }
            if(avl.insertType === 'RR'){
                avl.performRRRotation(imbalancedNode);
                console.log(avl);
            }
            if(avl.insertType === 'LR'){
                avl.performLRRotation(imbalancedNode);
                console.log(avl);
            }
            if(avl.insertType === 'RL'){
                avl.performRLRotation(imbalancedNode);
                console.log(avl);
            }
        }
    }
})();

/* Needs more logic and improvement overall */


