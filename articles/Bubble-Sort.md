---

title: "Bubble Sort"

date: "2025-10-29"

image: ""

category: "programming"

---
## Intro to Bubble Sort
 Bubble sort is often seen as the simplest Sorting algorithm and the best for beginners to learn. I think this could be true except for insertion sort which i always thought was easier since it doesn't involve nested for loops, something that has always tripped me up. Bubble sort, while being the simplest algorithm has a downside of being quite inefficient and because of this is very rarely used in anything especially anything of serious importance, this doesn't mean it is useless though as with small sized arrays it can be perfectly viable for simple use cases in a project and especially as an intro to how sorting works.
## Visualization:
![Bubble Sort Visualization](/0_nh6F_qERbgD3xmV-.gif)
## Efficiency
As seen in the vizualization bubble sort works in rounds, so in round 1 it will take arr[i] and arr[i+1] and compare them, if arr[i] is larger then arr[i+1] then you implement a swap, after the swap the next round begins.To fully sort the array, this process has to repeat for every element except the last one. That means the first pass makes about _n_ comparisons, the next pass makes _n–1_, and so on. When you add them all up, you get something like _n + (n–1) + (n–2) + ... + 1_, which simplifies to about _n² / 2_. In Big O notation, we drop constants, so bubble sort is said to have **O(n²)** time complexity.
## Code:
	void bubbleSort(vector<int>& arr, int size){
	    int n=size;
	    for(int i=0;i<n-1;i++){
	        for(int j=0;j<n-1-i;j++){
	            if(arr[j+1]<arr[j])swap(arr[j],arr[j+1]);
	        }
	    }
	}
