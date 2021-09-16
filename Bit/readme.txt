#BINARY TO DECIMAL
101 =  1*pow(2,2) + 0*pow(10,1) + 1*pow(2,0) 

#DECIMAL TO BINARY
Good old LCM technique

#JAVASCRIPT AND BINARY
Initially there were no support of Binary numbers , but JavaScript has allowed the support in the newestECMA6 currently
supported in Chrome, Firefox

We have the support for binary, octal, hexadecimal.

There are two ways in which we are going to use it :
- 0b1111
- parseInt('1111',2);

Both are 15
All other languages, have a different way of dealinig with binary numbers
'.bn.js' - here when using console.log() we are only getting the decimal representation of it.

#ADDITION
1 + 1 = 0 | carry 1
0 + 1 = 1 | carry 0
1 + 0 = 1 | carry 1

1 + 1 + 1 = 1 | carry 1 (using above three)
and internally this logic is used

# SUBTRACTION
Step 1 - find the 2' complement of the second number which is basically the inverse
Step 2 - Add 1 to the result

Then Add the final result with the first number

These things are already inbuilt in those languages.

# BITWISE OPERATIONS 'operations.js'
After using the bitwise operators, it is still giving us the decimal value of the binary we manipulated.
See how powerfull these operations are.
Instead of using 0b100 , and bitwise we can use it on the decimal number also,
the engine will smartly handle those

XOR ^
1   0   1
0   1   1
0   0   0
1   1   0

AND &
1   0   0
0   1   0
1   1   1
0   0   0

OR |
1   0   1
0   1   1
1   1   1
0   0   0

NOT ~
1   0
0   1

RIGHT SHIFT

101 >> 1 ( shifting this binary number by 1)

010

LEFT SHIFT

101 << 1 (shifting this binary number by 1)

1010

Binary numbers are implemented in 32 bits

101 - binary number
[0 0 0 0][0 0 0 0][0 0 0 0][0 1 0 1]

We generally write from the first set bit.






