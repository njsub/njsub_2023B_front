
console.log('step1.js')

/*
    p.175
    

*/

const todos = ['우유구매', '업무메일 확인하기', '필라테스 수업']
// 상수 배열 선언

for(let i = 0; i<todos.length ; i++){
    console.log(todos[i]);
}// i는 0부터 마지막 인덱스까지 1씩 증감하면서 반복실행

for(let i in todos){
    console.log(i);
}//i는 todos배열 내에 요소 *인덱스를 하나씩 대입 받으면서 반복실행

for(let i of todos){
    console.log(i);
}//i는 todos 배열 내에 요소 *값을 하나씩 대입 받으면서 반복실행

let i = 0;
while ( i<todos.length){
    console.log(todos[i]); i++;
}//i는 0부터 마지막 인덱스까지 콘솔 출력후 증감 이 반복실행

/*
let j = 0; while(true){alert(`${j}번째 반복입니다.); j++}
for(let j = 0; true ; j++){alert(`${j}번째 반복입니다.);}
for( ; ; ){alert(` 번째 반복입니다.`);}
while(1){alert(` 번째 반복.`);}
*/

let p = 0;
while( confirm('계속 진행할까요?')){// 확인=true , 취소=false
    alert(`${p}번째 반복입니다.`); p++}

let output = 1;
for( let i = 1 ; i<=100 ; i++){
    output = output + i;
}
console.log(`${output}`)

