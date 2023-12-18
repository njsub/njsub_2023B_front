/*


 */

console.log({});

const array = ['사과' , '바나나']
console.log(array);

const product = {
    제품명 : '7D 건조 망고', 
    유형 : '당절임',
    성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    원산지 : '필리핀'
}
console.log(product);

console.log(product.성분);

console.log(product['제품명']);
console.log(product['유형']);
console.log(product['성분']);
console.log(product['원산지']);

const object = {
    nmber: 273,
    string: '구름',
    boolean: true,
    array: [12,22,33,44],

    method: function(){},
    object2: {method2: function(){}}
}

console.log(object)

object.method();

const pet = {
    name:'구름',
    eat: function(food){
        alert(`${this.name}은/는 ${food}을/를 먹습니다.`)
  
    },
    eat2(food){} // 함수명이 속성명을 대신한다.
}
//pet.eat('도시락');
//pet.eat('라면');

const student = { }
student.이름 = '윤인성'
student.취미 = '악기'
student.장래희망 = '생명공학자'

console.log(student);

delete student.장래희망
delete student['취미']
console.log(student);

