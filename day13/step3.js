
//p.178 예제

console.log('step3.js')

for(let i =0; i<5; i++){
    console.log(`${i} 번째 반복입니다.`)
}

/*const todos = ['우유 구매' , '업무 메일 확인하기' , '필라테스 수업']
for(const todo of todos){
    console.log(`오늘할일 : ${todo}`)
}*/

let output = 0;
console.log ('start');
for(let i =1; i<=100; i++){
    output +=i
    console.log('end');
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`)

const todos = ['우유 구매' , '업무 메일 확인하기' , '필라테스 수업']
for(let i =0; i < todos.length; i++){
        console.log(`${i}번째 할 일 : ${todos[i]}`)
}

for(let i = todos.length -1; i>=0; i--){
        console.log(`${i}번째 할 일 : ${todos[i]}`)
}   

/*//책에 없는 예제
let outPrint = ''; // 공백이 저장된 변수
// 1부터 10이하까지 1씩 증가 반복[한줄표시]; 
// for(초기값; 조건문; 증감식;)
for (let i = 1 ; i<<=10 ; i++){
    outPrint += `${i}`;
    console.log( outPrint);
}

//책에 없는 예제2 1부터 10이하까지 1씩 증가 반복 [ul표시]
outPrint = '';
for( let i = 1 ; i<=10 ; i++){
    outPrint += `<li> ${i} </li>` ;
// HTML 출력
document.querySelector('ul').innerHTML = outPrint;
}

//예4 1부터 10이하까지 1씩 증가 반복 [누적합계]
let sum = 0;
for( let i = 1 ; i<=10 ; i++){
    sum += i; 
}

/**
    for 반복문 시작/.            
        i               조건            실행문[sum+=i]          sum[누계]         증감식[i++]
        i = 1           true            0+1 => 1                sum = 1             i = 2
        i = 2           true            1+2 => 3                sum = 3             i = 3
        i = 3           true            3+3 => 6                sum = 6             i = 4
        i = 4           true            6+4 => 10               sum = 10            i = 5
        i = 5           true            10=5 => 15              sum = 15            i = 6
        i = 6           true            15+6 => 21              sum = 21            i = 7
        i = 7           true            21+7 => 28              sum = 28            i = 8
        i = 8           true            28+8 => 36              sum = 36            i = 9
        i = 9           true            36+9 => 45              sum = 45            i = 10
        i = 10          true            45+10 => 55             sum = 55            i = 11
        i = 11          false 반복문 종료.
 */



//예 5 1부터 100까지 7배수 누적합계.
   
// -  1. i는 0부터 100까지 7씩 증가.
sum = 0;
for(let i = 0 ; i<=100 ; i+=7){
    sum += i;
}
console.log(`1~100까지 7배수 합 : ${ sum }`) ;
   
// -  2. i는 1부터 100까지 7배수 i%7 == 0
sum = 0;
for(let i=1 ; i<=100 ; i++){
    if( i%7 == 0){ sum +=i ; }
}

//for 중첩
for(let 부모 = 1 ; 부모<=5 ; 부모++){
    console.log(`===== 부모 : ${부모} =====`)
}

for(let 자식 = 1; 자식<=3 ; 자식++){
    console.log(`${부모}의 자식 : ${자식}`)
}

const 단 = 2;
for(let 곱 = 1 ; 곱 <=9 ; 곱++){
    console.log(`${단} X ${곱} = ${단*곱}`);
}

for(let dan = 2; dan<=9; dan++){
    console.log(`단:${dan}`);
}

//for 중첩 반복문
for(let dan = 2 ; dan<=9; dan++){
    for(let gob = 1 ; gob<=9 ; gob++){
        console.log(` ${dan} X ${gob} = ${ dan*gob}`)
    }
}