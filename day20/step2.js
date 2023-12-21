console.log('day20 i can do it')

const l = 123.45567;
console.log(l.toFixed(2));

const m = Number('숫자X');
console.log(m);

const n = 10/0;
console.log(n);
const o = -10/0;
// console.l(o);

Number.isFinite(n);

console.log(`   앞과    뒤에 고백도 들어가고`.trim());

const timeList = "12:30\n15:21";
    console.log (timeList)

const timeArray = timeList.split("\n"); 
    console.log (timeArray)

const time = timeArray[0]; 
    console.log (time)

const hour = time.split(":"); 
    console.log (hour[0]);

    
//    localStorage.setItem (키,값); 
localStorage.setItem('이름','유재석'); // 이름이라는 키와 유재석이라는 값
    console.log (localStorage.getItem('이름'));

//예2
const 회원목록 = [{ '이름' : '유재석'}, {'이름' : '강호동'}];
    localStorage.setItem( '회원정보목록' , 회원목록);
    localStorage.setItem( '회원정보목록2' , JSON.stringify(회원목록));
    console.log(JSON.stringify(회원목록))
