import {paros}  from "./fugveny.js"

//console.log(paros(22))

/*var let con--hatókötök */
//console.log(szam); //szam--> hibaüzennet nem fut tovább a program, initialiton
let szam = 12;

function fv1(){
    let szam =5;
    console.log(szam);
    let masikszam = 23;
    console.log(masikszam);
}

//fv1()

//console.log(masikszam); //hibaüzenet -- reference error, kizárolag csak a fügvényben értelmezhető

console.log(szam);

function fv2(){
    let x =2;
    {
        let x =3;
        console.log(x)
    }
    console.log(x)
    // let=4 -->nem engedi ujra deklalárni
}

fv2()

function fv3(){
    for (let index = 0; index < 3; index++) {
        console.log(index)
    }
    console.log(index)
}

fv3()