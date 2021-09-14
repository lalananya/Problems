BINARY SEARCH TREES:

1. When a tree has atmost two children - BST
2. LEFT CHILD of every node is LESS than or equal to the data in the ROOT node, and the RIGHT CHILD of every node is greater than the data in the root node.
3. There are two ways insertion in BST is implemented class-based (./bst-c.js) and function-based (./bst-f.js)
4. We can traverse the tree in three ways InOrder, preOrder, postOrder
   In these orders, we are actually trying to reach a root or a leaf and we are printing the value once we reach either of two.

RECUSRION:
When someone says recursion, think of stack immediately. 

INSERTION & RECURSION:

To understand trees fully, we must understand recursion because trees are recursive data structure.
If every node can only have two children and we want to insert another node , what do we do ? 

- encounters a value that is less than the root node, we travel down to the left child and compare, and then repeat,
- again, we the value is less than the current , we go left else right, till when ?
- untill we encounter a sitaution where we have to go either left or right and there is no child - base case
- that is where we will create a new node and store the value
- using the above steps check './bst-c.js' the recursive method to insert !

SEARCHING & RECURSION:

We again will use recursion for it, and we just visualize in a way how the BST's are arranged, it is actually pretty efficient to search through.

- get the value to be searched,
- compare it with the root, (it is very similar to binary search)
- if the value if less than root we go left else right.
- and then we keep up with this logic until we find the value or we find that there are no child on left or right. (./bst-c.js)
- also suppose if there is only one entry and the value to searched is less than root but there are not left child , we can add this also as a base case , similarly for right.
- It would work if you don't , but we can save on recursion call too (will save on addition to stack)

SORTING & RECURSION:

Given the beautiful nature of BSTs, we can print the binary tree as sorted lists. './bst-c.js'
- we need to first travel down to the most least in a tree recursively,
- as we are travelling down, we keep adding more stacks to our call stack.
- when we get to it and checked whether the left and right is none, we will simple pop() this stack - the current one.
- and will move on to the next layer of the call stack
- Now this process is repeated for each of the subtress of the node
- [left-root-right] is actually known as inOrder Traversals, to get the sorted elements

DELETION & RECURSION:

Buckle Up ! This is the methods which really required some thinking according to one of the artciles I read on medium.
- Giving the value to data as null and actually deleting a data is a two different thing.
- When we delete the node, we are removing it from the memory or just leaving it out there with no links so it could get garbage collected

- We need to delete value from BST, we search that value first,
- check whether it has any children if not then we can delete it fair and square.
- if that node has children then what ?
- base case of deletion recursion would be, when the node has no children
- now we somehow need to manage the left cases

- What I followed ?
 : instead of checking current.data === value, I checked current.left.data === value || current.right.data === value
 : when any of the condition is true, I save two things : left subtree of the node to be deleted and the right subtree of the node to be deleted
 : if the value is at the left, current.left  = right saved subtree, then we'll traverse the right's subtree's left untill null when found we'll save the left saved subtree
 : similary for right !
 : This is because the Binary Search Trees have a pattern


 CALCULATING HEIGHT AND RECURSION

 So whenever, you say recursion you think stack ! './avl-c.js'
 Finally ! after weeks of storming out brain, I did it !

 - Keep visualizing all the function calls and maintain a stack on pen and paper,
 - read the code one by one by calculating the output and voila !
 - calculated the balance factor too

 ROTATION
 - With respect to three nodes, rotation done, need to work on getting the rotation type and then choosing which type of rotation we need

 COMPARISION AVL AND BST
 - We already know that when BST inserts the elements on one side, the search time increases.
 - By balancing it, we can reduce the search time hence AVL
 - Will be using these concepts in runway reservation system later.