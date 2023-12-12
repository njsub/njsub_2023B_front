console.log('step2.js')

// 주차장 정산기 입차

const carArray = [];
const timeArray = [];


function 입차(){ //f s 
    console.log('입차 버튼 함수')

    //입력
    const carInNumber = document.querySelector('#carInNumber').value;
    const carInTime = document.querySelector('#carInTime').value;

    //처리 - 추가할 요소
    if(carInNumber.length != 4){
        alert('차량번호 4자리를 입력해주세요'); return; }
    if(carInTime ===''){alert('입차시간을 선택해주세요.'); return; }

    carArray.push(carInNumber);
    timeArray.push(carInTime);


    //출력
    alert('입차가 완료되었습니다.')

}