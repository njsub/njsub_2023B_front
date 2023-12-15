// 전역변수
const 이름목록 = ["유재석","강호동"];    // 이름 저장
const 팔굽혀펴기목록 = ["10","20"];     // 팔굽혀펴기 저장
const 윗몸일으키기목록 = ["10","20"];    // 윗몸일으키기 저장
const 턱걸이목록 = ["10","20"];         // 턱걸이 저장
const 총점목록 = ["30","60"];           // 총점 저장
const 등급목록 = ["C","B"];             // 등급저장


console.log(이름목록);
console.log(팔굽혀펴기목록);
console.log(윗몸일으키기목록);
console.log(턱걸이목록);
console.log(총점목록);
console.log(등급목록);




function 삭제함수( 삭제할인덱스 ){      //f start
    console.log("삭제함수실행");

    이름목록.splice(삭제할인덱스 , 1);
    팔굽혀펴기목록.splice(삭제할인덱스 , 1);
    윗몸일으키기목록.splice(삭제할인덱스 , 1);
    턱걸이목록.splice(삭제할인덱스 , 1);
    총점목록.splice(삭제할인덱스 , 1);
    등급목록.splice(삭제할인덱스 , 1);

    //출력함수()

}   //f end

function 출력함수(){
    console.log('출력함수실행');
    //const contentOutput = document.querySelector('#contentOutput')
    let html = '';
        for( let i = 0; i<이름목록.length; i++ );
            html +=  `<div class="output">        <!-- JS 출력함수() 부분 가이드 -->
                        <div class="name">${이름목록[i]}</div>
                        <div class="list_1">${팔굽혀펴기목록[i]}</div>
                        <div class="list_2">${윗몸일으키기목록[i]}</div>
                        <div class="list_3">${턱걸이목록[i]}</div>
                        <div class="total">${Number(팔굽혀펴기목록[i])+Number(윗몸일으키기목록[i])+Number(턱걸이목록[i])}</div>
                        <div class="grade">ABC</div>
                        <div class="butn"><input onclick="삭제함수()" type="button" value="삭제"></div>
                    </div>`
}













/*// 4. 출력 함수 [ 등록후 , 변경후 , 삭제후 = 배열의 최신상태를 HTML 대입 ]
function 출력함수(){

        const todoBottom = document.querySelector('#todoBottom');
        // 2. [ 무엇을 ] 배열에 있는 여러  요소들을 HTML화       JS입장에서 HTML코드는 문자열.
        let html = ' '; // 초기값

        // 1. 배열내 모든 요소를 하나씩 꺼내기ㅌ
        for( let i = 0; i < 할일목록.length ; i++ ){
            // HTML 변수에 여러 DIV 누계
            html += `<div class="todo ${ 상태목록[i] ? 'success' : ''}"> 
                        <div class="content">${할일목록[i]}</div>
                        <div class="btnBox">
                            <input onclick="변경함수(${i})" type="button" value="변경">
                            <input onclick="삭제함수(${i})" type="button" value="삭제">
                        </div>
                    </div> `
        }

        // 3. [ 대입 ] innerHTML 에 저장된 변수를 대입
        todoBottom.innerHTML = html;
}*/