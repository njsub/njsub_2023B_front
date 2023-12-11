
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

function 문제함수1(){
    
    //입력
    let val1 = document.querySelector('#input4').value;
    let val2 = document.querySelector('#input5').value;
    let val3 = document.querySelector('#input6').value;
    //처리
    let sumValue1 = Number(val1)+Number(val2)+Number(val3);
    let avgValue1 = sumValue1/3;
    //출력
    document.querySelector('#abv').innerHTML
                = ` 총점 : ${sumValue1}점 평균 : ${avgValue1}점`;
}