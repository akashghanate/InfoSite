---
id: pattern
title: Patterns
sidebar_label: Patterns
hide_title: true
---

# Patterns

## 1. Square Star

![Untitled](../../static/img/Untitled.png)

```java
int i=0,j=0;
while (i<n){
	while(j<n){
	  System.out.print("* ");
    j++;
	  }
   j=0;
   i++;
   System.out.println("");
}
```

## 2. continues number matrix

![Untitled](../../static/img/Untitled%201.png)

```java
int k =1;
int i=0;
while(i<n){
	int j =0;
  while(j<n){
    System.out.print(k+" ");
    k++;
    j++;
    }
  System.out.println();
  i++;
}
```

## 3. Star triangle

![Untitled](../../static/img/Untitled%202.png)

```java
int row=1;
while(row<=n){
		int col =0;
    while(col<row){
	    System.out.print("* ");
      col++;
      }
     row++;
		System.out.println();
}
```

## 4.

![Untitled](../../static/img/Untitled%203.png)

```java
int count =1;
        int row=1;
        while(row<=n){
            int col =1;
            count=row;
            while(col<=row) {
                System.out.print(count + " ");
                col++;
                count++;
            }
            row++;
            System.out.println();
        }
```

## 5.

![Untitled](../../static/img/Untitled%204.png)

```java
				int row=1;
        while(row<=n){
            int col =1;
            count=row;
            while(col<=row) {
                System.out.print((row-col+1) + " ");
                col++;
            }
            row++;
            System.out.println();
        }
// n-j+1 for reverse printing
```

## 6.

![Untitled](../../static/img/Untitled%205.png)

```java
int row=1;
int col = 1;
while(row<=n){-
    while(col<=n) {
        char a =(char)('A'+ row - 1);
        System.out.print(a +" ");
        col++;
    }
    col=1;
    row++;
    System.out.println();
}
```

## 7.

![Untitled](../../static/img/Untitled%206.png)

```java
int row=1;
int col = 1;
while(row<=n){
		// print spaces
    while(col<=n-row){
        System.out.print(" ");
        col++;
    }
    col=1;
		// print * 
    while(col<=row) {
        System.out.print("*");
        col++;
    }
    col=1;
    row++;
    System.out.println();
}
```

## 8.

![Untitled](../../static/img/Untitled%207.png)

```java
int row=1;
int col = 1;
while(row<=n){
    while(col<=n-row+1) {
        System.out.print("*");
        col++;
    }
   col=1;
    row++;
    System.out.println();
}
```

## 9.

![Untitled](../../static/img/Untitled%208.png)

```java
int row=1;
int col = 1;
while(row<=n){
    //print space
    while(col<=n-row){
        System.out.print(" ");
        col++;
    }
    col=1;
    //print 1st triangle
    while(col<=row){
        System.out.print(col);
        col++;
    }
    //print 2nd triangle
    int start = row-1;
    while(start>0){
        System.out.print(start);
        start--;
    }
    col=1;
    row++;
    System.out.println();
}
```

## 10.

![Untitled](../../static/img/Untitled%209.png)

```java
int row=1;
int col = 1;
while(row<=n){
    while(col<=n-row+1){
        System.out.print(col);
        col++;
    }
    col=(row-1)*2;
    while(col>0){
        System.out.print("*");
        col--;
    }
    col=n-row+1;
    while(col>0){
        System.out.print(col);
        col--;
    }
    col=1;
    row++;
    System.out.println();
}
```
