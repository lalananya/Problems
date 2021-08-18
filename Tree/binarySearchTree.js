function Node(val=0,left=null,right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

function BST(){
    this.root = null;
}
BST.prototype.addChildren = function(val){
    let current = this.root;
    if(current == null){
        current = new Node(val);
        this.root = current;
    }
    else{ // this could be a recursive thing
        while(current!=null){
            if(val === current.val) return;
            if(val < current.val){
                if(current.left === null){
                    current.left = new Node(val);
                }
                current = current.left;
            }
            else {
                if(current.right === null){
                    current.right = new Node(val);
                }
                current = current.right;
            }
        }

    }

};


function constructTree(){
    let bst = new BST();
    bst.addChildren(70);
    bst.addChildren(50);
    bst.addChildren(40);
    bst.addChildren(10);
    bst.addChildren(60);

    bst.printTree();
}
