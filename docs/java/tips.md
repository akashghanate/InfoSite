---
id: tips
title: Tips & Tricks
sidebar_label: Tips & Tricks
---
- Check if the number (a) is even or odd

    ```boolean = (a & 1) == 0 ? "Even" : "ODD" ```
- Fast multiplication number (n) by factor 2
    
    ``` n = n << 1 ```
- Fast division number (n) by factor 2
    
    ``` n = n >> 1 ```
- Swapping of 2 numbers using XOR
    ```java
        a ^ = b;
        b ^ = a;
        a ^ = b;
    ```
- Calculate number of digits in a integer
    ```java
     int n = (int)Math.floor(Math.log10(Number))+1;
     ```
