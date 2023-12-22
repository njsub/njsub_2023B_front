console.log('step1.js start')

const num = Math.random(); //0보다는 크고 1미만 사이 난수.
    

    console.log(num); // 0이상 10미만 사이의 난수

    console.log(num*10);

    console.log(num-1);

    console.log(Math.floor(3.14)); // 소수점 버림     
    console.log(parseInt(3.14)); // 소수점 버림
    console.log(3.55.toFixed(0)); // 반올림

    console.log(Math.floor( num*50-5)); // 소수점 버림     
    console.log(Math.floor( num*50-25)); // 소수점 버림     
    
    const object = {
        name: '혼자 공부하는 파이썬',
        price: 18000,
        publisher: '한빛미디어'
        
    }

    if (object.name !== undefined ){
        console.log('name 속성이 있습니다.')
    } else{
        console.log('name 속성이 없습니다.')
    }
    if (object.author !== undefined){
        console.log('author 속성이 있습니다.')
    } else{
        console.log('author 속성이 없습니다.')
    }

    object.name = object.name !== undefined ? object.name : '제목 미정' // 조건문 랜더링 떄문에