
/*  


*/

//문제1 : 3개 점수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.
function 연습버튼클릭(){100

    //입력
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    // 처리
    let sumValue = Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;
    
    // 출력
    document.querySelector('#result').innerHTML
                = ` 총점 : ${sumValue}점 평균:${avgValue}점`;
}

// 문제2 

function 문제2함수(){

    // 입력
    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    // 처리
    let result = ""; // 결과변수
    if(value1 > value2){result = value1 + "가(이) 큽니다."}
    else if(value1 < value2){result = value2 + "가(이) 큽니다."}
    else{result="두수는같다"};

    //출력
    document.querySelector('#result').innerHTML
                = `${ result}`
}

//문제3 : 3개의 정수[정수 입력값 1/2/3]를 입력 받아 점수 90점이상 합격 출력  아니면 탈락 출력 

function 문제3함수(){ //s
        
    //입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1)
    let value2 = Number(document.querySelector('#input2').value); console.log(value2)
    let value3 = Number(document.querySelector('#input3').value); console.log(value3)

    //처리
    let result = "";
    let max = value1;
    if( max < value2){ max = value2};
    if( max < value3){ max = value3};

    //출력
    document.querySelector('#result').innerHTML
                = `${ max }`
        
}

//문제4

function 문제4함수(){

//입력
let value1 = Number(document.querySelector('#input1').value); console.log(value1)

//처리
let result ="";
if( value1 >= 90 ){ result = '합격'}
else{ result = '불합격'}

//출력
document.querySelector('#result').innerHTML
                = `${ result }`

}

