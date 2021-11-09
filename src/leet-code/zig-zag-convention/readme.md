### The algorithm path

let's bruteforce position of the string on the graph
given 3 and 4 dimentions.

```javascript
PAYPALISHIRING

P   A   H   N
A P L S I I G  -> PAHNAPLSIIGYIR
Y   I   R

1   5   9     13
2 4 6 8 10 12 14 -> [1,5,9,13,2,4,6,8,10,12,14,3,7,11]
3   7   11

1   7    13
2 6 8 12 14 -> [1,7,13,2,6,8,12,14,3,5,9,11,15,4,10]
3 5 9 11 15
4   10   

0, 0+n+n-2, 0+(n+n-2) * 2,
1, 1+n-2
```
this approach is taking so long!

let's do a graphical one

```javascript
d = 3

0 4 4 8 8  12 12
1 3 5 7 9  11 13
2 2 6 6 10 10

0 1 2 3 4 5 6...13 -> 0 1 2 2 3 4 4 5...13
```
so the idea is to create a matrix. And start to fill it zig
zag way (as it is described in the task)

the matrix is (dimension, Math.floor(s.length / 3) + 1)

let's think differently, mb there is still a pattern
d = 5
```
0 8 8  16
1 7 9  15
2 6 10 14
3 5 11 13
4 4 12 12
```