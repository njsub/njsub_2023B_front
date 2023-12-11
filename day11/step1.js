
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



// 앞으로의 웹개발 방향
function 변환기능코드가지고있는상자(){ 
    const hp = document.querySelector('input');
    console.log( 인치 );  console.log( 인치.value );
        // document : HTML 뜻   // query : 질의 / 요청   // Selector : 선택
            // document.querySelector( "마크업" vs ".class명" , "#id명" ) : HTML에 요소 선택.
            // HTML 요소를 JS의 변수/객체 로 가져오기 함수
    // ---------> 처리 ------> java에게 통신으로 보내기 
    // 결과 = input에 입력받은 value를 h3[ innerHTML=마크업 사이에 ]에 대입 
    document.querySelector('h3').innerHTML = `${ 인치.value * 2.54 }cm`
} // 함수 종료되면 모두 코드/변수 다 사라짐.
    // 선언 약속/규칙/문법 : 변수 = let , 상수 = const , 함수 = function     
    // function 함수명( 매개변수 ){ 구현할기능코드 }    

 /*   - 각 생활에서 사용되는 기계/프로그램들 예시 만들기 [예시6번] - 4/5명
    - 1.키오스크 , 2.엘리베이터  , 3.자율주행 자동차
    예) 편의점 라면 포트기.
    1. 저장/변수         5개이상 :  온도 , 면종류 , 시간 , 온수상태 , 완료상태
    2. 기능/함수         5개이상 : 시작 , 물추가 , 상태변경 , 조리시간추가 , 면종류 선택
    3. 경우의수/논리     5개이상 : 용기있다/없다, 조리시간 완료/조리중 , 상태 점검중/사용가능중 , 온수 부족/충분 , 온도 최대값 이상/이하

    4. 1~3 시각화 그림으로 표현


*/

/* 3 */
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);

/* 4 */
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));
console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

/* 5 */
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;
console.log(`달러 : ${달러} -> 원화 : ${원화}`)