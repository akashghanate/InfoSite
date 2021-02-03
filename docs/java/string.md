---
id: str
title: String
sidebar_label: String
hide_title: true
---
## String (Java.lang.String)
Immutable Datatype

### Instantiate

```java
String s;
```
### Methods (s)

- **contains()** - returns true/ false if subString is present in String
    ```java
    s.contains(String subString);
    ```
- **indexOf()** - returns the index of the subString/ character
    ```java
    int n = s.indexOf(String subString);
    int n = s.indexOf(char ch);
    ```
- **replace()** - replace old char wth new char for all occurance of old char
    ```java
    s.replace(char old,char new);
    ```
    - **replaceFirst()** - replace old char wth new char for first occurance of old char
    ```java
    s.replaceFirst(char old,char new);
    ```
- **matches()** - tells whether or not the string matches the given regular expression, returns boolean
    ```java
    s.matches('regex');
    ```

- **split()** - split string at matching regex into string array
    ```java
    String[] array = s.split('regex');
    ```
- **startsWith()** - method determines whether a string begins with the characters of a specified string, returning true or false
    ```java
    s.startsWith(String prefix);
    s.startsWith(String prefix,int position); // starts searching from the position index
    ```
- **endsWith()** - method determines whether a string ends with the characters of a specified string, returning true or false
    ```java
    s.endsWith(String suffix);
    ```
- **toLowerCase()** - converts string to lowercase string
    ```java
    String str = s.toLowerCase();
    ```
- **toUpperCase()** - converts string to uppercase string
    ```java
    String str = s.toUpperCase();
    ```    
- **trim()** - removes leading and training *whitespace*
    ```java
    String str = s.trim();
    ```
- **join()** - returns string joined with given *delimiter*  
    ```java
    String str = s.join(CharSequence delimiter,CharSequence elements); //elements here are strings
    ```
- **compareTo()** - returns int value after comparing two strings lexographically
    ```java
    int n = s1.compareTo(s2);
    ```
---

- **Character.isLetter()** - returns true/false if char is Letter
    ```java
    Character.isLetter(char ch);
    ```
- **Character.isDigit()** - returns true/false if char is digit
    ```java
    Character.isDigit(char ch);
    ```
- **Character.isWhitespace()** - returns true/false if char is space
    ```java
    Character.isWhitespace(char ch);
    ```
- **Character.isUpperCase()** - returns true/false if char is a Uppercase letter
    ```java
    Character.isUpperCase(char ch);
    ```
- **Character.isLowerCase()** - returns true/false if char is a Lowercase letter
    ```java
    Character.isLowerCase(char ch);
    ```
