console.log('step.js')

//p.197
//- 함수에 이름이 없어서 호출이 불가능 할때 
//  익명함수를 변수는 상수에 넣자

const 함수 = function(){
    
    console.log('함수 내부의 코드입니다.1');
    console.log('함수 내부의 코드입니다.2');
    console.log('함수 내부의 코드입니다.3');
    console.log('');
}

함수(); // 함수의 호출
함수(); // 함수의 호출
//함수2(); // 함수의 호출

console.log( typeof 함수); // 자료형 확인 : function
console.log( 함수); 

function 선언함수(){
    console.log('함수 내부의 코드입니다...1')
    console.log('함수 내부의 코드입니다...2')
    console.log('함수 내부의 코드입니다...3')
    console.log('')
}

선언함수();
선언함수();

console.log( typeof 함수); // 자료형 확인 : function
console.log( 함수); 

//함수명이 f이고 매개변수는 x이고 리턴겂은 x+x이다
//상호작용 무엇을 주고 무엇을 받을지 
function f(x) { 
    return x+x
}
console.log(f(3));

//무엇을 주고 무엇을 받을지
//함수명이 f이고 




// function isLeaYea(year){
//     return (year %4 === 0) && (year % 100 !==0) ||(year %400 === 0)
// }

// console.log('2020년은 윤년일까? === ')