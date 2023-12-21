
const c = '123'
c.sample = 10;
console.log(c.sample);

const d = '안녕하세요'
d.sample = 10;
console.log(d.sample);

const e = 'true'
e.sample = 10;
    console.log(e.sample);



console.log('안녕'.length);
console.log('안녕'.anchor('aa'));
console.log('안녕'.bold('aa'));

Number.prototype.sample = 10; // 
const i = 273;
console.log(i.sample);

const j = 100;
console.log(j.sample);

const g = Number(273);
console.log(g);

Number.prototype.power = function (n =2){
    console.log(`n : ${n}`)
    console.log(`this : ${this.valueOf}`)
    return this.valueOf() ** n
}

const a2 = 12;
console.log(a2.power());
console.log(a2.power(3));
console.log(a2.power(4));

const h = '안녕하세요';
console.log(h.indexOf('안녕'));
console.log(h.indexOf('하세'));
console.log(h.indexOf(''));

// console.log(h.contain('안녕'));

String.prototype.contain = function(data){
    return this.indexOf(data) >=0; 
}
console.log(h.contain('안녕'));