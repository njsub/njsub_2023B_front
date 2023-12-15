console.log('step2.js')
console.log('')


//1. 둘다 없는 경우
function 함수1(){ console.log('함수1 실행');}
함수1();

//2.매개변수2개 리턴없음
function 함수2( x,y ){console.log(x+y);}
함수2(3,5);

//3. 매개변수가 업고 리턴이있음
function 함수3( x,y ){return 3+8;}
    함수3();
    console.log(함수3());
    let relsult = 5 + 함수3();
    

//4. 둘다 있는 경우
function 함수4(x, y){return x+y;}

// 함수안에 함수
function 함수5(){ x, y}{
    let result = 함수6(3);
    console.log(result);
}

function 함수6(x) {return x*x}

// 변수 위치에 따른 함수
const 전국지역 = 10;
function 경기도(지역){
    const 경기도 = 5;
    console.log(전국지역);
    return 지역*5;
}

function 강원도(){
    const 강원지역 = 5;
    경기도(강원지역)
    console.log(전국지역);   
}
경기도(전국지역);

// 변수 위치에 따른 함수 내부에서 변수 호출
    // 매개변수를 이동한 *서로 다른 함수간의 지역 자료 전달
    // 전역자료 쓰면 모든 ㅎ마수에서 사용 가능
    //     특징 프로그램이 종료될때까지 그자료는 사라지지 않는다
    // 지역자료 쓰면 서로 다른 함수에서 사용불가
    //     특징 메모리 효율성 좋다. 기능에 필요한 자료만
