
// p.116 자료형 변환

const input = prompt('message','예를 들어');
    //실행순서 [ 컴퓨터는 멀티가 X]


alert(input);

//불입력
const input2 = confirm('수락하시겠습니까?')
alert(input2)

//숫자 자료형으로 변환하기
console.log(Number("273)"));
console.log(Number("a")); //
console.log(Number(true));

//숫자 연산을 사용해 자료형 변환하기[단 숫자)문자열 연결연산자 조심]
console.log("52"-3); // 49
console.log(true -1); // 0
console.log(true +1); // 2

//문자열 자료형으로 변환하기 string() 문자열로 변환 함수
console.log(String(52.273)); // "52.273"
console.log(String(true)); // "true"
console.log(String(52.273+"")); //"연결 연산자로 이용"
console.log(String(true+"")); // "true"

//불자료형으로 변환하ㅣ boolean() : 불 자료형으로 변환 함수
console.log( boolean(0));   //f
console.log( boolean(NaN));   //f
console.log( boolean(""));   //f
console.log( boolean(null));   //f
let 변수;
console.log(boolean(null));  //f

//논리 부정 연산자를 사용하여 자료형으로 변환
console.log(!273); //0 -> f  1->T
console.log(!!273);
console.log(!!0);

//예제 p.124
    //입력 - 처리 - 결과

const inch = prompt('inch 단위의 숫자를 입력해주세요');
const cm = inch * 2.54;

alert(` &{inch} inch는 ${cm} 입니다.` );

//앞으로의 웹개발 방향
function 변환기능(){

    const 인치 = document.querySelector('input')
    console.log(인치);
    console.log(인치.value);
        // document html뜻
        // query 질의
        // Selector 선택
            // document.querySelector : html에 요소 선택.
            // HTML 요소를 JS의 변수/객체로 가져오는 함수
}
    //function 함수명 ( 매개변수 ) { 구현할 기능코드 }
    document.querySelector('h3').innerHTML = `${인치.value * 2.54}cm`

//변수 = let , 상수 = const , 함수 = function 선언 약속 /규칙 /문법



//예제3
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);