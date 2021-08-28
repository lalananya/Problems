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
    height(current){
        if(current === null) return 0;
        else{
            let leftHeight = 0;
            let rightHeight = 0;
            if(current.left !== null){
                leftHeight = this.height(current.left);
            }
            else if(current.right !== null){
                rightHeight = this.height(current.right);
            }

            return (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1;
        }
    }
}

(function run(){
    var bstObj = new BinarySearchTree();
    bstObj.insert(50);
    bstObj.insert(40);
    bstObj.insert(60);
    //bstObj.insert(80);
    //bstObj.insert(30);
    console.log(bstObj);
    console.log(bstObj.height(bstObj.root));
})();


