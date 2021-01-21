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
    
    ex: StringBuffer s = new StringBuffer("InfoSite");
    ```  
### Methods (s)
- **length()** - length of stringBuffer
    ```java
    int n = s.length(); 
    ```
- **capacity()**  - the total allocated capacity 

    ```java
    int n = s.capacity();
    ```
- **append()** - append text/number to the exisiting string
    ```java
    s.append(String str);
    s.append(int num);
    ```
- **insert()** - is used to insert text/ character at the sepcified index poition
    ```java
    s.insert(int index, String str);
    s.insert(int index, char ch);
    ```
- **reverse()** - Reverse the string
    ```java
    s.reverse();
    ```
- **delete()** - delete sequence of character in range of *start* index to *end-1* index
    ```java
    s.delete(int startIndex, int endIndex);
    s.deleteCharAt(int index);
    ```
- **replace()** - replace sequence of character in range of *start* index to *end-1* index
    ```java
    s.replace(int startIndex, int endIndex,String replaceStr);
    ```
- **appendCodePoint()** - appends string represntation of the CodePoint argument
    ```java
    s.appendCodePoint(int codePoint);
    ex: for int cp = 65, is 'A'
    ```
- **codePointAt()** - returns the characters ASCII (unicode) at the index
    ```java
    int n = s.codePointAt(int index);
    ```
- **charAt()** - returns the character at index
    ```java
    char ch = s.charAt(int index);
    ```
- **getChars()** - copies individual characters from *begin* to *end* into the char array from *arrBegin* index
    ```java
    s.getChars(int Begin, int End, char[] array, int arrBegin);
    ```
- **indexOf()** - returns the index of the *first* occurrence of subString str
    ```java
    s.indexOf(String str);
    ```
- **lastIndexOf()** - returns the index of the *last* occurrence of subString str
    ```java
    s.lastIndexOf(String str);
    ```
- **setCharAt()** - replace character at the index
    ```java
    s.setCharAt(int index, char ch);
    ```
- **setlength()** - change the length of stringBuffer
    ```java
    s.setLength(int length);
    ```
- **subSequence()** - returns Char sequence in range of *start* index to *end-1* index
    ```java
    String str = s.subSequence(int start,int end);
    ```
- **subSting()** - returns sub string in range of *start* index to *end-1* index
    ```java
    String str = s.subString(int start); //extends till end of string   
    String str = s.subString(int start,int end);
    ```
- **toString()** - returns a string representation of sequence
    ```java
    String str = s.toString();
    ```
- **trimToSize()** - reduce capacity of stringBuffer to length of string
    ```java 
    s.trimToString();
    ```