---
title: Dynamic Programming
date: 2025-11-11
image:
category: programming
---
# What is Dynamic Programming?
Dynamic Programming is an algorithmic technique. The goal is to take complex problems, that can be broken down into smaller sub-problems that repeat, and store those solutions. There are 2 ways you can store these solutions, either 1.)Memoization: Top down approach, uses recursion to store results. 2.) Tabulation: Bottom up approach,  iteratively gives answers. Here is how each of these work ->
## What is Memoization?
Memoization, as we said, is recursive. It approaches the problem recursively, and after solving each subproblem, it stores the answer in a table in the same breath. After the first run of it, it will first check if the problem is one that has already been solved, if so it just returns the answer that was already computed and then moves on. It’s a relatively simple and effective way to avoid repeating work.
## What is Tabulation?
Tabulation is a bit more interesting, in my opinion. The goal is the same as memoization, but instead of using recursion, we solve problems iteratively. We start with the simplest problems and use their solutions to tackle more complex ones. This makes the table of stored values more ordered, or more natural.
## When should i use which?
Memoization is better used when there is a clear recursive approach, and it can also be more intuitive because of its more clear use cases. Whereas tabulation is better when you can see a clear order to solve subproblems in or don't want the overhead that comes with using recursion. The downside is it can be harder because then you have to think about the table which

# Dynamic Programming Problems
## 1) Max Sum Sub-Array Problem
Problem Desc:
Given an array of integers, find a contiguous(non broken up string) that has the largest sum. For some clarification, yes if you have only positive numbers the answer is just the array itself, and if you have only negative numbers, the answer will be of size 1 and be the closest to positive. The real life examples of this problem are way wider then you would expect, literally every field deals with the problem and hence uses dynamic programming to solve it for instance:
1. Finance: Finding the most profitable period
2. Signal Processing: Detecting the segment of a signal with the highest energy or intensity.
3. Data: Identifying when is peak activity or sales
4. Bioinformatics(The coolest): Finding the regions of a genome with the highest concentration of features or literally anything in the field really, you can imagine other uses.
5. AI: Rating choices based on a period of decisions, you could go off responses to decisions and choose based on that which time you thought the AI acted best.
This is an optimization problem, whos solutions need to be exact, it deals with optimal substructures and overlapping subproblems quite effectively, The solutions are really fast with Kadane's Algorithm being O(n) speed.
## Kadane's Algorithm:
This algorithm is very straightforward and only uses **one for loop** and **two if statements**. The idea is to maintain two variables: `current_max` and `global_max`, both initialized to the first element of the array (`arr[0]`).

As we iterate through the array, at each index we check:

1. If adding the current element to `current_max` gives a larger sum than the element alone, we update `current_max` to that sum. Otherwise, we start fresh from the current element.
    
2. If the new `current_max` is larger than `global_max`, we update `global_max`.
    
At the end, `global_max` holds the maximum sum of any contiguous subarray.

----------
Here is the Code in C++
```cpp
int kadaneAlgorithm(const vector<int>& arr) {
    int current_max = arr[0];
    int global_max = arr[0];

    for (size_t i = 1; i < arr.size(); i++) {
        if (current_max + arr[i] > arr[i]) {
            current_max = current_max + arr[i];
        } else {
            current_max = arr[i];
        }

        if (current_max > global_max) {
            global_max = current_max;
        }
    }

    return global_max;
}
```
-------

# Chain Matrix Multiplication Problem
Problem Desc:
Given a sequence of matrices, find the most efficient way to multiply these matrices together. The way you get different costs is by multiplying with different associations. It is an optimization problem and you need an exact solution. Same as the last problem, it satisfies Optimal Substructures, and Overlapping Subproblems.
Any situation where we must apply multiple transformations, conversions, or computations in sequence runs into this issue. The _result_ is always the same, but the **order** can drastically change how much work is required. Common examples:

1. **Computer Graphics:**  
    Applying transformations (rotate → scale → translate). The order you multiply matrices in affects computation time in rendering engines.
    
2. **Compilers / Expression Evaluation:**  
    When a compiler rearranges calculations to reduce execution time, it is solving this exact optimization.
    
