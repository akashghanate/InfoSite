---
id: map
sidebar_label: Map
hide_title: true
---
## Map  
(Map don't allow duplicate key)

Types of Map:
- HashMap - unordered
- LinkedHashMap - ordered
- TreeMap (Sorted Map) - sorted by key

### Instantiate
```java
Map<datatype, datatype> map = new HashMap <datatype, datatype> ();
```
### Methods (map)

- **put()** - to insert/ update key,value pair in map
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
- **size()** - returns number of key/value pairs available in the map.
    ```java
    int n = map.size();
    ```
- **containsKey()** - returns true if key is present in the map
    ```java
    boolean map.containsKey(key);
    ```
- **containsValue()** - returns true if value is present in the map
    ```java
    boolean map.containsValue(value);
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
- **Traversing Map**
    ```java
    // Traversing through the Map
    for (Map.Entry<datatype, datatype> me : map.entrySet()) {
            System.out.print(me.getKey() + ":");
            System.out.println(me.getValue());
        }
    ```
