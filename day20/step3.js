//예2

const 회원정보목록 = localStorage.getItem('회원정보목록');
    console.log(회원정보목록); 
    console.log(회원정보목록[0].이름);

const 회원정보목록2 =  JSON.parse(localStorage.getItem('회원정보목록2'));
    console.log(회원정보목록2);
    console.log(회원정보목록2[0].이름);
    