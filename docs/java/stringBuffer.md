---
id: sb
title: String Buffer (String Maipulation)
sidebar_label: String Buffer
hide_title: true
---
## String Buffer (String Maipulation) java.lang.StringBuffer
**StringBuffer** is a peer class of **String** that provides much of the functionality of strings.<br></br> String represents fixed-length, immutable character sequences while StringBuffer represents growable and writable character sequences.

### Instantiate

- simple

    ```java
     StringBuffer s = new StringBuffer(); 
     ```
- With fixed size (n)
    
    ```java 
    StringBuffer s = new StringBuffer(int n);
    ```
- With initial string (str)

    ```java 
    StringBuffer s = new StringBuffer(String str);
    
    Eg: StringBuffer s = new StringBuffer("InfoSite");
    ```  
### Methods (s)
- **Length** of stringBuffer
    ```java
    int n = s.length(); 
    ```
- **Capacity** of stringBuffer - the total allocated capacity 

    ```java
    int n = s.capacity();
    ```
- **Append** - append text/number to the exisiting string
    ```java
    s.append(String str);
    s.append(int num);
    ```
- **Insert** - is used to insert text/ character at the sepcified index poition
    ```java
    s.insert(int index, String str);
    s.insert(int index, char ch);
    ```
- **Reverse** - Reverse the string
    ```java
    s.reverse();
    ```
- **Delete** - delete sequence of character in range of *start* index to *end-1* index
    ```java
    s.delete(int startIndex, int endIndex);
    s.deleteCharAt(int index);
    ```

