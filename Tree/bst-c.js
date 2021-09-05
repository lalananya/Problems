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
    searchValue(current,value){
        if(current === null || (value < current.data && current.left === null) || (value > current.data && current.right === null) ) return "Not Found";
        if(current !== null && current.data === value){
            return 'Found';
        }
        else{
            if(value < current.data) return this.searchValue(current.left,value);
            return this.searchValue(current.right,value)
        }
    }

    printSort(current){
        if(current !== null){
            this.printSort(current.left);
            console.log(current.data);
            this.printSort(current.right);
        }
    }

    delete(current,value){
        if(current === null) {
            return 'Empty Tree';
        }
        else{
            if(value < current.left.data) {
                this.delete(current.left,value);
            }
            if(value > current.right.data) {
                this.delete(current.right,value);
            }
            if(value === current.left.data){
                let tempR = current.left.right;
                let tempL = current.left.left;
                current.left = tempR;

                while(current.left !== null){
                    current = current.left;
                }
                current.left = tempL;
                return;

            }
            if(value === current.right.data){
                let tempR = current.right.right;
                let tempL = current.right.left;
                current.right = tempL;

                while(current.right !== null){
                    current = current.right;
                }
                current.right = tempR;
                return;
            }
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
    console.log(bstObj.searchValue(bstObj.root,65));
    bstObj.printSort(bstObj.root);
    bstObj.delete(bstObj.root,40);
    console.log(bstObj);
})();


