// 8번 : 형변환

// 암시적 형변환(묵시저 형변환)
// 1) 숫자와 문자열 덧셈연산
console.log(1 + "2", typeof(1 + "2")); // 12
console.log("3" + 4 + 5); // 345
console.log(1 + 2 + "3"); // 33 (숫자끼리 먼저 더해진 후 문자열 3이 연결됨)

// 2) 산술연산
console.log("5" - 3); // 문자열 5가  숫자 5로 변환되어 산술연산 결과 2
console.log("3px" - 2); // NaN
console.log("5" * "2"); // 10

// 3) boolean 과 숫자의 연산
console.log(true + 1); // 1+1 = 2
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(10 + NaN) // NaN

