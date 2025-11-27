---
title: Graph
date: 2025-11-18
category: programming
---
Topics covered
- [[Graph Traversal]]
	- [[Breadth-First Search]]
	- [[Depth-First Search]]
- [[Topological Sort]]
- [[Shortest Path]]
	- [[Dijkstra's Algorithm]]
	- [[Floyd-Warshall Algorithm]]
- [[Minimum Spanning Tree]]
	- [[Prim's Algorithm]]
	- [[Kruskal's Algorithm]]
# What is a graph?!

For starters ill assume you all know a standard tree, ->
![[images.png]]
Now imagine this but crazier and thats a graph, simple.
Every Tree is a graph but not every graph is a tree, a Graph can be
- directed/undirected
- weighted/unweighted
- cyclic/acyclic
- connected/unconnected
- dense/sparse
so its a very broad spectrum compared to trees, this allows for graphs to be the groundwork for a huge number of systems and solutions. Because its such a broad spectrum im including a few pictures to get an understanding of how varied graphs can be 
![[Pasted image 20251118180805.png]] ![[Pasted image 20251118181523.png]]
So yea pretty weird,so how can we actually describe represent something like this?
# Graph Representation
Keep this in mind when reading
- **Adjacent**: Two vertices are said to be **adjacent** if there is an edge connecting them directly.
- **Connected**: A graph is considered **connected** if there is a path between any pair of vertices. Otherwise, it is **unconnected**.*
There are a few different methods for this:
## Vertices with pointers to neighbors
This method is uncommon because each vertex stores actual neighbor objects instead of just indices or IDs. It allows direct access to neighbor data but is more complex and uses more memory.
## List of edges
A list of edges is a 1D array, each element represents an edge, its simple though not fast, its just a worse version of adjacency list to be honest, it allows for similar things but the main drawback is you must traverse the vector to see connections unlike in adjacency list which 
->
## Adjacency List
An adjacency list is similar to a list of edges, but here each vertex explicitly stores a list of its neighbors. For example, if vertex 0 is connected to vertex 2, you can immediately access vertex 2 and its neighbors without scanning the entire edge list. This makes traversal and neighbor access much faster, especially for large graphs. Adjacency lists are particularly efficient for **sparse graphs** (graphs with relatively few edges compared to the number of vertices).
## Adjacency Matrix
This one is like the larger version of AL, this allows for instant checking if an edge exists, as all you have to do is give `matrix[i][j]` and you can see if that edge exists in O(1) time, this is best used when you have a dense graph(half or more of the graph is full or connected) the downside to this is that when you have such a big space your going to have alot of emptiness, so wasted space is a consideration of course. Also if it is an undirected graph the matrix is symetrical with 0s along the diagnal.

Something to think about is that there actually are ways of having an adjacency matrix without the overhead of all the empty space, with sparce matrix representations, but i wont get into that.

# Graph Traversal

## Breadth-First Search
 Starting from one vertex, visit all immediately available vertices and then there available vertices and so on until you have your path.
 The good thing about this method is you can check every possibility and if the graph is relatively small it can be very quick, however the downside is as the graph increases in size, you have to search layers and layers just to find your one path

## Depth-First Search
Starting from one vertex, visit one whole path down, then return the path when its the path you need, otherwise check the next path all the way down. The Good thing about this method is, if you have deep paths you can get lucky by it being an early path that is checked, the downside is if you have many adjacent vertices at the beginning, and your best path is toward the end of the graph(farthest right in a tree as an example) then you would have to check the entire tree all the way down until the end.

# Topological Sort
This is a method of taking an acyclic directed graph and writing it in a simple linear ordering.
For example
![[Pasted image 20251119100833.png]]
Here we are given a cyclical directed graph, we also see that 0 has nothing pointing to it and neither does 3, this means they will appear first in the Topological sort(its up to you which you write first, i put 0 since its smaller then 3) so we would write (0,3...) then next we see what node has the next lowest amount of edges incoming, we see 1 has 1, and 4 has 1, so we add these.
(0,3,1,4...) now lastly we see 2 has 2 edges incoming so we add it last, (0,3,1,4,2). And that's it! its really simple so i figured i should include it just so you have a nice way to write graphs and sort them going forward.

# Minimum Spanning Tree
A Minimum Spanning Tree is all about taking a connected undirected graph and deciding what is the cheapest way to connect all nodes but not all edges. As an example, imagine your constructing a small road to connect different houses and you only have 1000 pounds on concrete, you would want to reach each house of house of course but there is a more materially efficient way to do it, the method of finding this pathing is Minimum Spanning Tree. And there are mainly 2 different ways of doing it.
## Prims Algorithm
This algorithm is greedy and vertex based, it uses a priority queue. Best for dense graphs.
The steps go like this
	1. Create an empty MST
	2. Initialize Priority queue with all vertices and their weights
	3. Start with an vertex 
	4. Mark the current vertex as visited
	5. While the priority queue is not empty 
		1. Deque the vertex with the smallest weight from the priority queue
		2. If said vertex is not apart of the MST add it,
		3. Then update the vertex neighbors weights in the priority queue.
	6. Repeat until completed
Honestly this one is really self explanatory the hardest part is probably updating the neighbors.

## Kruskal's Algorithm
This algorithm is also a greedy algorithm it is edge based though, and it uses a disjoint set and a sorted edge list. Best for sparse graphs.
The steps go like this
	1. Create an empty MST
	2. Sort all edges in the graph in ascending order by weight
	3. Initialize a Disjoint-set data structure to keep track of connected components
	4. For each edge in sorted order
		1. If adding the edge to the MST does not make a cycle, add it.
	5. Repeat until the MST has (n-1) edges, where n is the number of vertices in the graph

# Shortest Path Algorithms
Unlike the Minimum Spanning Tree, the shortest path algorithms tell us the shortest path, as opposed to the cheapest path, to visit all nodes. This as you can imagine is wildly useful in everything we do. GPS is the most evident example, giving us the literal shortest path to get places. For this we are mainly given 2 options.
## Dijkstra's Algorithm
This is a Single source, which means it is used to find the distance from a single vertex to all other vertex.

## Floyd-Warshall Algorithm
This one is more specific and give you the shortest path between a pair of vertices instead of trying to reach each vertices.