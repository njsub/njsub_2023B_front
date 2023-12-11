//p.131 if조건문


// 1. if( 조건) : 조건의 결과가 참이면 중괄호 안으로 들어가고 아니면 중괄호 못들어감.
if( 273 > 100){ //  

// 형태
    // 1. 만약에 조건이 참이면(맞으면)
    // 2. 만약에 조건이 거짓이면면(아니면)
    // 3. 중첩문
        //if()
    // 4. 다수 조건 일때

} // if끝
console.log('1종료') // 이부분은 실행됨 [조건과 상관없음] if가 끝났기 때문


// 2. 
const date = new Date(); // new Date() --> 현재의 시간을 열려주는 코드임 미리 만들어진 구조임 개발자가 만든것임
    console.log( date);

const hour= date.getHours();  // 현재시간에서 시분초 중에 시만 반황하는 값
    console.log( hour)              // 누군가가 미리 만들어놓은것 -> 라이브러리라고 한다

if(hour < 12){ 
    console.log('오전입니다.')
}
if(hour >= 12){ 
    console.log('오후입니다.') 
}

//p.134
if(hour<12){
    console.log('오전입니다.')
}
else{
    console.log('오후입니다.')
}

if(hour < 11){ 
    console.log('아침먹을시간입니다.')
  
} else if(hour < 15){ 
    console.log('저녁먹을시간입니다.')
}

//예제 4
const a = 
if(a>0){console('양수입니다.')}
