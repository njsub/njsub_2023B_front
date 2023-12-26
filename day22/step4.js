    

    //1. 익명함수. const 함수명1 = function(){}


    //2. 선언적함수. function 함수명2(){}
    
    // [p.321]
    document.addEventListener('DOMContentLoaded',function(){
        // 1.  각 부모 요소 2개를 호출함
        const divA = document.querySelector('#first');
        const divB = document.querySelector('#second');
        // 2. h1요소를 생성함
        const h1 = document.createElement('h1');
        // 3. h1 요소에 내용 추가.
        h1.textContent = '이동하는 h1 태그';

        // 4. 함수1 정의 : 부모1에 h1을 대입
        const toFirst = function(){
            divA.appendChild(h1); // 같은 dom객체르 ㄹ여러번 appendChild()하면 이동된다.
            setTimeout(to)
            // setTimeout(함수 , 시간// 밀리초(1/1000)); // 특정시간이 되면 자동으로 함수를 실행하는 함수.
        }
        //5. 함수2 정의
        const toSecond = function(){
            divB.appendChild(h1);
            setTimeout(toFirst,10000);
        }

        toFirst();

        document.addEventListener("DOMContentLoaded", () => {
            const header = document.createElement("h1");
      
            header.textContent = "문서 객체 생성";
            header.style.Color = "black";
      
            document.body.appendChild(header);
      
            //body태그를 변수에 지정해주고 거기에서 바로 붙혀도 됌.
            const body = document.querySelector("body");
            body.appendChild(header);
        
            setTimeout(() => {
              body.removeChild(header);
              header.parentNode.removeChild(header); 
              //이것을 더 많이 씀. 부모태그에 있는 자식태그를 삭제하는 것
            }, 3000);
          });

          document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("h1");
  document.body.appendChild(header);

  let count = 0;
  header.style.userSelect = "none"; //텍스트 클릭해도 선택 안되게 하는 것
  header.textContent = `클릭 횟수 : ${count}`;
  header.addEventListener("click", () => {
    count++;
    header.textContent = `클릭 횟수 : ${count}`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("h1");
    document.body.appendChild(header);
  
    let count = 0;
    header.style.userSelect = "none"; //텍스트 클릭해도 선택 안되게 하는 것
    header.textContent = `클릭 횟수 : ${count}`;
    header.addEventListener("click", () => {
      count++;
      header.textContent = `클릭 횟수 : ${count}`;
    });
  });

  

    })

