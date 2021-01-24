---
id: ul
title: Utility Methods
sidebar_label: Utility Methods
hide_title: true
---

## Utility Methods (java.util)

### 1. Sorting

- **Arrays.sort()** - returns sorted arrays (arr), by quicksort methods,uses *java.util.Arrays* lib
    ```java
    Arrays.sort(arr);
    ```
    - To sort Sub Array in range of *start*  and *end*
        ```java
        Arrays.sort(arr, int start, int end);
        ```
    - To sort array in Decending (Reverse) order using **Collections.reverseOrder();** as argument
        ```java
        Arrays.sort(arr, Collections.reverseOrder());
        ```
- **Collection.sort()** - sorting of lists like *ArrayList*, *LinkedList*, etc. , uses *java.util.Collections* lib
    ```java
    Collections.sort(list);
    ```
    - To sortlist in Decending (Reverse) order using **Collections.reverseOrder();** as argument
        ```java
        Collections.sort(arr, Collections.reverseOrder());
        ```

### 2. Searching 

- **Arrays.binarySearch()** - returns the position, searching a *key* value in Array using Binary Search
    ```java
    int n = Arrays.binarySearch(datatype arr, datatype key);
    ```
- **Collections.binarySearch()** - returns the position, searching a *key* value in list using Binary Search
    ```java
    int n = Collections.binarySearch(List list, T key);
    ```

### 3. Copying

- **Arrays.copyOf()** - copy the contents of array to a new array with legth *newLength*
    ```java
    int[] newArray = Arrays.copyOf(int[] arr, int newLength);
    ```

### 4. Rotate

- **Collection.rotate()** - Rotate the list by *distance*, the element present at (i) will rotate to (i-distance)% list.size();
    ```java
    Collection.rotate(List list, int distance);
    ```

### 4. Frequency

- **Collection.frequency()** - returns frequency of Object (o) in the list
    ```java
    int n = Collection.frequency(List list, Object o);
    ```
