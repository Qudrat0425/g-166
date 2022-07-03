//1
// function PowA3(a){
//   console.log(Math.pow(a,3));
// }
// PowA3(4)

// //2
// function PowA234 (a){
//   console.log(Math.pow(a, 2));
//   console.log(Math.pow(a, 3));
//   console.log(Math.pow(a, 4));
// }
// PowA234(6)

// //3
// function mean(a,b){
//   const mean=(a+b)
//   console.log(mean/2)
// }
// mean(4,6)

// //4
// function triangle(a,b,c,h){
//   let S= 1/2*a*h
//   let P= a+b+c
//   console.log(S);
//   console.log(P);
// }
// triangle(8,8,8,7)

//5

// function counter(a,b,c){
//   if(a>b && a>c) {
//     console.log(a);
//   }
//   else if(b>a && b>c){
//     console.log(b);
//   }
//   else{
//     console.log(c);
//   }
// }
// counter(90,8,55)

// for (let i =0; i<30; i=i+1){
//   i%2 !==0 && console.log(i);
// }

// let str ="helle werled"
// for (let i=0; i<str.length; i=i+1){
//   if(str[i]=="e"){
//     console.log(str[i]);
//   }
// }

// //1for
// let k=7
// let n=50
// for(let i=0; i<n; i++){
//   console.log(k);
// }


// 2for
// let a=7
// let b=20
// for(let i=a; i<b; i++){
//   console.log(i);
// }

//3for
// let a= 34
// let b=20
// for(let i=a; i>b; a=a-1){
//   console.log(i);
// }


// 4for
// let narx=30
// for(let i=0; i<=10; i=i+1){
//   switch(i){
//     case 1:console.log(narx*i); break;
//     case 2:console.log(narx*i); break;
//     case 3:console.log(narx*i); break;
//     case 4:console.log(narx*i); break;
//     case 5:console.log(narx*i); break;
//     case 6:console.log(narx*i); break;
//     case 7:console.log(narx*i); break;
//     case 8:console.log(narx*i); break;
//     case 9:console.log(narx*i); break;
//     case 10:console.log(narx*i); break;
//   }
// }
//5for
// let narx=30
// for(let i=0; i<=1; i=i+0.1){
//   let a=+i.toFixed(1);
//   switch(a){
//     case 0.1:console.log(narx*a); break;
//     case 0.2:console.log(narx*a); break;
//     case 0.3:console.log(narx*a); break;
//     case 0.4:console.log(narx*a); break;
//     case 0.5:console.log(narx*a); break;
//     case 0.6:console.log(narx*a); break;
//     case 0.7:console.log(narx*a); break;
//     case 0.8:console.log(narx*a); break;
//     case 0.9:console.log(narx*a); break;
//     case 1:console.log(narx*a); break;
//   }
// }

// let narx=30
// for(let i=1.2; i<=2; i=i+0.2){
//   let a=+i.toFixed(1);
//   switch(a){
//    case 1.2:console.log(narx*a); break;
//    case 1.4:console.log(narx*a); break;
//    case 1.6:console.log(narx*a); break;
//    case 1.8:console.log(narx*a); break;
//    case 2:console.log(narx*a); break;
//   }
// }

// let a= 20
// let b= 10
// let c=a-b
// for(let i=b; i<20; i++){
// console.log(i);
// }

//array
// indexOf
// lastIndexOf
// push 
// concat
// pop
// shift
// unshift
// slice
// splice
// join
// toString
//lengh 
//reverse
//sort

// let arr =['Bobur','Qudrat','nodirbek']
// // arr.sort()
// console.log(arr.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())));

// let a=0
// let arr= [1,2,3,4,5,6,7]
// for(let v of arr){
//     a=a+v
//     console.log(a);
// }
 
// let arr=[1,2,3,4,5,6,7]
// for(let v of arr){
//     if(v%2 !==0){
//         console.log(v);
//     }
// }
let a=2
let arr =[1,2,3,4,5,6,7]
for (let v of arr){
    console.log(a);
}