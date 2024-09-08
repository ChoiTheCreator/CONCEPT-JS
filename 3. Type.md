# 자바스크립트는 동적 타입 언어이다.

자바와는 다르게 좀 더 유연함

```jsx
let msg = "hi"
msg = 13123

이렇게해도 오류가 안남 ㅎㅎ
```

또한 수학 연산을 할때 상당히 안전

0으로 나눠도 괜찮. 자바였으면 난리남

NAN을 반환하기는 함 . ㅠ

# Big Int

 `(253-1)`(`9007199254740991`) 보다 큰 값 혹은 `-(253-1)` 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.

흔히 쓰이지는 않지만.. 숫자 뒤에 n이 붙으면

```jsx
const bigInt = 1234567890123456789012345678901234567890n;
```

# String은 세가지 종류

1. 큰따옴표: `"Hello"`
2. 작은따옴표: `'Hello'`
3. 역 따옴표(백틱, backtick): ``Hello``

1,2 는 비슷

3은 백틱이라고 함 ( 이 안에 변수나 표현식을 감싼 후 ) 

${name}을 넣어주면 참 좋다

alert(`hello, ${name} !`);

# boolean

true or false

# null

다른 언어와는 약간 다른 null.

js에서 null은 존재하지 않는 값. 비어있는, 언노운 의 의미를 지님

다른 언어는 존재하지 않는다 잖아

# undefined

null 값 처럼 자신만의 자료형을 형성

얘는 값이 아직 할당되지 않은 상태를 의미

```jsx
let age;

or

let age =100;
age = undefined;

but 이 지랄은 금지 !

```

# 객체(object) type

객체형이 아닌 녀석들은 한가지 표현만 가능하기에 primitive 자료라 함

→ 원시 자료형 이라고 함

# typeof 연산자

객체의 타입 ( 자료형) 을 반환

```jsx
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

- Math는 수학 연산을 제공하는 내장 객체임 따라서 얘는 object
- null 은 object .. 오류 방지 목적인 특수 케이스
- alert 는 함수다. 따라서 type은 function으로.
