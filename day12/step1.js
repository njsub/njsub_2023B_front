/*
    p.142   switch조건문
        - break : switch이거나 반복문(for/while) 에서 { } 나가기/탈출 
        - 논리(범위논리X)판단X / 경우의수가 값으로 정해져있는 경우

        1. 형태
            switch( 자료 ){
                case 조건A : 실행코드; break;
                case 조건B : 실행코드; break;
                case 조건C : 실행코드; break;
                default : break;
            }

    p.145   삼항연산자 
        - 간단한(조건 1개또는 2개) 조건에 따른 결과 실행
        - 조건부 렌더링[화면표현] ( JS많이씀-짝수이면 파랑색, 홀수이면 빨강색 )
        1. 형태
            불 표현식 ? 참일때 결과 : 거짓일떄 결과 

*/

const input = Number(prompt('숫자를 입력하세요'));
// 1.예제) 홀수/짝수 구분
// 1-1 if
if(input % 2== 0) {console.log("if짝수 입니다."); }
else if(input %2 == 1){console.log('if홀수입니다.');}
else{console.log('if홀수입니다.');}
// 1-2switch
switch(input %2){
case 0 : console.log('case짝수 입니다.'); break;
case 1 : console.log('case홀수 입니다.'); break;
default : console.log('case숫자가 아닙니다.'); break;}


// 2.
const date = new Date();
const hour = date.getHours() // 시분초에서 시만 추출( getHours)
// 2-1 if
if(hour<11){ console.log("아침 먹을 시간입니다.");}
else if(hour < 15){console.log("점심 먹을 시간입니다.");}
else{console.log("저녁 먹을 시간입니다.");}
// 2-2 switch
switch(true){
    case hour < 11 : console.log("아침 먹을 시간입니다."); break;
    case hour < 15 : console.log("점심 먹을시간입니다."); break;
    default : console.log("저녁 먹을 시간입니다.");break;}


// 3.
const input2 = prompt('숫자를 입력해 주세요.')
const number = Number(input);
//3-1
const result = number >= 0 ? '0이상의 숫자입니다.' : '0보다 작은 숫자입니다.' ;
console.log( result);


/*
148.p 홀수 짝수 구하기
    // 홀짝 계산식 : 수 % 2 == 0또는 1
    // 문자인 경우 : Number(문자열[문자열.length-1]) % 2
*/


/*
150.p
*/
const score = Number(prompt('학점을 입력해 주세요.'))
if(score === 4.5){ console.log('신');}
else if(4.2 <= score && score < 4.5){console.log('교수님의 사랑');}
else if(3.5 <= score && score < 4.2){console.log('현 체제의 수호자');}
else if(2.8 <= score && score < 3.5){console.log('일반인');}
else if(2.3 <= score && score < 2.8){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75 <= score && score < 2.3){console.log('오락문화의 선구자');}
else if(1.0 <= score && score < 7.75){console.log('불가촉천민');}
else if(0.5 <= score && score < 1.0){console.log('자벌레');}
else if(0 <= score && score < 0.5){console.log('플랑크톤');}
else {console.log('시대를 앞서가는 혁명의 씨앗')}
//효율적인 방법
if(score === 4.5){ console.log('신');}
else if(4.2 <= score){console.log('교수님의 사랑');}
else if(3.5 <= score){console.log('현 체제의 수호자');}
else if(2.8 <= score){console.log('일반인');}
else if(2.3 <= score){console.log('일탈을 꿈꾸는 소시민');}
else if(1.75 <= score){console.log('오락문화의 선구자');}
else if(1.0 <= score){console.log('불가촉천민');}
else if(0.5 <= score){console.log('자벌레');}
else if(0 < score){console.log('플랑크톤');}
else {console.log('시대를 앞서가는 혁명의 씨앗')}

//p.153
const rawInput = prompt('태어난 해를 입력해주세요.','')
const year = Number(rawInput)
const tti = '원숭이, 닭, 개, 돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');

console.log(`${year} 년에 태어났다면 ${tti[ year%12 ]} 띠입니다.`);

// 100>200는 false이므로 confirm() 함수부분이 실행되어 '버튼을 클릭해주세요' 라는 확인 버튼과 취소 버튼을 
// 클릭할 수 있는 창이 나타납니다. 확인 버튼을 클릭하면 true, 취소버튼을 클릭하면 false가 출력됩니다.

//const rawInput = prompt('태어난 해를 입력해주세요.','')

const result1 = (100>200)
    ? prompt('값을 입력해 주세요')
    : confirm('버튼을 클릭해주세요')
    alert(result1)

// 