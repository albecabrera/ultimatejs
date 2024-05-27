// bit: 0 1
// Byte: 8 bits
// Byte: 0000000 -> 0
// Byte: 0000001 -> 1
// Byte: 0000010 -> 2
// Byte: 0000011 -> 3
// Byte: 0000100 -> 4

// Decimal: 0,1,2,3,4,5,6,7,8,9
// Hexadecimal: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// Binario: 0,1

console.log(1 | 3); // 000000011
console.log(1 | 4); // 000000101
console.log(3 | 5); // 000000111

console.log(1 | 3); // 00000001
console.log(1 | 4); // 00000010
console.log(3 | 5); // 00000111
