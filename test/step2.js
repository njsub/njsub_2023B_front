

function 삭제함수(삭제할인덱스){            //--삭제f   s
    //console.log('삭제함수')
    이름목록.splice(삭제할인덱스 , 1);
    팔굽혀펴기목록.splice(삭제할인덱스 , 1);
    윗몸일으키기.splice(삭제할인덱스 , 1);
    턱걸이.splice(삭제할인덱스 , 1);
}                                         //-- 삭제f    e

function 출력함수(){
    const = document.querySelector('#');
    let html = ' ';
    
}










/*
// 3. 삭제 함수 : 매개변수 = 삭제할 인덱스, 리턴값X
function 삭제함수( 삭제할인덱스 ){
    console.log("삭제함수" + 삭제할인덱스)
    //[1. 입력] X

    //[2. 처리] 배열에서 요소 삭제 .splice()
    할일목록.splice(삭제할인덱스 , 1);
    상태목록.splice(삭제할인덱스 , 1);

    //[3. 출력]
    출력함수()

}   //f end

// 4. 출력 함수 [ 등록후 , 변경후 , 삭제후 = 배열의 최신상태를 HTML 대입 ]
function 출력함수(){
    //[3. 출력]

        // 1. [ 어디에 ] todoBottom에
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
}