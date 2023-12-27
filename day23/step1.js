
//p.331 키보드 이벤트

//1. HTML 모두 로드 되었을 때.
document.addEventListener('DOMContentLoaded', function(e){
    
    //2. 특정 html 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');

    //3. textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup' , function(event){
        //* event : 대개변수로 이벤트의 정보(??)를 받습니다.
    console.log( e ) ;
    console.log( e.code); //입력한 키의 문자엷표시
    console.log( e.keyCode);
    console.log( e.altKey);
    console.log( e.ctrlKey);
    console.log( e.shiftKey);
    

    //4. 글자수
    const length = textarea.value.length;
    //5. 대입
    h1.textContent = `글자 수 : ${length}`
    });

    //p.333
    //1.별 기본설정
    const star = document.querySelector('h2');
    star.style.position = 'absolute'; //css절대위치

    let x = 0; //가로
    let y = 0; //세로
    const block = 20 // 이동단위
    //2.별 위치를 그려주는 함수
    const print = function(){
        star.style.left = `${x*block}px`
        star.style.top = `${y*block}px`

    };
    print();

    //3.별 위치를 이동하는 이벤
        //3-1 키보드 방향키의 키번호
    const left = 37; const up = 38; const right = 39; const down = 40;
        //3-2 body(전체)에서 키를 눌렀을때 이벤트 발생
    document.body.addEventListener('keydown', function(e){
        console.log( e );
        if(e.keyCode == left) {x--;} //왼쪽방향키 눌렀을때. x1 감소
        else if(e.keyCode == up) {y--;} //위 방향키를 눌렀을때. y 1 감소 
        else if(e.keyCode == right) {x++;} //오른쪽 방향키 눌렀을때. x1 증가
        else if(e.keyCode == down) {y++;} //아래 방향키 눌렀을때. y1 증가
        else{ }

        print();
        
    }) //e end

}); //e end