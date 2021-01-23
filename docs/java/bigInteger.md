---
id: BI
sidebar_label: Big Integer
hide_title: true
---

## Big Integer (java.math)
BigInteger class is used for mathematical operation which involves very big integer calculations that are outside the limit of all available primitive data types.

### Instantiate
```java
    BigInteger A = new BigInteger();
    BigInteger A;
    A = BigInteger.valueOf(Number);
```

### Methods
``` BigInteger A, B, C;```
- **Arthimetic**

    ``` java
    C = A.add(B);
    C = A.substract(B);
    C = A.multiply(B);
    C = A.divide(B);
    C = A.remainder(B);
    ```
- **compareTo()** - returns -1, 0, 1

    ```java
    int n = A.compareTo(B);
    ```
- **equals()** - returns -1, 0, 1
    
    ```java
    int n = A.equals(B);
    ```
- **isProbablePrime()** - returns true/ false if nummber is prime
    ```java
    A.isProbabalePrime(1);
    ```
- **gcd()** - returns gcd of 2 numbers
    ```java
    C = A.gcd(B);
    ```
- **intValue()** - conversion BigInter to value
    ```java
    int x = A.intValue();
    ```