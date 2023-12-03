// 1-masala

// let n = prompt("N sonini kiriting")
// let sum = 0;
// for (let i = 1; i<=n; i+=2 ){
//     sum += i
// }
// alert(sum)

// 2-masala

// let n = prompt("N sonini kiriting")
// let mutip = 1;
// for (let i = 1; i<=n; i++){
//     if(i%3==0){
//         mutip *= i
//     }
// }
// alert(mutip)

// 3-masala

// let a = prompt("A sonini kiriting");
// let b = prompt("B sonini kiriting");
// let counter=0;
// for(let i=a; i<=b; i++){
//     if(i%3==0){
//         counter++
//     }
// }
// alert(counter)

// 4-masala

// let a = prompt("A sonini kiriting");
// let b = prompt("B sonini kiriting");
// let sum = 0;
// for(let i=a; i<=b; i++){
//     if(i%5==0 && i%7==0){
//         sum += i
//     }
// }
// alert(sum)

// 5-masala

// let a = prompt("A sonini kiriting");
// let b = prompt("B sonini kiriting");
// let sum = 0;
// for(let i=a; i<=b; i++){
//     if(i%2==1){
//         i = i*i;
//         sum = sum+i;
//     }
// }
// alert(sum)

// 6-masala

// let b = prompt("B sonini kiriting");
// let a = prompt("A sonini kiriting");
// let sum = 1;
// for(let i=b; i<=a; i++){
//     if(i%2==0){
//         i = i**3;
//         sum = sum*i;
//     }
// }
// alert(sum)

// 7-masala

// let n = +prompt("Ixtiyoriy son kiriting")
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// 8-masala

// let n = +prompt("Ixtiyoriy son kiriting")
// let counter = 0;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         counter++
//     }
// }
// alert(counter)

// 9-masala

// let n = +prompt("Ixtiyoriy son kiriting")
// let counter = 0;
// let result;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         counter++
//     }
// }
// if(counter == 2){
//     result="Bu son tub"
// }else{
//     result="Bu son tub emas"
// }
// alert(result)

// 10-masala

// let n = +prompt("N sonini kiriting")
// let sum = 0;
// let res;
// let counter;
// for(let i=1; i<=n; i++){
//     i = i*i*i;
//     sum += i;
// }
// for(let i; i<=sum; i++){
//     if(sum%i==0){
//         counter++
//     }
// }
// if(counter % 2 == 0){
//     res = "Qiziqarli emas"
// }else{
//     res = "Qiziqarli"
// }
// alert(res)

// 11-masala

// let time = +prompt("To'g'ri javob topish uchun sariflangan vaqt")
// let incorect = +prompt("Noto'g'ri javoblar soni")
// let result = 0;
// result = time - 1 + incorect * 5;
// alert(result)

// 12-masala

// let temperature = +prompt("Selsiydagi temperaturani kiriting")
// let kelvin = temperature + 273.15000;
// kelvin =kelvin.toFixed(5)
// let fahrenheit = temperature * 1.80 + 32.00000
// fahrenheit =fahrenheit.toFixed(5)
// alert(`Kelvindagi harorat: ${kelvin}
// Farengeytdagi harorat: ${fahrenheit}
// `)

// 13-masala

// let a = +prompt("A sonini kiriting")
// let b = +prompt("B sonini kiriting")
// let sum = 0;
// for(let i = a; i<=b; i++){
//     if(i % 3 == 0 && i % 7 != 0){
//         sum += i
//     }
// }
// alert(sum)

// 14-masala

// let n = +prompt("Ixtiyoriy son kiriting")
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     if(i%3==0 || i%5==0 || i%7==0){
//         sum += i
//     }
// }
// alert(sum)

// 15-masala

// let n = +prompt("Ixtiyoriy sonni kiriting")
// let result;
// let counter = 0;
// for(let i = 1; i<=n; i*=10){
//     counter++
// }
// for(let i=counter; i>=1; i--){
//     result =(Math.trunc(n / 10**(i-1)))%10;
//     if(result!=9){
//         n = (n - result*10**(i-1))+(9*10**(i-1))
//         i = 0
//     }
// }
// console.log(n);

// 16-masala

// let a = +prompt("Ali Validan necha yosh kattaligini kiriting")
// let b = +prompt("Ali Validan necha marta kattaligini kiriting")
// let ageAli = 0;
// let ageVali = 0;
// for(let i = 1; b*i-i<=a; i++){
//     ageVali++
// } 
// ageAli =ageVali + a;
// console.log(ageAli);
// console.log(ageVali);

// 17-masala

// let n = +prompt("Ko'p burchakning tomonlari sonini kiriting")
// let result = (n-2)*180;
// alert(result)

// 18-masala

let hh = +prompt("Soatni kiriting")
let mm = +prompt("Minutni kiriting")
if(hh>24 || mm>60){
    alert("Vaqtni noto'g'ri kiritdingiz")
}else{
    let t = +prompt("Qancha vaqt o'tganini kiriting")
    let res = t+mm;
    if(res>=60){
        res -= 60;
        hh++
    }
    if(hh>23){
        hh=0
    }
    alert(`${hh} : ${res}`)
}
