---
id: set
sidebar_label: Set
hide_title: true
---
## Set  
(Set don't allow duplicate values)

The set interface is present in java.util package and extends the Collection interface is an unordered collection 
of objects in which duplicate values cannot be stored. It is an interface that implements the mathematical set. 
This interface contains the methods inherited from the Collection interface and adds a feature that restricts the 
insertion of the duplicate elements. There are two interfaces that extend the set implementation namely SortedSet 
and NavigableSet.

### Instantiate
```java
Set<datatype> set = new HashSet <datatype, datatype> ();
Set<datatype> set = new TreeSet <datatype, datatype> (); //(sorted Set) - all the elements are sorted in ascending order
Set<datatype> set = new LinkedHashSet <datatype, datatype> (); //ordered collection of set, data is stored and retrieved in the same order
```
### Methods (map)

- **add()** - to insert value in set
    ```java 
    set.add(element);

    //This method is used to append all of the elements from the mentioned collection 
    to the existing set. The elements are added randomly without following any specific order.
    set.addAll(collection);
    ```
- **clear()** - This method is used to remove all the elements from the set but not delete the set. The reference for the set still exists.
    ```java
    set.clear(key);
    ```
- **contains()** - This method is used to check whether a specific element is present in the Set or not.
    ```java
    set.contains(element);
    ```
- **isEmpty()** - This method is used to check whether the set is empty or not.
    ```java
    set.isEmpty();
    ```
- **containsKey()** - returns true if key is present in the map
    ```java
    boolean map.containsKey(key);
    ```
- **remove()** - This method is used to remove the given element from the set. This method returns True if the specified element is present in the Set otherwise it returns False.
    ```java
    set.remove(element);
    ```
- **size()** - This method is used to get the size of the set. This returns an integer value which signifies the number of elements.
    ```java
    int n = set.size();
    ```
- **toArray()** - This method is used to form an array of the same elements as that of the Set.
    ```java
    Object[] arr = set.toArray();
    ```
- **retainAll()** - This method is used to remove all the elements from the collection which are present in the set.
    ```java
    set.retainAll(collection);
    ```
