---
id: timeComplex
sidebar_label: Time Complexity
hide_title: true
---
# Time Complexity

The efficiency of algorithms is important in competitive programming. Usually, it is easy to design an algorithm that solves the problem slowly, but the real challenge is to invent a fast algorithm. If the algorithm is too slow, it will get only partial points or no points at all.

The time complexity of an algorithm estimates how much time the algorithm will use for some input. The idea is to represent the efficiency as a function whose parameter is the size of the input. By calculating the time complexity, we can find out whether the algorithm is fast enough without implementing it.

## Calculation rules

The time complexity of an algorithm is denoted O(···) where the three dots represent some function. Usually, the variable n denotes the input size. For example, if the input is an array of numbers, n will be the size of the array, and if the input is a string, n will be the length of the string.

### Loops

A common reason why an algorithm is slow is that it contains many loops that go through the input. The more nested loops the algorithm contains, the slower it is.
If there are k nested loops, the time complexity is O(n<sup>k</sup>).

For example, the time complexity of the following code is O(n)

```java
for (int i = 1; i <= n; i++) {
// code
}
```

And the time complexity of the following code is O(n<sup>2</sup>).

```java
for (int i = 1; i <= n; i++) {
	for (int j = 1; j <= n; j++) {
		// code
		}
}
```

### Order of magnitude

A time complexity does not tell us the exact number of times the code inside a loop is executed, but it only shows the order of magnitude. In the following examples, the code inside the loop is executed 3n, n+5 and [n/2] times, but the time complexity of each code is O(n)

```java
//example 1
for (int i = 1; i <= 3*n; i++) {
// code
}

//example 2
for (int i = 1; i <= n+5; i++) {
// code
}

//example 3
for (int i = 1; i <= n; i += 2) {
// code
}
```

### Phases

If the algorithm consists of consecutive phases, the total time complexity is the largest time complexity of a single phase. The reason for this is that the slowest phase is usually the bottleneck of the code.

For example, the following code consists of three phases with time complexities O(n),O(n<sup>2</sup>) and O(n). Thus, the total time complexity is O(n<sup>2</sup>).

```java
for (int i = 1; i <= n; i++) {
// code
}

for (int i = 1; i <= n; i++) {
	for (int j = 1; j <= n; j++) {
		// code
	}
}

for (int i = 1; i <= n; i++) {
// code
}
```

### Several variables

Sometimes the time complexity depends on several factors. In this case, the time complexity formula contains several variables.

For example, the time complexity of the following code is O(nm):

```java
for (int i = 1; i <= n; i++) {
	for (int j = 1; j <= m; j++) {
	// code
	}
}
```

### Recursion

The time complexity of a recursive function depends on the number of times the function is called and the time complexity of a single call. The total time complexity is the product of these values.

For example, consider the following function:

```java
void f(int n) {
	if (n == 1) return;
	f(n-1);
}
```

The call f(n) causes n function calls, and the time complexity of each call is O(1).
Thus, the total time complexity is O(n).

As another example, consider the following function:

```java
void g(int n) {
	if (n == 1) return;
	g(n-1);
	g(n-1);
}
```

In this case each function call generates two other calls, except for n = 1. Let us see what happens when g is called with parameter n. The following table shows the function calls produced by this single call:

<table>
<th><u>function call</u></th>
<th><u>number of calls</u></th>
<tr><td>g(n)</td><td>1</td></tr>
<tr><td>g(n−1)</td><td>2</td></tr>
<tr><td>g(n−2)</td><td>4</td></tr>
<tr><td>... ...</td><td>... ...</td></tr>
<tr><td>g(1)</td><td>2<sup>n-1</sup></td></tr>
</table>


Based on this, the time complexity is  1+2+4+...+2<sup>n-1</sup>=2<sup>n-1</sup>=O(2<sup>n</sup>).

## Complexity classes

The following list contains common time complexities of algorithms:

1. **O(1)** The running time of a **constant-time** algorithm does not depend on the input size. A typical constant-time algorithm is a direct formula that calculates the answer.
2. **O(logn)** A **logarithmic** algorithm often halves the input size at each step. The running time of such an algorithm is logarithmic, because log<sub>2</sub>N equals the number of times N must be divided by 2 to get 1.
3. **O(<span>&#8730;</span>n)** A **square root** algorithm is slower than O(logn) but faster than O(n). 
    
    A special property of square roots is that <span>&#8730;</span>n=<sup>n</sup>&frasl;<sub><span>&#8730;</span>n</sub>, so the square root <span>&#8730;</span>n lies, in some sense, in the middle of the input.
    
4. **O(n)** A **linear algorithm** goes through the input a constant number of times. This is often the best possible time complexity, because it is usually necessary to access each input element at least once before reporting the answer. 

5. **O(nlogn)** This time complexity often indicates that the algorithm **sorts** the input, because the time complexity of efficient sorting algorithms is O(nlogn).
Another possibility is that the algorithm uses a data structure where each operation takes O(logn) time.

6. **O(n<sup>2</sup>)** A **quadratic** **algorithm** often contains two nested loops. It is possible to go through all pairs of the input elements in O(n<sup>2</sup>) time.

7. **O(n<sup>3</sup>)** A **cubic** **algorithm** often contains three nested loops. It is possible to go through all triplets of the input elements in O(n<sup>3</sup>) time.

8. **O(2<sup>n</sup>)** This time complexity often indicates that the algorithm iterates through **all subsets** of the input elements. For example, the subsets of {1,2,3} are ;, {1}, {2}, {3}, {1,2}, {1,3}, {2,3} and {1,2,3}.

9. **O(n!)** This time complexity often indicates that the algorithm iterates through all **permutations** of the input elements. For example, the permutations of {1,2,3} are (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2) and (3,2,1).

An algorithm is **polynomial** if its time complexity is at most O(n<sup>k</sup>) where k is a constant. All the above time complexities except O(2<sup>n</sup>) and O(n!) are polynomial.

In practice, the constant **k** is usually small, and therefore a polynomial time complexity roughly means that the algorithm is efficient.

There are many important problems for which no polynomial algorithm is known, i.e., nobody knows how to solve them efficiently. **NP-hard** problems are an important set of problems, for which no polynomial algorithm is known.