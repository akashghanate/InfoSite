---
id: map
sidebar_label: Map
hide_title: true
---
## Map  
(Map don't allow duplicate key)

Types of Map:
- HashMap
- LinkedHashMap
- TreeMap (Sorted Map)

### Instantiate
```java
Map<datatype, datatype> map = new HashMap <datatype, datatype> ();
```
### Methods (map)

- **put()** - to insert key, value pair in map
    ```java 
    map.put(key,value);

    //To add entire map to another
    map.putAll(Map map);
    ```
- **get()** - to fetch the value of a key from map
    ```java
    dataype value = map.get(key);
    ```
- **remove()** - to remove the pair from the map
    ```java
    map.remove(key);
    ```
- **containsKey()** - returns true if key is present in the map
    ```java
    boolean map.containsKey(key);
    ```
- **keySet()** - returns set view of map of all keys
    ```java
    Set set = map.keySet();
    ```
- **values()** - It returns a Collection view of the values contained in this map. 
    ```java
    List l = map.values();
    ```
- **entrySet()** - method returns a complete set of keys and values present in the Map.
    ```java
    Set<Map.Entry<datatype, datatpe>> set = map.entrySet();
    ```