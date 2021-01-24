---
id: str
title: String
sidebar_label: String
hide_title: true
---
## String 

### Instantiate

```java
String s;
```
### Methods (ll)

- **add()** - adding element to Linked List
    ```java
    ll.add(element);
    ll.add(int index, element); //add element at position *index*
    ll.addLast(element); //add element at last of list
    ll.addFirst(element); //add element at first of list
    ```

- **remove()** - removing element from Linked List
    ```java
    ll.remove(element);
    ll.remove(int index); //remove element from position *index*
    ll.removeLast(element); //remove element from last of list
    ll.removeFirst(element); //remove element from first of list
    ```
- **size()** - returns size of list
    ```java
    int n = ll.size();
    ```
- **contains()** - returns true/ false if element is present in list
    ```java
    int n = ll.contains(element);
    ```
- **set()** - replace element at *index* 
    ```java
    ll.set(int index, newElement);
    ```
- **get()** - returns element at *index* of list
    ```java
    datatype n = ll.get(int index);
    datatype n = ll.getFirst(int index);
    datatype n = ll.getLast(int index);
    ```
- Stack operations
    - **push()** - push element to the list
        ```java
        ll.push(element);
        ```
    - **pop()** - pop top element from the list and returns the element
        ```java
        datatype n = ll.pop();
        ```
    - **peek()** - returns top element of the list without removing 
        ```java
        datatype n = ll.peek();
        ```
    - **isEmpty()** - is used to check if a list is empty or not, returns true/false
        ```java
        ll.isEmpty();
        ```