3. **Databases / Query Optimization:**  
    Query engines reorder join operations to minimize total cost. The math behind that is the same DP table used here.
    
4. **Scientific Computing / Simulation:**  
    Long chains of matrix transformations appear in physics simulations, robotic arm kinematics, and aerospace computation.
    
5. **Machine Learning (Neural Networks):**  
    Multiplying weight matrices efficiently can save enormous compute time, especially for large models.
Here is the Pseudo code for this problem but its kind of confusing so i wont focus to hard on it right now and will come back to it when i have more time to flesh it out.
```cpp
int matrixChainOrder(int p[], int n) {
  int m[n][n];

  for (int i = 1; i < n; i++)
    m[i][i] = 0;

  // L is the chain length
  for (int L = 2; L < n; L++) {
    for (int i = 1; i < n - L + 1; i++) {
      int j = i + L - 1;
      m[i][j] = INT_MAX;
      // Try all possible split points
      for (int k = i; k <= j - 1; k++) {
        int q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j])
          m[i][j] = q;
      }
    }
  }
  // Return the minimum number of scalar multiplications needed
  // to multiply the original chain
  return m[1][n - 1];
}
```

# Longest Common Subsequence
## (LCS) Problem
Problem Desc:
We find the longest subsequence common to two sequences
there is more then one solution possible, and the subsequence doesn't have to be contiguous. An example of the LCS problem can be illustrated with two sequences, “ABCBDAB” and “BDCABC”. The LCS for these sequences is “BCAB”.
The best way to visualize is this is with this graph my Proffessor provided:
![[lcs-traceback.png]]
Here we can visualize this Psuedocode
```
Function LCS(X, Y):
    m = length of X
    n = length of Y
    dp = array of (m+1) rows and (n+1) columns

    # Initialize the table with 0's, as the LCS of an empty sequence
    # with any sequence is 0
    For i from 0 to m:
        dp[i][0] = 0
    For j from 0 to n:
        dp[0][j] = 0

    # Fill the dp table
    For i from 1 to m:
        For j from 1 to n:
            If X[i] == Y[j]:
                dp[i][j] = dp[i-1][j-1] + 1
            Else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    # The length of LCS is in the cell dp[m][n]
    length_LCS = dp[m][n]

    # To find the LCS string, traceback from dp[m][n]
    LCS = ""
    i = m, j = n
    While i > 0 and j > 0:
        If X[i] == Y[j]:
            LCS = X[i] + LCS  # Prepend the character to LCS
            i = i - 1
            j = j - 1
        Else If dp[i-1][j] > dp[i][j-1]:
            i = i - 1
        Else:
            j = j - 1

    Return LCS, length_LCS
```
Here the code can be kind of confusing but the general idea is as follows:
	1. Create a function that takes in an X,Y each is an array of letters
	2. Initialize m as length of X, n as length of Y and dp as an extra row and column we create onto the table. The extra row and column are used to store the LCS length for subsequences of length 0. Fill the array dp with 0's using the sizes X and Y.
	3. Now fill the dp table with values when the X and Y are equal. - If the current characters `X[i]` and `Y[j]` **match**, then they can be part of the LCS. So the LCS length for `i,j` is **1 more than the LCS of the prefixes without these characters** (`dp[i-1][j-1] + 1`).
	4. This is straight-forward, after we finish collecting the equivalent parts of the sequence, we then go through these and using the logic seen in the code prepend the LCS.

## Conclusion
There are many other dynamic programming problems of course but this is what i was taught in class this week, and i have to say this was one of the most engaging lessons, i loved learning each of these problems and i will absolutely come back to this and add more problems to reference that use Dynamic Programming. I really like the idea of taking really complex problems and breaking them down into smaller pieces to focus on, it reminds me of the first time coding really clicked in my head, that we were taking relatively simple tasks and breaking them down into the simplest instructions, learning that we cant assume the computer knows what we are thinking when we're writing instructions, learning how to be explicit, and now with DP i get that same feeling but now at a much higher level of problem, its exciting and i hope this continues for my next lessons. The next topic that ill be tackling in DSA 2 is graphing which is something I imagine myself having a really hard time with but i grantee will be helpful.