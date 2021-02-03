---
id: general
sidebar_label: General
hide_title: true
---

### 1. To convert arrays to list use **Arrays.asList()** method
```java 
List l = Arrays.asList(arr);
```
:::note
The type of array must be a Wrapper Class(Integer,FLoat, etc) in case of primitive data types(int,float,etc) , i.e you can’tpass  int a[] but you can pass Integer a[]. If you pass int a[],this function will return a  List <int a[]\> and not List<Integer\> , as “autoboxing” doesn’t happens in this case and  int a[] is itself identified as an object and a List of intarray is returned, instead of list of integers , which will give error in various Collection functions
:::

### 2. Initialize **ArrayList**
```java
ArrayList<datatype> al = new ArrayList<datatype>(); 
List<datatype> al = new ArrayList<datatype>();
```
### 3. **Set** - Set don't allow duplicate elements
- Initialize
```java
Set<datatype> set = new HashSet<datatype>(); 
```
- TreeSet (sorted Set)
    ```java
    TreeSet<datatype> t = new TreeSet<datatype>();
    // To get the highest element
    t.pollLast();
    ```
### 4. Initialize Stack
```java
Stack<datatype> stack = new Stack<datatype>(); 
```
- Stack operations
    - **push()** - push element to the stack
        ```java
        stack.push(element);
        ```
    - **pop()** - pop top element from the stack and returns the element
        ```java
        datatype n = stack.pop();
        ```
    - **peek()** - returns top element of the stack without removing 
        ```java
        datatype n = stack.peek();
        ```
    - **isEmpty()** - is used to check if a stack is empty or not, returns true/false
        ```java
        stack.isEmpty();
        ```
### 5. Iterate a List (in A Loop)
- First create a iterator for the list 
    ```java
    Iterator i = list.listIterator();
    ```
- Iterate through list using **hasNext()** check condition, it returns boolean if the next element is present from the position of the iterator i
    ```java
    i.hasNext();
    ```
- Get the element of the list, returns the next element of the list until the hasNext condition fails
    ```java
    i.next();
    ```
