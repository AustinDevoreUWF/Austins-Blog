---

title: "Trees Review"

date: "2025-10-29"

image: ""

category: "programming"

---

# Tree Data Structures
A tree is a connected and acyclic graph -Focus on connectivity and acyclicity
Acyclic: It has no cycles
LABLES:
Depth is a node property: How far from the root
Level 0 is always level 0 height and thats it
level is height multiple nodes can exist at each level these are siblings
Each subtree has its own root
Degree of a node is its number of children

### Applications:
File Systems(Directory, sub and file)
Decision making(decision tree)
indexing(binary search tree, B tree)
parsing tree
heap(complete binary tree)
blockchain(merkle tree)
search-based ai(game tree)
### Operations:
Search
Insertion
Deletion
Traversal
	breadth first traversal
	Depth first traversal
		pre/post order traversal
Height
Degree

### Implementation variations
First node, next sibling Looks like:
![[Pasted image 20250908111943.png]]
Binary Tree:
	Perfect BT:
	Complete BT: HEAP used for filling in spots
	Full BT: Hofman code uses greedy alg to create hofman code, must have no children or 2 children
Obv usefull for deep learning with decision trees

Spliting nodes?

## Binary Search Trees
### Definition: 
	A binary search tree is a binary tree in which for every node its left child has a smaller or equal key then itself while its right child has a greater or equal key then itself

### Behaviors:
Insertion: Big theta N
Deletion: Big theta N
Search: Big theta log N (log2baseN)
Traversal: s
	In order traversal: left subtree, root, right subtree : Ascending order output
More complex DS but better performance
Ideal height is logn(+1 ish)
### Implementation:
Algorithms that happen from top to bottom
	easy to implement either iterativly or recursivly:
	Search
	Insert
Algorithms that happens from bottom to top
	Easy to implement recursively hard to implement iteratively(Must use stack)
	subtree removal(may be used in the destruction of a tree)
	find min node or find max node(part of remove)
	in order traversal
	pre order traversal
Search
	If equal, found
	if smaller, search left subtree
	if greater, search right subtree
Insertion
	if equal do nothing
	if smaller, insert to the left subtree
		if left is empty insert
	if greater, insert to the right subtree
		if right is empty insert
Removal
	remove leaf node: simply remove it
	remove node with one child:replace the node with its child
	remove node with two children
		find the min node in the right subtree(successor)
		replace the node to be removed with the min node
		remove the min node(min node has at most one child)
### Drawbacks:
Algorith Efficiency depends on the average height of the BST
BST may degrade a very unbalanced from or even to a linked list
Solution 1: Randomize the order of insertion
Solution 2: Add balancing mechanism
	self-balancing
	external balancing
Solution 3: Move the most recently accessed node toward the root
	Only omptimize the search performance for a speific access pattern
	No guarantee for the worst case
	Splay tree

### Application:
Indexing: Store a set of references to records in a BST and use the key as the search key
Tree Sort: Sort a sequence of elements by building a BST and then traversing it in-order
==Tree Map: Store a set of (Key, Value) pairs in a BST and use the key as the search key==
Tree Set: Store a set of elements in a BST and use the element as the search Key.

## Self Balancing Trees
Most operations on a binary search tree (BST) take time directly proportional to the height of the tree, so it is desirable to keep the height small
Its Actually better to ues these types of Self ordering tree and NOT a perfect TREE because the perfect tree could involve GLOBAL changes instead of the normal AVL LOCAL changes, this is why we have the LEWAY of -1 -> +1 and not perfection. PERFECTION would be a Perfect balancing tree, which is to complex and space heavy to be viable, so we find that the AVL is a much better and more usefull Data structure.
### Overview:
Defenition: A self-balancing Tree is a type of tree data structure in which the balance or height of the tree is automatically adjusted during insertions and deletions to ensure that the tree remains reasonably balanced.
Motivation: to overcome the potential performance issues that can occur in trees due to unbalanced structures.
Alternative approach: External balancing on general trees

### Variations:
#### BST Family
AVL Tree
Red-black tree

#### B-Tree Family
B-Tree
B+ Tree
B* Tree

## AVL Trees

The height is logn

Note: For AVL Adjustments, check the root, you need to check upwards until you hit the root.