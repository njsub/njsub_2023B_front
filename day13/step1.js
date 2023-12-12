console.log("step1.js 열림");

// --- 지역함수 방지 / 누적 자장

const idArray = [];   // 2.패스워드 저장 배열
const pwArray = [];   // 1.아이디 저장 배열

// --- 회원가입 함수
function 회원가입(){ //f s 가입버튼을 클릭했을 때
    console.log('회원가입 버튼 함수')
    //입력
    const signId = document.querySelector('#signId').value;
    const signPw = document.querySelector('#signPw').value;
    //처리 - 추가할 요소
    idArray.push(signId);
    pwArray.push(signPw);
    //출력
    alert('회원가입이 되었습니다.')
    document.querySelector('#signId').value('');
    document.querySelector('#signPw').value('');

} //f end


// --- 로그인 함수
function 로그인(){ // f s 로그인 버튼을 클릭했을 때 
    console.log('로그인 버튼 함수')
    
    //입력
    const loginId = document.querySelector('#loginId').value; // value값을 가져온다 호출
    const loginPw = document.querySelector('#loginPw').value;
    
    //처리
    const sIndex = idArray.indexOf(loginId);
    if(sIndex >= 0 && pwArray[sIndex] == loginPw){
        
    //출력    
        alert('로그인 성공')
    } else{
        alert('비밀번호가 틀립니다.')

    }


    

} //f end

