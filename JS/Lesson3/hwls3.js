
//let numbers = [1,2,3,4,5];
//let strng = ['one','two','thre','four','five'];
//let mix = ['one',true,3,false,'five']
//console.log (numbers, strng, mix)


//let arr = [];
// arr.length = 5;
// arr [0] = 'zero';
// arr [1] = 1;
// arr [3] = true;
// arr [4] = false
// arr [5] = 'The end'
// console.log(arr)


//for (let i = 0; i < 10; i++) {
//   document.write(`<div>any text</div>`);
//  }
//
// for (let i = 0; i < 10; i++) {
//  document.write(`<div>${i+1} any text </div>`);
// }
// let w =0;
//  while(w<10){
//    document.write(`<div>Any txt</div>`);
//    w++; }
//let w =0;
// while(w<10){
//    document.write(`<div>${w+1} Any txt </div>`);
//  w++; }


//let msv1 = [1,2,3,4,5,6,7,8,9,0];
//for (i=0; i < msv1.length; i++) {
//    console.log(msv1[i])
//}

//let msv2 = ['uno','dos','tres','quatro formagi','margarita','diavoli','parma','kebab','lagman','uran'];
//for (o = 0; o < msv2.length; o++) {
//    console.log(msv2[o])
//}

//let msv3 = ['uno','dos','tres','quatro', 5,true,false,'"do not know"',8,9,'ten'];
//for (io = 0; io < msv3.length; io++) {
//    console.log(msv3[io])
//}

//let msv4 = ['uno','dos','tres','quatro', 5,true,false,'"do not know"',8,9,'ten'];
//for (a = 0; a <msv4.length; a++) {
//    if (typeof msv4[a] === 'boolean') {
//       console.log(msv4[a]);}
//}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//let msv5 = ['uno','dos','tres','quatro', 5,true,false,'"do not know"',8,9,'ten'];
//for (b=0; b < msv5.length; b++) {
//    if (typeof msv5[b] === `number`) {
//    console.log(msv5[b])}
//    }

//let msv6 = ['uno','dos','tres','quatro', 5,true,false,'"do not know"',8,9,'ten'];
// for (c=0; c < msv6.length; c++) {
//     if (typeof msv6[c] === `string`) {
//         console.log(msv6[c])}
// }

//let emsv = [];
// emsv[0] = 'zero'
// emsv[1] = 1;
// emsv[2] = 2
// emsv[3] = true;
// emsv[4] = false;
// emsv[5] = 5;
// emsv[6] = 'six'
// emsv[7] = 7;
// emsv[8] = false
// emsv[9] = 9;
//
// for (let d=0; d < emsv.length; d++) {
//         console.log (emsv[d])
//    }

//for (let i = 0; i < 10; i++) {
//    console.log('поточний номер кроку : ' + i + ' ');
//   document.write('поточний номер кроку : ' + i + ' ');
// }

//for (let i = 0; i < 100; i++) {
//     console.log('поточний номер кроку : ' + i + ' ');
//     document.write('поточний номер кроку : ' + i + ' ');
// }

//for (let i = 0; i < 100; i+=2) {
//     console.log('поточний номер кроку : ' + i + ' ');
//     document.write('поточний номер кроку : ' + i + ' ');
// }

//for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('поточний номер кроку : ' + i + ' ');
//         document.write('поточний номер кроку : ' + i + ' ');
//     }
// }

for (let i=0; i<100; i++){
    if (i % 2 === 1) {
        console.log('поточний номер кроку : ' + i + ' ');
        document.write('поточний номер кроку : ' + i + ' ');
    }
}
